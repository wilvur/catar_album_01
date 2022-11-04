import React from 'react'
import Bandera from './Bandera'
import Escudo from './Escudo'

export default function MainHeader({id, nombre}) {

  return (
    <div className="w-full flex bg-[#40242A] items-center mb-1 bg-opacity-90 relative">
        <div className='mr-3 absolute top-3 left-3 shadow-lg z-50'><img src={Escudo[id]} alt={id} className='w-[100px]'/></div>
        <div className='text-white text-4xl ml-32 py-5'>{nombre} </div>
        <div className='min-h-0 absolute right-3'><img src={Bandera[id]} alt={id} className='w-[100px]'/></div>
    </div>
  )
}
