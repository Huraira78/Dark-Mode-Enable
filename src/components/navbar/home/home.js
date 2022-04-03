import React, { useState } from 'react'
import './home.css'
import car1 from '../../../assessts/car1.png'
import car2 from '../../../assessts/car2.jpeg'
import car3 from '../../../assessts/car3.jpg'
const Home = ({mode,changeFunc}) => {
    const [value, setvalue] = useState(0)
    const ChangeValue = () => {
        setvalue(value + 1);
    }
    function Change() {
        changeFunc();
        ChangeValue();
    }
    return (
        <div>
            <section className='homeSection' style={mode}>
                <h1 style={mode}>This Is Home Page.</h1>
                <h3 style={mode}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, dolore!</h3>
                <div className="cards" style={mode}>
                    <div className="card1">
                        <div className="img">
                            <img src={car1} alt="car1" />
                        </div>
                        <div className="carddes">
                            <h2>Honda Car1</h2>
                        </div>
                    </div>
                    <div className="card1">
                        <div className="img">
                            <img src={car2} alt="car2" />
                        </div>
                        <div className="carddes">
                            <h2>Honda Car2</h2>
                        </div>
                    </div>
                    <div className="card1">
                        <div className="img">
                            <img src={car3} alt="car3" />
                        </div>
                        <div className="carddes">
                            <h2>Honda Car3</h2>
                        </div>
                    </div>
                </div>
                <h3 id="time" style={mode}>How many time you change the mode:{value}</h3>
                <div className="homebtn" style={mode}>
                    <button onClick={Change}>Change Mode</button>
                </div>
            </section>

        </div>
    )
}

export default Home