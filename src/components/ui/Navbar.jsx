import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { toggleCart, itemCount } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const isHome = location.pathname === '/';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || !isHome
          ? 'bg-cream/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 -ml-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          {/* Center nav links - desktop */}
          <div className="hidden md:flex items-center gap-8 min-w-[200px]">
            <NavLink to="/shop">Shop</NavLink>
            <NavLink to="/collections">Collections</NavLink>
          </div>

          {/* Logo */}
          <Link
            to="/"
            className="font-serif text-xl md:text-2xl tracking-[0.25em] text-espresso whitespace-nowrap"
          >
            VELMORA
          </Link>

          {/* Right actions */}
          <div className="hidden md:flex items-center gap-8 min-w-[200px] justify-end">
            <NavLink to="/about">About</NavLink>
            <NavLink to="/journal">Journal</NavLink>
          </div>

          <div className="flex items-center gap-4 md:gap-5">
            <button className="p-1 hover:text-gold transition-colors" aria-label="Search">
              <Search size={18} />
            </button>
            <button
              className="p-1 hover:text-gold transition-colors relative"
              onClick={toggleCart}
              aria-label="Cart"
            >
              <ShoppingBag size={18} />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-gold text-cream text-[10px] font-medium rounded-full flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            mobileOpen ? 'max-h-64 pb-4' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col gap-3 pt-2 border-t border-borderline">
            <MobileNavLink to="/shop" onClick={() => setMobileOpen(false)}>Shop</MobileNavLink>
            <MobileNavLink to="/collections" onClick={() => setMobileOpen(false)}>Collections</MobileNavLink>
            <MobileNavLink to="/about" onClick={() => setMobileOpen(false)}>About</MobileNavLink>
            <MobileNavLink to="/journal" onClick={() => setMobileOpen(false)}>Journal</MobileNavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ to, children }) {
  return (
    <Link
      to={to}
      className="text-xs tracking-[0.15em] uppercase text-taupe hover:text-espresso transition-colors duration-300"
    >
      {children}
    </Link>
  );
}

function MobileNavLink({ to, children, onClick }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="text-sm tracking-[0.15em] uppercase text-taupe hover:text-espresso transition-colors duration-300 py-1"
    >
      {children}
    </Link>
  );
}