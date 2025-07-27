import React, { useState } from 'react'

const SvgString = () => {
    const [val ,setVal] = useState('M 100 200 Q 550 200 1000 200')
    return (
        <div style={{ backgroundColor: 'darkgray', height:'50vh', padding:'20px'}}>
            <svg height='100%' width='100%' style={{backgroundColor:'black' }} >
                <path d={val} stroke='white' />
            </svg>
        </div>
    )
}

export default SvgString;