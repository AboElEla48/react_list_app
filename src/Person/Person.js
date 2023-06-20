import React from "react";
import './PersonCard.css';

const person = (props) => {
    return (
        <div className="Person-Card">
            <p>My Name is {props.name}</p>
            <button onClick={props.deleteHandler}>Remove</button>
            <p>I am {props.age} years old!</p>
            <p>{props.children}</p>
            
        </div>
    );
}

export default person;