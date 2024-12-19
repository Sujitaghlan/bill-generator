import { useContext } from "react"
import { StoreContext } from "../context/StoreContext"
import './Theme.css'

function Theme(){
  const {theme, setTheme} = useContext(StoreContext);
  function handleToggle(){
    if(theme==='light'){
      setTheme('dark');
    }
    else if(theme==='dark'){
      setTheme('light');
    }
  }
  return (
    <div className="theme-container">
      {theme==='light'?<button onClick={handleToggle} className="light-btn">Light</button>:<button onClick={handleToggle} className="dark-btn">Dark</button>}
    </div>
  )
}

export default Theme