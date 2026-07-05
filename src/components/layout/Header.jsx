import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { cartCount, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';

  return (
    <header className={cn(
      'fixed top-0 left-0 w-full z-50 transition-all duration-500 py-4 px-6 md:px-12 flex items-center justify-between',
      isScrolled || !isHome ? 'bg-velmora-cream/95 backdrop-blur-sm shadow-sm py-3' : 'bg-transparent'
    )}>
      {/* Left: Logo */}
      <Link to="/" className="flex-1">
        <span className="text-2xl md:text-3xl font-serif tracking-[0.2em] font-medium">VELMORA</span>
      </Link>

      {/* Center: Nav links */}
      <nav className="hidden md:flex items-center gap-10 flex-1 justify-center translate-x-4">
        <Link to="/shop" className="text-xs uppercase tracking-widest hover:text-velmora-gold transition-colors">Shop</Link>
        <Link to="#" className="text-xs uppercase tracking-widest hover:text-velmora-gold transition-colors">Collections</Link>
        <Link to="#" className="text-xs uppercase tracking-widest hover:text-velmora-gold transition-colors">About</Link>
        <Link to="#" className="text-xs uppercase tracking-widest hover:text-velmora-gold transition-colors">Journal</Link>
      </nav>

      {/* Right: Icons */}
      <div className="flex items-center gap-6 flex-1 justify-end">
        <button className="hover:text-velmora-gold transition-colors" aria-label="Search">
          <Search size={20} />
        </button>
        <button 
          className="hover:text-velmora-gold transition-colors relative" 
          aria-label="Cart"
          onClick={() => setIsCartOpen(true)}
        >
          <ShoppingBag size={20} />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-velmora-gold text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
              {cartCount}
            </span>
          )}
        </button>
        <button 
          className="md:hidden hover:text-velmora-gold transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[60px] bg-velmora-cream z-40 p-10 flex flex-col items-center gap-8 md:hidden animate-in fade-in slide-in-from-top-4 duration-300">
          <Link to="/shop" onClick={() => setIsMobileMenuOpen(false)} className="text-lg uppercase tracking-widest underline-offset-8 decoration-velmora-gold">Shop</Link>
          <Link to="#" onClick={() => setIsMobileMenuOpen(false)} className="text-lg uppercase tracking-widest">Collections</Link>
          <Link to="#" onClick={() => setIsMobileMenuOpen(false)} className="text-lg uppercase tracking-widest">About</Link>
          <Link to="#" onClick={() => setIsMobileMenuOpen(false)} className="text-lg uppercase tracking-widest">Journal</Link>
        </div>
      )}
    </header>
  );
};

export default Header;