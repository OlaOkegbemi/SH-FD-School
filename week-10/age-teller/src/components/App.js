import React, { useState } from 'react';
import AgeStats from './AgeStats';

function App() {
    const [ dob, setDob ] = useState('');
    const [ showStats, setShowStats ] = useState(false);

    return (
        <div className="App">
            <h1>Age Teller</h1>

            <p className="mb-5">Enter your birth year below:</p>

            <input 
                type="date" 
                className="mb-4" 
                placeholder="Enter your birth year..." 
                onChange={ (e) => {
                    setDob(e.target.value) 
                    setShowStats(true)  
                }}
            />

            <button className="btn btn-warning">Calculate</button>

            {/* if showStat value is set to true display the component */}
            { showStats ? <AgeStats dob={dob} /> : <div></div> }
        </div>
    )
}

export default App;
