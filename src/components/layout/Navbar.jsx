import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const navLinks = [
  { to: '/shop', label: 'Shop' },
  { to: '/collections', label: 'Collections' },
  { to: '/about', label: 'About' },
  { to: '/journal', label: 'Journal' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { itemCount, openDrawer } = useCart();
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

  const bg = scrolled || !isHome
    ? 'bg-velmora-cream/95 backdrop-blur-sm shadow-sm'
    : 'bg-transparent';
  const textColor = scrolled || !isHome ? 'text-velmora-ink' : 'text-white';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${bg}`}
    >
      <div className="section-padding">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <button
            className={`md:hidden ${textColor}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* Logo */}
          <Link
            to="/"
            className={`font-serif text-xl md:text-2xl tracking-widest ${textColor} transition-colors duration-300`}
          >
            VELMORA
          </Link>

          {/* Center nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-xs tracking-wider uppercase transition-colors duration-300 ${
                  location.pathname === link.to
                    ? 'text-velmora-gold'
                    : `${textColor} hover:text-velmora-gold`
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-4">
            <button className={`${textColor} hover:text-velmora-gold transition-colors`} aria-label="Search">
              <Search size={18} />
            </button>
            <button
              className={`relative ${textColor} hover:text-velmora-gold transition-colors`}
              onClick={openDrawer}
              aria-label="Cart"
            >
              <ShoppingBag size={18} />
              {itemCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-velmora-gold text-white text-[10px] font-medium rounded-full flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-64' : 'max-h-0'
        }`}
      >
        <div className="bg-velmora-cream border-t border-velmora-sand/50 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm tracking-wider uppercase ${
                location.pathname === link.to
                  ? 'text-velmora-gold'
                  : 'text-velmora-charcoal'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}