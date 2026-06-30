import { Link } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useCartStore } from '../../store/cartStore';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openCart, items } = useCartStore();

  const cartItemCount = items.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-sm shadow-sm border-b border-border/50 py-4 text-foreground' 
          : 'bg-transparent py-6 text-foreground md:text-secondary'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* Logo */}
          <Link 
            to="/" 
            className="text-2xl md:text-3xl font-serif font-semibold tracking-wider uppercase"
          >
            Velmora
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/shop" className="text-sm font-medium tracking-wide uppercase hover:opacity-70 transition-opacity">Shop</Link>
            <Link to="/collections" className="text-sm font-medium tracking-wide uppercase hover:opacity-70 transition-opacity">Collections</Link>
            <Link to="/about" className="text-sm font-medium tracking-wide uppercase hover:opacity-70 transition-opacity">About</Link>
            <Link to="/journal" className="text-sm font-medium tracking-wide uppercase hover:opacity-70 transition-opacity">Journal</Link>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4 md:space-x-6">
            <button className="hover:opacity-70 transition-opacity">
              <Search className="w-5 h-5" />
            </button>
            <button 
              className="hover:opacity-70 transition-opacity relative"
              onClick={openCart}
            >
              <ShoppingBag className="w-5 h-5" />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-background text-foreground z-50 flex flex-col pt-20 px-6">
          <button 
            className="absolute top-6 right-6"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X className="w-6 h-6" />
          </button>
          <nav className="flex flex-col space-y-6 text-xl font-serif">
            <Link to="/shop" onClick={() => setIsMobileMenuOpen(false)}>Shop</Link>
            <Link to="/collections" onClick={() => setIsMobileMenuOpen(false)}>Collections</Link>
            <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
            <Link to="/journal" onClick={() => setIsMobileMenuOpen(false)}>Journal</Link>
          </nav>
        </div>
      )}
    </header>
  );
}

