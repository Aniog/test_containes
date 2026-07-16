import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingBag } from 'lucide-react';

const Navbar = ({ cartCount, onCartOpen, onSearch }) => {
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
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
    <nav className={`nav fixed top-0 left-0 right-0 z-50 ${scrolled ? 'scrolled' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="font-serif text-2xl tracking-[0.2em] text-[#1C1917]">
          VELMORA
        </Link>

        {/* Center Navigation */}
        <div className="nav-links hidden md:flex items-center gap-10 text-sm tracking-[0.1em] uppercase">
          <Link to="/shop" className="hover:text-[#B8976F] transition-colors">Shop</Link>
          <Link to="/shop" className="hover:text-[#B8976F] transition-colors">Collections</Link>
          <Link to="/" className="hover:text-[#B8976F] transition-colors">About</Link>
          <Link to="/" className="hover:text-[#B8976F] transition-colors">Journal</Link>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-5">
          <button 
            onClick={() => setSearchOpen(!searchOpen)}
            className="p-2 hover:text-[#B8976F] transition-colors"
            aria-label="Search"
          >
            <Search size={18} />
          </button>
          <button 
            onClick={onCartOpen}
            className="p-2 hover:text-[#B8976F] transition-colors relative"
            aria-label="Cart"
          >
            <ShoppingBag size={18} />
            {cartCount > 0 && (
              <span className="absolute top-1 right-1 bg-[#B8976F] text-[#1C1917] text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-medium">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Search Bar */}
      {searchOpen && (
        <div className="border-t border-[#E5DFD3] bg-[#F8F5F1]">
          <form onSubmit={handleSearch} className="max-w-7xl mx-auto px-6 py-4">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search our collection..."
              className="w-full bg-transparent border-b border-[#E5DFD3] py-3 text-sm tracking-wide focus:outline-none placeholder:text-[#A39B8F]"
              autoFocus
            />
          </form>
        </div>
      )}
    </nav>
  );
};

export default Navbar;