import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { itemCount, openCart } = useCart();
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

  const bgClass = scrolled || !isHome
    ? 'bg-velmora-cream/95 backdrop-blur-sm shadow-sm'
    : 'bg-transparent';
  const textClass = scrolled || !isHome ? 'text-velmora-dark' : 'text-white';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${bgClass}`}>
      <div className="velmora-container flex items-center justify-between h-16 md:h-20">
        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden ${textClass}`}
          aria-label="Menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {/* Center nav links - desktop */}
        <div className="hidden md:flex items-center gap-8 text-xs tracking-widest uppercase font-sans font-medium">
          <Link to="/shop" className={`hover:text-velmora-gold transition-colors ${textClass}`}>Shop</Link>
          <Link to="/shop?category=earrings" className={`hover:text-velmora-gold transition-colors ${textClass}`}>Earrings</Link>
          <Link to="/shop?category=necklaces" className={`hover:text-velmora-gold transition-colors ${textClass}`}>Necklaces</Link>
          <Link to="/shop?category=huggies" className={`hover:text-velmora-gold transition-colors ${textClass}`}>Huggies</Link>
        </div>

        {/* Logo */}
        <Link
          to="/"
          className={`font-serif text-2xl md:text-3xl tracking-widest absolute left-1/2 -translate-x-1/2 ${textClass}`}
        >
          VELMORA
        </Link>

        {/* Right icons */}
        <div className="flex items-center gap-4 md:gap-5">
          <button className={`hover:text-velmora-gold transition-colors ${textClass}`} aria-label="Search">
            <Search className="w-4 h-4 md:w-5 md:h-5" />
          </button>
          <button
            onClick={openCart}
            className={`relative hover:text-velmora-gold transition-colors ${textClass}`}
            aria-label="Cart"
          >
            <ShoppingBag className="w-4 h-4 md:w-5 md:h-5" />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 w-4 h-4 bg-velmora-gold text-white text-[10px] font-sans rounded-full flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile nav overlay */}
      {mobileOpen && (
        <div className="md:hidden bg-velmora-cream border-t border-velmora-gold/10 px-6 py-6 flex flex-col gap-4">
          <Link to="/shop" className="text-xs tracking-widest uppercase text-velmora-dark font-sans font-medium">Shop</Link>
          <Link to="/shop?category=earrings" className="text-xs tracking-widest uppercase text-velmora-dark font-sans font-medium">Earrings</Link>
          <Link to="/shop?category=necklaces" className="text-xs tracking-widest uppercase text-velmora-dark font-sans font-medium">Necklaces</Link>
          <Link to="/shop?category=huggies" className="text-xs tracking-widest uppercase text-velmora-dark font-sans font-medium">Huggies</Link>
        </div>
      )}
    </nav>
  );
}
