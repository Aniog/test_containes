import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import CartDrawer from '@/components/cart/CartDrawer';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const { totalItems } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Shop', path: '/shop' },
    { label: 'Collections', path: '/shop' },
    { label: 'About', path: '/about' },
    { label: 'Journal', path: '/journal' },
  ];

  const isHome = location.pathname === '/';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || !isHome
            ? 'bg-velmora-surface/95 backdrop-blur-sm shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="relative z-10">
              <h1
                className={`font-serif text-2xl md:text-3xl tracking-wider transition-colors duration-300 ${
                  scrolled || !isHome ? 'text-velmora-text' : 'text-velmora-dark-text'
                }`}
              >
                VELMORA
              </h1>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm tracking-wider uppercase transition-colors duration-300 hover:text-velmora-accent relative group ${
                    scrolled || !isHome ? 'text-velmora-text' : 'text-velmora-dark-text'
                  }`}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-velmora-accent transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>

            {/* Right Icons */}
            <div className="flex items-center gap-4">
              <button
                className={`p-2 transition-colors duration-300 hover:text-velmora-accent ${
                  scrolled || !isHome ? 'text-velmora-text' : 'text-velmora-dark-text'
                }`}
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                className={`p-2 relative transition-colors duration-300 hover:text-velmora-accent ${
                  scrolled || !isHome ? 'text-velmora-text' : 'text-velmora-dark-text'
                }`}
                onClick={() => setCartOpen(true)}
                aria-label="Shopping cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-velmora-accent text-white text-xs rounded-full flex items-center justify-center animate-scale-in">
                    {totalItems}
                  </span>
                )}
              </button>
              <button
                className={`md:hidden p-2 transition-colors duration-300 ${
                  scrolled || !isHome ? 'text-velmora-text' : 'text-velmora-dark-text'
                }`}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed inset-0 bg-velmora-bg z-40 transition-all duration-500 ${
            mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
          style={{ top: '4rem' }}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {navLinks.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-serif text-3xl text-velmora-text hover:text-velmora-accent transition-all duration-300 ${
                  mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: mobileMenuOpen ? `${index * 0.1 + 0.1}s` : '0s' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </header>

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
};

export default Navigation;
