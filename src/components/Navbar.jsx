import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { toggleCart, totalItems } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setSearchOpen(false);
  }, [location.pathname]);

  const navBg = scrolled || !isHome
    ? 'bg-white/95 backdrop-blur shadow-sm'
    : 'bg-transparent';
  const textColor = scrolled || !isHome ? 'text-velmora-dark' : 'text-white';

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out-expo ${navBg}`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <button
              className={`md:hidden p-2 -ml-2 ${textColor}`}
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

            <Link
              to="/"
              className={`font-serif text-2xl tracking-widest font-semibold ${textColor}`}
            >
              VELMORA
            </Link>

            <div className="hidden md:flex items-center gap-8">
              {['Shop', 'Collections', 'About', 'Journal'].map((label) => (
                <Link
                  key={label}
                  to={label === 'Shop' ? '/shop' : '#'}
                  className={`text-sm font-medium tracking-wide hover:opacity-70 transition-opacity ${textColor}`}
                >
                  {label}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                className={`p-2 ${textColor}`}
                onClick={() => setSearchOpen((v) => !v)}
                aria-label="Search"
              >
                <Search size={20} />
              </button>
              <button
                className={`p-2 relative ${textColor}`}
                onClick={toggleCart}
                aria-label="Cart"
              >
                <ShoppingBag size={20} />
                {totalItems > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-velmora-accent text-[10px] font-semibold text-white">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-20 px-6">
          <div className="flex flex-col gap-6">
            {['Shop', 'Collections', 'About', 'Journal'].map((label) => (
              <Link
                key={label}
                to={label === 'Shop' ? '/shop' : '#'}
                className="font-serif text-3xl text-velmora-dark tracking-wide"
                onClick={() => setMobileOpen(false)}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}

      {searchOpen && (
        <div className="fixed inset-x-0 top-16 z-40 bg-white/95 backdrop-blur border-b border-velmora-border px-4 py-4">
          <div className="mx-auto max-w-xl">
            <input
              type="text"
              placeholder="Search jewelry..."
              className="w-full bg-transparent border-b border-velmora-dark py-2 text-velmora-dark placeholder:text-velmora-muted focus:outline-none"
              autoFocus
            />
          </div>
        </div>
      )}
    </>
  );
}
