import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();
  const location = useLocation();
  
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    if (isHomePage) {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    } else {
      setIsScrolled(true);
    }
  }, [isHomePage]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { href: '/shop', label: 'Shop' },
    { href: '/shop?category=earrings', label: 'Earrings' },
    { href: '/shop?category=necklaces', label: 'Necklaces' },
    { href: '/shop?category=huggies', label: 'Huggies' },
    { href: '/about', label: 'About' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || !isHomePage
            ? 'bg-[#FAF8F5] shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="container-wide">
          <div className="flex items-center justify-between h-16 md:h-[72px]">
            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 -ml-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" style={{ color: 'var(--color-text)' }} />
              ) : (
                <Menu className="w-5 h-5" style={{ color: 'var(--color-text)' }} />
              )}
            </button>

            {/* Logo */}
            <Link 
              to="/" 
              className="font-serif text-xl md:text-2xl tracking-[0.2em] font-medium"
              style={{ color: 'var(--color-text)' }}
            >
              VELMORA
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map(link => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="label-uppercase text-xs tracking-wider transition-colors hover:text-[#C9A962]"
                  style={{ color: 'var(--color-text-secondary)' }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right Icons */}
            <div className="flex items-center gap-2 md:gap-4">
              <button 
                className="p-2 transition-colors hover:text-[#C9A962]"
                aria-label="Search"
              >
                <Search className="w-5 h-5" style={{ color: 'var(--color-text)' }} />
              </button>
              
              <button 
                className="p-2 relative transition-colors hover:text-[#C9A962]"
                onClick={() => setIsCartOpen(true)}
                aria-label="Shopping cart"
              >
                <ShoppingBag className="w-5 h-5" style={{ color: 'var(--color-text)' }} />
                {cartCount > 0 && (
                  <span 
                    className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full text-[10px] font-medium flex items-center justify-center text-white"
                    style={{ backgroundColor: 'var(--color-gold)' }}
                  >
                    {cartCount > 9 ? '9+' : cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute top-full left-0 right-0 bg-[#FAF8F5] shadow-lg transition-all duration-300 ${
            isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          <nav className="container py-6 flex flex-col gap-4">
            {navLinks.map(link => (
              <Link
                key={link.href}
                to={link.href}
                className="label-uppercase text-sm tracking-wider py-2 border-b border-[#E8E4DC]"
                style={{ color: 'var(--color-text)' }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      
      {/* Spacer for non-home pages */}
      {!isHomePage && <div className="h-16 md:h-[72px]" />}
    </>
  );
}
