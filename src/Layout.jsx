import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import { Toaster } from 'sonner';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-black selection:text-white">
      <ScrollToTop />
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <CartDrawer />
      <Toaster 
        position="bottom-right" 
        toastOptions={{
          style: {
            background: '#1A1A1A',
            color: '#FFFFFF',
            borderRadius: '0',
            border: 'none',
            fontSize: '12px',
            letterSpacing: '0.1em',
            textTransform: 'uppercase'
          }
        }} 
      />
    </div>
  );
};

export default Layout;
