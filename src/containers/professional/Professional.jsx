import React from 'react';
import './professional.css';

const Professional = () => {
  return (
    <div className='nem_professional'>
      <div className='nem_professional-content'>
        <h1>Profesionales del Cambio </h1>
      </div>  
      <div className='nem_professional-text'>
        <div className='nem_professional-1'>
          <h2>Misión</h2>
          <p>En New Express Money somos la compañía dedicada a satisfacer competitivamente las necesidades y expectativas cambiarias de nuestros clientes, facilitando la compra y venta de divisas, logrando bienestar integral para nuestros trabajadores y un desarrollo sostenible con responsabilidad social.</p>
        </div>
          <div className='nem_professional-2'>
          <h2>Visión</h2>
          <p>Ser la empresa líder en la comercialización de divisas en el mercado libre colombiano de manera profesional, con experiencia, solidez y respaldo para brindar al cliente la mayor satisfacción, garantía y seguridad.</p>
        </div> 
      </div>  
    </div>
  )
}

export default Professional;