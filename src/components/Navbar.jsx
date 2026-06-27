import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Shop', path: '/shop' },
    { name: 'Collections', path: '/shop' },
    { name: 'About', path: '/about' },
    { name: 'Journal', path: '/journal' }
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || !isHome 
            ? 'bg-velmora-cream shadow-soft' 
            : 'bg-transparent'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" style={{ color: isScrolled || !isHome ? 'var(--color-velmora-text)' : (isHome ? 'white' : 'var(--color-velmora-text)') }} />
            </button>

            {/* Logo */}
            <Link 
              to="/" 
              className="font-serif text-2xl md:text-3xl tracking-wider absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0"
              style={{ color: isScrolled || !isHome ? 'var(--color-velmora-text)' : (isHome ? 'white' : 'var(--color-velmora-text)') }}
            >
              VELMORA
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-sm tracking-wider hover:opacity-70 transition-opacity"
                  style={{ 
                    color: isScrolled || !isHome ? 'var(--color-velmora-text)' : (isHome ? 'white' : 'var(--color-velmora-text)') 
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Icons */}
            <div className="flex items-center gap-4">
              <button 
                className="p-2 hover:opacity-70 transition-opacity"
                aria-label="Search"
              >
                <Search className="w-5 h-5" style={{ color: isScrolled || !isHome ? 'var(--color-velmora-text)' : (isHome ? 'white' : 'var(--color-velmora-text)') }} />
              </button>
              <button 
                className="p-2 hover:opacity-70 transition-opacity relative"
                onClick={() => setIsCartOpen(true)}
                aria-label="Cart"
              >
                <ShoppingBag className="w-5 h-5" style={{ color: isScrolled || !isHome ? 'var(--color-velmora-text)' : (isHome ? 'white' : 'var(--color-velmora-text)') }} />
                {cartCount > 0 && (
                  <span 
                    className="absolute -top-1 -right-1 w-5 h-5 rounded-full text-xs flex items-center justify-center text-white"
                    style={{ backgroundColor: 'var(--color-velmora-gold)' }}
                  >
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-50 md:hidden"
          style={{ backgroundColor: 'var(--color-velmora-cream)' }}
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-4">
              <span className="font-serif text-2xl tracking-wider">VELMORA</span>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="flex-1 flex flex-col items-center justify-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="font-serif text-3xl tracking-wider hover:opacity-70 transition-opacity"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}