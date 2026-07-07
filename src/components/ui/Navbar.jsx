import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
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

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/shop?search=${encodeURIComponent(searchQuery.trim())}`;
      setSearchOpen(false);
      setSearchQuery('');
    }
  };

  const isHome = location.pathname === '/';

  return (
    <nav className={`nav ${isScrolled || !isHome ? 'solid' : 'transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Left: Logo */}
        <Link to="/" className="font-serif text-2xl tracking-[0.15em] text-velmora-text">
          VELMORA
        </Link>

        {/* Center: Navigation Links */}
        <div className="hidden md:flex items-center gap-x-10 text-sm tracking-[0.05em] uppercase">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              className="hover:text-velmora-gold transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right: Icons */}
        <div className="flex items-center gap-x-5">
          {/* Search */}
          <div className="relative">
            {searchOpen ? (
              <form onSubmit={handleSearch} className="flex items-center">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  className="input w-48 md:w-64 py-1.5 text-sm"
                  autoFocus
                  onBlur={() => {
                    if (!searchQuery) setSearchOpen(false);
                  }}
                />
              </form>
            ) : (
              <button
                onClick={() => setSearchOpen(true)}
                className="p-2 text-velmora-text hover:text-velmora-gold transition-colors"
                aria-label="Search"
              >
                <Search size={18} />
              </button>
            )}
          </div>

          {/* Cart */}
          <button
            onClick={openCart}
            className="relative p-2 text-velmora-text hover:text-velmora-gold transition-colors"
            aria-label="Open cart"
          >
            <ShoppingBag size={18} />
            {getCartCount() > 0 && (
              <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-velmora-gold text-white text-[10px] flex items-center justify-center">
                {getCartCount()}
              </span>
            )}
          </button>

          {/* Mobile Menu (simplified) */}
          <div className="md:hidden">
            <Link to="/shop" className="text-sm uppercase tracking-widest">Shop</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
