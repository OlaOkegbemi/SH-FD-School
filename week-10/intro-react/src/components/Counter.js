import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
  
    return (
        <div className='counter'>
            <h1>Increase claps by 1 when a user clicks </h1>

            <h2>Claps: { count } </h2>

            <button 
                type='button'
                onClick = { () => setCount( count + 1 ) }
            >
                Clap Round
            </button>
        </div>
    );
}


export default Counter;

