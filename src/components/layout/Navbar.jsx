import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, toggleDrawer } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const navLinks = [
    { label: 'Shop', to: '/shop' },
    { label: 'Collections', to: '/shop' },
    { label: 'About', to: '/#about' },
    { label: 'Journal', to: '/#journal' },
  ];

  const bgClass = scrolled || !isHome
    ? 'bg-warm-white/95 backdrop-blur-md shadow-sm'
    : 'bg-transparent';
  const textClass = scrolled || !isHome ? 'text-charcoal-900' : 'text-white';
  const borderClass = scrolled || !isHome ? 'border-charcoal-100' : 'border-white/20';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${bgClass} ${textClass}`}
      >
        <div className="section-padding flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* Logo */}
          <Link
            to="/"
            className="font-serif text-xl md:text-2xl tracking-[0.2em] uppercase font-semibold"
          >
            Velmora
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <Link
                key={link.label}
                to={link.to}
                className="font-sans text-xs tracking-[0.14em] uppercase font-medium hover:opacity-70 transition-opacity duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right icons */}
          <div className="flex items-center gap-4">
            <button className="p-1 hover:opacity-70 transition-opacity" aria-label="Search">
              <Search size={20} />
            </button>
            <button
              className="p-1 hover:opacity-70 transition-opacity relative"
              onClick={toggleDrawer}
              aria-label="Cart"
            >
              <ShoppingBag size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1.5 bg-brand-gold text-white text-[10px] font-sans font-semibold w-[18px] h-[18px] flex items-center justify-center rounded-full leading-none">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Hairline border */}
        <div className={`h-px ${borderClass} transition-colors duration-500`} />
      </header>

      {/* Mobile overlay menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-warm-white pt-20">
          <nav className="flex flex-col items-center gap-6 pt-12">
            {navLinks.map(link => (
              <Link
                key={link.label}
                to={link.to}
                className="font-serif text-2xl tracking-[0.12em] uppercase text-charcoal-900"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
