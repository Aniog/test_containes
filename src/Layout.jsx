// Layout Component - Wraps all pages with Nav, Footer, and Cart Drawer
import React from 'react';
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';
import CartDrawer from './components/cart/CartDrawer';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
};

export default Layout;
