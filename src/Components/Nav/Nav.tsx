
import { Bars3Icon } from '@heroicons/react/20/solid'
import React from 'react'

interface INav {
    openNav: () => void;
}

const Nav = ({openNav}: INav) => {


    return (
        <div className='w-[100%] top-0 h-[12vh] bg-[#141c27] shadow-md'>
            <div className='flex items-center justify-between w-[80%] mx-auto h-[100%]'>
                <h1 className='flex-[0.6] text-white font-bold text-[25px] cursor-pointer'>
                    FullStack
                    <span className='text-yellow-300'>Developher</span>
                </h1>
                <div className='nav-link'>Teste</div>
                <div className='nav-link'>Teste</div>
                <div className='nav-link'>Teste</div>
                <div onClick={openNav}>
                    <Bars3Icon className='w-[2rem] md:hidden h-[2rem] cursor-pointer text-yellow-300'></Bars3Icon>
                </div>
            </div>

        </div>
    )
}

export default Nav