import React, { useEffect } from 'react';
import Header from './header';
import Main from './main';
import Footer from './footer';




const Layout = () => {

    return (
        <div className="layout">
            <Header />
            <br />
            <Main />
            <br />
            <Footer />
            <br />
        </div>
    )
}

export default Layout