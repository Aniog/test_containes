import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, X, Menu } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { itemCount, toggleCart } = useCart();
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

  const linkClass = (path) =>
    `text-xs tracking-[0.12em] uppercase transition-velmora ${
      isHome && !scrolled
        ? 'text-white/90 hover:text-white'
        : 'text-velmora-charcoal/80 hover:text-velmora-charcoal'
    } ${location.pathname === path ? 'font-semibold' : ''}`;

  const iconClass = isHome && !scrolled ? 'text-white' : 'text-velmora-charcoal';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-velmora ${
        scrolled
          ? 'bg-velmora-warm-cream/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(0,0,0,0.05)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Mobile menu */}
          <button
            className="lg:hidden p-2 -ml-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? (
              <X className={`w-5 h-5 ${iconClass}`} />
            ) : (
              <Menu className={`w-5 h-5 ${iconClass}`} />
            )}
          </button>

          {/* Logo */}
          <Link
            to="/"
            className={`font-serif text-xl lg:text-2xl tracking-[0.25em] transition-velmora ${
              isHome && !scrolled ? 'text-white' : 'text-velmora-charcoal'
            }`}
          >
            VELMORA
          </Link>

          {/* Center nav */}
          <div className="hidden lg:flex items-center gap-8">
            <Link to="/shop" className={linkClass('/shop')}>Shop</Link>
            <Link to="/shop?category=earrings" className={linkClass('/shop?category=earrings')}>Earrings</Link>
            <Link to="/shop?category=necklaces" className={linkClass('/shop?category=necklaces')}>Necklaces</Link>
            <Link to="/shop?category=huggies" className={linkClass('/shop?category=huggies')}>Huggies</Link>
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-4">
            <button className={`p-2 transition-velmora hover:opacity-70 ${iconClass}`} aria-label="Search">
              <Search className="w-5 h-5" />
            </button>
            <button
              className={`p-2 relative transition-velmora hover:opacity-70 ${iconClass}`}
              onClick={toggleCart}
              aria-label="Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {itemCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-velmora-gold text-white text-[10px] font-semibold w-4 h-4 rounded-full flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-64' : 'max-h-0'
        }`}
      >
        <div className="px-6 pb-6 pt-2 bg-velmora-warm-cream/95 backdrop-blur-md space-y-4">
          <Link
            to="/shop"
            className="block text-sm tracking-[0.12em] uppercase text-velmora-charcoal/80 hover:text-velmora-charcoal"
          >
            Shop All
          </Link>
          <Link
            to="/shop?category=earrings"
            className="block text-sm tracking-[0.12em] uppercase text-velmora-charcoal/80 hover:text-velmora-charcoal"
          >
            Earrings
          </Link>
          <Link
            to="/shop?category=necklaces"
            className="block text-sm tracking-[0.12em] uppercase text-velmora-charcoal/80 hover:text-velmora-charcoal"
          >
            Necklaces
          </Link>
          <Link
            to="/shop?category=huggies"
            className="block text-sm tracking-[0.12em] uppercase text-velmora-charcoal/80 hover:text-velmora-charcoal"
          >
            Huggies
          </Link>
        </div>
      </div>
    </nav>
  );
}