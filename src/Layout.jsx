import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
