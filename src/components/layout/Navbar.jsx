import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { cn } from '../../lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cart, setIsOpen: setIsCartOpen } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 flex items-center justify-between',
        isScrolled || !isHome ? 'bg-[#FAF9F6] shadow-sm py-3' : 'bg-transparent text-white'
      )}
    >
      {/* Left: Logo */}
      <Link to="/" className="text-2xl font-serif tracking-widest font-semibold flex-1">
        VELMORA
      </Link>

      {/* Center: Desktop Links */}
      <div className="hidden md:flex items-center gap-8 flex-1 justify-center font-sans text-sm tracking-widest uppercase">
        <Link to="/shop" className="hover:text-[#C5A059] transition-colors">Shop</Link>
        <Link to="/collections" className="hover:text-[#C5A059] transition-colors">Collections</Link>
        <Link to="/about" className="hover:text-[#C5A059] transition-colors">About</Link>
        <Link to="/journal" className="hover:text-[#C5A059] transition-colors">Journal</Link>
      </div>

      {/* Right: Icons */}
      <div className="flex items-center gap-6 flex-1 justify-end">
        <button className="hover:text-[#C5A059] transition-colors">
          <Search size={20} />
        </button>
        <button 
          onClick={() => setIsCartOpen(true)}
          className="hover:text-[#C5A059] transition-colors relative"
        >
          <ShoppingBag size={20} />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-[#C5A059] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-sans font-bold">
              {cartCount}
            </span>
          )}
        </button>
        <button 
          className="md:hidden hover:text-[#C5A059] transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#FAF9F6] z-40 flex flex-col items-center justify-center gap-8 text-black md:hidden">
            <Link to="/shop" onClick={() => setIsMenuOpen(false)} className="text-2xl font-serif uppercase tracking-widest">Shop</Link>
            <Link to="/collections" onClick={() => setIsMenuOpen(false)} className="text-2xl font-serif uppercase tracking-widest">Collections</Link>
            <Link to="/about" onClick={() => setIsMenuOpen(false)} className="text-2xl font-serif uppercase tracking-widest">About</Link>
            <Link to="/journal" onClick={() => setIsMenuOpen(false)} className="text-2xl font-serif uppercase tracking-widest">Journal</Link>
            <button onClick={() => setIsMenuOpen(false)} className="absolute top-6 right-6">
                <X size={24} />
            </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
