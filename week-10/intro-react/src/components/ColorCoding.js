import React, { useState } from "react";

function ColorCoding() {
    const [color, setColor] = useState("black");

    return (
        <div className="colors" style={{ backgroundColor: color, color: 'white' }}>
            <h1>Change the color when a user clicks</h1>

            <div className="showColor">
                Current color: { color }  
            </div>

            <button onClick={ () => setColor("green") }>
                Click Me to Change Color to Green
            </button>

            <button onClick={ () => setColor("red") }>
                Click Me to Change Color to Red
            </button>

            <button onClick={ () => setColor("yellow") }>
                Click Me to Change Color to Yellow
            </button>

        </div>
    );
}

export default ColorCoding;