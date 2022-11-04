import React from 'react'
import mapDEL from '../assets/img/posicionMapDEL.svg'
import mapCEN from '../assets/img/posicionMapCEN.svg'
import mapDEF from '../assets/img/posicionMapDEF.svg'
import mapARQ from '../assets/img/posicionMapARQ.svg'
import map from '../assets/img/posicionMap.svg'


export default function HeatMap({pos}) {
  
  const posicion = pos

  const mapaMostrar = 
            pos == "Delantero" ? mapDEL :
            pos == "Centrocampista" ? mapCEN :
            pos == "Defensa" ? mapDEF :
            pos == "Arquero" ? mapARQ : map

return (
    <img src={mapaMostrar} alt="posicion"  className='w-12 mb-1'/>
  )
}
