import React,{useContext} from 'react';
import CounterContext from './CounterContext';

const Child = () => {
    let contextValue = useContext(CounterContext);
    console.log(contextValue)
  return (
    <div>Child-- Counter value is {contextValue}</div>

  )
}

export default Child