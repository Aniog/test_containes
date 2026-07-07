import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, setIsOpen } = useCart();
  const location = useLocation();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const navBg = isHome && !scrolled
    ? 'bg-transparent'
    : 'bg-cream-50/95 backdrop-blur-sm shadow-sm';

  const textColor = isHome && !scrolled ? 'text-cream-50' : 'text-charcoal-950';
  const iconColor = isHome && !scrolled ? 'text-cream-50' : 'text-charcoal-800';

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${navBg}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link
              to="/"
              className={`font-serif text-xl md:text-2xl tracking-wide uppercase ${textColor}`}
            >
              Velmora
            </Link>

            <div className="hidden md:flex items-center gap-8">
              {[
                { label: 'Shop', to: '/shop' },
                { label: 'Collections', to: '/shop' },
                { label: 'About', to: '/about' },
                { label: 'Journal', to: '/journal' },
              ].map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className={`text-sm uppercase tracking-wide hover:opacity-70 transition-opacity ${textColor}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <button
                className={`p-2 hover:opacity-70 transition-opacity ${iconColor}`}
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                onClick={() => setIsOpen(true)}
                className={`relative p-2 hover:opacity-70 transition-opacity ${iconColor}`}
                aria-label="Cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-gold-600 text-cream-50 text-[10px] font-medium rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
              <button
                className={`md:hidden p-2 hover:opacity-70 transition-opacity ${iconColor}`}
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Menu"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 z-20 bg-cream-50 pt-20 px-6">
          <div className="flex flex-col gap-6 mt-8">
            {[
              { label: 'Shop', to: '/shop' },
              { label: 'Collections', to: '/shop' },
              { label: 'About', to: '/about' },
              { label: 'Journal', to: '/journal' },
            ].map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="font-serif text-2xl text-charcoal-950 tracking-wide uppercase"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
