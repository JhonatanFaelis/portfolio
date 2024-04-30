import React from 'react'
import Particle from '../Particle/Particle'
import TextEffect from '../TextEffect/TextEffect'
import Image from 'next/image'

const Hero = () => {
    return (
        <div className="h-[88vh] bg-[url('/image/banner.jpg')] bg-cover bg-center">
            <Particle />
            <div className='w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center'>
                <div>
                    <h1 className='text-[35px] md-text-[50px] text-white font-bold'>Ola,
                        <span className='text-yellow-300'> Jhonatan Faelis </span>
                        aqui!</h1>
                    <TextEffect />
                    <p className='mt-[2rem] text-[20px] text-[#ffffff92]'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis voluptatem doloremque possimus, ipsum quod nam illum error pariatur omnis, iure distinctio odio quidem, voluptatibus ipsam molestias aliquid accusantium perferendis voluptas!
                    </p>
                </div>
                <div className='w-[500px] hidden bg-[#55e6a5] relative lg:flex items-center rounded-full h-[500px]'>
                    <Image src="/image/u1.jpg" alt='user' layout='fill' className='object-cover rounded-full' />
                </div>
            </div>
        </div>
    )
}

export default Hero