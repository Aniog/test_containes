import React from 'react';
import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-brand-light">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
