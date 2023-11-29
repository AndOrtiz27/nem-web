import React from 'react';
import Mapa from '../../components/mapa/Mapa';
import './location.css';


const Location = () => {
  return (
    <div className='location_map' id='donde'>
      <h1>Dónde estamos</h1>
      <Mapa />
    </div>
  )
}

export default Location;