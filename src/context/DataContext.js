import { React, createContext, useContext, useState } from "react";
import jugadores from '../data/Datajugadores'
import paises from "../data/DataPais";

const DataContext = createContext() 

export function useData() {
    return useContext(DataContext)
}

export const DataProvider =({children}) =>  {
    /// Variables
    const [pais, setPais] = useState(['ARG'])
    const [equipos, setEquipos] = useState([])
    
    // funciones logicas
    const getEquipos= (p) => {
        setEquipos([])
        setEquipos(jugadores.filter(jugador => jugador.pais === p))
        setPais(paises.filter(pais => pais.id === p))
    } 

    return(
        <DataContext.Provider value={{
            pais,
            getEquipos,
            equipos   
        }}>{children}</DataContext.Provider>
    )
}
