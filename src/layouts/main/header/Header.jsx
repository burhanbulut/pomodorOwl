import Logo from '/pomodorOwl_Logo.png'
import {Link, useLocation} from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HeaderUser from "../../../components/HeaderUser.jsx";

const Header = () => {

    return (
        <>
            <div
                className='max-h-[90px] w-full flex border-b-2 pb-1 bg-gradient-to-r justify-between items-center align-middle from-baseColorHeader to-secondaryColorHeader'>

                    <Link className={'flex'} to={'/'}>
                    <div className=' ml-3 flex align-middle items-center shadow-2xl'>

                            <img width={85} height={85}  src={Logo} alt='google logo'/>

                    </div>
                    <div className='flex items-center align-middle  m-5'>
                        <h1 className='font-bold w-full text-3xl text-white'>PomodorOwl</h1>
                        <sup className={'text-white text-lg font-bold ml-1'} ><small>V</small>0.1.0</sup>
                    </div>
                </Link>


                {localStorage.getItem("currentUser") == null ? <div
                    className={'flex border-2 h-12 text-center bg-white justify-center items-center align-middle rounded-3xl w-36 mr-4'}>
                    <Link className={'text-blue-700'} to={'login'}><AccountCircleIcon
                        className={'text-blue-700'}/> Giriş Yap</Link>
                </div> : <HeaderUser/>}

            </div>
        </>
    )
}
export default Header
