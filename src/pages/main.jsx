import { Link } from 'react-router-dom'
import alarm from '../assets/imgs/alarm.png'
import edit from '../assets/imgs/edit5.png'
import main from '../assets/imgs/main.jpg'
import fan from '../assets/imgs/control2.jpg'
import about from '../assets/imgs/about.png'


export function Main() {
    return (
        <div className="main-continer">
            <section className='title'>MAIN SCREEN</section>
            <div className='screen-continer'>
                <img className='main-img' src={main} alt="" />
                <div className='button-continer'>
                    <Link to={'air'}><button className="button rooms">
                        <div className='text'>Room control</div>
                        <img src={fan} className="img" alt="" />
                    </button></Link>

                    <Link to={'about'}><button className="button about">
                        <div className='text'>About</div>
                        <img src={about} className="img" alt="" />
                    </button></Link>

                    <Link to={'edit'}><button className="button edit">
                        <div className='text'>Edit app</div>
                        <img src={edit} className="img" alt="" />
                    </button></Link>

                    <Link to={'event'}><button className="button events">
                        <div className='text'>Events summarie</div>
                        <img src={alarm} className="img" alt="" />
                    </button></Link>
                </div>
            </div>
        </div>
    )
}