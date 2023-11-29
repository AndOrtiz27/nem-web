import React from 'react';
import face from '../../assets/faceSvg.svg';
import whsp from '../../assets/logowhatsapp.svg';
import logox from '../../assets/logoX.svg';
import './footer.css';

const Footer = () => {
  return (
    <div className='nem_footer' id='contacto'>
      <div className='nem_footer-header'>
        <h1>NEW</h1>
        <h1>EXPRESS</h1>
        <h1>MONEY</h1>
      </div>  
      <div className='nem_footer-header1'>
        <h3>Síguenos:</h3>
      </div>

      <div className='nem_footer-logos'>
        <div className='nem_footer-face'>
          <img src={face}/>
        </div>
        <div className='nem_footer-was'>
          <img src={whsp}/>
        </div>
        <div className='nem_footer-x'>
          <img src={logox}/>
        </div>        
      </div>

      <div className='nem_footer-links'>
        <p>Contáctenos en Bogotá</p>
        <p>Línea de atención: 601 6146656</p>
        <p>Whatsapp: +57 3124053638</p>
        <p>E-mail: newexpress151@hotmail.com</p>
        <p>Oficina principal: Calle 151 No. 16 56 local 2082</p>
        <p>Bogotá - Colombia</p>
      </div>   

      <div className='nem_footer-copyright'>
        <p>© COPYRIGHT 2023 NEW EXPRESS MONEY, TODOS LOS DERECHOS RESERVADOS.</p>
      </div>      
    </div>
    
  )
}

export default Footer;