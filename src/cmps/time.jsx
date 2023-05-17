import { useEffect, useState } from "react"

export function Time() {

    const [dateNaw, setDate] = useState({
        curTime: new Date().toLocaleTimeString('it-IT'),
        curDate: new Date().toLocaleDateString("en-GB")
    })

    useEffect(() => {
        startInterval()
    }, [])

    const startInterval = () => {
        const intervalId = setInterval(() => {
            setDate({
                curTime: new Date().toLocaleTimeString('it-IT'),
                curDate: new Date().toLocaleDateString("en-GB")
            })
        }, 1000)
    }

    return <div className="time">
        <p>{dateNaw.curTime}</p>
        <p>{dateNaw.curDate}</p>
    </div>
}