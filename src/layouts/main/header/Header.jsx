import React from 'react'
import Logo from '../../../assets/logo/logo1copy.png'
import {Link} from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const Header = () => {
    return (
        <>
            <div className='max-h-[90px] w-full flex border-b-2 pb-1 bg-gradient-to-r justify-between items-center align-middle from-cyan-500 to-blue-500'>
                <div className={'flex'}>
                    <div className='m-2 flex align-middle items-center shadow-2xl'>
                        <Link to={'/'}>
                        <img width={75} height={75} src={Logo} alt='google logo'/>
                        </Link>
                    </div>
                    <div className='flex items-center align-middle  m-5'>
                        <h1 className='font-bold w-full text-3xl text-white'>PomodorOwl</h1>
                    </div>
                </div>
                <div className={'flex border-2 h-12 text-center bg-white justify-center items-center align-middle rounded-3xl w-36 mr-4'}>
                    <Link className={'text-blue-700'}  to={'login'}><AccountCircleIcon className={'text-blue-700'}/> Giriş Yap</Link>
                </div>
            </div>
        </>
    )
}
export default Header
