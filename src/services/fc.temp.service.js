import { httpService } from "./http.service"
import { query, getByID, saveToStorage, put } from "./storage.service"

export {
    startTempInterval,
    createTimeoutIds,
    upAlarm
}

const STORAGE_KEY = 'fcsList'
const towerNames = ['A', 'B', 'C', 'D']
let timeoutIds
let intervalId

async function startTempInterval() {
    createTimeoutIds()
    restAlarms()

    if (intervalId) clearInterval(intervalId)
    intervalId = setInterval(async () => {
        for (var i = 0; i < towerNames.length; i++) {
            await setTowertemp(towerNames[i])
        }
    }, 30 * 1000)
}

async function setTowertemp(towerName) {
    // const fcsList = await httpService.get(`fcs${towerName}`)
    const fcsList = await query(STORAGE_KEY + towerName)

    const upTempFcs = fcsList.map(fc => {
        fc.temp = createTemp(fc.temp, fc.spTemp)
        return fc
    })
    const upAlarmFcs = getTowerAlarms(upTempFcs, towerName)
    // await httpService.post(`fcs${towerName}`, upAlarmFcs)
    saveToStorage(STORAGE_KEY + towerName, upAlarmFcs)
}

function createTemp(val, sp) {
    let num = getRandomIntInclusive(1, 20)
    const interval = Math.abs(val - sp)
    if (interval < 3) return getNextTemp(num, val)
    if ((interval > 5) && (num < 18)) return val
    return sp
}

function getNextTemp(num, val) {
    let newVal
    if (num < 8) newVal = val + 1
    else if (num < 14) newVal = val - 1
    else if (num < 20) newVal = val
    else newVal = getRandomIntInclusive(0, 50)
    return newVal
}

function getTowerAlarms(fcsList, towerName) {
    const nweList = fcsList.map(curFc => {
        const intervalAlarm = curFc.intervalToAlarm <= Math.abs(curFc.temp - curFc.spTemp) ? true : false
        if ((!intervalAlarm && curFc.alarm === 0)
            || (intervalAlarm && curFc.alarm > 0)) return curFc
        if (intervalAlarm) return alarmOper.startTimeout(towerName, curFc)
        if (curFc.alarm === 1) return alarmOper.closeAlarm(curFc)
        return alarmOper.stopTimeout(curFc)
    })
    return nweList
}

async function restAlarms() {
    for (var i = 0; i < towerNames.length; i++) {
        // const fcsList = await httpService.get(`fcs${towerNames[i]}`)
        const fcsList = await query(STORAGE_KEY + towerNames[i])
        const restartFcs = fcsList.map(curFc => alarmOper.closeAlarm(curFc)
        )
        const upAlarmFcs = getTowerAlarms(restartFcs, towerNames[i])
        // httpService.get(`fcs${towerNames[i]}`, upAlarmFcs)
        saveToStorage(STORAGE_KEY + towerNames[i], upAlarmFcs)
    }
}

async function upAlarm(towerName, fcId) {
    // const fc = await httpService.get(`fcs${towerName}/${fcId}`)
    const fc = await getByID(STORAGE_KEY + towerName, fcId)
    const intervalAlarm = fc.intervalToAlarm <= Math.abs(fc.temp - fc.spTemp) ? true : false
    if ((!intervalAlarm && fc.alarm === 0)
        || (intervalAlarm && fc.alarm > 0)) return
    let upFc
    if (intervalAlarm) {
        upFc = alarmOper.startTimeout(towerName, fc)
        console.log(upFc);
    }
    else if (fc.alarm === 1) upFc = alarmOper.closeAlarm(fc)
    else upFc = alarmOper.stopTimeout(fc)
    // await httpService.put(`fcs${towerName}`, upFc)
    await put(STORAGE_KEY + towerName, upFc)
    return
}

const alarmOper = {
    startTimeout: (towerName, fc) => {
        const timeoutIdx = timeoutIds.findIndex(timeoutId => timeoutId._id === fc._id)
        timeoutIds[timeoutIdx].timeout = setTimeout(() => {
            openAlarm(towerName, fc._id)
        }, fc.timeToAlarm * 1000)
        fc.alarm = 2
        return fc
    },
    stopTimeout: (fc) => {
        const timeoutIdx = timeoutIds.findIndex(timeoutId => timeoutId._id === fc._id)
        clearTimeout(timeoutIds[timeoutIdx].timeout)
        fc.alarm = 0
        return fc
    },
    closeAlarm: (fc) => {
        fc.alarm = 0
        return fc
    }
}

async function openAlarm(towerName, fcId) {
    // const fcToUp = await httpService.get(`fcs${towerName}/${fcId}`)
    const fcToUp = await getByID(STORAGE_KEY + towerName, fcId)
    fcToUp.alarm = 1
    put(STORAGE_KEY + towerName, fcToUp)
}

async function createTimeoutIds() {
    timeoutIds = []
    for (var i = 0; i < towerNames.length; i++) {
        // const fcs = await httpService.get(`fcs${towerNames[i]}`)
        const fcs = await query(STORAGE_KEY + towerNames[i])
        fcs.forEach(fc => timeoutIds.push({ _id: fc._id, timeout: null }))
    }
    return timeoutIds
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1) + min)
}


