import './Button.css';
import React from 'react';

function Button(props) {

    return (
        <>
            <button className="button">{props.text}</button>
        </>
    );
}

export default Button;