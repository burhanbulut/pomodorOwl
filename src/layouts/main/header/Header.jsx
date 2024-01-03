import React from 'react'
import Logo from '../../../assets/logo/logo1copy.png'

const Header = () => {
    return (
        <>
            <div className='max-h-[90px] w-full flex border-b-2 pb-1 bg-gradient-to-r from-cyan-500 to-blue-500'>
                <div className='m-2 flex align-middle items-center shadow-2xl'>
                    <img width={75} height={75} src={Logo} alt='google logo'/>
                </div>
                <div className='flex items-center align-middle justify-center m-5'>
                    <h1 className='font-bold w-full text-3xl text-white'>PomodorOwl</h1>
                </div>
            </div>
        </>
    )
}
export default Header
