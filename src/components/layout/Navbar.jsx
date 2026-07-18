import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { itemCount, openCart } = useCart();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-velvet-50/95 backdrop-blur-md shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 flex items-center">
        {/* Logo — Left */}
        <Link
          to="/"
          className={`font-serif text-2xl md:text-3xl tracking-[0.3em] transition-colors duration-300 flex-shrink-0 ${
            scrolled ? 'text-velvet-900' : 'text-white'
          }`}
        >
          VELMORA
        </Link>

        {/* Nav Links — Center (desktop) */}
        <div className="hidden md:flex items-center justify-center gap-8 flex-1">
          <Link
            to="/shop"
            className={`text-sm tracking-wider uppercase transition-colors duration-300 ${
              scrolled ? 'text-velvet-700 hover:text-velvet-900' : 'text-white/80 hover:text-white'
            }`}
          >
            Shop
          </Link>
          <Link
            to="/shop?category=earrings"
            className={`text-sm tracking-wider uppercase transition-colors duration-300 ${
              scrolled ? 'text-velvet-700 hover:text-velvet-900' : 'text-white/80 hover:text-white'
            }`}
          >
            Collections
          </Link>
          <Link
            to="/"
            className={`text-sm tracking-wider uppercase transition-colors duration-300 ${
              scrolled ? 'text-velvet-700 hover:text-velvet-900' : 'text-white/80 hover:text-white'
            }`}
          >
            About
          </Link>
          <Link
            to="/"
            className={`text-sm tracking-wider uppercase transition-colors duration-300 ${
              scrolled ? 'text-velvet-700 hover:text-velvet-900' : 'text-white/80 hover:text-white'
            }`}
          >
            Journal
          </Link>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-4 md:gap-5 ml-auto flex-shrink-0">
          <button
            className={`p-1 transition-colors duration-300 ${
              scrolled ? 'text-velvet-700 hover:text-velvet-900' : 'text-white/80 hover:text-white'
            }`}
            aria-label="Search"
          >
            <Search className="w-5 h-5" />
          </button>
          <button
            onClick={openCart}
            className={`p-1 relative transition-colors duration-300 ${
              scrolled ? 'text-velvet-700 hover:text-velvet-900' : 'text-white/80 hover:text-white'
            }`}
            aria-label="Cart"
          >
            <ShoppingBag className="w-5 h-5" />
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-gold-500 text-white text-[10px] font-medium rounded-full flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-1 ${scrolled ? 'text-velvet-800' : 'text-white'}`}
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 top-0 z-40 bg-velvet-50 transition-transform duration-400 ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-5 right-6 p-2 text-velvet-800"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
          <Link to="/shop" onClick={() => setMobileMenuOpen(false)} className="text-velvet-800 text-lg tracking-widest uppercase font-serif">
            Shop
          </Link>
          <Link to="/shop?category=earrings" onClick={() => setMobileMenuOpen(false)} className="text-velvet-800 text-lg tracking-widest uppercase font-serif">
            Collections
          </Link>
          <Link to="/" onClick={() => setMobileMenuOpen(false)} className="text-velvet-800 text-lg tracking-widest uppercase font-serif">
            About
          </Link>
          <Link to="/" onClick={() => setMobileMenuOpen(false)} className="text-velvet-800 text-lg tracking-widest uppercase font-serif">
            Journal
          </Link>
        </div>
      </div>
    </nav>
  );
}