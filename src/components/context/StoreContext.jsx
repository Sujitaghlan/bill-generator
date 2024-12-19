import { createContext, useState } from "react";

export const StoreContext = createContext();

const StoreContextProvider = (props) => {
 const [productDetails, setProductDetails] = useState([]);
 const [logo, setLogo] = useState(null);
 const [companyDetails, setCompanyDetails] = useState({
  companyName: "",
  location: "",
  contact: ""
  })
  const [theme, setTheme] = useState('light');

  return(
    <StoreContext.Provider value={{productDetails, 
      setProductDetails, 
      logo, 
      setLogo, 
      companyDetails, 
      setCompanyDetails, 
      theme,
      setTheme}}>
      {props.children}
    </StoreContext.Provider>
  )
}

export default StoreContextProvider