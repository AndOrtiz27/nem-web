import React from 'react';
import  Flag  from '../../components/flag/Flag';
import {aus, bra, can, eur, ing, usa,} from './imports';
import './money.css';

const Money = () => {
  return (
    <div className='nem_money' id='cambio'>
      <div className='nem_money-heading'>
        <h1>Cambio de moneda</h1>
      </div>
      <div className='nem_money-container'>       
        <Flag imgUrl={usa} title='Dólares' sign='USD' text1='Compra' text2='4050' text3='Venta' text4='4200' />
        <Flag imgUrl={eur} title='Euros' sign='EUR' text1='Compra' text2='4400' text3='Venta' text4='4550' />
        <Flag imgUrl={can} title='Dólares' sign='CAD' text1='Compra' text2='3400' text3='Venta' text4='3550' />
        <Flag imgUrl={ing} title='Libras' sign='LIB' text1='Compra' text2='4800' text3='Venta' text4='4850' />
        <Flag imgUrl={aus} title='Dólares' sign='AUD' text1='Compra' text2='2400' text3='Venta' text4='2550' />
        <Flag imgUrl={bra} title='Real' sign='BR' text1='Compra' text2='2500' text3='Venta' text4='2300' />
      </div>
    </div>
  )
}

export default Money;