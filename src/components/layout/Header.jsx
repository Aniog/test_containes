import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsSearchOpen(false);
  }, [location]);

  const navLinks = [
    { to: '/shop', label: 'Shop' },
    { to: '/collections', label: 'Collections' },
    { to: '/about', label: 'About' },
    { to: '/journal', label: 'Journal' }
  ];

  const isHomePage = location.pathname === '/';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || !isHomePage
            ? 'bg-[var(--off-white)] shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between h-20">
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 -ml-2"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={24} style={{ color: 'var(--espresso-mid)' }} />
            </button>

            {/* Logo */}
            <Link
              to="/"
              className="font-serif text-2xl md:text-3xl font-medium tracking-wide"
              style={{ 
                color: isScrolled || !isHomePage ? 'var(--espresso)' : 'var(--espresso)',
                letterSpacing: '0.08em'
              }}
            >
              VELMORA
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm tracking-wider uppercase transition-colors duration-200 hover:text-[var(--gold)]"
                  style={{ 
                    color: isScrolled || !isHomePage ? 'var(--espresso-light)' : 'var(--espresso)',
                    letterSpacing: '0.12em'
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
              <button
                className="p-2 transition-colors duration-200 hover:opacity-70"
                onClick={() => setIsSearchOpen(true)}
                aria-label="Search"
              >
                <Search size={20} style={{ color: 'var(--espresso-mid)' }} />
              </button>
              
              <button
                className="p-2 relative transition-colors duration-200 hover:opacity-70"
                onClick={() => setIsCartOpen(true)}
                aria-label="Shopping cart"
              >
                <ShoppingBag size={20} style={{ color: 'var(--espresso-mid)' }} />
                {cartCount > 0 && (
                  <span 
                    className="absolute -top-1 -right-1 w-5 h-5 rounded-full text-xs flex items-center justify-center text-white"
                    style={{ backgroundColor: 'var(--gold)' }}
                  >
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-50 bg-[var(--overlay)]"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div 
            className="absolute right-0 top-0 bottom-0 w-80 bg-[var(--off-white)] p-8 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="self-end p-2 -mr-2 mb-8"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={24} style={{ color: 'var(--espresso-mid)' }} />
            </button>
            
            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-lg tracking-wider uppercase"
                  style={{ color: 'var(--espresso)', letterSpacing: '0.12em' }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* Search Overlay */}
      {isSearchOpen && (
        <div 
          className="fixed inset-0 z-50 bg-[var(--overlay)] flex items-start justify-center pt-32"
          onClick={() => setIsSearchOpen(false)}
        >
          <div 
            className="w-full max-w-2xl mx-4 bg-white rounded p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-4 border-b pb-4" style={{ borderColor: 'var(--stone)', opacity: 0.3 }}>
              <Search size={20} style={{ color: 'var(--stone-dark)' }} />
              <input
                type="text"
                placeholder="Search for jewelry..."
                className="flex-1 text-lg outline-none"
                style={{ 
                  background: 'transparent',
                  color: 'var(--espresso)'
                }}
                autoFocus
              />
              <button onClick={() => setIsSearchOpen(false)}>
                <X size={20} style={{ color: 'var(--stone-dark)' }} />
              </button>
            </div>
            <p className="mt-4 text-sm" style={{ color: 'var(--stone-dark)' }}>
              Press ESC to close
            </p>
          </div>
        </div>
      )}

      {/* Spacer for fixed header */}
      <div className="h-20" />
    </>
  );
}
