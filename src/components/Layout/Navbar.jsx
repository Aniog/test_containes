import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const Navbar = ({ onCartOpen, onSearchOpen }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalItems } = useCart();
  const location = useLocation();

  const isHome = location.pathname === '/';

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

  const navClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
    scrolled || !isHome
      ? 'bg-velmora-cream/95 backdrop-blur-md shadow-sm'
      : 'bg-transparent'
  }`;

  const textClasses = scrolled || !isHome ? 'text-velmora-base' : 'text-white';
  const linkHoverClasses = scrolled || !isHome ? 'hover:text-velmora-gold' : 'hover:text-velmora-gold-light';

  return (
    <>
      <nav className={navClasses}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Mobile menu button */}
            <button
              className={`lg:hidden p-2 -ml-2 ${textClasses}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <h1 className={`font-serif text-2xl lg:text-3xl tracking-super-wide font-light ${textClasses}`}>
                VELMORA
              </h1>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-10">
              {['Shop', 'Collections', 'About', 'Journal'].map((item) => (
                <Link
                  key={item}
                  to={item === 'Shop' ? '/shop' : item === 'Collections' ? '/shop' : '/'}
                  className={`text-xs tracking-ultra-wide uppercase font-medium transition-colors duration-300 ${textClasses} ${linkHoverClasses}`}
                >
                  {item}
                </Link>
              ))}
            </div>

            {/* Right icons */}
            <div className="flex items-center gap-3">
              <button
                className={`p-2 transition-colors duration-300 ${textClasses} ${linkHoverClasses}`}
                onClick={onSearchOpen}
                aria-label="Search"
              >
                <Search size={20} />
              </button>
              <button
                className={`p-2 transition-colors duration-300 relative ${textClasses} ${linkHoverClasses}`}
                onClick={onCartOpen}
                aria-label="Shopping cart"
              >
                <ShoppingBag size={20} />
                {totalItems > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-velmora-gold text-velmora-base text-[10px] font-medium rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-velmora-base/50" onClick={() => setMobileMenuOpen(false)} />
          <div className="relative bg-velmora-cream h-full w-72 pt-20 px-6 animate-slide-in-right">
            <div className="flex flex-col gap-6">
              {['Shop', 'Collections', 'About', 'Journal'].map((item) => (
                <Link
                  key={item}
                  to={item === 'Shop' ? '/shop' : item === 'Collections' ? '/shop' : '/'}
                  className="text-sm tracking-ultra-wide uppercase font-medium text-velmora-base hover:text-velmora-gold transition-colors py-2 border-b border-velmora-stone-lighter/30"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
