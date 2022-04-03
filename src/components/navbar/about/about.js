import React from 'react'
import './about.css'
const About = ({ mode, changeFunc }) => {

    return (
        <>
            <div>
                <section className='aboutSection' style={mode}>
                    <h1 style={mode}>This Is About Page.
                    </h1>
                    <h3 style={mode}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, mollitia!
                    </h3>
                    <div className='mainProducts' style={mode}>
                        <div className="productdes" >
                            <h1 >Description About our First Product.</h1>
                            <h3 >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, placeat?...</h3>
                        </div>
                        <div className="productdes" >
                            <h1>Description About our Second Product.</h1>
                            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, placeat?...</h3>
                        </div >
                        <div className="productdes">
                            <h1 >Description About our Third Product.</h1>
                            <h3 >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, placeat?...</h3>
                        </div>
                        <button onClick={changeFunc} className='btn' style={mode}>Change Mode</button>
                    </div>
                    
                </section>
            </div>

        </>
    )
}

export default About