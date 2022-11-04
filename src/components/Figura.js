
import React, { useRef, useState } from 'react'
import fondo from '../assets/img/fondoFigura.svg'
import Escudo from './Escudo'
import Bandera from './Bandera'
import HeatMap from './HeatMap'


export default function Figura({jugador }) {
  const {pais, nombre, altura, peso, imagen, posicion, dataPos, dataImagen, descripcion ,equipos, nacimiento} =  jugador
  const url = "./img/" + imagen

  const getEdad = (n) => {
    const ini = n.indexOf("(") + 5;
    const fin = n.indexOf(")") ;
    const edad = n.slice(ini, fin)
    return edad 
  }

  const [textContainer, setTextoCotainer] = useState(descripcion)
  const textAltura = altura.length > 0 ? "Altura: " + altura : " "
  const textPeso  = peso.length > 0 ? "Peso: " + peso : "  "
  const textEdad = nacimiento.length > 0 ? getEdad(nacimiento): null
  const figuraSel = useRef()  
  const figInfo = useRef()
  const figImgs = useRef()



  const handleClick = (info) => {
    const activo = figuraSel.current.classList.contains('selecto')

    if (activo) { 
       figInfo.current.classList.remove('top-12', 'bg-opacity-0','h-[295px]')  
       figInfo.current.classList.add('top-60', 'bg-opacity-30', 'h-12')  
       figImgs.current.classList.remove('opacity-0')
       figuraSel.current.classList.remove('selecto')
    } else {
        figInfo.current.classList.remove('top-60', 'bg-opacity-30', 'h-12')  
        figInfo.current.classList.add('top-12', 'bg-opacity-0','h-[295px]')  
        figImgs.current.classList.add('opacity-0') 
      
      figuraSel.current.classList.add('selecto')
    }
 
    if(info === "info") { setTextoCotainer(descripcion)}
    if(info === "nacimiento") { setTextoCotainer("Nacimiento: " + nacimiento)}
    if(info === "equipo") { setTextoCotainer("Equipos: " + equipos)}
    if(info === "datos") { setTextoCotainer(textAltura + " " + textPeso +  " " + textEdad)}

  }
  
  return (
    <div 
      className='flex w-[260px] h-[410px] relative hover:brightness-125 transition-all ease-out cursor-pointer' 
      style={{ backgroundImage: `url(${fondo})`,backgroundPosition:'top'}} 
      ref={figuraSel} onClick={() => handleClick(null)}
    >
        <div className='relative w-full h-full'>
          <div className=' transition-all duration-700' ref={figImgs}>
            <div className='absolute left-5 top-16 pt-1'>
                    <img src={Bandera[pais]} alt="figura" className='w-12 mb-1 '/> 
                    <HeatMap pos={posicion} />
                    <img src={Escudo[pais]} alt="figura"  className='w-12 mb-1'/>
                </div>
                <div className='w-40 h-48 absolute right-4 top-12 ' style={{ backgroundImage: `url(${url})`, backgroundPosition:'top' }}>
                </div>
                <div className=' absolute w-full top-[300px] mx-auto text-sm text-center text-white'>{textAltura.length > 1? (textAltura): ""}   {textPeso} <br/> {textEdad}</div>  
          </div>    
         <div className='absolute w-[251px] mx-auto ml-1 overflow-hidden transition-all duration-500 ease-in-out delay-150 shadow-md top-60 h-12 bg-white bg-opacity-30' ref={figInfo}>
            <div className=' text-xl text-center text-white tracking-wide p-2'>{nombre}</div>          
            <div className='flex w-full justify-around bg-slate-50 bg-opacity-10'>
                  {descripcion.length > 0 ? (
                  <button className='p-2 m-1' onClick={() => handleClick("info")} > 
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                          </svg>
                  </button> ) : null
                  }
                  {nacimiento.length > 0 ?  (
                    <button className='p-2 m-1' onClick={() => handleClick("nacimiento")} >  
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525" />
                      </svg>
                  </button>) : null
                  }
                  {equipos.length > 0 ? (
                  <button className='p-2 m-1' onClick={() => handleClick("equipo")}  > 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  </button> ) :""
                  }
                  <button className='p-2 m-1' onClick={() => handleClick("datos")}  > 
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white hover:text-grey-300">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
                    </svg>
                  </button>
          </div> 
          <div className=' text-sm text-center p-3 text-white'> {textContainer}</div>

        
        </div>
      </div>

    </div>
  )
}
