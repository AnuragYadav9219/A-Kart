import Footer from './components/Footer';
import { useLocation, Outlet } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Dashboard from './components/Dashboard';
import { Card1, Card2, Card3, Card8, Card5, Card6, Card9 } from './components/Card';

const Layout = () => {
    const location = useLocation();
    const pathname = location.pathname;

    const hiddenPaths = [
        "/login", "/cart", "/about", "/contact", "/products", "/services", "/signup",
        "/popular", "/popular/electronics", "/popular/mobiles", "/popular/beauty", "/popular/cosmetics",
        "/popular/laptop-bags", "/electronics", "/home", "/books", "/sports", "/toys", "/categories",
        "/payment", "/privacyPolicy", "/shippingInfo", "/return", "/faq", "/DefaultCategoryContent",
        "/categories", "/categories/fashion", "/categories/electronics", "/categories/sports",
        "/categories/beauty", "/categories/grocery", "/categories/spectacles"
    ];

    const hideFooter = ["/login", "/signup", "/payment"].includes(pathname);
    const isPopularDynamic = pathname.startsWith("/popular/");
    const isHidden = hiddenPaths.includes(pathname) || isPopularDynamic;

    return (
        <>
            <ScrollToTop />
            <Outlet />
            {!isHidden && (
                <>
                    <Dashboard />
                    <Card1 />
                    <Card3 />
                    <Card5 />
                    <Card2 />
                    <Card6 />
                    <Card2 />
                    <Card8 />
                    <div className="lg:hidden md:hidden sm:hidden">
                        <Card9 title="Top Trending" />
                    </div>
                </>
            )}
            {!hideFooter && <Footer />}
        </>
    );
};

export default Layout;
