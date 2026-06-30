import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';

export default function Header({ cartCount, onCartClick }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-velmora-black shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="font-serif text-2xl tracking-widest text-white">
            VELMORA
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/collection" className="text-sm tracking-wide text-white hover:text-velmora-gold transition-colors">
              Shop
            </Link>
            <Link to="/collection" className="text-sm tracking-wide text-white hover:text-velmora-gold transition-colors">
              Collections
            </Link>
            <Link to="/" className="text-sm tracking-wide text-white hover:text-velmora-gold transition-colors">
              About
            </Link>
            <Link to="/" className="text-sm tracking-wide text-white hover:text-velmora-gold transition-colors">
              Journal
            </Link>
          </nav>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <button className="text-white hover:text-velmora-gold transition-colors">
              <Search size={20} />
            </button>
            <button
              onClick={onCartClick}
              className="text-white hover:text-velmora-gold transition-colors relative"
            >
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-velmora-gold text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white hover:text-velmora-gold transition-colors"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-velmora-black border-t border-velmora-charcoal">
          <nav className="flex flex-col px-4 py-6 space-y-4">
            <Link to="/collection" className="text-white hover:text-velmora-gold transition-colors py-2">
              Shop
            </Link>
            <Link to="/collection" className="text-white hover:text-velmora-gold transition-colors py-2">
              Collections
            </Link>
            <Link to="/" className="text-white hover:text-velmora-gold transition-colors py-2">
              About
            </Link>
            <Link to="/" className="text-white hover:text-velmora-gold transition-colors py-2">
              Journal
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
