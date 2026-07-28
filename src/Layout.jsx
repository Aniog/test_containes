import React from 'react';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import { Toaster } from 'sonner';

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col font-inter">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <Toaster position="top-center" />
    </div>
  );
};

export default Layout;
