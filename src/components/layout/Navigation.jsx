import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { getCartCount, openCart } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Shop', path: '/shop' },
    { label: 'Collections', path: '/shop' },
    { label: 'About', path: '/about' },
    { label: 'Journal', path: '/journal' },
  ];

  const cartCount = getCartCount();

  return (
    <>
      <nav className={`nav ${isScrolled ? 'nav-solid' : 'nav-transparent'}`}>
        <div className="container flex items-center justify-between h-20">
          {/* Left: Logo */}
          <Link to="/" className="logo text-text">
            VELMORA
          </Link>

          {/* Center: Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                className={`nav-link ${location.pathname === link.path ? 'text-gold' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right: Icons */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 text-text hover:text-gold transition-colors"
              aria-label="Search"
            >
              <Search size={18} />
            </button>
            
            <button
              onClick={openCart}
              className="p-2 text-text hover:text-gold transition-colors relative"
              aria-label="Open cart"
            >
              <ShoppingBag size={18} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-gold text-bg text-[10px] flex items-center justify-center font-medium">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu - simplified for now */}
            <div className="md:hidden">
              <Link to="/shop" className="nav-link text-xs">Shop</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-bg/95 z-[200] flex items-start justify-center pt-24">
          <div className="w-full max-w-lg px-6">
            <div className="flex items-center gap-4 mb-8">
              <input
                type="text"
                placeholder="Search our collection..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 text-xl border-b border-border pb-3 bg-transparent focus:border-gold outline-none"
                autoFocus
              />
              <button 
                onClick={() => {
                  setIsSearchOpen(false);
                  setSearchQuery('');
                }}
                className="p-2"
              >
                <X size={20} />
              </button>
            </div>
            
            {searchQuery && (
              <div className="text-sm text-text-muted">
                Press enter to search for "{searchQuery}"
              </div>
            )}
            
            <div className="mt-8 text-xs text-text-muted">
              Try: earrings, necklaces, huggies, gold
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
