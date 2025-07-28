import React, { useRef, useState } from 'react'

const SvgString = () => {
    const [val, setVal] = useState('M 100 200 Q 550 200 1000 200')
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const x = e.clientX;
        // const y = e.clientY;
        // const newVal = `M 100 200 Q 550 ${y} 1000 200`;
        if (containerRef.current) {

            const rect = containerRef.current.getBoundingClientRect();
            const y = e.clientY - rect.top; // y relative to the container
            const newVal = `M 100 200 Q 550 ${y} 1000 200`;
            setVal(newVal);
        }
    }
    return (
        <div style={{ backgroundColor: 'darkgray', height: '50vh', padding: '20px' }}
            onMouseMove={handleMouseMove}
            ref={containerRef}
        >
            <svg height='100%' width='100%' style={{ backgroundColor: 'black' }} >
                <path d={val} stroke='white' />
            </svg>
        </div>
    )
}

export default SvgString;