import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import SearchModal from '../ui/SearchModal';

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { getCartCount, openCart } = useCart();
  const location = useLocation();
  const cartCount = getCartCount();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Shop', to: '/shop' },
    { label: 'Collections', to: '/shop' },
    { label: 'About', to: '/about' },
    { label: 'Journal', to: '/journal' },
  ];

  return (
    <>
      <nav className={`nav ${isScrolled ? 'nav-solid' : 'nav-transparent'}`}>
        <div className="container">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="nav-logo">
              VELMORA
            </Link>

            {/* Center Navigation */}
            <div className="nav-links hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link 
                  key={link.label} 
                  to={link.to} 
                  className={`nav-link ${location.pathname === link.to ? 'text-[var(--velmora-gold)]' : ''}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-1">
              <button 
                onClick={() => setIsSearchOpen(true)} 
                className="nav-icon"
                aria-label="Search"
              >
                <Search className="w-4 h-4" />
              </button>
              <button 
                onClick={openCart} 
                className="nav-icon relative"
                aria-label="Open cart"
              >
                <ShoppingBag className="w-4 h-4" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 text-[10px] flex items-center justify-center bg-[var(--velmora-gold)] text-[var(--velmora-bg-dark)] rounded-full">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};

export default Nav;