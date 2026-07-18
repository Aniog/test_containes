import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { cartCount, openCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setIsSearchOpen(false);
      navigate(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };

  const closeSearch = () => {
    setIsSearchOpen(false);
    setSearchQuery('');
  };

  return (
    <>
      <nav className={`nav ${isScrolled ? 'nav-solid' : 'nav-transparent'}`}>
        <div className="nav-content">
          <Link to="/" className="nav-logo">
            VELMORA
          </Link>

          <div className="nav-links">
            <Link to="/shop">Shop</Link>
            <Link to="/shop?category=earrings">Collections</Link>
            <Link to="/about">About</Link>
            <Link to="/journal">Journal</Link>
          </div>

          <div className="nav-actions">
            <button 
              className="nav-icon" 
              onClick={() => setIsSearchOpen(true)}
              aria-label="Search"
            >
              <Search size={18} />
            </button>
            <button 
              className="nav-icon relative" 
              onClick={openCart}
              aria-label="Open cart"
            >
              <ShoppingBag size={18} />
              {cartCount > 0 && (
                <span 
                  style={{
                    position: 'absolute',
                    top: '2px',
                    right: '2px',
                    background: '#b89778',
                    color: '#1a1816',
                    fontSize: '10px',
                    width: '14px',
                    height: '14px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 600
                  }}
                >
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="search-overlay" onClick={closeSearch}>
          <div className="search-modal" onClick={e => e.stopPropagation()}>
            <div className="search-input-wrapper">
              <input
                type="text"
                placeholder="Search our collection..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch(e)}
                autoFocus
              />
              <button onClick={closeSearch} aria-label="Close search">
                ✕
              </button>
            </div>
            <div className="search-results">
              <p style={{ padding: '1rem 1.5rem', fontSize: '0.75rem', color: '#6b635c', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                Press Enter to search
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
