import React from 'react'
import '../Stylesheets/main.css'
import darkDot from '../images/darkDot.png'
import cat from '../images/cat.png'
import LineChart from './LineChart'
import MoreDetails from './MoreDetails'

const Main = () => {
  return (
    <div className='Main'>
        <div className='Head'>
            <div className='Left'>
                <h3>Welcome back Nethaji !</h3>
                <p>Check our today's weather information</p>
            </div>
            <div className='Right'>
                <img src={darkDot} alt="dark dot" />
                <img src={cat} alt='cat'/>
            </div>
        </div>
        <LineChart/>
        <MoreDetails/>
    </div>
  )
}

export default Main