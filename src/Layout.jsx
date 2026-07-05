import { Outlet, useLocation } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import CartDrawer from './components/cart/CartDrawer';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from './strk-img-config.json';

const Layout = () => {
    const containerRef = useRef(null);
    const location = useLocation();

    useEffect(() => {
        const frameId = window.requestAnimationFrame(() => {
            if (containerRef.current) {
                ImageHelper.loadImages(strkImgConfig, containerRef.current);
            }
        });
        return () => window.cancelAnimationFrame(frameId);
    }, [location.pathname]);

    return (
        <div ref={containerRef} className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
            <CartDrawer />
        </div>
    );
};

export default Layout;