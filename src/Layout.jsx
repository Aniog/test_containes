import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import { Toaster } from 'sonner';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <CartDrawer />
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: '#1a1816',
            color: '#faf8f5',
            border: '1px solid #c9a96e',
            fontFamily: 'Inter, system-ui, sans-serif',
          },
        }}
      />
    </div>
  );
}
