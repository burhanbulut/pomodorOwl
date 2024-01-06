import {createBrowserRouter} from 'react-router-dom';
import MainLayout from "../layouts/main/index.jsx";
import Home from "../pages/home/index.jsx";
import Login from "../pages/login/index.jsx";
import Register from "../pages/register/index.jsx";

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
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            }

        ]
    },

])

export default routes;