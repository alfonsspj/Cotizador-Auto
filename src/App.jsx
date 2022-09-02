import { CotizadorProvider } from './context/CotizadorProvider'
import AppSeguro from './components/AppSeguro'

function App() {

  return (
    <CotizadorProvider>
      {/* los datos del provider van a estar disponibles en cualquier componente de aqui */}
      <AppSeguro />
    </CotizadorProvider>
  )
}

export default App
