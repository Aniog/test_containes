import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingBag, X, Menu } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

  // Close mobile menu on route change (via link click)
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  const navLinks = [
    { label: 'Shop', to: '/shop' },
    { label: 'Collections', to: '/shop' },
    { label: 'About', to: '/about' },
    { label: 'Journal', to: '/journal' },
  ];

  return (
    <>
      <nav className={`nav ${isScrolled ? 'nav-solid' : 'nav-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Left: Logo */}
          <Link to="/" className="logo">
            VELMORA
          </Link>

          {/* Center: Navigation Links */}
          <div className="nav-links hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="nav-link"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right: Icons */}
          <div className="flex items-center gap-2 md:gap-5">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-[var(--velmora-charcoal)] hover:text-[var(--velmora-gold)] transition-colors"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>
            <button
              onClick={openCart}
              className="p-2 text-[var(--velmora-charcoal)] hover:text-[var(--velmora-gold)] transition-colors relative"
              aria-label="Cart"
            >
              <ShoppingBag className="w-4 h-4" />
              {getCartCount() > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[var(--velmora-gold)] text-white text-[10px] flex items-center justify-center rounded-full font-sans">
                  {getCartCount()}
                </span>
              )}
            </button>
            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 md:hidden text-[var(--velmora-charcoal)]"
              aria-label="Menu"
            >
              <Menu className="w-4 h-4" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[90] md:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={closeMobileMenu} />
          <div className="absolute top-20 right-0 w-64 bg-white shadow-xl p-8 flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="text-lg tracking-wide"
                onClick={closeMobileMenu}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Search Modal */}
      <div className={`search-modal ${isSearchOpen ? 'open' : ''}`}>
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <span className="font-serif text-xl">Search</span>
            <button onClick={() => setIsSearchOpen(false)} aria-label="Close search">
              <X className="w-5 h-5" />
            </button>
          </div>
          <form onSubmit={handleSearch}>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search our collection..."
              className="input w-full text-lg py-4"
              autoFocus
            />
            <p className="text-xs text-[var(--velmora-taupe)] mt-3 tracking-widest">
              PRESS ENTER TO SEARCH
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Navigation;
