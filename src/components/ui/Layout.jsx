import React, { useRef, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import CartDrawer from './CartDrawer';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Layout = ({ children }) => {
  const mountedContainer = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, mountedContainer.current);
  }, []);

  return (
    <div ref={mountedContainer} className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-20">
        {children}
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
};

export default Layout;
