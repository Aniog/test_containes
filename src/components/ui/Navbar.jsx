import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { cartCount, openCart } = useCart();
  const location = useLocation();

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

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/shop?search=${encodeURIComponent(searchQuery.trim())}`;
      setSearchOpen(false);
      setSearchQuery('');
    }
  };

  const isTransparent = !isScrolled && location.pathname === '/';

  return (
    <nav className={`nav ${isTransparent ? 'transparent' : 'solid'}`}>
      <div className="container flex items-center justify-between h-20">
        {/* Left: Logo */}
        <Link to="/" className="nav-logo text-[var(--velmora-deep)]">
          VELMORA
        </Link>

        {/* Center: Navigation Links */}
        <div className="nav-links hidden md:flex items-center gap-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="nav-link text-[var(--velmora-text)] hover:text-[var(--velmora-gold-dark)]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right: Icons */}
        <div className="flex items-center gap-x-4">
          {/* Search */}
          <div className="relative">
            {searchOpen ? (
              <form onSubmit={handleSearch} className="flex items-center">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search jewelry..."
                  className="bg-transparent border-b border-[var(--velmora-border)] py-1 pr-8 text-sm focus:outline-none w-40 md:w-56"
                  autoFocus
                  onBlur={() => {
                    if (!searchQuery) setSearchOpen(false);
                  }}
                />
                <button type="submit" className="absolute right-0 p-1">
                  <Search className="w-4 h-4" />
                </button>
              </form>
            ) : (
              <button
                onClick={() => setSearchOpen(true)}
                className="p-2 text-[var(--velmora-text)] hover:text-[var(--velmora-gold-dark)]"
                aria-label="Search"
              >
                <Search className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Cart */}
          <button
            onClick={openCart}
            className="relative p-2 text-[var(--velmora-text)] hover:text-[var(--velmora-gold-dark)]"
            aria-label="Open cart"
          >
            <ShoppingBag className="w-4 h-4" />
            {cartCount > 0 && (
              <span className="absolute top-1 right-1 w-4 h-4 text-[10px] flex items-center justify-center bg-[var(--velmora-gold)] text-[var(--velmora-deep)] rounded-full">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
