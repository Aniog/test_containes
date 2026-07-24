import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function Navbar({ onCartClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cartCount } = useCart();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(0,0,0,0.04)]'
          : 'bg-transparent'
      }`}
    >
      <div className="container-wide section-padding">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 -ml-2 text-velvet-800"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Center links - desktop */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/shop" className={`text-sm font-sans tracking-wide uppercase transition-colors ${scrolled ? 'text-velvet-800 hover:text-velvet-500' : 'text-white/90 hover:text-white'}`}>
              Shop
            </Link>
            <Link to="/shop?category=earrings" className={`text-sm font-sans tracking-wide uppercase transition-colors ${scrolled ? 'text-velvet-800 hover:text-velvet-500' : 'text-white/90 hover:text-white'}`}>
              Collections
            </Link>
            <Link to="/about" className={`text-sm font-sans tracking-wide uppercase transition-colors ${scrolled ? 'text-velvet-800 hover:text-velvet-500' : 'text-white/90 hover:text-white'}`}>
              About
            </Link>
            <Link to="/journal" className={`text-sm font-sans tracking-wide uppercase transition-colors ${scrolled ? 'text-velvet-800 hover:text-velvet-500' : 'text-white/90 hover:text-white'}`}>
              Journal
            </Link>
          </div>

          {/* Logo - centered */}
          <Link
            to="/"
            className={`font-serif text-2xl md:text-3xl tracking-widest transition-colors absolute left-1/2 -translate-x-1/2 ${
              scrolled ? 'text-velvet-800' : 'text-white'
            }`}
          >
            VELMORA
          </Link>

          {/* Right icons */}
          <div className="flex items-center gap-1 md:gap-3">
            <button className={`p-2 transition-colors ${scrolled ? 'text-velvet-800 hover:text-velvet-500' : 'text-white/90 hover:text-white'}`} aria-label="Search">
              <Search className="w-4 h-4 md:w-5 md:h-5" />
            </button>
            <button onClick={onCartClick} className={`p-2 transition-colors relative ${scrolled ? 'text-velvet-800 hover:text-velvet-500' : 'text-white/90 hover:text-white'}`} aria-label="Cart">
              <ShoppingBag className="w-4 h-4 md:w-5 md:h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-velvet-500 text-white text-[10px] font-sans font-medium w-4.5 h-4.5 rounded-full flex items-center justify-center leading-none">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-sand-200 py-4 flex flex-col gap-3 animate-fade-in">
            <Link to="/shop" onClick={() => setMobileMenuOpen(false)} className="text-sm font-sans tracking-wide uppercase text-velvet-800 py-2">
              Shop
            </Link>
            <Link to="/shop?category=earrings" onClick={() => setMobileMenuOpen(false)} className="text-sm font-sans tracking-wide uppercase text-velvet-800 py-2">
              Collections
            </Link>
            <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="text-sm font-sans tracking-wide uppercase text-velvet-800 py-2">
              About
            </Link>
            <Link to="/journal" onClick={() => setMobileMenuOpen(false)} className="text-sm font-sans tracking-wide uppercase text-velvet-800 py-2">
              Journal
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
