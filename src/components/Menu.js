import React from 'react'
import paises from '../data/DataPais'
import BotPais from './BotPais'

export default function Menu() {
  return (
    <div className='w-[440px] bg-black h-full  bg-opacity-90'>
    <div className="w-full flex bg-[#40242A] items-center mb-16 bg-opacity-90 relative">
      <div className='text-white text-3xl p-5'>Equipos </div>
    </div>
    <div className='mx-2 mb-4' >
            <div className='text-white text-lg'>GRUPO A</div>
            { paises.filter(pais => pais.grupo === "A").map( pais => <BotPais key={pais.id} id={pais.id} nombre={pais.nombre} activo={false} /> )}
            </div>

            <div className='mx-2 mb-4' >
            <div className='text-white text-lg'>GRUPO B</div>
            { paises.filter(pais => pais.grupo === "B").map( pais => <BotPais key={pais.id} id={pais.id} nombre={pais.nombre} activo={false} /> )}
            </div>

            <div className='mx-2 mb-4' >
            <div className='text-white text-lg'>GRUPO C</div>
            { paises.filter(pais => pais.grupo === "C").map( pais => <BotPais key={pais.id} id={pais.id} nombre={pais.nombre} activo={false} /> )}
            </div>

            <div className='mx-2 mb-4' >
            <div className='text-white text-lg'>GRUPO D</div>
            { paises.filter(pais => pais.grupo === "D").map( pais => <BotPais key={pais.id} id={pais.id} nombre={pais.nombre} activo={false} /> )}
            </div>

            <div className='mx-2 mb-4' >
            <div className='text-white text-lg'>GRUPO E</div>
            { paises.filter(pais => pais.grupo === "E").map( pais => <BotPais key={pais.id} id={pais.id} nombre={pais.nombre} activo={false} /> )}
            </div>

            <div className='mx-2 mb-4' >
            <div className='text-white text-lg'>GRUPO G</div>
            { paises.filter(pais => pais.grupo === "G").map( pais => <BotPais key={pais.id} id={pais.id} nombre={pais.nombre} activo={false} /> )}
            </div>

            <div className='mx-2 mb-4' >
            <div className='text-white text-lg'>GRUPO H</div>
            { paises.filter(pais => pais.grupo === "H").map( pais => <BotPais key={pais.id} id={pais.id} nombre={pais.nombre} activo={false} /> )}
            </div>

    </div>
  )
}
