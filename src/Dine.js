import React from 'react'

const Dine = (props) => {
    return (
        <div>
            <h5>Today we are serving {props.name}</h5>
            <h5>Today we are serving {props.sweet}</h5>
        </div>
    )
}

export default Dine