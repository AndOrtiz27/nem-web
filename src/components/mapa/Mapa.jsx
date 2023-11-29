import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import MarkerIcon from './MarkerIcon';
import 'leaflet/dist/leaflet.css';


const Mapa = () => {    
  return (
    <div className='map'>
    <MapContainer center={[4.7270454, -74.0443852]} zoom={13} style={{height:'400px', width:'100%'}}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[4.7270454, -74.0443852]} icon={MarkerIcon}>
        <Popup>
          New Express Money
        </Popup>
      </Marker>
    </MapContainer>
    </div>
  )
}

export default Mapa;