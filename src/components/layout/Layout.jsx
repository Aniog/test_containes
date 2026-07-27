import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-16 md:pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
