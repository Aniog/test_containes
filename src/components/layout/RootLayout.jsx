import React from 'react';
import Header from './Header';
import Footer from './Footer';
import CartDrawer from './CartDrawer';
import { useLocation } from 'react-router-dom';

const RootLayout = ({ children }) => {
  const location = useLocation();
  const isHomepage = location.pathname === '/';

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className={`flex-grow ${!isHomepage ? 'pt-20' : ''}`}>
        {children}
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
};

export default RootLayout;
