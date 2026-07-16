import React from 'react';
import Header from './Header';
import Footer from './Footer';
import CartDrawer from './CartDrawer';
import { useLocation } from 'react-router-dom';

export default function Layout({ children }) {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <CartDrawer />
      <main className={`flex-1 ${!isHome ? 'pt-24' : ''}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
