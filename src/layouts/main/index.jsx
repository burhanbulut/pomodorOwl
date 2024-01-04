import React from 'react'
import {Outlet} from "react-router-dom";
import Header from "./header/Header.jsx";
import Footer from "./footer/Footer.jsx";

function MainLayout() {
    return (

        <div className='h-screen' >
            <Header/>
            <Outlet/>
            <Footer/>
        </div>

    )
}

export default MainLayout
