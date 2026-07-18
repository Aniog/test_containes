import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import CartDrawer from './components/layout/CartDrawer';
import { CartProvider } from './context/CartContext';

const Layout = ({ children }) => {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col bg-stone-50 text-stone-900 font-sans selection:bg-stone-200">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  );
};

export default Layout;
