import { mode, fan, com, status, alarm, animation } from "../../services/field.params"

export function AirPrivew({ fc, openModal }) {

    return <div className="fc-list">
        <div className="fc-oper-line">

            <div className="display fc-num">{fc.num}</div>
            <div className="display fc-description">{fc.description}</div>
            <div className="display fc-status">{status[fc.status]}</div>

            <button className="button fc-comand" onClick={() =>
                openModal(fc._id, 'com')}>{com[fc.comand]}</button>

            <div className="display fc-temp">{fc.temp} ℃</div>

            <button className="button fc-sp-temp" onClick={() =>
                openModal(fc._id, 'temp-sp', fc.spTemp, 50)}>{fc.spTemp} ℃</button>

            <button className="button fc-mode" onClick={() =>
                openModal(fc._id, 'mode')}>{mode[fc.mode]}</button>

            <button className="button fc-fan" onClick={() =>
                openModal(fc._id, 'fan')}>{fan[fc.fan]}</button>

            <button className="button fc-interval-to-alarm" onClick={() =>
                openModal(fc._id, 'interval-alarm', fc.intervalToAlarm, 20)}>{fc.intervalToAlarm} ℃</button>

            <button className="button fc-time-to-alarm" onClick={() =>
                openModal(fc._id, 'time-alarm', fc.timeToAlarm, 999)}>{fc.timeToAlarm} sec</button>

            <div className="display fc-alarm">{alarm[fc.alarm]}</div>
            <div>{animation[fc.status]}</div>
        </div>
    </div>
}
