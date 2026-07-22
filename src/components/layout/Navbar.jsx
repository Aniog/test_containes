import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { itemCount, openCart } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const navBg = scrolled || !isHome
    ? 'bg-brand-cream/95 backdrop-blur-md border-b border-brand-warm'
    : 'bg-transparent';

  const textColor = scrolled || !isHome
    ? 'text-brand-charcoal'
    : 'text-white';

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu button */}
            <button
              className={`md:hidden ${textColor} transition-colors`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            {/* Logo */}
            <Link to="/" className={`font-serif text-2xl md:text-3xl tracking-wide-xl ${textColor} transition-colors`}>
              VELMORA
            </Link>

            {/* Desktop nav links */}
            <div className={`hidden md:flex items-center gap-8 ${textColor}`}>
              <Link to="/shop" className="text-xs tracking-widest uppercase font-sans font-medium hover:text-brand-gold transition-colors">
                Shop
              </Link>
              <Link to="/shop" className="text-xs tracking-widest uppercase font-sans font-medium hover:text-brand-gold transition-colors">
                Collections
              </Link>
              <Link to="/about" className="text-xs tracking-widest uppercase font-sans font-medium hover:text-brand-gold transition-colors">
                About
              </Link>
              <Link to="/journal" className="text-xs tracking-widest uppercase font-sans font-medium hover:text-brand-gold transition-colors">
                Journal
              </Link>
            </div>

            {/* Right icons */}
            <div className={`flex items-center gap-4 ${textColor}`}>
              <button className="hover:text-brand-gold transition-colors" aria-label="Search">
                <Search className="w-4 h-4 md:w-5 md:h-5" />
              </button>
              <button
                className="relative hover:text-brand-gold transition-colors"
                onClick={openCart}
                aria-label="Cart"
              >
                <ShoppingBag className="w-4 h-4 md:w-5 md:h-5" />
                {itemCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-brand-gold text-white text-[10px] font-sans font-medium w-4 h-4 rounded-full flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-brand-cream pt-20 px-6 md:hidden">
          <div className="flex flex-col gap-6 pt-8">
            <Link to="/shop" className="font-serif text-2xl text-brand-charcoal hover:text-brand-gold transition-colors">
              Shop
            </Link>
            <Link to="/shop" className="font-serif text-2xl text-brand-charcoal hover:text-brand-gold transition-colors">
              Collections
            </Link>
            <Link to="/about" className="font-serif text-2xl text-brand-charcoal hover:text-brand-gold transition-colors">
              About
            </Link>
            <Link to="/journal" className="font-serif text-2xl text-brand-charcoal hover:text-brand-gold transition-colors">
              Journal
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
