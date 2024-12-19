import { useContext } from 'react'
import './DisplayBill.css'
import { StoreContext } from '../context/StoreContext'


function DisplayBill(){
  const {productDetails, logo, companyDetails, theme} = useContext(StoreContext);

  return (
    <div className='display-wrapper' >
      <header className={theme==='dark'?'dark':'light'}>
        <div className='logo'>
          <img src={logo} alt="" />
          <span>{companyDetails.companyName}</span>
        </div>
        {new Date().getFullYear() + "/" + new Date().getMonth() + "/" + new Date().getDay()}
      </header>
      <table>
        <caption>Product Bill</caption>
        <thead>
          <tr>
            <th>SN</th>
            <th>ITEM</th>
            <th>PRICE</th>
            <th>DISCOUNT</th>
            <th>TOTAL</th>
          </tr>
        </thead>
       <tbody>
          {productDetails.map((item, index) => (
            <tr>
              <td>{index+1}</td>
              <td>{item.productName}</td>
              <td>{item.productPrice}</td>
              <td>{item.discount}</td>
              <td>{item.productPrice-item.discount}</td>
            </tr>
          ))}
       </tbody>
      </table>
      <footer>
        <span>Location: {companyDetails.location}</span>
        <span>Contact: {companyDetails.contact}</span>
      </footer>
    </div>
  )
}

export default DisplayBill