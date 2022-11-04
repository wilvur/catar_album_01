import React from 'react'
import Bandera from './Bandera'
import {useData} from '../context/DataContext'

export default function BotPais({id, nombre, activo}) {
  
  const {getEquipos} = useData()

  const handleClick = (pais) => {
    getEquipos(pais)
  }

  return (
    <div className="w-full flex bg-[#40242A] items-center mb-1 hover:bg-[#411616] transition-colors ease-out cursor-pointer bg-opacity-30" onClick={() => handleClick(id)}>
        <div className='mr-3'><img src={Bandera[id]} alt={id} className='w-[100px]'/></div>
        <div className='text-white text-lg'>{nombre}</div>
    </div>
  )
}
