import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { getCartCount, openCart } = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  // Navbar is transparent only on homepage when not scrolled (over hero)
  const isHome = location.pathname === '/';
  const isSolid = isScrolled || !isHome;

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
      navigate(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  const cartCount = getCartCount();

  return (
    <nav className={`nav ${isSolid ? 'nav-solid' : 'nav-transparent'}`}>
      <div className="container flex items-center justify-between h-20">
        {/* Left: Logo */}
        <Link to="/" className="nav-logo">
          VELMORA
        </Link>

        {/* Center: Navigation Links */}
        <div className="hidden md:flex items-center gap-1">
          <Link to="/shop" className="nav-link">Shop</Link>
          <Link to="/shop?category=earrings" className="nav-link">Collections</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/journal" className="nav-link">Journal</Link>
        </div>

        {/* Right: Icons */}
        <div className="flex items-center gap-1">
          {/* Search */}
          <div className="relative">
            {isSearchOpen ? (
              <form onSubmit={handleSearch} className="flex items-center">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search jewelry..."
                  className="input w-48 md:w-64 text-sm py-1.5"
                  autoFocus
                />
                <button
                  type="button"
                  onClick={() => {
                    setIsSearchOpen(false);
                    setSearchQuery('');
                  }}
                  className="nav-icon ml-1"
                >
                  <X size={18} />
                </button>
              </form>
            ) : (
              <button
                onClick={() => setIsSearchOpen(true)}
                className="nav-icon"
                aria-label="Search"
              >
                <Search size={18} />
              </button>
            )}
          </div>

          {/* Cart */}
          <button
            onClick={openCart}
            className="nav-icon relative"
            aria-label="Open cart"
          >
            <ShoppingBag size={18} />
            {cartCount > 0 && (
              <span 
                className="absolute -top-1 -right-1 w-4 h-4 rounded-full text-[10px] flex items-center justify-center font-medium"
                style={{ backgroundColor: 'var(--velmora-gold)', color: 'var(--velmora-deep)' }}
              >
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu - simplified for now */}
          <div className="md:hidden flex items-center gap-1 ml-1">
            <Link to="/shop" className="nav-link text-xs">Shop</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;