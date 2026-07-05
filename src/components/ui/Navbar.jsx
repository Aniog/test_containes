import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalItems, toggleCart } = useCart();
  const location = useLocation();
  
  const isHomePage = location.pathname === '/';
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
    isScrolled || !isHomePage
      ? 'bg-[var(--color-warm-white)] shadow-sm'
      : 'bg-transparent'
  }`;
  
  const linkClasses = `text-sm tracking-wider uppercase transition-colors duration-300 hover:text-[var(--color-gold)] ${
    isScrolled || !isHomePage ? 'text-[var(--color-charcoal)]' : 'text-white'
  }`;
  
  const iconClasses = `w-5 h-5 transition-colors duration-300 hover:text-[var(--color-gold)] ${
    isScrolled || !isHomePage ? 'text-[var(--color-charcoal)]' : 'text-white'
  }`;
  
  return (
    <>
      <nav className={navClasses}>
        <div className="container-wide">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className={iconClasses} />
              ) : (
                <Menu className={iconClasses} />
              )}
            </button>
            
            {/* Logo */}
            <Link to="/" className="serif-heading text-2xl md:text-3xl tracking-wider">
              VELMORA
            </Link>
            
            {/* Desktop navigation */}
            <div className="hidden md:flex items-center gap-8">
              <Link to="/shop" className={linkClasses}>Shop</Link>
              <Link to="/shop?category=earrings" className={linkClasses}>Earrings</Link>
              <Link to="/shop?category=necklaces" className={linkClasses}>Necklaces</Link>
              <Link to="/about" className={linkClasses}>About</Link>
            </div>
            
            {/* Right icons */}
            <div className="flex items-center gap-4">
              <button className="hidden md:block" aria-label="Search">
                <Search className={iconClasses} />
              </button>
              <button onClick={toggleCart} className="relative" aria-label="Cart">
                <ShoppingBag className={iconClasses} />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[var(--color-gold)] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[var(--color-warm-white)] pt-20">
          <div className="flex flex-col items-center gap-8 py-12">
            <Link
              to="/shop"
              className="serif-heading text-2xl tracking-wider text-[var(--color-charcoal)]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Shop
            </Link>
            <Link
              to="/shop?category=earrings"
              className="serif-heading text-2xl tracking-wider text-[var(--color-charcoal)]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Earrings
            </Link>
            <Link
              to="/shop?category=necklaces"
              className="serif-heading text-2xl tracking-wider text-[var(--color-charcoal)]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Necklaces
            </Link>
            <Link
              to="/about"
              className="serif-heading text-2xl tracking-wider text-[var(--color-charcoal)]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
