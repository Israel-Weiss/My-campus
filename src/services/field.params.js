import fanOff from '../assets/imgs/off.png'
import fanOn1 from '../assets/imgs/on1.png'
import fanOn2 from '../assets/imgs/on2.png'


const mode = [
    <p className="cool">COOL</p>,
    <p className="heat">HEAT</p>,
    <p className="fan">FAN</p>,
    <p className="auto">AUTO</p>
]

const fan = [
    <p className="high">High</p>,
    <p className="medium">Medium</p>,
    <p className="low">Low</p>,
    <p className="auto">Auto</p>
]

const com = [
    <p className="off">OFF</p>,
    <p className="on">ON</p>,
    <p className="auto">AUTO</p>
]

const status = [
    <p className="off">OFF</p>,
    <p className="on">ON</p>
]

const alarm = [
    <p className="ok">OK</p>,
    <p className="alarm">ALARM</p>,
    <p className="ok">OK*</p>
]

const animation = [
    <img className="img off" src={fanOff} alt="" />,
    <div className='animation-continer'>
        <img className="img on1" src={fanOn1} alt="" />
        <img className="img on2" src={fanOn2} alt="" />
    </div>
]

export {
    mode,
    fan,
    com,
    status,
    alarm,
    animation
}
