import React from 'react'

const Nav = () => {
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
            </div>
        </div>
    )
}

export default Nav