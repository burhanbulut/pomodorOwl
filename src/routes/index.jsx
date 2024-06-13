import {createBrowserRouter, Navigate} from 'react-router-dom';
import MainLayout from "../layouts/main/index.jsx";
import Home from "../pages/home/index.jsx";
import Login from "../pages/login/index.jsx";
import Register from "../pages/register/index.jsx";
import Profile from "../pages/profile/Profile.jsx";
import {Password} from "../pages/password/index.jsx";
import ChangePassword from "../pages/changepassword/ChangePassword.jsx";



const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'login',
                element:localStorage.getItem("currentUser") == null ? <Login /> : <Navigate  to={'/'} />
            },
            {
                path: 'register',
                element: <Register />
            },
            {
                path: `profile${localStorage.getItem("currentUser")}/`,
                element: <Profile />,
                children: [

                    {
                        path: `password`,
                        element: <Password />
                    }
                ]

            },
            {
                path: `profile${localStorage.getItem("currentUser")}/changepassword`,
                element: <ChangePassword />
            },

        ]
    },

])

export default routes;