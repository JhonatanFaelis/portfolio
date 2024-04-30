import React from 'react'
import { TypeAnimation } from 'react-type-animation';

function TextEffect() {
    return (
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            'PROGRAMADOR',
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            'FRONT-END',
            1000,
            'BACK-END',
            1000,
            'FULLSTACK',
            1000
          ]}
          wrapper="span"
          speed={50}
          className='text-[2rem] md-text-[3rem] text-[#55e6a5] font-bold uppercase'
          repeat={Infinity}
        />
      );
}

export default TextEffect