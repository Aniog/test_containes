import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, toggleCart } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cream/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 -ml-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5 text-espresso" /> : <Menu className="w-5 h-5 text-espresso" />}
          </button>

          {/* Left nav - desktop */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/shop" className="text-sm text-espresso font-sans tracking-wider hover:text-gold transition-colors">
              Shop
            </Link>
            <Link to="/shop" className="text-sm text-espresso font-sans tracking-wider hover:text-gold transition-colors">
              Collections
            </Link>
          </nav>

          {/* Center logo */}
          <Link to="/" className="font-serif text-2xl md:text-3xl tracking-[0.25em] text-espresso">
            VELMORA
          </Link>

          {/* Right icons */}
          <div className="flex items-center gap-5">
            <nav className="hidden md:flex items-center gap-8 mr-4">
              <Link to="/about" className="text-sm text-espresso font-sans tracking-wider hover:text-gold transition-colors">
                About
              </Link>
              <Link to="/journal" className="text-sm text-espresso font-sans tracking-wider hover:text-gold transition-colors">
                Journal
              </Link>
            </nav>
            <button className="p-1 hover:text-gold transition-colors" aria-label="Search">
              <Search className="w-5 h-5" />
            </button>
            <button
              className="p-1 relative hover:text-gold transition-colors"
              onClick={toggleCart}
              aria-label="Open cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-gold text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-sans font-medium">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-cream border-t border-warm-border animate-fade-in">
          <div className="px-4 py-6 space-y-4">
            <Link to="/shop" className="block text-sm text-espresso tracking-wider py-2" onClick={() => setMobileOpen(false)}>Shop</Link>
            <Link to="/shop" className="block text-sm text-espresso tracking-wider py-2" onClick={() => setMobileOpen(false)}>Collections</Link>
            <Link to="/about" className="block text-sm text-espresso tracking-wider py-2" onClick={() => setMobileOpen(false)}>About</Link>
            <Link to="/journal" className="block text-sm text-espresso tracking-wider py-2" onClick={() => setMobileOpen(false)}>Journal</Link>
          </div>
        </div>
      )}
    </header>
  );
}