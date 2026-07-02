import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import CartDrawer from './CartDrawer';

function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-base-50 text-base-900">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
}

export default Layout;