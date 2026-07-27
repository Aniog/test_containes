import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Toaster } from 'sonner';

export const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-gray-900">
      <Navbar />
      <main className="flex-grow w-full">
        {children}
      </main>
      <Footer />
      <Toaster position="bottom-right" />
    </div>
  );
};