import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import CartDrawer from './CartDrawer';
import { ScrollRestoration } from 'react-router-dom';

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollRestoration />
      <Navbar />
      <CartDrawer />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}