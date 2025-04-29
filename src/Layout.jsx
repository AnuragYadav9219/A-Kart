import React from 'react';
import Footer from './components/Footer';
import { useLocation, Outlet } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import { Card1, Card2, Card3, Card4, Card5, Card6 } from './components/Card';



const Layout = () => {
    const location = useLocation();
    const hiddenPaths = ["/login", "/cart", "/products", "/services", "/signup", "/electronics", "/home", "/books", "/sports", "/toys", "/DefaultCategoryContent", "/categories", "/categories/fashion", "/categories/electronics", "/categories/sports", "/categories/beauty", "/categories/grocery", "/categories/spectacles", "/payment"];

    const hideExtras = hiddenPaths.includes(location.pathname);
    // const hideFooter = location.pathname === "/login";
    const hideFooter = ["/login", "/signup", "/payment"].includes(location.pathname);


    return (
        <>
            <Outlet />
            {!hideExtras && (
                <>
                    <Dashboard />
                    <Card1 />
                    <Card3 />
                    <Card5 />
                    <Card2 />
                    <Card6 />
                    <Card2 />
                </>
            )}
            {!hideFooter && <Footer />}
        </>
    );
};


export default Layout;