import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { openCart, cartCount } = useCart();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navClasses = `fixed w-full top-0 z-40 transition-all duration-300 ${
    isScrolled || !isHome 
      ? 'bg-brand-light/90 backdrop-blur-md text-brand-dark shadow-sm py-4' 
      : 'bg-transparent text-white py-6'
  }`;

  const linkHover = isScrolled || !isHome ? 'hover:text-brand-gold' : 'hover:text-brand-light/80';

  return (
    <header className={navClasses}>
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Logo */}
        <Link to="/" className="font-serif text-2xl md:text-3xl tracking-widest font-medium uppercase absolute left-1/2 transform -translate-x-1/2 md:static md:translate-x-0">
          Velmora
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center space-x-8 text-sm uppercase tracking-wider font-medium">
          <Link to="/shop" className={`transition-colors ${linkHover}`}>Shop</Link>
          <Link to="/collections" className={`transition-colors ${linkHover}`}>Collections</Link>
          <Link to="/about" className={`transition-colors ${linkHover}`}>About</Link>
          <Link to="/journal" className={`transition-colors ${linkHover}`}>Journal</Link>
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-4 md:space-x-6">
          <button className={`transition-colors ${linkHover}`}>
            <Search size={20} />
          </button>
          <button 
            className={`transition-colors ${linkHover} relative`}
            onClick={openCart}
          >
            <ShoppingBag size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-brand-gold text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-sans">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-brand-light text-brand-dark shadow-lg py-4 border-t border-brand-DEFAULT/30">
          <nav className="flex flex-col space-y-4 px-6 text-sm uppercase tracking-wider">
            <Link to="/shop" className="hover:text-brand-gold py-2 border-b border-brand-DEFAULT/10">Shop</Link>
            <Link to="/collections" className="hover:text-brand-gold py-2 border-b border-brand-DEFAULT/10">Collections</Link>
            <Link to="/about" className="hover:text-brand-gold py-2 border-b border-brand-DEFAULT/10">About</Link>
            <Link to="/journal" className="hover:text-brand-gold py-2">Journal</Link>
          </nav>
        </div>
      )}
    </header>
  );
}