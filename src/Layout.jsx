import React from 'react';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import CartDrawer from '@/components/common/CartDrawer';
import { useImageLoader } from '@/hooks/use-image-loader';
import { Toaster } from 'sonner';

const Layout = ({ children }) => {
  const containerRef = useImageLoader();

  return (
    <div ref={containerRef} className="min-h-screen flex flex-col selection:bg-primary/20">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <CartDrawer />
      <Toaster position="bottom-right" />
    </div>
  );
};
export default Layout;
