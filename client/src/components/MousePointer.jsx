import React, { useEffect } from 'react';
import './components.css';

const MousePointer = () => {

    useEffect(()=> {

        const cursorDot = document.querySelector("[data-cursor-dot]");
        const cursorOutline = document.querySelector("[data-cursor-outline]");

        const mousePointer = (e)=> {

            const posX = e.clientX;
            const posY = e.clientY;

            cursorDot.style.left = `${posX}px`;
            cursorDot.style.top = `${posY}px`;

            cursorOutline.animate(
                {left: `${posX}px`, top: `${posY}px`},
                {duration: 500, fill: 'forwards'}
            );

        }

        window.addEventListener('mousemove', mousePointer);

    }, []);
    
    return (
    
        <div className='fixed top-0 left-0 w-screen h-screen pointer-events-none z-50'>
            <div className="cursor-dot" data-cursor-dot></div>
            <div className="cursor-outline" data-cursor-outline></div>
        </div>
    
    );

};

export default MousePointer;