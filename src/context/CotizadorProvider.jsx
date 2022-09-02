import { createContext } from 'react';

const CotizadorContext = createContext()

// provider es el lugar donde vas a definir el state (cual es la fuente de los datos)
const CotizadorProvider = ({children}) => {

    return(
        <CotizadorContext.Provider
            value={{
                
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