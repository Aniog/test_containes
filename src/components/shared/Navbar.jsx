import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { toggleCart, totalItems } = useCart();
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

  const bgClass =
    isHome && !scrolled
      ? 'bg-transparent text-ivory'
      : 'bg-ivory/95 backdrop-blur text-charcoal shadow-sm';

  const linkHover =
    isHome && !scrolled
      ? 'hover:text-white/80'
      : 'hover:text-taupe';

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${bgClass}`}
      >
        <div className="container-main flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" />
          </button>

          {/* Left — logo */}
          <Link
            to="/"
            className="font-serif text-xl md:text-2xl tracking-widest font-semibold"
          >
            VELMORA
          </Link>

          {/* Center links — desktop */}
          <div className="hidden md:flex items-center gap-8 text-xs uppercase tracking-widest font-medium">
            <Link to="/shop" className={`transition-colors ${linkHover}`}>
              Shop
            </Link>
            <Link to="/shop" className={`transition-colors ${linkHover}`}>
              Collections
            </Link>
            <Link to="/about" className={`transition-colors ${linkHover}`}>
              About
            </Link>
            <Link to="/journal" className={`transition-colors ${linkHover}`}>
              Journal
            </Link>
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-4">
            <button
              aria-label="Search"
              className={`p-2 transition-colors ${linkHover}`}
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              aria-label="Cart"
              className={`relative p-2 transition-colors ${linkHover}`}
              onClick={toggleCart}
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-champagne text-[10px] font-medium flex items-center justify-center text-charcoal">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-[60] transition-opacity ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-charcoal/40"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute left-0 top-0 bottom-0 w-72 bg-ivory text-charcoal p-6 transition-transform duration-300 ${
            mobileOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between mb-10">
            <span className="font-serif text-xl tracking-widest font-semibold">
              VELMORA
            </span>
            <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="flex flex-col gap-6 text-sm uppercase tracking-widest font-medium">
            <Link to="/shop" onClick={() => setMobileOpen(false)}>
              Shop
            </Link>
            <Link to="/shop" onClick={() => setMobileOpen(false)}>
              Collections
            </Link>
            <Link to="/about" onClick={() => setMobileOpen(false)}>
              About
            </Link>
            <Link to="/journal" onClick={() => setMobileOpen(false)}>
              Journal
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
