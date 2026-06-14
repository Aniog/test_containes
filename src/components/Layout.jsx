import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children, onQuoteClick }) => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar onQuoteClick={onQuoteClick} />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
