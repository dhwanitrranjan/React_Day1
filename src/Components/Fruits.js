import React from 'react';
import TypesOfFruit from './TypesOfFruit';
import './Fruits.css';


function Fruits(){
    return(
        <div className="child1">
            <h4>Fruits</h4>
            <ul>Strawberry</ul>
            <ul>Blackberry</ul>
            <TypesOfFruit/>

        </div>
    )
}

export default Fruits;