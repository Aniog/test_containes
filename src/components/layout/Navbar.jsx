import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClasses = `
    fixed top-0 left-0 right-0 z-50 transition-all duration-500
    ${scrolled || !isHome
      ? 'bg-[var(--velmora-bg)]/95 backdrop-blur-sm shadow-sm'
      : 'bg-transparent'
    }
  `;

  const linkClasses = `
    text-xs tracking-[0.15em] uppercase font-medium transition-colors duration-300
    ${scrolled || !isHome
      ? 'text-[var(--velmora-text)] hover:text-[var(--velmora-accent)]'
      : 'text-white/90 hover:text-white'
    }
  `;

  const iconClasses = `
    w-5 h-5 transition-colors duration-300
    ${scrolled || !isHome
      ? 'text-[var(--velmora-text)]'
      : 'text-white/90'
    }
  `;

  return (
    <>
      <nav className={navClasses}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Mobile menu button */}
            <button
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className={`w-5 h-5 ${scrolled || !isHome ? 'text-[var(--velmora-text)]' : 'text-white'}`} />
              ) : (
                <Menu className={iconClasses} />
              )}
            </button>

            {/* Logo */}
            <Link to="/" className="absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0">
              <span className={`
                velmora-heading text-xl sm:text-2xl tracking-[0.2em] font-semibold transition-colors duration-300
                ${scrolled || !isHome ? 'text-[var(--velmora-text)]' : 'text-white'}
              `}>
                VELMORA
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-10">
              <Link to="/shop" className={linkClasses}>Shop</Link>
              <Link to="/shop?category=earrings" className={linkClasses}>Earrings</Link>
              <Link to="/shop?category=necklaces" className={linkClasses}>Necklaces</Link>
              <Link to="/shop?category=huggies" className={linkClasses}>Huggies</Link>
            </div>

            {/* Right icons */}
            <div className="flex items-center gap-4">
              <button className="hidden sm:block" aria-label="Search">
                <Search className={iconClasses} />
              </button>
              <button
                className="relative"
                onClick={() => setIsCartOpen(true)}
                aria-label={`Shopping cart with ${cartCount} items`}
              >
                <ShoppingBag className={iconClasses} />
                {cartCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-[var(--velmora-accent)] text-[var(--velmora-bg-dark)] text-[10px] font-medium rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[var(--velmora-bg)] pt-20 lg:hidden">
          <div className="flex flex-col items-center gap-8 py-12">
            <Link
              to="/shop"
              className="velmora-heading-uppercase text-lg text-[var(--velmora-text)]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Shop All
            </Link>
            <Link
              to="/shop?category=earrings"
              className="velmora-heading-uppercase text-lg text-[var(--velmora-text)]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Earrings
            </Link>
            <Link
              to="/shop?category=necklaces"
              className="velmora-heading-uppercase text-lg text-[var(--velmora-text)]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Necklaces
            </Link>
            <Link
              to="/shop?category=huggies"
              className="velmora-heading-uppercase text-lg text-[var(--velmora-text)]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Huggies
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
