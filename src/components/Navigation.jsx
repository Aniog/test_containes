import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { getCartCount, setIsCartOpen } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
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
      window.location.href = `/shop?search=${encodeURIComponent(searchQuery)}`;
      setSearchOpen(false);
      setSearchQuery('');
    }
  };

  const isActive = (path) => location.pathname === path;

  // Determine text color based on scroll state
  const textColorClass = isScrolled ? 'text-[#1C1B19]' : 'text-white';
  const hoverColorClass = isScrolled ? 'hover:text-[#C5A46E]' : 'hover:text-[#E5DFD3]';

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'nav-solid' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Left: Logo */}
        <Link to="/" className={`font-serif text-2xl tracking-[3px] transition-colors ${textColorClass}`}>
          VELMORA
        </Link>

        {/* Center: Navigation Links */}
        <div className="hidden md:flex items-center gap-10 text-sm tracking-[1px]">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className={`transition-colors ${hoverColorClass} ${
                isActive(link.to) ? 'text-[#C5A46E]' : textColorClass
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right: Icons */}
        <div className="flex items-center gap-5">
          {/* Search */}
          <div className="relative">
            {searchOpen ? (
              <form onSubmit={handleSearch} className="flex items-center">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search jewelry..."
                  className="bg-white border border-[#E5DFD3] px-4 py-1.5 text-sm w-48 focus:outline-none focus:border-[#C5A46E]"
                  autoFocus
                  onBlur={() => {
                    if (!searchQuery) setSearchOpen(false);
                  }}
                />
              </form>
            ) : (
              <button 
                onClick={() => setSearchOpen(true)}
                className={`p-2 transition-colors ${textColorClass} ${hoverColorClass}`}
                aria-label="Search"
              >
                <Search className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Cart */}
          <button 
            onClick={() => setIsCartOpen(true)}
            className={`p-2 transition-colors relative ${textColorClass} ${hoverColorClass}`}
            aria-label="Open cart"
          >
            <ShoppingBag className="w-4 h-4" />
            {getCartCount() > 0 && (
              <span className="cart-badge">{getCartCount()}</span>
            )}
          </button>

          {/* Mobile Menu - simplified for now */}
          <div className="md:hidden">
            <Link to="/shop" className={`text-sm tracking-[1px] transition-colors ${textColorClass}`}>Shop</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}