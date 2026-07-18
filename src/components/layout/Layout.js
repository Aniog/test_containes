import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const Layout = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cartCount } = useCart();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navBackground = isScrolled ? 'bg-white shadow-sm' : 'bg-transparent';

  return (
    <div className="min-h-screen bg-white">
      <nav className={'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ' + navBackground}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="font-serif text-2xl font-light tracking-wider">
              VELMORA
            </Link>
            <div className="flex items-center space-x-6">
              <Link to="/shop" className="text-sm">Shop</Link>
              <button onClick={() => setIsCartOpen(true)} className="relative">
                <ShoppingBag size={20} />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        {children}
      </main>

      {isCartOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50" onClick={() => setIsCartOpen(false)}>
          <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white p-6">
            <button onClick={() => setIsCartOpen(false)} className="mb-4">
              <X size={20} />
            </button>
            <h2 className="font-serif text-xl mb-4">Your Cart ({cartCount} items)</h2>
            <p>Cart drawer - functionality coming soon</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Layout;
