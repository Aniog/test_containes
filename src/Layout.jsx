import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CartDrawer } from '@/components/CartDrawer';
import { ImageHelper } from '@strikingly/sdk';

export function Layout() {
  const containerRef = React.useRef(null);
  const location = useLocation();

  React.useEffect(() => {
    // Attempt to load images anytime location changes
    // Assuming strkImgConfig is handled internally or passed if needed
    // Usually we need the actual config file, but we can try without or mock it if sdk requires it.
    // For now, this is a standard setup placeholder.
    if (window.strkImgConfig && containerRef.current) {
        ImageHelper.loadImages(window.strkImgConfig, containerRef.current);
    }
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen font-sans bg-background text-foreground" ref={containerRef}>
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
}
