import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import CartDrawer from '../components/layout/CartDrawer';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
}