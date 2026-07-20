import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { to: '/collections', label: 'Shop' },
    { to: '/collections?category=earrings', label: 'Earrings' },
    { to: '/collections?category=necklaces', label: 'Necklaces' },
    { to: '/collections?category=huggies', label: 'Huggies' },
    { to: '/about', label: 'About' }
  ];

  const isTransparent = isHomePage && !isScrolled && !isMobileMenuOpen;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isTransparent
            ? 'bg-transparent'
            : 'bg-[var(--velmora-ivory)] border-b border-[var(--velmora-gray-200)]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 transition-colors ${
                isTransparent ? 'text-white' : 'text-[var(--velmora-charcoal)]'
              }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Logo */}
            <Link
              to="/"
              className={`font-serif text-2xl md:text-3xl tracking-wider transition-colors ${
                isTransparent ? 'text-white' : 'text-[var(--velmora-charcoal)]'
              }`}
            >
              VELMORA
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-sm tracking-wide transition-colors hover:opacity-70 ${
                    isTransparent
                      ? 'text-white'
                      : 'text-[var(--velmora-charcoal)]'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right Icons */}
            <div className="flex items-center gap-4">
              <button
                className={`p-2 transition-colors hover:opacity-70 ${
                  isTransparent ? 'text-white' : 'text-[var(--velmora-charcoal)]'
                }`}
                aria-label="Search"
              >
                <Search size={20} strokeWidth={1.5} />
              </button>

              <button
                onClick={() => setIsCartOpen(true)}
                className={`relative p-2 transition-colors hover:opacity-70 ${
                  isTransparent ? 'text-white' : 'text-[var(--velmora-charcoal)]'
                }`}
                aria-label="Shopping cart"
              >
                <ShoppingBag size={20} strokeWidth={1.5} />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-[var(--velmora-gold)] text-white text-xs rounded-full flex items-center justify-center font-medium">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'visible' : 'invisible'
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 transition-opacity duration-300 ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          } ${isMobileMenuOpen ? 'bg-black/50' : ''}`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu Panel */}
        <div
          className={`absolute top-0 left-0 h-full w-80 bg-[var(--velmora-ivory)] transition-transform duration-300 ${
            isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="p-6">
            <div className="flex items-center justify-between mb-8">
              <span className="font-serif text-2xl tracking-wider text-[var(--velmora-charcoal)]">
                VELMORA
              </span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-[var(--velmora-charcoal)]"
              >
                <X size={24} />
              </button>
            </div>

            <nav className="flex flex-col gap-6">
              {navLinks.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-lg text-[var(--velmora-charcoal)] hover:text-[var(--velmora-gold)] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
