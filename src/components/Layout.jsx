import React from 'react';
import Header from './Header';
import Footer from './Footer';
import CartDrawer from './CartDrawer';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <CartDrawer />
      <main className="flex-grow pt-[88px] md:pt-[104px]">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
