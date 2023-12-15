import React, { useState } from "react";
import axios from 'axios';


export default function FetchApp() {
  const [currentPrice, setCurrentPrice] = useState(0);
  const [previousPrice,setPreviousPrice] = useState(0);

  console.log(currentPrice)
  const handleButtonClick = async() =>{
    try{
        const response = await axios.get('https://random-data-api.com/api/address/random_address?size=3');
        if(response.status==200){
            if(currentPrice){
                setPreviousPrice(currentPrice);
                setCurrentPrice(response.data[0].zip_code)
            }else{
                setCurrentPrice(response.data[0].zip_code)
            }
        }
    }catch(err){
        console.log('Error',err)
    }
  }

  return (
    <div style={{background:'lightgray',width:'300px',margin:'auto',padding:'30px',marginTop:'30px',borderRadius:'20px',paddingBottom:'60px'}}>
      <h1>FetchApp</h1>
            <h3>Bitcoin Price : {currentPrice}</h3>

            {previousPrice?
            <>
            <h4>Previous Price : {previousPrice}</h4>
            </>:<></>}
        <button onClick={handleButtonClick}  style={{backgroundColor:`${currentPrice?'purple':'blue'}`,color:'white',padding:'10px',fontSize:'15px',borderRadius:'10px'}}> {currentPrice?"Refresh Bitcoin Price":"Get Bitcoin Price"}</button>
    </div>
  );
}
