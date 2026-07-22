import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import { Toaster } from '@/components/ui/sonner';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-cream-100">
      <Navigation />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <Toaster position="bottom-right" />
    </div>
  );
};

export default Layout;
