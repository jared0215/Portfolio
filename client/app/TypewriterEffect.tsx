'use client';

import * as React from "react";
import { useState, useEffect } from "react";

type TypewriterEffectProps = {
    text: string;
    speed: number;
};

const TypewriterEffect: React.FC<TypewriterEffectProps> = ({ text, speed }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        // Check if all characters are already displayed
        if (index < text.length) {
            // Start the timer
            const timer = setInterval(() => {
                setIndex((current) => current + 1);
            }, speed);

            // Clear the timer when the component unmounts or before re-running the effect
            return () => clearInterval(timer);
        }
    }, [index, speed, text.length]); // Include text.length in the dependency array

    return (
        <span className='typewriter text-[#35844F] text-4xl font-bold mb-4 md:text-6xl'>
            {text.slice(0, index)}
            {index < text.length && <span className="cursor">|</span>}
        </span>
    );
};

export default TypewriterEffect;
