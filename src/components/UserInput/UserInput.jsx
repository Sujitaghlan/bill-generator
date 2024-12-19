import { IoIosAdd } from "react-icons/io";
import './UserInput.css'
import { useContext, useState } from "react";
import { StoreContext } from "../context/StoreContext";
import DisplayBill from "../DisplayBill/DisplayBill";


function UserInput(){
  const {productDetails, setProductDetails, setLogo, companyDetails, setCompanyDetails, setDownload, theme} = useContext(StoreContext);
  const [file, setFile] = useState();
  const [product, setProduct] = useState({
    productName: "",
    productPrice: "",
    discount: ""
  });

  function handleFile(e){
    setFile(URL.createObjectURL(e.target.files[0]));
    setLogo(URL.createObjectURL(e.target.files[0]));
  }

  function handleName(e){
    setProduct({...product, productName: e.target.value});
  }

  function handlePrice(e){
    setProduct({...product, productPrice: e.target.value})
  }

  function handleDiscount(e){
    setProduct({...product, discount: e.target.value});
  }

  function handleAddBtn(e){
    if(product.productName && product.productPrice && product.discount){
      e.preventDefault();
      setProductDetails([...productDetails, product]);
      setProduct({productName: "", productPrice: "", discount: " "})
    }
  }
    function handleCompanyName(e){
      setCompanyDetails({...companyDetails, companyName: e.target.value});
    }
   
    function handleLocation(e){
      setCompanyDetails({...companyDetails, location: e.target.value});
    }
    
    function handleContact(e){
      setCompanyDetails({...companyDetails, contact: e.target.value});
    }
  
    function downloadPdf(){
      setDownload(true);
    }

  return (
      <form action="" className={theme==='dark'?'dark':''}>
        <h1>Bill Generator Form</h1>
        <input type="text" onChange={(e)=>handleCompanyName(e)} value={companyDetails.companyName} placeholder="COMPANY NAME" />
        <div className="contact-info">
          <input  type="text" value={companyDetails.location} onChange={(e) => handleLocation(e)} placeholder="LOCATION" id="location" />
          <input type="text" value={companyDetails.contact} onChange={(e) => handleContact(e)} placeholder="CONTACT" id="contact" />
        </div>
        <input type="file" onChange = {(e)=>handleFile(e)} placeholder="LOGO FILE UPLOAD"/>

        <div className="product-details">
          <input onChange={(e)=>handleName(e)} type="text" placeholder="PRODUCT NAME" value={product.productName}/>
          <input onChange={(e)=>handlePrice(e)} type="text" placeholder="PRICE" value={product.productPrice}/>
          <input onChange={(e)=>handleDiscount(e)} type="text" placeholder="DISCOUNT" value={product.discount}/>
          <button onClick={handleAddBtn}><IoIosAdd className="add"/></button>
        </div>

        <div className="btns">
          <button id="preview" onClick={<DisplayBill />}>PREVIEW</button>
          <button id="download" onClick={downloadPdf}>DOWNLOAD</button>
        </div>
      </form>
  )
}

export default UserInput