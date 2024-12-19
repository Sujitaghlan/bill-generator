import { useContext } from 'react'
import './App.css'
import DisplayBill from './components/DisplayBill/DisplayBill'
import UserInput from './components/UserInput/UserInput'
import { StoreContext } from './components/context/StoreContext'
import Theme from './components/Theme/Theme'

function App() {
  const {theme, productDetails} = useContext(StoreContext);
  return (
    <div className={theme==='light'?'light':'dark'}>
      <Theme />
      <div className='app-container'>
        <UserInput />
        {productDetails.length>0?<DisplayBill />:""}

      </div>
    </div>
    
  )
}

export default App
