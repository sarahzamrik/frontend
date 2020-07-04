import React from 'react';

const Button = (prop) => {
    return (
        <button 
            type="button" 
            style={prop.style}
            className={`btn nav-item ${prop.className}`}
        >
            {prop.children}
        </button>
    )
}

export default Button;