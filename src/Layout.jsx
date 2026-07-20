import React from 'react';
import Navbar from '@/components/Navbar';
import CartDrawer from '@/components/CartDrawer';
import Footer from '@/components/Footer';
import { useStrkImages } from '@/hooks/useStrkImages';

export default function Layout({ children }) {
  const containerRef = useStrkImages();

  return (
    <div ref={containerRef} className="min-h-screen flex flex-col bg-cream-50">
      <Navbar />
      <CartDrawer />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
