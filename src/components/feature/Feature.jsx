import React from 'react';
import './feature.css';

const  Feature = ({ title, text }) => {
  return (
    <div className='nem_features-container'>
      <div className='nem_features-container_bg'>
        <div />
      </div>
      <div className='nem_features-container_title'> 
        <h2>{title}</h2>
      </div>
      <div className='nem_features-container_text'>
        <p>{text}</p>
      </div>
    </div>    
  )
}

export default Feature;