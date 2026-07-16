import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { cart, setIsCartOpen } = useCart();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled || !isHome ? 'bg-white text-primary py-4 shadow-sm' : 'bg-transparent text-white py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* Left: Brand */}
        <div className="flex-1">
          <Link to="/" className="font-serif text-2xl tracking-[0.2em]">VELMORA</Link>
        </div>

        {/* Center: Desktop Links */}
        <div className="hidden lg:flex items-center gap-12 flex-[2] justify-center">
          <Link to="/shop" className="font-serif uppercase tracking-widest text-[10px] hover:text-accent transition-colors">Shop</Link>
          <Link to="/collections" className="font-serif uppercase tracking-widest text-[10px] hover:text-accent transition-colors">Collections</Link>
          <Link to="/about" className="font-serif uppercase tracking-widest text-[10px] hover:text-accent transition-colors">About</Link>
          <Link to="/journal" className="font-serif uppercase tracking-widest text-[10px] hover:text-accent transition-colors">Journal</Link>
        </div>

        {/* Right: Icons */}
        <div className="flex-1 flex items-center justify-end gap-6">
          <button className="hover:text-accent transition-colors"><Search size={20} strokeWidth={1.5} /></button>
          <button 
            onClick={() => setIsCartOpen(true)}
            className="hover:text-accent transition-colors relative"
          >
            <ShoppingBag size={20} strokeWidth={1.5} />
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-accent text-white text-[8px] w-3.5 h-3.5 flex items-center justify-center rounded-full">
                {cart.reduce((a, b) => a + b.quantity, 0)}
              </span>
            )}
          </button>
          <button 
            className="lg:hidden hover:text-accent transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 top-[72px] bg-white text-primary z-40 transition-transform duration-500 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full gap-8">
          <Link to="/shop" className="font-serif text-3xl uppercase tracking-widest">Shop</Link>
          <Link to="/collections" className="font-serif text-3xl uppercase tracking-widest">Collections</Link>
          <Link to="/about" className="font-serif text-3xl uppercase tracking-widest">About</Link>
          <Link to="/journal" className="font-serif text-3xl uppercase tracking-widest">Journal</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
