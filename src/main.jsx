import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import StoreContextProvider from './components/context/StoreContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StoreContextProvider>
      <App />
    </StoreContextProvider>

  </StrictMode>,
)
