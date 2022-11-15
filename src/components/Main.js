import React from 'react'
import Figura from './Figura'
import MainHeader from './MainHeader'
import { useData } from '../context/DataContext'

export default function Main() {
  const {pais, equipos} = useData()
  const {id, nombre} = pais[0]

  console.table(equipos)

  return (
    <div className='w-full bg-black bg-opacity-30 mx-2'>
     <MainHeader  id={id} nombre={nombre}/>
     <div className='w-full mt-14 grid grid-cols-1 lg:grid-cols-4 p-3 gap-4'>
      {equipos.length > 0 ?  equipos.map(jugador => <Figura key={jugador.nombre}  jugador={jugador}/>) : ""}
     </div>  
    </div>
  )
}
