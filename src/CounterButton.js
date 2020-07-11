import React, { useState } from 'react';

const CounterButton = () => {

    const [state, setState] = useState(
        {
            label: 0,
        }
    );

    const countUp = () => {
       // Create a new variable for the new state
       let newLabel = state.label + 1;

       // Update the state using setState
       setState(
           {
               label: newLabel
           }
       )
    }

    return (
        <button 
            onClick={countUp}
            className="btn btn-primary">
                {state.label}
        </button>
    )

}

export default CounterButton;