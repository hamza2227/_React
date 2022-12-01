import React, { useContext } from 'react';
import CounterContext from './CounterContext';

const Child = () => {
let counterValue = useContext(CounterContext); 
  return (
    <div>
        <h4>Child</h4>
        {/* <CounterContext /> */}
        <h4>The value of Counter Context is {counterValue}</h4>
    </div>
  )
}

export default Child