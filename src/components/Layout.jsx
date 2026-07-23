import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext.jsx';
import CartDrawer from './ui/CartDrawer.jsx';

export default function Layout({ children }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { count, openCart } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const navBase =
    'fixed top-0 left-0 right-0 z-30 transition-all duration-500';
  const navTheme =
    isHome && !scrolled
      ? 'bg-transparent text-cream'
      : 'bg-cream/95 text-ink shadow-sm backdrop-blur-md';

  const linkClasses =
    'text-xs uppercase tracking-widest transition hover:text-gold';

  return (
    <>
      <nav className={`${navBase} ${navTheme}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="font-serif text-2xl tracking-wide sm:text-3xl"
          >
            VELMORA
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            <Link to="/shop" className={linkClasses}>
              Shop
            </Link>
            <Link to="/shop?category=earrings" className={linkClasses}>
              Collections
            </Link>
            <Link to="/about" className={linkClasses}>
              About
            </Link>
            <Link to="/journal" className={linkClasses}>
              Journal
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              className="transition hover:text-gold"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <button
              type="button"
              onClick={openCart}
              className="relative transition hover:text-gold"
              aria-label="Open cart"
            >
              <ShoppingBag size={20} />
              {count > 0 && (
                <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-gold text-[9px] font-medium text-white">
                  {count}
                </span>
              )}
            </button>
            <button
              type="button"
              className="transition hover:text-gold md:hidden"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-cream px-6 py-5 md:hidden">
          <div className="flex items-center justify-between">
            <span className="font-serif text-2xl tracking-wide">VELMORA</span>
            <button
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          <div className="mt-12 flex flex-col gap-6">
            <Link
              to="/shop"
              className="font-serif text-3xl text-ink"
              onClick={() => setMobileOpen(false)}
            >
              Shop
            </Link>
            <Link
              to="/shop?category=earrings"
              className="font-serif text-3xl text-ink"
              onClick={() => setMobileOpen(false)}
            >
              Collections
            </Link>
            <Link
              to="/about"
              className="font-serif text-3xl text-ink"
              onClick={() => setMobileOpen(false)}
            >
              About
            </Link>
            <Link
              to="/journal"
              className="font-serif text-3xl text-ink"
              onClick={() => setMobileOpen(false)}
            >
              Journal
            </Link>
          </div>
        </div>
      )}

      <CartDrawer />

      <main className="min-h-screen">{children}</main>
    </>
  );
}
