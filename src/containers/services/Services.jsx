import React from 'react';
import { Feature } from '../../components';
import './services.css';

const Services = () => {
  return (
    <div className='nem_services'>
      <div className='nem_services-container'>
        <Feature title='Servicios' text='Compra y venta de divisas con la eficiencia y seguridad que usted necesita. Dólares, Euros, Cheques de Viajero, Libras Esterlinas y muchas divisas más'/>
        <Feature title='Precios competitivos' text='Ofrecemos tasas altamente competitivas de acuerdo a las condiciones del mercado.'/>
        <Feature title='Seguridad' text='Experiencia y estructura sistematizada, segura y confiable; usted podrá cambiar sus divisas con toda tranquilidad.'/>
        <Feature title='Facturación electrónica' text='Hacemos parte de la transformación digital impulsada por la DIAN. Emitimos facturas electrónicas por su compra de divisas. Esto hace que su factura sea más segura, reduce el riesgo de pérdida, disminuye el riesgo de falsificación y contribuye al cuidado del medio ambiente'/>
      </div>
     
    </div>
  )
}

export default Services;