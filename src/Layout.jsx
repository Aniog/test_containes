import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Search, ShoppingBag, X } from 'lucide-react';
import { useCart } from './context/CartContext.jsx';
import CartDrawer from './components/layout/CartDrawer.jsx';
import { cn } from './lib/utils';

const Layout = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartCount, isCartOpen, setIsCartOpen } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen relative">
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 flex items-center justify-between",
          isScrolled || !isHome || isMenuOpen
            ? "bg-white text-foreground shadow-sm"
            : "bg-transparent text-white"
        )}
      >
        <div className="flex items-center gap-4 lg:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className="hidden lg:flex items-center gap-8 text-xs uppercase tracking-widest font-bold">
          <Link to="/shop" className="hover:text-primary transition-colors">Shop</Link>
          <Link to="#" className="hover:text-primary transition-colors">Collections</Link>
        </div>

        <Link to="/" className="text-2xl font-serif font-bold tracking-[0.2em] absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0">
          VELMORA
        </Link>

        <div className="flex items-center gap-6">
          <div className="hidden lg:flex items-center gap-8 text-xs uppercase tracking-widest font-bold mr-6">
            <Link to="#" className="hover:text-primary transition-colors">About</Link>
            <Link to="#" className="hover:text-primary transition-colors">Journal</Link>
          </div>
          <button className="hover:text-primary transition-colors translate-y-[-1px]">
            <Search size={22} />
          </button>
          <button
            className="relative hover:text-primary transition-colors"
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingBag size={22} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-24 px-6 flex flex-col gap-6 text-xl uppercase tracking-widest font-serif lg:hidden animate-in fade-in slide-in-from-top-4 duration-300">
          <Link to="/shop">Shop</Link>
          <Link to="#">Collections</Link>
          <Link to="#">About</Link>
          <Link to="#">Journal</Link>
        </div>
      )}

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-[#1A1A1A] text-white py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-serif tracking-[0.2em] font-bold">VELMORA</h2>
            <p className="text-muted text-sm max-w-xs leading-relaxed">
              Timeless, demi-fine jewelry designed for the modern woman. 
              Elevated essentials for every treasure-worthy moment.
            </p>
          </div>
          
          <div className="flex flex-col gap-4">
            <h3 className="uppercase text-xs tracking-widest font-bold text-primary">Shop</h3>
            <div className="flex flex-col gap-3 text-sm text-gray-400">
              <Link to="/shop" className="hover:text-white transition-colors">All Jewelry</Link>
              <Link to="#" className="hover:text-white transition-colors">Earrings</Link>
              <Link to="#" className="hover:text-white transition-colors">Necklaces</Link>
              <Link to="#" className="hover:text-white transition-colors">Huggies</Link>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="uppercase text-xs tracking-widest font-bold text-primary">Help</h3>
            <div className="flex flex-col gap-3 text-sm text-gray-400">
              <Link to="#" className="hover:text-white transition-colors">Shipping & Returns</Link>
              <Link to="#" className="hover:text-white transition-colors">Jewelry Care</Link>
              <Link to="#" className="hover:text-white transition-colors">Contact Us</Link>
              <Link to="#" className="hover:text-white transition-colors">FAQ</Link>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="uppercase text-xs tracking-widest font-bold text-primary">Company</h3>
            <div className="flex flex-col gap-3 text-sm text-gray-400">
              <Link to="#" className="hover:text-white transition-colors">Our Story</Link>
              <Link to="#" className="hover:text-white transition-colors">Journal</Link>
              <Link to="#" className="hover:text-white transition-colors">Sustainability</Link>
              <Link to="#" className="hover:text-white transition-colors">Stockists</Link>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.1em] font-medium text-gray-500">
          <p>© 2026 VELMORA FINE JEWELRY. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </footer>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
};

export default Layout;
