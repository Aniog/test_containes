import React from 'react';
import Navigation from './Navigation.jsx';
import Footer from './Footer.jsx';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navigation />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
