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
    <nav className={`nav fixed top-0 left-0 right-0 z-50 ${scrolled ? 'scrolled bg-[#F8F5F1] border-b border-[#E5DFD3]' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="serif text-2xl tracking-[0.2em] text-[#2C2823]">
          VELMORA
        </Link>

        {/* Center Navigation */}
        <div className="hidden md:flex items-center gap-10 text-sm tracking-[0.1em] uppercase">
          <Link to="/shop" className="hover:text-[#8B7355] transition-colors">Shop</Link>
          <Link to="/shop?category=Collections" className="hover:text-[#8B7355] transition-colors">Collections</Link>
          <Link to="/about" className="hover:text-[#8B7355] transition-colors">About</Link>
          <Link to="/journal" className="hover:text-[#8B7355] transition-colors">Journal</Link>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="relative">
            {searchOpen ? (
              <form onSubmit={handleSearch} className="absolute right-0 top-1/2 -translate-y-1/2">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  className="input w-64 py-2 text-sm"
                  autoFocus
                  onBlur={() => { if (!searchQuery) setSearchOpen(false); }}
                />
              </form>
            ) : (
              <button onClick={() => setSearchOpen(true)} className="p-2 hover:text-[#8B7355] transition-colors">
                <Search size={18} />
              </button>
            )}
          </div>

          {/* Cart */}
          <button onClick={onCartOpen} className="p-2 hover:text-[#8B7355] transition-colors relative">
            <ShoppingBag size={18} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#8B7355] text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
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