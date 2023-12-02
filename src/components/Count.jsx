import React from 'react'
import './Count.css';
import { useCount } from './hooks/count';


function Count() {
    const {count,increment,decrement,className}=useCount();
  return (
    <div className='container'>
        <h3 className={className}>{count}</h3>
        <div>   
           <button className='button button-minus' onClick={decrement}>-</button>
           <button className='button button-plus' onClick={increment}>+</button>
        </div>  
    </div>
  )
}

export default Count