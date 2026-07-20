import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { cn } from '../../lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-500 py-6 px-6 md:px-12 flex items-center justify-between',
        isScrolled || !isHome ? 'bg-background/90 backdrop-blur-md border-b border-border py-4' : 'bg-transparent text-white'
      )}
    >
      {/* Left: Logo */}
      <div className="flex-1">
        <Link to="/" className="font-serif text-2xl tracking-[0.2em] font-medium animate-in fade-in slide-in-from-left duration-1000">
          VELMORA
        </Link>
      </div>

      {/* Center: Links */}
      <div className="hidden md:flex items-center gap-10 font-sans text-[11px] uppercase tracking-[0.2em] font-semibold text-inherit">
        <Link to="/shop" className="hover:text-accent transition-colors">Shop</Link>
        <Link to="/collections" className="hover:text-accent transition-colors">Collections</Link>
        <Link to="/about" className="hover:text-accent transition-colors">About</Link>
        <Link to="/journal" className="hover:text-accent transition-colors">Journal</Link>
      </div>

      {/* Right: Icons */}
      <div className="flex-1 flex items-center justify-end gap-6 text-inherit">
        <button className="hover:text-accent transition-colors">
          <Search size={20} strokeWidth={1.5} />
        </button>
        <button 
          className="relative hover:text-accent transition-colors"
          onClick={() => setIsCartOpen(true)}
        >
          <ShoppingBag size={20} strokeWidth={1.5} />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-accent text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
              {cartCount}
            </span>
          )}
        </button>
        <button 
          className="md:hidden hover:text-accent transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-background z-40 flex flex-col items-center justify-center gap-8 md:hidden">
          <Link to="/shop" onClick={() => setIsMobileMenuOpen(false)} className="font-serif text-3xl">Shop</Link>
          <Link to="/collections" onClick={() => setIsMobileMenuOpen(false)} className="font-serif text-3xl">Collections</Link>
          <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="font-serif text-3xl">About</Link>
          <Link to="/journal" onClick={() => setIsMobileMenuOpen(false)} className="font-serif text-3xl">Journal</Link>
          <button 
            className="absolute top-6 right-6"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X size={28} />
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
