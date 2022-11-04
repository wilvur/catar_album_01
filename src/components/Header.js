import React from 'react'
import isoLogo from '../assets/logos/isologoCatar.svg'
import logo from '../assets/logos/logocatar.svg'

export default function Header() {
  return (
    <div className='w-full flex p-3 shadow-lg bg-opacity-90' style={{background: "linear-gradient(180deg, rgba(91, 0, 19, 0.9) 65.91%, rgba(175, 28, 59, 0.9) 165.91%)"}}>
     <img src={isoLogo} alt="catar" className="mr-3"/>
     <img src={logo} alt="catar2022" />
    </div>
  )
}
