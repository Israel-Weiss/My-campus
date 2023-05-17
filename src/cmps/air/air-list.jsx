import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { AirPrivew } from "./air-privew"
import { ModalAirMode } from "./modal-air-mode"
import { ModalAirFan } from "./modal-air-fan"
import { ModalAirCom } from "./modal-air-com"
import { ModalPrompt } from "./modal-prompt"
import { getFcsList, update } from "../../services/fc.service"
import { startTempInterval } from "../../services/fc.temp.service"

let render = false

export function AirList({ tower, floor, outFloor, inFloor }) {

    useEffect(() => {
        loadFcs()
    })

    useEffect(() => {
        startTempInterval()
    }, [])

    const [fcsList, setFcs] = useState()

    const loadFcs = async () => {
        render = !render
        if (!render) {
            return
        }
        setFcs(await getFcsList(tower, floor))
    }

    const { loggedInUser } = useSelector(state => state.userModule)

    const [modalParams, setModalParams] = useState({ fcId: '', field: '', val: null, max: null })

    const openModal = (fcId, field, val = null, max = null) => {
        if (loggedInUser.authorization < 1) return alert(`Hellow ${loggedInUser.name}! 
        Your permission does not allow this action. 
        Please login with an authorized user. 
        (Try login with - "name: operator, password: 2222" )`)
        setModalParams({ fcId, field, val, max })
    }
    const closeModal = () => {
        setModalParams({ fcId: '', field: '', val: null, max: null })
    }

    const openPrompt = modalParams.field === 'temp-sp' ||
        modalParams.field === 'interval-alarm' ||
        modalParams.field === 'time-alarm' ? true : false

    const onUpdate = async (tower, fcId, field, val) => {
        await update(tower, fcId, field, val)
        closeModal()
    }

    if (!fcsList) return <div>123</div>
    const floorNum = +floor.replace('fl', '')

    return <div className="fc-list-continer">

        <section className='title-continer'>
            <button className="button go-back" onClick={outFloor}>Floor menu</button>
            <p>Fan Coil units - Tower {tower} - Floor {floor.replace('fl', '')}</p>
            <div className="arrows">
                <button className="buuton" onClick={() => inFloor((floorNum + 1).toString().padStart(2, 0))}>&#8679;</button>
                <button className="buuton" onClick={() => inFloor((floorNum - 1).toString().padStart(2, 0))}>&#8681;</button>
            </div>
        </section>
        <section className="background">
            <div className="list">
                <div className="fc-list-menu">
                    <div className="num">Num.</div>
                    <div className="description">Description</div>
                    <div className="status">Status</div>
                    <div className="comand">COM</div>
                    <div className="temp">TEMP</div>
                    <div className="sp-temp">SP Temp</div>
                    <div className="mode">MODE</div>
                    <div className="fan">FAN</div>
                    <div className="interval-to-alarm">Deviation<br />to alarm</div>
                    <div className="time-to-alarm">Time<br />to alarm</div>
                    <div className="alarm">Alarm</div>
                    <div className="animation">‖‖‖‖</div>
                </div>

                {fcsList.map(fc => < AirPrivew fc={fc} openModal={openModal} key={fc._id} />)}

                {openPrompt && < ModalPrompt closeModal={closeModal} onUpdate={onUpdate}
                    tower={tower} modalParams={modalParams} />}

                {modalParams.field === 'com' && < ModalAirCom closeModal={closeModal}
                    tower={tower} onUpdate={onUpdate} id={modalParams.fcId} />}

                {modalParams.field === 'mode' && < ModalAirMode closeModal={closeModal}
                    tower={tower} onUpdate={onUpdate} id={modalParams.fcId} />}

                {modalParams.field === 'fan' && < ModalAirFan closeModal={closeModal}
                    tower={tower} onUpdate={onUpdate} id={modalParams.fcId} />}
            </div>
        </section>
    </div>
}