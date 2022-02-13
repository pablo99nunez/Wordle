import React from 'react'

import './Navbar.css'
import helpIco from '../../Assets/icons/1x/help.png'
import leaderIco from '../../Assets/icons/leaderboard.png'
import settingsIco from '../../Assets/icons/settings.svg'

export default function Navbar () {
  return (
    <nav className='Navbar'>
        <img src={helpIco} alt="help" />
        <h1 onClick={() => { window.location.href = '/' }}>WORDLE</h1>
        <div>
            <img src={leaderIco} alt="Leaderboard" />
            <img src={settingsIco} alt="Leaderboard" />
        </div>
    </nav>
  )
}
