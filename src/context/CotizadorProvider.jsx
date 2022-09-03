import { useState, createContext } from 'react';

const CotizadorContext = createContext()

// provider es el lugar donde vas a definir el state (cual es la fuente de los datos)
const CotizadorProvider = ({children}) => {

    const [datos, setDatos] = useState({
        marca: '',
        year: '',
        plan: ''
    })

    const [error, setError] = useState('')

    const handleChangeDatos = e => {
        setDatos({
            ...datos, 
            [e.target.name] : e.target.value
        })
    }

    return(
        <CotizadorContext.Provider
            value={{
                datos,
                handleChangeDatos,
                error,
                setError

            }}
        >
            {children}
        </CotizadorContext.Provider>
    )
}

export {
    CotizadorProvider
}

export default CotizadorContext