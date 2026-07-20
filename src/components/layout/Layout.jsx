import React from 'react';
import Header from './Header';
import Footer from './Footer';
import CartDrawer from './CartDrawer';
import { useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  const location = useLocation();
  const isHomepage = location.pathname === '/';

  return (
    <div className="min-h-screen flex flex-col font-sans text-foreground bg-background">
      <Header />
      <CartDrawer />
      <main className={`flex-1 ${!isHomepage ? 'pt-24' : ''}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
