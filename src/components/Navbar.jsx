import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { cartCount, setIsCartOpen } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchQuery)}`);
      setSearchOpen(false);
      setSearchQuery('');
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F8F5F1] border-b border-[#E5DFD6]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl tracking-[0.2em] font-semibold text-[#2C2522]">
          VELMORA
        </Link>

        {/* Center Navigation */}
        <div className="hidden md:flex items-center gap-10 text-sm tracking-[0.1em] uppercase">
          <Link to="/shop" className="hover:text-[#8B7355] transition-colors">Shop</Link>
          <Link to="/shop?category=Collections" className="hover:text-[#8B7355] transition-colors">Collections</Link>
          <Link to="/about" className="hover:text-[#8B7355] transition-colors">About</Link>
          <Link to="/journal" className="hover:text-[#8B7355] transition-colors">Journal</Link>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-5">
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="p-2 hover:text-[#8B7355] transition-colors"
            aria-label="Search"
          >
            <Search size={18} />
          </button>
          <button
            onClick={() => setIsCartOpen(true)}
            className="p-2 hover:text-[#8B7355] transition-colors relative"
            aria-label="Cart"
          >
            <ShoppingBag size={18} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#8B7355] text-white text-[10px] flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Search Bar */}
      {searchOpen && (
        <div className="border-t border-[#E5DFD6] bg-[#F8F5F1]">
          <form onSubmit={handleSearch} className="max-w-7xl mx-auto px-6 py-4">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search our collection..."
              className="input w-full max-w-md"
              autoFocus
            />
          </form>
        </div>
      )}
    </nav>
  );
};

export default Navbar;