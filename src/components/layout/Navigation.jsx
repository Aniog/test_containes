import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isTransparent, setIsTransparent] = useState(true);
  const { cartCount, openCart } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);
      setIsTransparent(scrollY < 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Shop', path: '/shop' },
    { name: 'Collections', path: '/shop' },
    { name: 'About', path: '/about' },
    { name: 'Journal', path: '/journal' }
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isTransparent
            ? 'bg-transparent'
            : 'bg-[var(--color-primary)] shadow-[var(--shadow-soft)]'
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link 
              to="/" 
              className="font-serif text-2xl tracking-wider text-[var(--color-charcoal)] hover:text-[var(--color-charcoal)]"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              VELMORA
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-sm tracking-widest uppercase text-[var(--color-text-primary)] hover:text-[var(--color-gold)] transition-colors duration-300"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Right Icons */}
            <div className="flex items-center gap-5">
              <button
                className={`p-2 transition-colors duration-300 ${
                  isTransparent ? 'text-white' : 'text-[var(--color-charcoal)]'
                } hover:text-[var(--color-gold)]`}
                aria-label="Search"
              >
                <Search size={20} strokeWidth={1.5} />
              </button>

              <button
                className={`p-2 transition-colors duration-300 relative ${
                  isTransparent ? 'text-white' : 'text-[var(--color-charcoal)]'
                } hover:text-[var(--color-gold)]`}
                aria-label="Shopping cart"
                onClick={openCart}
              >
                <ShoppingBag size={20} strokeWidth={1.5} />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-[var(--color-gold)] text-white text-xs flex items-center justify-center rounded-full">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Mobile Menu Toggle */}
              <button
                className={`md:hidden p-2 transition-colors duration-300 ${
                  isTransparent ? 'text-white' : 'text-[var(--color-charcoal)]'
                } hover:text-[var(--color-gold)]`}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-[var(--color-primary)] transition-transform duration-500 md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full pt-24 px-8">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              to={link.path}
              className="py-4 text-lg tracking-widest uppercase border-b border-[var(--color-border)] text-[var(--color-charcoal)] hover:text-[var(--color-gold)] transition-colors"
              style={{ 
                fontFamily: 'var(--font-sans)',
                animationDelay: `${index * 100}ms`
              }}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navigation;
