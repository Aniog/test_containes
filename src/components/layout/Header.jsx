import { Link } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useCartStore } from '../../lib/store';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openCart, getCartCount } = useCartStore();
  const cartCount = getCartCount();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-background shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground p-2"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* Logo */}
        <Link 
          to="/" 
          className="text-2xl md:text-3xl font-serif tracking-widest uppercase font-semibold text-foreground absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0"
        >
          Velmora
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm uppercase tracking-wider">
          <Link to="/shop" className="hover:text-secondary transition-colors">Shop</Link>
          <Link to="/shop?category=collections" className="hover:text-secondary transition-colors">Collections</Link>
          <Link to="/about" className="hover:text-secondary transition-colors">About</Link>
          <Link to="/journal" className="hover:text-secondary transition-colors">Journal</Link>
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <button className="text-foreground hover:text-secondary transition-colors p-2 hidden sm:block">
            <Search className="w-5 h-5" />
          </button>
          <button 
            className="text-foreground hover:text-secondary transition-colors p-2 relative"
            onClick={openCart}
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-primary text-primary-foreground text-[10px] w-4 h-4 rounded-full flex items-center justify-center translate-x-1/4 -translate-y-1/4">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-background z-50 flex flex-col pt-20 px-6">
          <button 
            className="absolute top-6 right-6 text-foreground p-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X className="w-6 h-6" />
          </button>
          
          <nav className="flex flex-col gap-6 text-2xl font-serif text-center mt-12">
            <Link to="/shop" onClick={() => setIsMobileMenuOpen(false)}>Shop</Link>
            <Link to="/shop?category=collections" onClick={() => setIsMobileMenuOpen(false)}>Collections</Link>
            <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
            <Link to="/journal" onClick={() => setIsMobileMenuOpen(false)}>Journal</Link>
          </nav>
        </div>
      )}
    </header>
  );
};
