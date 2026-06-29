import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { CartDrawer } from '@/components/CartDrawer';
import { Footer } from '@/components/Footer';
import { ProductImageConfig } from '@/components/ProductImageConfig';

export default function Layout() {
  const location = useLocation();

  useEffect(() => {
    document.title = 'Velmora Fine Jewelry';
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-velmora-cream">
      <ProductImageConfig />
      <Navbar />
      <CartDrawer />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
