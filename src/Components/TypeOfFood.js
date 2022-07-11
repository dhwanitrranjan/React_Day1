import React from 'react';
import Fruits from './Fruits';
import './TypeOfFood.css';

function TypeOfFood(){
    return(
        <div className="parent">
            <h2>TypeOfFood component</h2>
            <Fruits/>
        </div>
    )
}

export default TypeOfFood;