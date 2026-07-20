import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { setIsOpen, totalItems } = useCart();
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
    { label: 'About', to: '/about' },
    { label: 'Journal', to: '/journal' },
  ];

  const transparent = isHome && !scrolled && !mobileOpen;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          transparent
            ? 'bg-transparent'
            : 'bg-ivory/95 backdrop-blur-sm border-b border-stone-light/50'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link
              to="/"
              className={`font-serif text-xl lg:text-2xl font-light tracking-widest transition-colors duration-300 ${
                transparent ? 'text-ivory' : 'text-charcoal'
              }`}
            >
              VELMORA
            </Link>

            {/* Desktop Nav Links */}
            <nav className="hidden lg:flex items-center gap-10">
              {navLinks.map(link => (
                <Link
                  key={link.label}
                  to={link.to}
                  className={`text-xs uppercase tracking-widest font-sans transition-colors duration-300 hover:text-gold ${
                    transparent ? 'text-ivory/90' : 'text-charcoal'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right Icons */}
            <div className="flex items-center gap-4 lg:gap-5">
              <button
                aria-label="Search"
                className={`transition-colors duration-300 hover:text-gold ${
                  transparent ? 'text-ivory/90' : 'text-charcoal'
                }`}
              >
                <Search className="w-4 h-4 lg:w-5 lg:h-5" strokeWidth={1.5} />
              </button>

              <button
                aria-label={`Cart (${totalItems} items)`}
                onClick={() => setIsOpen(true)}
                className={`relative transition-colors duration-300 hover:text-gold ${
                  transparent ? 'text-ivory/90' : 'text-charcoal'
                }`}
              >
                <ShoppingBag className="w-4 h-4 lg:w-5 lg:h-5" strokeWidth={1.5} />
                {totalItems > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-gold text-charcoal text-[9px] font-sans font-medium w-4 h-4 rounded-full flex items-center justify-center leading-none">
                    {totalItems > 9 ? '9+' : totalItems}
                  </span>
                )}
              </button>

              {/* Mobile menu toggle */}
              <button
                aria-label="Menu"
                onClick={() => setMobileOpen(v => !v)}
                className={`lg:hidden transition-colors duration-300 hover:text-gold ${
                  transparent ? 'text-ivory/90' : 'text-charcoal'
                }`}
              >
                {mobileOpen
                  ? <X className="w-5 h-5" strokeWidth={1.5} />
                  : <Menu className="w-5 h-5" strokeWidth={1.5} />
                }
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-ivory border-t border-stone-light/50">
            <nav className="flex flex-col px-6 py-6 gap-5">
              {navLinks.map(link => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="text-xs uppercase tracking-widest font-sans text-charcoal hover:text-gold transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
