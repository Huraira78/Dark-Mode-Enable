import React from 'react'
import './contactUs.css'
const ContactUs = ({ mode, changeFunc }) => {
    return (
        <div className='contactSection' style={mode}>
            <h1 style={mode}>
                This Is Contact Page.
            </h1>
            <div className="mainForm" style={mode}>
                <div className="form" style={mode}>
                    <div className="inputs" style={mode}>
                        <div> <label htmlFor="Name">Name</label>
                            <input type="text" id='Name' placeholder='Enter Your Name' /></div>
                        <div> <label htmlFor="mail">E-Mail</label>
                            <input type="mail" id='mail' placeholder='Sample@gmail.com' /></div>
                        <div><label htmlFor="phone">Phone</label>
                            <input type="text" id='phone' placeholder='03XX-XXXXXXX' /></div>
                    </div>
                    <div className="submitBtn" style={mode}>
                        <button>Submit</button>
                    </div>
                </div>
                <div>
                    <button onClick={changeFunc} className='contactBtn'>Change Mode</button>
                </div>
            </div>
        </div>
    )
}

export default ContactUs