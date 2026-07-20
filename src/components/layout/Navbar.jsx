import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const { getCartCount, openCart } = useCart();
  const navigate = useNavigate();

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
      navigate(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
      setShowSearch(false);
      setIsMobileMenuOpen(false);
    }
  };

  const handleCartClick = () => {
    openCart();
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-velmora-bg/95 backdrop-blur-md border-b border-velmora-border'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="font-serif-custom text-2xl tracking-[0.15em] text-velmora-dark">
            VELMORA
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10 text-sm tracking-[0.08em] uppercase">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                className="hover:text-velmora-gold-dark transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            {/* Search */}
            <div className="relative hidden md:block">
              {showSearch ? (
                <form onSubmit={handleSearch} className="flex items-center">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search..."
                    className="w-48 px-4 py-2 text-sm border border-velmora-border bg-white focus:outline-none focus:border-velmora-gold"
                    autoFocus
                    onBlur={() => {
                      if (!searchQuery) setShowSearch(false);
                    }}
                  />
                  <button type="submit" className="p-2">
                    <Search size={18} />
                  </button>
                </form>
              ) : (
                <button
                  onClick={() => setShowSearch(true)}
                  className="p-2 hover:text-velmora-gold-dark transition-colors"
                  aria-label="Search"
                >
                  <Search size={18} />
                </button>
              )}
            </div>

            {/* Cart */}
            <button
              onClick={handleCartClick}
              className="p-2 relative hover:text-velmora-gold-dark transition-colors"
              aria-label="Open cart"
            >
              <ShoppingBag size={18} />
              {getCartCount() > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 text-[10px] flex items-center justify-center bg-velmora-gold text-white rounded-full">
                  {getCartCount()}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-velmora-bg border-t border-velmora-border">
            <div className="px-6 py-6 flex flex-col gap-4 text-sm tracking-[0.08em] uppercase">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="py-2 hover:text-velmora-gold-dark"
                >
                  {link.label}
                </Link>
              ))}
              <form onSubmit={handleSearch} className="flex items-center gap-2 pt-2 border-t border-velmora-border">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  className="flex-1 px-4 py-2 text-sm border border-velmora-border bg-white focus:outline-none"
                />
                <button type="submit" className="p-2">
                  <Search size={18} />
                </button>
              </form>
            </div>
          </div>
        )}
      </nav>
      {/* Spacer to prevent content jump */}
      <div className="h-20" />
    </>
  );
};

export default Navbar;
