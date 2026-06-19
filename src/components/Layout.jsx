import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import CartDrawer from './CartDrawer';
import { Outlet, useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <CartDrawer />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}