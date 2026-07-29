import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
