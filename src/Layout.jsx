import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import CartDrawer from './components/layout/CartDrawer';
import { ImageHelper } from '@strikingly/sdk';
import { useEffect } from 'react';

const Layout = ({ children }) => {
  useEffect(() => {
    // Try to load images globally on layout mount/update if needed
    // The specific strkImgConfig usually lives in the project root or src
    try {
      // In a real project you'd import the config
      // ImageHelper.loadImages(config, document.body);
    } catch (e) {
      console.log('ImageHelper setup pending real config');
    }
  });

  return (
    <div className="flex flex-col min-h-screen relative">
      <Navbar />
      <CartDrawer />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
