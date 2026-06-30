import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Shop', path: '/shop' },
    { label: 'Collections', path: '/collections' },
    { label: 'About', path: '/about' },
    { label: 'Journal', path: '/journal' },
  ];

  return (
    <nav className={`navbar fixed top-0 left-0 right-0 z-50 ${isScrolled ? 'solid' : 'bg-transparent'}`}>
      <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="serif text-2xl tracking-[0.15em] text-[#2C2C2C]">
          VELMORA
        </Link>

        {/* Center Navigation */}
        <div className="hidden md:flex items-center gap-10 text-sm tracking-[0.06em]">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`transition-colors ${location.pathname === link.path ? 'text-[#C5A26F]' : 'hover:text-[#C5A26F]'}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-5">
          <button className="p-2 hover:text-[#C5A26F] transition-colors" aria-label="Search">
            <Search size={18} />
          </button>
          <button
            onClick={() => setIsCartOpen(true)}
            className="p-2 hover:text-[#C5A26F] transition-colors relative"
            aria-label="Cart"
          >
            <ShoppingBag size={18} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#C5A26F] text-[#2C2C2C] text-[10px] flex items-center justify-center font-medium">
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
