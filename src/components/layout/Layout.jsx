import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import CartDrawer from './CartDrawer';
import ImageManifest from '../_ImageManifest';

export default function Layout() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="min-h-screen flex flex-col bg-ivory text-ink">
      <Navbar transparentOverHero={isHome} />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
      {/* Hidden image manifest — keeps build-time stock image discovery stable */}
      <ImageManifest />
    </div>
  );
}
