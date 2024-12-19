import { useContext, useRef } from 'react'
import './DisplayBill.css'
import { StoreContext } from '../context/StoreContext'
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

function DisplayBill(){
  const {productDetails, logo, companyDetails, theme} = useContext(StoreContext);
  const pdfRef = useRef(null);

  function downloadBill() {
    const input = pdfRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4', true);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth/imgWidth, pdfHeight/imgHeight);
      const imgX = (pdfWidth-imgWidth*ratio)/2;
      const imgY = 30;
      pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth*ratio, imgHeight*ratio);
      pdf.save('bill.pdf');
    })
  }

  return (
    <div className='display-wrapper' ref={pdfRef} >
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
        <span onClick={downloadBill}>Download</span>
      </footer>
    </div>
  )
}

export default DisplayBill