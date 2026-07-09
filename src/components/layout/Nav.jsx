import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Nav({ onCartOpen }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const navBg = scrolled || !isHome
    ? 'bg-velmora-cream/95 backdrop-blur-sm shadow-sm'
    : 'bg-transparent';

  const textColor = scrolled || !isHome
    ? 'text-velmora-charcoal'
    : 'text-velmora-cream';

  const links = [
    { to: '/shop', label: 'Shop' },
    { to: '/shop/earrings', label: 'Collections' },
    { to: '/shop/necklaces', label: 'About' },
    { to: '/shop/huggies', label: 'Journal' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo — left */}
          <Link
            to="/"
            className={`font-serif text-xl md:text-2xl font-semibold tracking-widest ${textColor} transition-colors duration-300 flex-shrink-0`}
          >
            VELMORA
          </Link>

          {/* Center links — desktop */}
          <div className="hidden md:flex items-center gap-10 text-sm font-medium tracking-wider uppercase">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`${textColor} hover:text-velmora-gold transition-colors duration-300`}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-3 md:gap-5">
            <button className={`${textColor} hover:text-velmora-gold transition-colors duration-300`} aria-label="Search">
              <Search className="w-4 h-4 md:w-5 md:h-5" />
            </button>
            <button
              className={`${textColor} hover:text-velmora-gold transition-colors duration-300 relative`}
              onClick={onCartOpen}
              aria-label="Cart"
            >
              <ShoppingBag className="w-4 h-4 md:w-5 md:h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-velmora-gold text-white text-[10px] font-sans font-medium rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile menu button */}
            <button
              className={`md:hidden p-2 ${textColor}`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-velmora-cream border-t border-velmora-border">
          <div className="px-5 py-6 flex flex-col gap-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-velmora-charcoal text-sm font-medium tracking-wider uppercase py-2"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}