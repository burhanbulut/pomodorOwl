import {createBrowserRouter} from 'react-router-dom';
import MainLayout from "../layouts/main/index.jsx";
import Home from "../pages/home/index.jsx";


const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            }

        ]
    },

])

export default routes;