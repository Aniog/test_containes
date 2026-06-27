import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { cartCount, openCart } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Shop', path: '/shop' },
    { label: 'Collections', path: '/shop' },
    { label: 'About', path: '/about' },
    { label: 'Journal', path: '/journal' },
  ];

  const isHome = location.pathname === '/';

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || !isHome 
          ? 'bg-[#F5F2ED] border-b border-[#E8E4DC]' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
        {/* Left: Logo */}
        <Link to="/" className="font-serif text-2xl tracking-[4px] text-[#2C2823]">
          VELMORA
        </Link>

        {/* Center: Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10 text-sm tracking-[1.5px]">
          {navLinks.map((link) => (
            <Link 
              key={link.label} 
              to={link.path}
              className="text-[#2C2823] hover:text-[#C5A46E] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right: Icons */}
        <div className="flex items-center gap-5">
          {/* Search */}
          <div className="relative hidden sm:block">
            {searchOpen ? (
              <div className="flex items-center">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  className="bg-transparent border-b border-[#C5A46E] text-sm py-1 pr-8 w-48 focus:outline-none placeholder:text-[#A8A29C]"
                  autoFocus
                  onBlur={() => {
                    if (!searchQuery) setSearchOpen(false);
                  }}
                />
                <button onClick={() => { setSearchOpen(false); setSearchQuery(''); }} className="ml-2">
                  <X size={16} />
                </button>
              </div>
            ) : (
              <button onClick={() => setSearchOpen(true)} className="text-[#2C2823] hover:text-[#C5A46E] transition-colors">
                <Search size={18} />
              </button>
            )}
          </div>

          {/* Cart */}
          <button 
            onClick={openCart} 
            className="relative text-[#2C2823] hover:text-[#C5A46E] transition-colors"
            aria-label="Open cart"
          >
            <ShoppingBag size={18} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#C5A46E] text-[#0F0E0C] text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-medium">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            className="md:hidden text-[#2C2823]"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#F5F2ED] border-t border-[#E8E4DC] px-6 py-6">
          <div className="flex flex-col gap-4 text-sm tracking-[1.5px]">
            {navLinks.map((link) => (
              <Link 
                key={link.label} 
                to={link.path} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[#2C2823] py-1"
              >
                {link.label}
              </Link>
            ))}
            <Link to="/shop" onClick={() => setIsMobileMenuOpen(false)} className="text-[#2C2823] py-1">Search</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;