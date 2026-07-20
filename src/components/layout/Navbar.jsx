import { useState, useEffect } from 'react';
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
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const navClass = `fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
    isHome && !scrolled
      ? 'bg-transparent text-cream'
      : 'bg-cream/95 backdrop-blur-md text-charcoal shadow-sm'
  }`;

  const linkClass = `text-xs tracking-widest uppercase font-medium transition-colors duration-300 ${
    isHome && !scrolled ? 'text-cream/90 hover:text-cream' : 'text-charcoal/80 hover:text-charcoal'
  }`;

  const iconClass = `w-5 h-5 transition-colors duration-300 ${
    isHome && !scrolled ? 'text-cream' : 'text-charcoal'
  }`;

  return (
    <nav className={navClass}>
      <div className="section-padding flex items-center justify-between h-16 md:h-20">
        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 -ml-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className={iconClass} /> : <Menu className={iconClass} />}
        </button>

        {/* Center-left nav (desktop) */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/shop" className={linkClass}>Shop</Link>
          <Link to="/shop" className={linkClass}>Collections</Link>
        </div>

        {/* Logo */}
        <Link
          to="/"
          className={`absolute left-1/2 -translate-x-1/2 font-serif text-xl md:text-2xl tracking-[0.3em] uppercase transition-colors duration-300 ${
            isHome && !scrolled ? 'text-cream' : 'text-charcoal'
          }`}
        >
          Velmora
        </Link>

        {/* Right nav */}
        <div className="flex items-center gap-4 md:gap-6">
          <div className="hidden md:flex items-center gap-8">
            <Link to="/about" className={linkClass}>About</Link>
            <Link to="/journal" className={linkClass}>Journal</Link>
          </div>
          <button className="p-1" aria-label="Search">
            <Search className={iconClass} />
          </button>
          <button className="p-1 relative" onClick={toggleDrawer} aria-label="Cart">
            <ShoppingBag className={iconClass} />
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-gold text-[10px] font-sans font-semibold text-cream rounded-full flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ${
          mobileOpen ? 'max-h-64' : 'max-h-0'
        }`}
      >
        <div className={`px-6 pb-6 space-y-4 ${isHome && !scrolled ? 'bg-transparent' : 'bg-cream'}`}>
          <Link to="/shop" className="block text-sm tracking-widest uppercase text-charcoal/80">Shop</Link>
          <Link to="/shop" className="block text-sm tracking-widest uppercase text-charcoal/80">Collections</Link>
          <Link to="/about" className="block text-sm tracking-widest uppercase text-charcoal/80">About</Link>
          <Link to="/journal" className="block text-sm tracking-widest uppercase text-charcoal/80">Journal</Link>
        </div>
      </div>
    </nav>
  );
}
