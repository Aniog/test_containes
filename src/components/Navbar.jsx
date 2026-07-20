import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const Navbar = () => {
  const { cartCount, setIsOpen } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const navBg = isHome && !scrolled
    ? 'bg-transparent'
    : 'bg-velmora-cream/95 backdrop-blur-md shadow-sm';

  const textColor = isHome && !scrolled ? 'text-white' : 'text-velmora-charcoal';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className={`font-serif text-xl lg:text-2xl tracking-[0.25em] ${textColor} transition-colors duration-500`}>
            VELMORA
          </Link>

          <div className={`hidden lg:flex items-center gap-10 font-sans text-[11px] tracking-[0.2em] uppercase ${textColor} transition-colors duration-500`}>
            <Link to="/shop" className="hover:text-velmora-gold transition-colors">Shop</Link>
            <Link to="/shop" className="hover:text-velmora-gold transition-colors">Collections</Link>
            <Link to="/" className="hover:text-velmora-gold transition-colors">About</Link>
            <Link to="/" className="hover:text-velmora-gold transition-colors">Journal</Link>
          </div>

          <div className={`flex items-center gap-5 ${textColor} transition-colors duration-500`}>
            <button className="hover:text-velmora-gold transition-colors">
              <Search size={20} strokeWidth={1.5} />
            </button>
            <button
              onClick={() => setIsOpen(true)}
              className="relative hover:text-velmora-gold transition-colors"
            >
              <ShoppingBag size={20} strokeWidth={1.5} />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-velmora-gold text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden hover:text-velmora-gold transition-colors"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-velmora-cream border-t border-velmora-border">
          <div className="flex flex-col items-center py-8 gap-6 font-sans text-xs tracking-[0.2em] uppercase text-velmora-charcoal">
            <Link to="/shop" onClick={() => setMobileOpen(false)}>Shop</Link>
            <Link to="/shop" onClick={() => setMobileOpen(false)}>Collections</Link>
            <Link to="/" onClick={() => setMobileOpen(false)}>About</Link>
            <Link to="/" onClick={() => setMobileOpen(false)}>Journal</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
