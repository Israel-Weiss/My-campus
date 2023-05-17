import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import { Time } from "./time"
import { Login } from "./login"
import { getDefaultUser } from '../services/user.service'
import { login } from "../store/actions/user.action"

import userIcon from '../assets/imgs/users.jpg'
import alarm from '../assets/imgs/alarm_h.jpg'
import edit from '../assets/imgs/edit.jpg'
import main from '../assets/imgs/main.jpg'
import fan from '../assets/imgs/fan.jpg'
import about from '../assets/imgs/about_h.jpg'


export function Header() {

    useEffect(() => {
        loadDefaultUser()
    }, [])

    const { loggedInUser } = useSelector(state => state.userModule)

    const dispach = useDispatch()

    const loadDefaultUser = async () => {
        const user = await getDefaultUser()
        onLogin(user)
    }

    const onLogin = (user) => dispach(login(user))

    const [showLogin, setShowLogin] = useState(false)
    const toggleLogin = () => setShowLogin(!showLogin)

    let userName
    if (loggedInUser) userName = loggedInUser.name

    return <div className="header-continer">
        <div className="menu-title">
            <div className="time-continer">
                <p>System time</p>
                <Time />
            </div>
            <div className="header-title">
                <p>CONTROL SYSTEM</p>
                <h1>MY CAMPUS</h1>
            </div>
        </div>
        <div className="menu-buttons">

            <Link to={'/'}><button className="button main-screen">
                <img src={main} className="img" alt="" />
                <p>Main screen</p>
            </button></Link>

            <Link to={'air'}><button className="button rooms">
                <img src={fan} className="img" alt="" />
                <p>Room control</p>
            </button></Link>

            <Link to={'about'}><button className="button about">
                <img src={about} className="img" alt="" />
                <p>About</p>
            </button></Link>

            <Link to={'edit'}><button className="button edit">
                <img src={edit} className="img" alt="" />
                <p>Edit app</p>
            </button></Link>
            
            <Link to={'event'}><button className="button events">
                <img src={alarm} className="img" alt="" />
                <p>Events summarie</p>
            </button></Link>

            <button className="button menu-login" onClick={toggleLogin} >
                <div className="icon-continer">
                    <div className="text">Login user</div>
                    <img className="icon" src={userIcon} alt="" />
                </div>
                <div className="display">{userName}</div>
            </button>

        </div>
        {showLogin && <Login login={onLogin} close={toggleLogin} />}
    </div>
}