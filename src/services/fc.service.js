// import { httpService } from "./http.service"
// import { httpService } from "./http.service"
// import { httpService } from "./http.service"
// import { httpService } from "./http.service"
import { query, savaToStorage, getByID, put, } from "./storage.service"
import { createTimeoutIds, upAlarm } from "./fc.temp.service"
import { fcsDesA, fcsDesB, fcsDesC, fcsDesD } from "./data"

export {
    getFcsList,
    update,
}

const STORAGE_KEY = 'fcsList'
const towerNames = ['A', 'B', 'C', 'D']
const allFcsDes = [fcsDesA, fcsDesB, fcsDesC, fcsDesD]

async function getFcsList(towerName, floor) {
    // let fcsList = await httpService.get(`fcs${towerName}/${floor}`)
    let fcsList = await query(STORAGE_KEY + towerName, floor)
    if (!fcsList || fcsList.length < 10) {
        await _createAllFcs()
        // fcsList = await httpService.get(`fcs${towerName}/${floor}`)
        fcsList = await query(STORAGE_KEY + towerName, floor)
        createTimeoutIds()
    }
    return fcsList
}

async function update(towerName, fcId, field, val) {
    // const fcToUp = await httpService.get(`fcs${towerName}/${fcId}`)
    const fcToUp = await getByID(STORAGE_KEY + towerName, fcId)
    switch (field) {
        case 'com':
            fcToUp.comand = val
            fcToUp.status = createStatus(val)
            break;
        case 'mode':
            fcToUp.mode = val
            break;
        case 'fan':
            fcToUp.fan = val
            break;
        case 'temp-sp':
            fcToUp.spTemp = val
            break;
        case 'interval-alarm':
            fcToUp.intervalToAlarm = val
            break;
        case 'time-alarm':
            fcToUp.timeToAlarm = val
            break;
        default:
            break;
    }
    // const upFc = await httpService.put(`fcs${towerName}`, fcToU)
    const upFc = await put(STORAGE_KEY + towerName, fcToUp)
    if (field === 'interval-alarm' || field === 'temp-sp') await upAlarm(towerName, fcId)
    return upFc
}

function createStatus(com) {
    if (com === 0) return 0
    if (com === 1) return 1
    return getRandomIntInclusive(0, 1)
}

async function _createAllFcs() {
    for (var i = 0; i < allFcsDes.length; i++) {
        let towerName = towerNames[i]
        let towerDesObj = allFcsDes[i]
        let fcs = []
        for (const floor in towerDesObj) {
            let flFcs = _createFloor(towerDesObj[floor], towerName, floor)
            fcs.push(...flFcs)
        }
        // await httpService.post(`fcs${towerName}`, fcs)
        await savaToStorage(STORAGE_KEY + towerName, fcs)
    }
    return 'finish'
}

function _createFloor(flDes, towerName, floor) {
    let fcs = []
    let num = (+floor.replace('fl', '')) * 100
    for (var i = 0; i < flDes.length; i++) {
        let stNum = '' + num
        let newNum = stNum.padStart(4, 0)
        const com = getRandomIntInclusive(0, 2)
        let temp = getRandomIntInclusive(16, 25)
        let fc = {
            _id: _makeId(),
            floor,
            num: towerName + newNum,
            description: flDes[i],
            comand: com,
            status: createStatus(com),
            temp,
            spTemp: temp + 1,
            mode: getRandomIntInclusive(0, 3),
            fan: getRandomIntInclusive(0, 3),
            intervalToAlarm: getRandomIntInclusive(3, 4),
            timeToAlarm: 10,
            alarm: 0
        }
        fcs.push(fc)
        num++
    }
    return fcs
}

function _makeId(length = 6) {
    let idText = ''
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (let i = 0; i < length; i++) {
        var char = chars.charAt(Math.floor(Math.random() * (chars.length)))
        idText += char
    }
    return idText
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1) + min)
}