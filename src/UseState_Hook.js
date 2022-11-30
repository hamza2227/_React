import React, { useState } from 'react';
import Nap from './Nap';

import './UseState_Hook.css'

const UseState_Hook = () => {
    let [count, setCount] = useState(0); 
    let [isMorning, setMorning] = useState(true);
    return (
        <div className={`box ${isMorning ? 'dayLight' : ''}`}>
            <h3>Day time = {isMorning ? 'Morning' : 'Night'}</h3>
            {/* <h4>Value of counter is: {count}</h4> */}
            <Nap counter={count} />
            <button onClick={() => setCount(count + 1)}>Click</button>

            <button onClick={() => setMorning(!isMorning)}>Update Day</button>
        </div>
    )
}

export default UseState_Hook