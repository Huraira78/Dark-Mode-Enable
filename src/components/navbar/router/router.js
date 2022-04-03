import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavProp from '../Navbar'
import Home from '../home/home'
import About from '../about/about'
import Contact from '../contactUs/contactUs'
import Help from '../help/help'
const RouterComponent = () => {
  const [mode, setmode] = useState({
    backgroundImage: 'linear-gradient(to bottom,rgb(149, 245, 240),rgb(81, 81, 211));',
    color: 'blue'
})
const ChangeMode = () => {
    if (mode.backgroundImage === 'linear-gradient(to bottom,rgb(149, 245, 240),rgb(81, 81, 211));') {
        setmode({
            backgroundColor: 'black',
            color: 'white'
        })
    }
    else {
        setmode({
            backgroundImage: 'linear-gradient(to bottom,rgb(149, 245, 240),rgb(81, 81, 211));',
            color: 'blue'
        })
    }
}
  return (
    <div>
        <Router>
            <NavProp mode={mode} changeFunc={ChangeMode}/>
            <Routes>
                <Route path='/' element={<Home mode={mode} changeFunc={ChangeMode}/>} />
                <Route path='/About' element={<About mode={mode} changeFunc={ChangeMode}/>} />
                <Route path='/Contact' element={<Contact mode={mode} changeFunc={ChangeMode}/>} />
                <Route path='/Help' element={<Help/>} />
            </Routes>
        </Router>
    </div>
  )
}

export default RouterComponent