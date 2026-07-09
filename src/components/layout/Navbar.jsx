import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { itemCount, openCart } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-velmora-surface/95 backdrop-blur-md shadow-sm border-b border-velmora-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 -ml-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? (
              <X className={`w-5 h-5 ${scrolled ? 'text-velmora-base' : 'text-white'}`} />
            ) : (
              <Menu className={`w-5 h-5 ${scrolled ? 'text-velmora-base' : 'text-white'}`} />
            )}
          </button>

          {/* Center nav links */}
          <div className="hidden lg:flex items-center gap-8">
            <NavLink to="/shop" scrolled={scrolled}>Shop</NavLink>
            <NavLink to="/shop" scrolled={scrolled}>Collections</NavLink>
            <NavLink to="/" scrolled={scrolled}>About</NavLink>
            <NavLink to="/" scrolled={scrolled}>Journal</NavLink>
          </div>

          {/* Logo */}
          <Link
            to="/"
            className={`font-serif text-2xl tracking-widest transition-colors duration-500 ${
              scrolled ? 'text-velmora-base' : 'text-white'
            }`}
          >
            VELMORA
          </Link>

          {/* Right icons */}
          <div className="flex items-center gap-4">
            <button
              aria-label="Search"
              className={`p-2 transition-colors ${
                scrolled ? 'text-velmora-base hover:text-velmora-gold' : 'text-white hover:text-velmora-gold-light'
              }`}
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={openCart}
              aria-label="Cart"
              className={`relative p-2 transition-colors ${
                scrolled ? 'text-velmora-base hover:text-velmora-gold' : 'text-white hover:text-velmora-gold-light'
              }`}
            >
              <ShoppingBag className="w-5 h-5" />
              {itemCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-velmora-gold text-white text-[10px] font-sans font-medium w-4.5 h-4.5 rounded-full flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-400 ${
          mobileOpen ? 'max-h-64' : 'max-h-0'
        } ${scrolled ? 'bg-velmora-surface' : 'bg-velmora-base/95'}`}
      >
        <div className="px-6 py-4 space-y-3">
          <MobileLink to="/shop" onClick={() => setMobileOpen(false)}>Shop</MobileLink>
          <MobileLink to="/shop" onClick={() => setMobileOpen(false)}>Collections</MobileLink>
          <MobileLink to="/" onClick={() => setMobileOpen(false)}>About</MobileLink>
          <MobileLink to="/" onClick={() => setMobileOpen(false)}>Journal</MobileLink>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ to, children, scrolled }) {
  return (
    <Link
      to={to}
      className={`text-xs tracking-wider uppercase font-sans font-medium transition-colors duration-500 ${
        scrolled
          ? 'text-velmora-muted hover:text-velmora-base'
          : 'text-white/80 hover:text-white'
      }`}
    >
      {children}
    </Link>
  );
}

function MobileLink({ to, children, onClick }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="block text-sm tracking-wider uppercase font-sans text-velmora-base hover:text-velmora-gold transition-colors py-2"
    >
      {children}
    </Link>
  );
}