import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Shop', path: '/shop' },
    { label: 'Collections', path: '/shop' },
    { label: 'About', path: '/' },
    { label: 'Journal', path: '/' },
  ];

  return (
    <nav
      className={`nav fixed top-0 left-0 right-0 z-50 px-6 py-5 flex items-center justify-between ${
        scrolled ? 'scrolled bg-white border-b border-[#E5DFD3]' : 'bg-transparent'
      }`}
    >
      <Link to="/" className="serif text-2xl tracking-[0.15em] text-[#2C2823]">
        VELMORA
      </Link>

      <div className="hidden md:flex items-center gap-10 text-sm tracking-[0.08em] uppercase">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            to={link.path}
            className="hover:text-[#8B7355] transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-5">
        <button className="p-2 hover:text-[#8B7355] transition-colors" aria-label="Search">
          <Search size={18} />
        </button>
        <button
          onClick={() => setIsCartOpen(true)}
          className="p-2 hover:text-[#8B7355] transition-colors relative"
          aria-label="Cart"
        >
          <ShoppingBag size={18} />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-[#8B7355] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;