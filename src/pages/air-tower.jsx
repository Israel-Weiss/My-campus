import { useState } from "react";
import { Link } from "react-router-dom";
import { AirList } from "../cmps/air/air-list";
import tA from '../assets/imgs/tA.jpg'
import tB from '../assets/imgs/tB.jpg'
import tC from '../assets/imgs/tC.jpg'
import tD from '../assets/imgs/tD.jpg'

export function AirTower({ tower }) {
    const [floor, setFloor] = useState(null)
    const inFloor = fl => {
        if (fl < 0 || fl > 39) return
        setFloor('fl' + fl)
    }
    const outFloor = () => {
        setFloor(null)
    }

    let tImg
    switch (tower) {
        case 'A':
            tImg = tA
            break;
        case 'B':
            tImg = tB
            break;
        case 'C':
            tImg = tC
            break;
        case 'D':
            tImg = tD
            break;
    }

    return <div className="air-tower">
        {!floor && <div >
            <section className='title-continer'>
                <Link to={'/air'}>
                    <button className="button go-back" onClick={outFloor}>Tower menu</button>
                </Link>
                Room control - Tower {tower} - Floor menu
            </section>
            <section className="screen-continer">
                <img className="img img1" src={tImg} alt="" />
                <img className="img img2" src={tImg} alt="" />
                <img className="img img3" src={tImg} alt="" />
                <section className="buttons-continer">
                    <button className="floor-button" onClick={() => inFloor('00')}>FLOOR 0</button>
                    <button className="floor-button" onClick={() => inFloor('01')}>FLOOR 1</button>
                    <button className="floor-button" onClick={() => inFloor('02')}>FLOOR 2</button>
                    <button className="floor-button" onClick={() => inFloor('03')}>FLOOR 3</button>
                    <button className="floor-button" onClick={() => inFloor('04')}>FLOOR 4</button>
                    <button className="floor-button" onClick={() => inFloor('05')}>FLOOR 5</button>
                    <button className="floor-button" onClick={() => inFloor('06')}>FLOOR 6</button>
                    <button className="floor-button" onClick={() => inFloor('07')}>FLOOR 7</button>
                    <button className="floor-button" onClick={() => inFloor('08')}>FLOOR 8</button>
                    <button className="floor-button" onClick={() => inFloor('09')}>FLOOR 9</button>
                    <button className="floor-button" onClick={() => inFloor('10')}>FLOOR 10</button>
                    <button className="floor-button" onClick={() => inFloor('11')}>FLOOR 11</button>
                    <button className="floor-button" onClick={() => inFloor('12')}>FLOOR 12</button>
                    <button className="floor-button" onClick={() => inFloor('13')}>FLOOR 13</button>
                    <button className="floor-button" onClick={() => inFloor('14')}>FLOOR 14</button>
                    <button className="floor-button" onClick={() => inFloor('15')}>FLOOR 15</button>
                    <button className="floor-button" onClick={() => inFloor('16')}>FLOOR 16</button>
                    <button className="floor-button" onClick={() => inFloor('17')}>FLOOR 17</button>
                    <button className="floor-button" onClick={() => inFloor('18')}>FLOOR 18</button>
                    <button className="floor-button" onClick={() => inFloor('19')}>FLOOR 19</button>
                    <button className="floor-button" onClick={() => inFloor('20')}>FLOOR 20</button>
                    <button className="floor-button" onClick={() => inFloor('21')}>FLOOR 21</button>
                    <button className="floor-button" onClick={() => inFloor('22')}>FLOOR 22</button>
                    <button className="floor-button" onClick={() => inFloor('23')}>FLOOR 23</button>
                    <button className="floor-button" onClick={() => inFloor('24')}>FLOOR 24</button>
                    <button className="floor-button" onClick={() => inFloor('25')}>FLOOR 25</button>
                    <button className="floor-button" onClick={() => inFloor('26')}>FLOOR 26</button>
                    <button className="floor-button" onClick={() => inFloor('27')}>FLOOR 27</button>
                    <button className="floor-button" onClick={() => inFloor('28')}>FLOOR 28</button>
                    <button className="floor-button" onClick={() => inFloor('29')}>FLOOR 29</button>
                    <button className="floor-button" onClick={() => inFloor('30')}>FLOOR 30</button>
                    <button className="floor-button" onClick={() => inFloor('31')}>FLOOR 31</button>
                    <button className="floor-button" onClick={() => inFloor('32')}>FLOOR 32</button>
                    <button className="floor-button" onClick={() => inFloor('33')}>FLOOR 33</button>
                    <button className="floor-button" onClick={() => inFloor('34')}>FLOOR 34</button>
                    <button className="floor-button" onClick={() => inFloor('35')}>FLOOR 35</button>
                    <button className="floor-button" onClick={() => inFloor('36')}>FLOOR 36</button>
                    <button className="floor-button" onClick={() => inFloor('37')}>FLOOR 37</button>
                    <button className="floor-button" onClick={() => inFloor('38')}>FLOOR 38</button>
                    <button className="floor-button" onClick={() => inFloor('39')}>FLOOR 39</button>
                </section>
            </section>

        </div>}
        {floor && <AirList tower={tower} floor={floor} outFloor={outFloor} inFloor={inFloor} />}

    </div>
}