import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const navLinks = [
  { name: 'Shop', path: '/shop' },
  { name: 'Collections', path: '/shop?collection=new' },
  { name: 'About', path: '/about' },
  { name: 'Journal', path: '/journal' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { itemCount, toggleCart } = useCart();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const showTransparent = isHomePage && !isScrolled && !isMobileMenuOpen;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          showTransparent
            ? 'bg-transparent'
            : 'bg-cream-50/95 backdrop-blur-md shadow-soft'
        }`}
      >
        <div className="section-container">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              to="/"
              className={`font-serif text-2xl md:text-3xl tracking-wide transition-colors duration-300 ${
                showTransparent ? 'text-white' : 'text-warm-900'
              }`}
            >
              VELMORA
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map(link => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-sans font-medium tracking-wide transition-colors duration-300 hover:opacity-70 ${
                    showTransparent ? 'text-white/90' : 'text-warm-600'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Right Icons */}
            <div className="flex items-center gap-4">
              <button
                className={`p-2 transition-colors duration-300 hover:opacity-70 ${
                  showTransparent ? 'text-white' : 'text-warm-800'
                }`}
                aria-label="Search"
              >
                <Search size={20} strokeWidth={1.5} />
              </button>

              <button
                onClick={toggleCart}
                className={`p-2 transition-colors duration-300 hover:opacity-70 relative ${
                  showTransparent ? 'text-white' : 'text-warm-800'
                }`}
                aria-label={`Shopping bag with ${itemCount} items`}
              >
                <ShoppingBag size={20} strokeWidth={1.5} />
                {itemCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-gold-400 text-warm-900 text-xs font-medium rounded-full flex items-center justify-center">
                    {itemCount > 9 ? '9+' : itemCount}
                  </span>
                )}
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`md:hidden p-2 transition-colors duration-300 ${
                  showTransparent ? 'text-white' : 'text-warm-800'
                }`}
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {isMobileMenuOpen ? (
                  <X size={24} strokeWidth={1.5} />
                ) : (
                  <Menu size={24} strokeWidth={1.5} />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-cream-50 z-40 md:hidden">
          <div className="flex flex-col items-center justify-center h-full pt-20">
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map(link => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="font-serif text-3xl text-warm-800 hover:text-gold-500 transition-colors"
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
