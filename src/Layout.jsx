import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import { Toaster } from 'sonner';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-brand-cream text-brand-espresso selection:bg-brand-gold/20">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <CartDrawer />
      <Toaster position="bottom-right" richColors />
    </div>
  );
};

export default Layout;
