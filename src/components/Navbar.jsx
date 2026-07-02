import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/hooks/useCart';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, toggleCart } = useCart();
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

  const bgClass = scrolled
    ? 'bg-velmora-cream/95 backdrop-blur-md shadow-sm'
    : isHome
    ? 'bg-transparent'
    : 'bg-velmora-cream/95 backdrop-blur-md shadow-sm';

  const textClass = scrolled || !isHome ? 'text-velmora-dark' : 'text-white';

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${bgClass}`}
      >
        <div className="flex items-center justify-between section-padding h-16 md:h-20">
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(true)}
            className={`md:hidden p-1 ${textClass}`}
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/shop"
              className={`font-sans text-xs font-medium tracking-widest uppercase transition-colors hover:text-velmora-gold ${textClass}`}
            >
              Shop
            </Link>
            <Link
              to="/shop"
              className={`font-sans text-xs font-medium tracking-widest uppercase transition-colors hover:text-velmora-gold ${textClass}`}
            >
              Collections
            </Link>
            <Link
              to="/about"
              className={`font-sans text-xs font-medium tracking-widest uppercase transition-colors hover:text-velmora-gold ${textClass}`}
            >
              About
            </Link>
            <Link
              to="/journal"
              className={`font-sans text-xs font-medium tracking-widest uppercase transition-colors hover:text-velmora-gold ${textClass}`}
            >
              Journal
            </Link>
          </div>

          {/* Logo */}
          <Link
            to="/"
            className={`font-serif text-xl md:text-2xl tracking-widest font-light ${textClass}`}
          >
            VELMORA
          </Link>

          {/* Right icons */}
          <div className="flex items-center gap-4 md:gap-6">
            <button
              className={`p-1 transition-colors hover:text-velmora-gold ${textClass}`}
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <button
              onClick={toggleCart}
              className={`p-1 relative transition-colors hover:text-velmora-gold ${textClass}`}
              aria-label="Cart"
            >
              <ShoppingBag size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1.5 w-4 h-4 bg-velmora-gold text-white text-[10px] font-sans font-semibold rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-[60] transition-opacity duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/30"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute left-0 top-0 bottom-0 w-[80%] max-w-xs bg-velmora-cream shadow-xl transition-transform duration-300 ${
            mobileOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between p-6 border-b border-velmora-border">
            <span className="font-serif text-xl tracking-widest">VELMORA</span>
            <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
              <X size={22} />
            </button>
          </div>
          <div className="flex flex-col p-6 gap-6">
            {['Shop', 'Collections', 'About', 'Journal'].map((item) => (
              <Link
                key={item}
                to={item === 'Shop' || item === 'Collections' ? '/shop' : `/${item.toLowerCase()}`}
                className="font-sans text-sm font-medium tracking-widest uppercase text-velmora-dark"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
