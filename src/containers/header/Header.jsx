import React from 'react';
import dologo from '../../assets/dolar1.jpg';
import './header.css';

const Header = () => {
  return (
    <div className='nem_header section_padding' id='inicio'>
      <div className='nem_header-content'>
        <h1>Más de 27 años de experiencia en el cambio de moneda</h1>
        <p>New Express Money puede comprar o vender sus divisas no solo en efectivo sino también por medio de transferencia bancaria. Nuestros productos financieros, han sido autorizados por la DIAN para entregarle este beneficio, así no tendrá que correr riesgos innecesarios sacando el dinero del banco.</p>
      </div>
      <div className='nem_header-image'>
        <img src={dologo} />
      </div>
    </div>
  )
}

export default Header;