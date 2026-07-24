import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const [isSolid, setIsSolid] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsSolid(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`nav fixed top-0 left-0 right-0 z-50 px-6 py-5 flex items-center justify-between ${isSolid ? 'solid' : 'bg-transparent'}`}>
      <Link to="/" className="heading-serif text-2xl tracking-[0.15em] text-[#2C2825]">VELMORA</Link>
      
      <div className="hidden md:flex items-center gap-10 text-sm tracking-[0.08em] uppercase">
        <Link to="/shop" className="hover:text-[#B8976F] transition-colors">Shop</Link>
        <Link to="/shop" className="hover:text-[#B8976F] transition-colors">Collections</Link>
        <Link to="/" className="hover:text-[#B8976F] transition-colors">About</Link>
        <a href="#journal" className="hover:text-[#B8976F] transition-colors">Journal</a>
      </div>

      <div className="flex items-center gap-5">
        <button className="text-[#2C2825] hover:text-[#B8976F] transition-colors">
          <Search size={18} />
        </button>
        <button 
          onClick={() => setIsCartOpen(true)}
          className="relative text-[#2C2825] hover:text-[#B8976F] transition-colors"
        >
          <ShoppingBag size={18} />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#B8976F] text-white text-[10px] rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </nav>
  );
}