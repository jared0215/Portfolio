'use client'
import * as React from "react";
import { useState, useEffect } from "react";

// Typewriter effect

type TypewriterEffectProps = { // Typewriter effect properties
    text: string;
    speed: number;
};

const TypewriterEffect: React.FC<TypewriterEffectProps> = ({ text, speed }) => { //  Typewriter effect component
    const [index, setIndex] = useState(0); //  Typewriter effect initial state
    
    useEffect(() => {
        // NodeJS.Timeout is used to create a timer that will run the effect after the specified delay
        let timer: NodeJS.Timeout;

        // Start the timer
        timer = setInterval(() => { 
            // Update the state every 100 milliseconds
            setIndex((index) => index + 1);
        }, speed);

        // Stop the interval when all characters are displayed
        if (index >= text.length) {
            clearInterval(timer);
        }

        return () => {
            clearInterval(timer);
        };
    }, [speed, index]);

    return (
        <span className='typewriter text-[#35844F] text-4xl font-bold mb-4 md:text-6xl'>
            {text.slice(0, index)}
            {/* Only show the cursor if the entire text isn't displayed */}
            {index < text.length && <span className="cursor">|</span>}
        </span>
    );
};

export default TypewriterEffect;
