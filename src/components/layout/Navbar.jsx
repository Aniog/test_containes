import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart, useCartDispatch } from '@/lib/CartContext';
import { navLinks } from '@/lib/data';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { items } = useCart();
  const dispatch = useCartDispatch();
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

  const itemCount = items.reduce((sum, i) => sum + i.quantity, 0);

  const navClass = scrolled
    ? 'bg-cream/95 backdrop-blur-sm shadow-sm'
    : isHome
      ? 'bg-transparent'
      : 'bg-cream';

  const textClass = scrolled || !isHome ? 'text-espresso' : 'text-cream';
  const logoClass = scrolled || !isHome ? 'text-espresso' : 'text-cream';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navClass}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Mobile menu button */}
          <button
            className={`lg:hidden ${textClass}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Center links - desktop */}
          <div className="hidden lg:flex items-center gap-8 flex-1 justify-center">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={`text-xs tracking-widest uppercase font-medium transition-colors duration-300 hover:text-gold ${textClass}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Logo */}
          <Link
            to="/"
            className={`absolute left-1/2 -translate-x-1/2 font-serif text-xl lg:text-2xl tracking-[0.3em] font-semibold transition-colors duration-300 ${logoClass}`}
          >
            VELMORA
          </Link>

          {/* Right icons */}
          <div className={`flex items-center gap-4 lg:gap-5 ${textClass}`}>
            <button aria-label="Search" className="hover:text-gold transition-colors duration-300">
              <Search className="w-5 h-5" />
            </button>
            <button
              aria-label="Cart"
              className="relative hover:text-gold transition-colors duration-300"
              onClick={() => dispatch({ type: 'OPEN_DRAWER' })}
            >
              <ShoppingBag className="w-5 h-5" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-gold text-white text-[10px] flex items-center justify-center font-medium">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-cream border-t border-clay">
          <div className="px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-espresso text-sm tracking-widest uppercase font-medium py-2"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
