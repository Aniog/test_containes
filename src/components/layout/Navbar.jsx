import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { itemCount, openCart } = useCart();
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

  const navLinks = [
    { to: '/shop', label: 'Shop' },
    { to: '/collections', label: 'Collections' },
    { to: '/about', label: 'About' },
    { to: '/journal', label: 'Journal' },
  ];

  const bgClass = scrolled || !isHome
    ? 'bg-cream/95 backdrop-blur-md shadow-sm'
    : 'bg-transparent';
  const textClass = scrolled || !isHome ? 'text-espresso' : 'text-cream';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${bgClass}`}
    >
      <div className="section-padding flex items-center justify-between h-16 md:h-20">
        {/* Mobile menu button */}
        <button
          className={`lg:hidden p-2 ${textClass}`}
          onClick={() => setMobileOpen(true)}
          aria-label="Menu"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Logo */}
        <Link
          to="/"
          className="font-serif text-xl md:text-2xl tracking-widest font-semibold"
          style={{ letterSpacing: '0.28em' }}
        >
          <span className={textClass}>VELMORA</span>
        </Link>

        {/* Center nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm tracking-wider uppercase font-medium transition-colors duration-300 hover:text-gold ${
                textClass
              } ${
                location.pathname === link.to ? 'text-gold' : ''
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right icons */}
        <div className="flex items-center gap-3 md:gap-4">
          <button className={`p-2 ${textClass} hover:text-gold transition-colors`} aria-label="Search">
            <Search className="w-5 h-5" />
          </button>
          <button
            className={`p-2 ${textClass} hover:text-gold transition-colors relative`}
            onClick={openCart}
            aria-label="Cart"
          >
            <ShoppingBag className="w-5 h-5" />
            {itemCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-4.5 h-4.5 text-[10px] font-bold bg-gold text-white rounded-full flex items-center justify-center leading-none">
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-espresso/60 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute right-0 top-0 bottom-0 w-72 bg-cream shadow-2xl animate-slide-in-right">
            <div className="flex items-center justify-between p-6 border-b border-sand/30">
              <span className="font-serif text-lg tracking-widest text-espresso">VELMORA</span>
              <button onClick={() => setMobileOpen(false)} className="p-2 text-espresso">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-base tracking-wider uppercase font-medium transition-colors hover:text-gold ${
                    location.pathname === link.to ? 'text-gold' : 'text-espresso'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
