import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { itemCount, toggleDrawer } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const navBg = scrolled || !isHome
    ? 'bg-cream/95 backdrop-blur-md shadow-sm'
    : 'bg-transparent';

  const textColor = scrolled || !isHome ? 'text-charcoal' : 'text-cream';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Left: Logo */}
          <Link to="/" className={`font-serif text-xl lg:text-2xl tracking-ultra font-semibold ${textColor} transition-colors duration-500`}>
            VELMORA
          </Link>

          {/* Center: Links (desktop) */}
          <div className="hidden lg:flex items-center gap-10">
            {[
              { to: '/shop', label: 'Shop' },
              { to: '/shop?category=necklaces', label: 'Necklaces' },
              { to: '/shop?category=huggies', label: 'Huggies' },
              { to: '/shop?category=earrings', label: 'Earrings' },
            ].map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className={`text-[13px] tracking-widest uppercase font-medium transition-colors duration-300 ${
                  scrolled || !isHome ? 'text-charcoal/80 hover:text-charcoal' : 'text-cream/80 hover:text-cream'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right: Icons */}
          <div className="flex items-center gap-5">
            <button
              className={`p-1.5 transition-colors duration-300 ${textColor} hover:text-gold`}
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              className={`p-1.5 transition-colors duration-300 relative ${textColor} hover:text-gold`}
              onClick={() => toggleDrawer(true)}
              aria-label={`Cart (${itemCount} items)`}
            >
              <ShoppingBag className="w-5 h-5" />
              {itemCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-gold text-cream text-[10px] font-medium rounded-full flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
            <button
              className={`lg:hidden p-1.5 transition-colors duration-300 ${textColor} hover:text-gold`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-400 ${
          mobileOpen ? 'max-h-80 border-t border-sand' : 'max-h-0'
        } bg-cream`}
      >
        <div className="px-6 py-6 flex flex-col gap-5">
          {[
            { to: '/shop', label: 'Shop All' },
            { to: '/shop?category=necklaces', label: 'Necklaces' },
            { to: '/shop?category=huggies', label: 'Huggies' },
            { to: '/shop?category=earrings', label: 'Earrings' },
            { to: '/shop?category=sets', label: 'Sets' },
          ].map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="text-sm tracking-widest uppercase font-medium text-charcoal/80 hover:text-charcoal transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
