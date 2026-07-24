import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import CartDrawer from './components/layout/CartDrawer';
import { Toaster } from 'sonner';

const Layout = ({ children }) => {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <CartDrawer />
      <main className="flex-1 w-full bg-background">
        {children}
      </main>
      <Footer />
      <Toaster position="bottom-right" toastOptions={{
        className: 'font-sans rounded-none border-border bg-background text-foreground',
        style: { borderRadius: '0' }
      }} />
    </div>
  );
};

export default Layout;
