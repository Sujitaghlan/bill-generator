import './UserInput.css'
import { useContext, useState } from "react";
import { StoreContext } from "../context/StoreContext";

function UserInput(){
  //used these values from context
  const { setProductDetails, setLogo, companyDetails, setCompanyDetails, theme} = useContext(StoreContext);
  //for logo
  const [file, setFile] = useState();
  //products object
  const [product, setProduct] = useState([{
    productName: "",
    productPrice: "",
    discount: ""
  }]);

  //Function to handle file input to set the file name and logo
    function handleFile(e){
      setFile(URL.createObjectURL(e.target.files[0]));
      setLogo(URL.createObjectURL(e.target.files[0]));
    }

    //Function to handle add more products
    function handleAddBtn(e){
      e.preventDefault();
      setProduct([...product, {productName: "", productPrice: "", discount: ""}]);
    }

    //function to handle the given inputs in the bill
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
        {/* Form to take user input */}
  <form action="" className={theme==='dark'?'dark':''}>
          <h1>Bill Generator Form</h1>
          <input type="text" onChange={(e)=>handleCompanyName(e)} value={companyDetails.companyName} placeholder="COMPANY NAME" required/>
          <div className="contact-info">
            <input  type="text" onChange={(e) => handleLocation(e)} value={companyDetails.location} placeholder="LOCATION" id="location" required/>
            <input type="text" value={companyDetails.contact} onChange={(e) => handleContact(e)} placeholder="CONTACT" id="contact" required/>
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
          <div className="btns">
          <button onClick={handleAddBtn} id="add">ADD MORE PRODUCTS</button>

            <button id="preview" onClick={handleSaveProducts} type="button">SAVE</button>


  
          </div>
        </form>
      </div>
        
    )
}

export default UserInput