import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { toggleCart, itemCount } = useCart();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const bgClass = isScrolled ? 'bg-white shadow-lg' : 'bg-transparent';
  const textClass = isScrolled ? 'text-gray-900' : 'text-white';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${bgClass}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          <Link to="/" className={`font-serif text-2xl lg:text-3xl tracking-[0.2em] ${textClass}`}>
            VELMORA
          </Link>

          <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
            <Link to="/shop" className={`text-sm tracking-wider uppercase transition-colors ${textClass} hover:text-yellow-600`}>
              Shop
            </Link>
            <Link to="/collections" className={`text-sm tracking-wider uppercase transition-colors ${textClass} hover:text-yellow-600`}>
              Collections
            </Link>
            <Link to="/about" className={`text-sm tracking-wider uppercase transition-colors ${textClass} hover:text-yellow-600`}>
              About
            </Link>
            <Link to="/journal" className={`text-sm tracking-wider uppercase transition-colors ${textClass} hover:text-yellow-600`}>
              Journal
            </Link>
          </div>

          <div className="flex items-center space-x-4 lg:space-x-6">
            <button className={`transition-colors ${textClass} hover:text-yellow-600`}>
              <Search size={20} />
            </button>
            <button
              onClick={toggleCart}
              className={`relative transition-colors ${textClass} hover:text-yellow-600`}
            >
              <ShoppingBag size={20} />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-yellow-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden transition-colors ${textClass}`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-6 py-8 space-y-6">
            <Link to="/shop" className="block text-lg text-gray-900 hover:text-yellow-600 tracking-wider uppercase">
              Shop
            </Link>
            <Link to="/collections" className="block text-lg text-gray-900 hover:text-yellow-600 tracking-wider uppercase">
              Collections
            </Link>
            <Link to="/about" className="block text-lg text-gray-900 hover:text-yellow-600 tracking-wider uppercase">
              About
            </Link>
            <Link to="/journal" className="block text-lg text-gray-900 hover:text-yellow-600 tracking-wider uppercase">
              Journal
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
