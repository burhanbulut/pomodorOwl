
import {Menu, Transition} from '@headlessui/react'
import {Fragment} from 'react'
import {ChevronDownIcon} from '@heroicons/react/20/solid'
import {Link, useNavigate} from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
export default function Example() {
    let navigate = useNavigate();
    const logoutHandler = () =>{
        localStorage.removeItem("currentUser")
        localStorage.removeItem("username")
        localStorage.removeItem("token")
        navigate('/')
        history.go(0);

    }

    return (
        <div className=" text-right">
            <Menu as="div" className="relative inline-block text-left mx-2">
                <div>
                    <Menu.Button
                        className="inline-flex  w-full justify-center rounded-full  px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
                            <div className={'flex align-middle  items-center justify-between w-full'}>
                                <div className={'border-2 rounded-full w-10 h-10 bg-white flex justify-center text-black align-middle text-center items-center text-3xl mx-2'}>
                                    {localStorage.getItem("username").charAt(0).toUpperCase()}
                                </div>
                                <p className={'text-white text-2xl'}> {localStorage.getItem("username")}</p>
                            </div>

                            <ChevronDownIcon
                                className="-mr-1 ml-2 h-5 w-5 text-violet-200 hover:text-violet-100"
                                aria-hidden="true"
                            />
                    </Menu.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items
                        className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                        <div className="px-1 py-1 ">
                            <Menu.Item>
                                {({active}) => (
                                    <Link to={`/profile${localStorage.getItem("currentUser")}`}
                                        className={`${
                                            active ? 'bg-violet-500 text-white' : 'text-gray-900'
                                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                    >
                                        {active ? (
                                            <AccountCircleIcon
                                                className="mr-2 h-5 w-5"
                                                aria-hidden="true"
                                            />
                                        ) : (
                                            <AccountCircleIcon
                                                className="mr-2 h-5 w-5"
                                                aria-hidden="true"
                                            />
                                        )}
                                        Profil
                                    </Link>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({active}) => (
                                    <button
                                        onClick={logoutHandler}
                                        className={` ${
                                            active ? 'bg-violet-500 text-white' : 'text-gray-900'
                                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                    >
                                        {active ? (
                                            <LogoutIcon
                                                className="mr-2 h-5 w-5"
                                                aria-hidden="true"
                                            />
                                        ) : (
                                            <LogoutIcon
                                                className="mr-2 h-5 w-5"
                                                aria-hidden="true"
                                            />
                                        )}
                                        Çıkış Yap
                                    </button>
                                )}
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
)
}

