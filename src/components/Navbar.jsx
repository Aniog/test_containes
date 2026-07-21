import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext.jsx';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { toggleCart, totalItems } = useCart();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const isHome = location.pathname === '/';
  const navBg = scrolled || !isHome
    ? 'bg-cream/95 backdrop-blur-md border-b border-border'
    : 'bg-transparent';

  const textColor = scrolled || !isHome ? 'text-charcoal' : 'text-cream';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}
    >
      <nav className="section-padding flex items-center justify-between h-16 md:h-20">
        <Link
          to="/"
          className={`font-serif text-xl md:text-2xl tracking-widest uppercase transition-colors duration-500 ${textColor}`}
        >
          Velmora
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link to="/shop" className={`font-sans text-xs tracking-widest uppercase transition-colors duration-300 hover:text-gold ${textColor}`}>
            Shop
          </Link>
          <Link to="/shop" className={`font-sans text-xs tracking-widest uppercase transition-colors duration-300 hover:text-gold ${textColor}`}>
            Collections
          </Link>
          <Link to="/" className={`font-sans text-xs tracking-widest uppercase transition-colors duration-300 hover:text-gold ${textColor}`}>
            About
          </Link>
          <Link to="/" className={`font-sans text-xs tracking-widest uppercase transition-colors duration-300 hover:text-gold ${textColor}`}>
            Journal
          </Link>
        </div>

        <div className="flex items-center gap-4 md:gap-6">
          <button
            aria-label="Search"
            className={`transition-colors duration-300 hover:text-gold ${textColor}`}
          >
            <Search className="w-5 h-5" strokeWidth={1.5} />
          </button>
          <button
            aria-label="Cart"
            onClick={toggleCart}
            className={`relative transition-colors duration-300 hover:text-gold ${textColor}`}
          >
            <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-gold text-cream text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-sans">
                {totalItems}
              </span>
            )}
          </button>
          <button
            aria-label="Menu"
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden transition-colors duration-300 ${textColor}`}
          >
            {menuOpen ? (
              <X className="w-5 h-5" strokeWidth={1.5} />
            ) : (
              <Menu className="w-5 h-5" strokeWidth={1.5} />
            )}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-cream border-t border-border">
          <div className="section-padding flex flex-col py-6 gap-4">
            <Link to="/shop" className="font-sans text-sm tracking-widest uppercase text-charcoal hover:text-gold transition-colors">Shop</Link>
            <Link to="/shop" className="font-sans text-sm tracking-widest uppercase text-charcoal hover:text-gold transition-colors">Collections</Link>
            <Link to="/" className="font-sans text-sm tracking-widest uppercase text-charcoal hover:text-gold transition-colors">About</Link>
            <Link to="/" className="font-sans text-sm tracking-widest uppercase text-charcoal hover:text-gold transition-colors">Journal</Link>
          </div>
        </div>
      )}
    </header>
  );
}
