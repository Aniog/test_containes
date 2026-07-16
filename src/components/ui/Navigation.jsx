import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { products } from '../../data/products';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { getCartCount, openCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const cartCount = getCartCount();

  const filteredProducts = searchQuery.length > 1 
    ? products.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const handleSearchResultClick = (slug) => {
    setIsSearchOpen(false);
    setSearchQuery('');
    navigate(`/product/${slug}`);
  };

  return (
    <>
      <nav className={`nav ${isScrolled ? 'nav-solid' : 'nav-transparent'}`}>
        <div className="nav-inner">
          {/* Logo */}
          <Link to="/" className="nav-logo">
            VELMORA
          </Link>

          {/* Center Navigation Links */}
          <div className="nav-links">
            <Link to="/shop">Shop</Link>
            <Link to="/shop">Collections</Link>
            <Link to="/about">About</Link>
            <Link to="/journal">Journal</Link>
          </div>

          {/* Right Actions */}
          <div className="nav-actions">
            <button 
              className="nav-icon" 
              onClick={() => setIsSearchOpen(true)}
              aria-label="Search"
            >
              <Search size={18} />
            </button>
            <button 
              className="nav-icon" 
              onClick={openCart}
              aria-label="Open cart"
              style={{ position: 'relative' }}
            >
              <ShoppingBag size={18} />
              {cartCount > 0 && (
                <span style={{
                  position: 'absolute',
                  top: '2px',
                  right: '2px',
                  background: 'var(--color-gold)',
                  color: '#fff',
                  fontSize: '9px',
                  width: '14px',
                  height: '14px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Search Modal */}
      {isSearchOpen && (
        <div className="search-modal">
          <div className="search-overlay" onClick={() => { setIsSearchOpen(false); setSearchQuery(''); }} />
          <div className="search-content">
            <input
              type="text"
              className="search-input"
              placeholder="Search our collection..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
            />
            {filteredProducts.length > 0 && (
              <div className="search-results">
                {filteredProducts.map((product) => (
                  <div 
                    key={product.id} 
                    className="search-result-item"
                    onClick={() => handleSearchResultClick(product.slug)}
                  >
                    <img src={product.images[0]} alt={product.name} />
                    <div className="search-result-info">
                      <div className="search-result-name">{product.name}</div>
                      <div className="search-result-price">${product.price}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {searchQuery.length > 1 && filteredProducts.length === 0 && (
              <div style={{ padding: '1rem 0', color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>
                No results found for "{searchQuery}"
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;