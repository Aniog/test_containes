import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import CartDrawer from './CartDrawer';
import { ScrollToTop } from '../ScrollToTop';

export default function Layout() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="flex flex-col min-h-screen relative">
      <ScrollToTop />
      <Header />
      <main className={`flex-grow ${isHome ? '' : 'pt-20'}`}>
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
}