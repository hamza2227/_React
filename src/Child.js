import React,{useContext} from 'react';
import CounterContext from './CounterContext';

const Child = () => {
    let conuterValue = useContext(CounterContext)
  return (
    <div>Child-- The value of UseContext is {conuterValue}</div>
  )
}

export default Child