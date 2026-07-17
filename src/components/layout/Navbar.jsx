import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart, useCartDispatch } from '../../context/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems } = useCart();
  const dispatch = useCartDispatch();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const bg = scrolled || mobileOpen ? 'bg-cream/95 backdrop-blur-md shadow-sm' : 'bg-transparent';
  const textColor = scrolled || mobileOpen ? 'text-espresso' : 'text-cream';
  const divider = scrolled || mobileOpen ? 'border-stone-warm' : 'border-white/20';

  const navLinks = [
    { to: '/shop', label: 'Shop' },
    { to: '/shop?category=Earrings', label: 'Earrings' },
    { to: '/shop?category=Necklaces', label: 'Necklaces' },
    { to: '/shop?category=Sets', label: 'Gift Sets' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${bg}`}
    >
      <div className={`mx-auto max-w-[1440px] px-6 lg:px-12 border-b ${divider} transition-colors duration-500`}>
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 -ml-2 ${textColor}`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* Center nav links (desktop) */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-[13px] tracking-[0.1em] uppercase font-medium transition-colors duration-300 hover:text-gold ${textColor}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Logo */}
          <Link
            to="/"
            className="absolute left-1/2 -translate-x-1/2 font-serif text-2xl lg:text-[28px] tracking-[0.3em] font-semibold text-cream"
            style={{ color: scrolled || mobileOpen ? '#1C1917' : '#FBF8F4' }}
          >
            VELMORA
          </Link>

          {/* Right icons */}
          <div className="flex items-center gap-3 lg:gap-5">
            <button className={`p-2 ${textColor} hover:text-gold transition-colors`} aria-label="Search">
              <Search size={19} strokeWidth={1.5} />
            </button>
            <button
              onClick={() => dispatch({ type: 'OPEN_DRAWER' })}
              className={`p-2 relative ${textColor} hover:text-gold transition-colors`}
              aria-label="Shopping bag"
            >
              <ShoppingBag size={19} strokeWidth={1.5} />
              {totalItems > 0 && (
                <span className="absolute -top-0 -right-0 bg-gold text-espresso text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-400 ${
          mobileOpen ? 'max-h-96 bg-cream border-b border-stone-warm' : 'max-h-0'
        }`}
      >
        <div className="px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-espresso text-sm tracking-[0.12em] uppercase font-medium"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
