import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import CartDrawer from './CartDrawer';
import Footer from './Footer';

const Layout = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <CartDrawer />
      <main className="flex-1 w-full">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;