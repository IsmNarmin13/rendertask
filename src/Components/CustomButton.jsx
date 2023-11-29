import React from 'react'
import { useState } from 'react';

const CustomButton = () => {
    const [a, setA] = useState(0);

    const toggleDisplay = () => {
        setA(a + 1);
    };


    function warn() {
        document.querySelector('.a').classList.add('red');
    }
    function hint() {
        document.querySelector('p').style.display = "block";
    }
    function hint2() {
        document.querySelector('p').style.display = "none";
    }

    return (
        <div>
            <button onClick={warn} className='a' >warnMessage</button>
            <button onMouseOver={hint} onMouseOut={hint2}>Hint</button>
            <button onClick={toggleDisplay}>Text</button>
            {a % 2 === 0 ? <div style={{ display: 'none' }}>Content</div> : <div style={{ display: 'block' }}>Content</div>}
            <p>abc</p>
        </div>
    )
}

export default CustomButton