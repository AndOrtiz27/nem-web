import React from 'react';
import './flag.css';

const  Flag = ({ imgUrl, title, sign, text1, text2, text3, text4 }) => {
  return (
    <div className='nem_flag-container'>      
      <div className='nem_flag-container_image'>
        <img src={imgUrl} />
      </div>
      <div className='nem_flag-container-heading'> 
        <h2>{title}</h2>
        <p>{sign}</p>             
      </div>
      <div className='nem_flag-container-buy'>         
        <h2>{text1}</h2>
        <p>{text2}</p>  
      </div>       
      <div className='nem_flag-container-sale'>
        <h2>{text3}</h2>
        <p>{text4}</p>    
      </div>      
    </div>    
  )
}

export default Flag;