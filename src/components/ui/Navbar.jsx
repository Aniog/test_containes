import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, toggleCart } = useCart();
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

  const navBg = scrolled
    ? 'bg-white/95 backdrop-blur-sm shadow-subtle'
    : isHome
      ? 'bg-transparent'
      : 'bg-white/95 backdrop-blur-sm shadow-subtle';

  const textColor = !scrolled && isHome ? 'text-white' : 'text-foreground';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${navBg}`}>
      <div className="max-w-[1400px] mx-auto px-5 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <button
            className={`md:hidden p-1 ${textColor}`}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          <Link to="/" className={`font-serif text-xl md:text-2xl font-light tracking-[0.2em] ${textColor} transition-colors`}>
            VELMORA
          </Link>

          <div className={`hidden md:flex items-center gap-10 ${textColor} transition-colors`}>
            <Link to="/shop" className="text-xs font-medium tracking-[0.15em] uppercase hover:opacity-60 transition-opacity">Shop</Link>
            <Link to="/shop?category=Necklaces" className="text-xs font-medium tracking-[0.15em] uppercase hover:opacity-60 transition-opacity">Collections</Link>
            <Link to="/about" className="text-xs font-medium tracking-[0.15em] uppercase hover:opacity-60 transition-opacity">About</Link>
            <Link to="/journal" className="text-xs font-medium tracking-[0.15em] uppercase hover:opacity-60 transition-opacity">Journal</Link>
          </div>

          <div className={`flex items-center gap-4 ${textColor} transition-colors`}>
            <button className="p-1 hover:opacity-60 transition-opacity">
              <Search className="w-5 h-5" strokeWidth={1.5} />
            </button>
            <button onClick={toggleCart} className="p-1 hover:opacity-60 transition-opacity relative">
              <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1.5 w-4 h-4 bg-accent text-white text-[10px] flex items-center justify-center font-medium">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-border">
          <div className="px-5 py-6 space-y-4">
            <Link to="/shop" className="block text-sm font-medium tracking-[0.12em] uppercase">Shop</Link>
            <Link to="/shop?category=Necklaces" className="block text-sm font-medium tracking-[0.12em] uppercase">Collections</Link>
            <Link to="/about" className="block text-sm font-medium tracking-[0.12em] uppercase">About</Link>
            <Link to="/journal" className="block text-sm font-medium tracking-[0.12em] uppercase">Journal</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
