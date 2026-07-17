import React from 'react';
import Nav from './Nav';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-grow pt-20 md:pt-24">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
