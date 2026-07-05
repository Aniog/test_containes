import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { setIsOpen, totalItems } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const navBg = scrolled || !isHome
    ? 'bg-brand-cream/95 backdrop-blur-sm shadow-sm'
    : 'bg-transparent';

  const textColor = scrolled || !isHome
    ? 'text-brand-charcoal'
    : 'text-white';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-5 md:px-10 h-16 md:h-20">
        {/* Logo */}
        <Link to="/" className={`font-serif text-2xl md:text-3xl tracking-wide-xl ${textColor} no-underline`}>
          VELMORA
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { to: '/shop', label: 'Shop' },
            { to: '/shop?category=earrings', label: 'Collections' },
            { to: '/about', label: 'About' },
            { to: '/journal', label: 'Journal' },
          ].map(link => (
            <Link
              key={link.label}
              to={link.to}
              className={`font-sans text-xs tracking-widest uppercase font-medium ${textColor} hover:opacity-70 transition-opacity no-underline`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-4">
          <button
            aria-label="Search"
            className={`p-0 bg-transparent border-none ${textColor} hover:opacity-70 transition-opacity`}
          >
            <Search className="w-5 h-5" />
          </button>
          <button
            aria-label="Cart"
            onClick={() => setIsOpen(true)}
            className={`p-0 bg-transparent border-none ${textColor} hover:opacity-70 transition-opacity relative`}
          >
            <ShoppingBag className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-brand-gold text-white text-[10px] font-sans font-medium w-4 h-4 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
          <button
            aria-label="Menu"
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden p-0 bg-transparent border-none ${textColor}`}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-brand-cream border-t border-brand-warm animate-fade-in">
          <div className="flex flex-col px-5 py-6 gap-4">
            {[
              { to: '/shop', label: 'Shop' },
              { to: '/shop?category=earrings', label: 'Collections' },
              { to: '/about', label: 'About' },
              { to: '/journal', label: 'Journal' },
            ].map(link => (
              <Link
                key={link.label}
                to={link.to}
                className="font-sans text-sm tracking-widest uppercase font-medium text-brand-charcoal no-underline py-2"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
