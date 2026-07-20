import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import CartDrawer from './CartDrawer';
import { CartProvider } from './CartContext';
import { useEffect } from 'react';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const MainLayout = () => {
  return (
    <CartProvider>
      <div className="flex flex-col min-h-screen">
        <ScrollToTop />
        <Header />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  );
};

export default MainLayout;
