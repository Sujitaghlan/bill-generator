import { IoIosAdd } from "react-icons/io";
import './UserInput.css'
import { useContext, useState } from "react";
import { StoreContext } from "../context/StoreContext";



function UserInput(){
  const { setProductDetails, setLogo, companyDetails, setCompanyDetails, theme} = useContext(StoreContext);
  const [file, setFile] = useState();
  const [product, setProduct] = useState([{
    productName: "",
    productPrice: "",
    discount: ""
  }]);

    function handleFile(e){
      setFile(URL.createObjectURL(e.target.files[0]));
      setLogo(URL.createObjectURL(e.target.files[0]));
    }



    function handleAddBtn(e){
      e.preventDefault();
      setProduct([...product, {productName: "", productPrice: "", discount: " "}]);
    }

    function handleSaveProducts(e){
      if (product.every(item => item.productName && item.productPrice && item.discount)) {
        setProductDetails(product);
      } else {
        alert("Please fill in all the product details.");
      }
    }

    function handleInputChange(e, index){
      let { name, value } = e.target;
      let onChangeValue = [...product];
      onChangeValue[index][name] = value;
      setProduct(onChangeValue);
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


    return (
      <div>
  <form action="" className={theme==='dark'?'dark':''}>
          <h1>Bill Generator Form</h1>
          <input type="text" onChange={(e)=>handleCompanyName(e)} value={companyDetails.companyName} placeholder="COMPANY NAME" />
          <div className="contact-info">
            <input  type="text" value={companyDetails.location} onChange={(e) => handleLocation(e)} placeholder="LOCATION" id="location" />
            <input type="text" value={companyDetails.contact} onChange={(e) => handleContact(e)} placeholder="CONTACT" id="contact" />
          </div>
          <input type="file" onChange = {(e)=>handleFile(e)} placeholder="LOGO FILE UPLOAD"/>

          {product.map((product, index) => (
            <div className="product-details">
            <input onChange={(e)=>handleInputChange(e, index)} type="text" placeholder="PRODUCT NAME" name="productName" value={product.productName}/>
            <input onChange={(e)=>handleInputChange(e, index)} type="text" placeholder="PRICE" name="productPrice" value={product.productPrice}/>
            <input onChange={(e)=>handleInputChange(e, index)} type="text" placeholder="DISCOUNT" name="discount" 
  value={product.discount}/>
          </div>
          ))}
  <button onClick={handleAddBtn}><IoIosAdd className="add"/>Add other Product</button>
          <div className="btns">
            <button id="preview" onClick={handleSaveProducts} type="button">SAVE</button>

          </div>
        </form>
      </div>
        
    )
}

export default UserInput