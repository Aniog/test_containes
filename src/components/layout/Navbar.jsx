import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalItems, openDrawer } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navBg = scrolled || !isHome
    ? 'bg-cream/95 backdrop-blur-md shadow-sm'
    : 'bg-transparent';
  const textColor = scrolled || !isHome ? 'text-charcoal' : 'text-cream';
  const borderColor = scrolled || !isHome ? 'border-clay' : 'border-white/20';

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-400 ${navBg}`}
    >
      <nav
        className={`container-page flex items-center justify-between h-[72px] md:h-[80px] transition-all duration-400 ${!scrolled && isHome ? '' : 'border-b'} ${borderColor}`}
      >
        {/* Mobile hamburger */}
        <button
          className={`md:hidden ${textColor}`}
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Center nav links — desktop */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          <Link
            to="/shop"
            className={`text-xs lg:text-sm font-sans uppercase tracking-wider transition-colors hover:text-gold ${textColor}`}
          >
            Shop
          </Link>
          <Link
            to="/shop?category=earrings"
            className={`text-xs lg:text-sm font-sans uppercase tracking-wider transition-colors hover:text-gold ${textColor}`}
          >
            Earrings
          </Link>
          <Link
            to="/shop?category=necklaces"
            className={`text-xs lg:text-sm font-sans uppercase tracking-wider transition-colors hover:text-gold ${textColor}`}
          >
            Necklaces
          </Link>
          <Link
            to="/shop?category=huggies"
            className={`text-xs lg:text-sm font-sans uppercase tracking-wider transition-colors hover:text-gold ${textColor}`}
          >
            Huggies
          </Link>
        </div>

        {/* Logo — center */}
        <Link
          to="/"
          className={`absolute left-1/2 -translate-x-1/2 font-serif text-2xl md:text-3xl tracking-widest transition-colors hover:text-gold ${textColor}`}
        >
          VELMORA
        </Link>

        {/* Right icons */}
        <div className="flex items-center gap-4 md:gap-5">
          <button className={`${textColor} transition-colors hover:text-gold`} aria-label="Search">
            <Search className="w-4 h-4 md:w-[18px] md:h-[18px]" />
          </button>
          <button
            onClick={openDrawer}
            className={`relative ${textColor} transition-colors hover:text-gold`}
            aria-label="Cart"
          >
            <ShoppingBag className="w-4 h-4 md:w-[18px] md:h-[18px]" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 w-4 h-4 bg-gold text-white text-[10px] font-sans font-medium rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-espresso/60 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-72 bg-cream shadow-2xl animate-slide-in-right p-8 pt-20">
            <button
              className="absolute top-6 right-6 text-charcoal"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
            <nav className="flex flex-col gap-6">
              <Link to="/shop" className="text-sm font-sans uppercase tracking-wider text-charcoal hover:text-gold transition-colors">
                Shop All
              </Link>
              <Link to="/shop?category=earrings" className="text-sm font-sans uppercase tracking-wider text-charcoal hover:text-gold transition-colors">
                Earrings
              </Link>
              <Link to="/shop?category=necklaces" className="text-sm font-sans uppercase tracking-wider text-charcoal hover:text-gold transition-colors">
                Necklaces
              </Link>
              <Link to="/shop?category=huggies" className="text-sm font-sans uppercase tracking-wider text-charcoal hover:text-gold transition-colors">
                Huggies
              </Link>
              <div className="hairline my-2" />
              <span className="text-xs font-sans text-stone uppercase tracking-wider">
                About
              </span>
              <Link to="/" className="text-sm font-sans text-stone hover:text-charcoal transition-colors">
                Our Story
              </Link>
              <Link to="/" className="text-sm font-sans text-stone hover:text-charcoal transition-colors">
                Journal
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
