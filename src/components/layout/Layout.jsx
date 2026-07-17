import React from 'react';
import Header from './Header';
import Footer from './Footer';
import CartDrawer from '../cart/CartDrawer';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <CartDrawer />
      <main className="flex-1 pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
}
