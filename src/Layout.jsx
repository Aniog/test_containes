import React from 'react';
import Header from './components/common/Header';
import Footer from './components/common/Footer';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-grow pt-28 md:pt-36">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
