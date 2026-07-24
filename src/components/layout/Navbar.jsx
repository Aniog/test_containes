import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const isHome = location.pathname === '/';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-brand-ivory/95 backdrop-blur-md shadow-sm'
          : isHome
            ? 'bg-transparent'
            : 'bg-brand-ivory/95 backdrop-blur-md'
      }`}
    >
      <nav className="container-wide">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className={`w-5 h-5 ${scrolled || !isHome ? 'text-brand-black' : 'text-white'}`} />
            ) : (
              <Menu className={`w-5 h-5 ${scrolled || !isHome ? 'text-brand-black' : 'text-white'}`} />
            )}
          </button>

          {/* Logo */}
          <Link to="/" className="order-0 md:order-none">
            <span className={`font-serif text-2xl md:text-3xl tracking-widest font-light ${
              scrolled || !isHome ? 'text-brand-black' : 'text-white'
            }`}>
              VELMORA
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {[
              { to: '/shop', label: 'Shop' },
              { to: '/collections', label: 'Collections' },
              { to: '/about', label: 'About' },
              { to: '/journal', label: 'Journal' },
            ].map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-xs tracking-widest-xl uppercase font-medium transition-colors hover:text-brand-gold ${
                  scrolled || !isHome ? 'text-brand-black' : 'text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-4">
            <button
              className={`p-2 transition-colors hover:text-brand-gold ${
                scrolled || !isHome ? 'text-brand-black' : 'text-white'
              }`}
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              className={`p-2 relative transition-colors hover:text-brand-gold ${
                scrolled || !isHome ? 'text-brand-black' : 'text-white'
              }`}
              onClick={() => setIsCartOpen(true)}
              aria-label="Open cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-brand-gold text-white text-[10px] font-medium rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-brand-ivory border-t border-brand-sand animate-fade-in">
          <div className="container-wide py-6 space-y-4">
            {[
              { to: '/shop', label: 'Shop' },
              { to: '/collections', label: 'Collections' },
              { to: '/about', label: 'About' },
              { to: '/journal', label: 'Journal' },
            ].map(link => (
              <Link
                key={link.to}
                to={link.to}
                className="block text-sm tracking-widest-xl uppercase font-medium text-brand-black hover:text-brand-gold transition-colors"
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
