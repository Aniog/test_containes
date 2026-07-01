import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { useCart } from '@/lib/CartContext';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';
  const navBackground = isScrolled || !isHome ? 'bg-velmora-cream/95 backdrop-blur-sm' : 'bg-transparent';
  const textColor = isScrolled || !isHome ? 'text-velmora-charcoal' : 'text-white';
  const logoColor = isScrolled || !isHome ? 'text-velmora-charcoal' : 'text-white';

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-6",
      navBackground
    )}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Left Links - Desktop */}
        <div className={cn("hidden lg:flex items-center space-x-8 text-sm uppercase tracking-widest", textColor)}>
          <Link to="/shop" className="hover:opacity-70 transition-opacity">Shop</Link>
          <Link to="/collections" className="hover:opacity-70 transition-opacity">Collections</Link>
          <Link to="/about" className="hover:opacity-70 transition-opacity">About</Link>
          <Link to="/journal" className="hover:opacity-70 transition-opacity">Journal</Link>
        </div>

        {/* Logo */}
        <Link to="/" className={cn("text-2xl font-serif tracking-[0.2em] transition-colors", logoColor)}>
          VELMORA
        </Link>

        {/* Right Icons */}
        <div className={cn("flex items-center space-x-6", textColor)}>
          <button className="hover:opacity-70 transition-opacity hidden sm:block">
            <Search size={20} strokeWidth={1.5} />
          </button>
          <button 
            onClick={() => setIsCartOpen(true)}
            className="hover:opacity-70 transition-opacity flex items-center space-x-1"
          >
            <ShoppingBag size={20} strokeWidth={1.5} />
            {cartCount > 0 && (
              <span className="text-xs font-medium">({cartCount})</span>
            )}
          </button>
          <button 
            className="lg:hidden hover:opacity-70 transition-opacity"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-velmora-cream border-t border-velmora-charcoal/5 h-screen overflow-y-auto">
          <div className="flex flex-col p-8 space-y-6 text-lg uppercase tracking-widest font-serif text-velmora-charcoal">
            <Link to="/shop" onClick={() => setIsMobileMenuOpen(false)}>Shop</Link>
            <Link to="/collections" onClick={() => setIsMobileMenuOpen(false)}>Collections</Link>
            <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
            <Link to="/journal" onClick={() => setIsMobileMenuOpen(false)}>Journal</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
