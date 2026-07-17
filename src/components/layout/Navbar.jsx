import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function Navbar({ onCartOpen }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems } = useCart();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClasses = `
    fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out
    ${scrolled ? 'bg-cream/95 backdrop-blur-md shadow-sm' : 'bg-transparent'}
  `;

  const linkClasses = 'text-sm uppercase tracking-widest font-medium hover:text-gold transition-colors duration-300';

  return (
    <>
      <nav className={navClasses}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Mobile menu toggle */}
            <button
              className="lg:hidden text-charcoal"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

            {/* Left nav links — desktop */}
            <div className="hidden lg:flex items-center gap-10">
              <Link to="/shop" className={linkClasses}>Shop</Link>
              <Link to="/shop" className={linkClasses}>Collections</Link>
            </div>

            {/* Logo */}
            <Link
              to="/"
              className={`font-serif text-2xl md:text-3xl tracking-widest transition-colors duration-500 ${
                scrolled ? 'text-charcoal' : 'text-white'
              }`}
            >
              VELMORA
            </Link>

            {/* Right nav */}
            <div className="flex items-center gap-6">
              <Link to="/about" className={`hidden md:inline-block ${linkClasses} ${scrolled ? 'text-charcoal' : 'text-white'}`}>
                About
              </Link>
              <Link to="/journal" className={`hidden md:inline-block ${linkClasses} ${scrolled ? 'text-charcoal' : 'text-white'}`}>
                Journal
              </Link>
              <button
                aria-label="Search"
                className={`hover:text-gold transition-colors duration-300 ${scrolled ? 'text-charcoal' : 'text-white'}`}
              >
                <Search size={18} />
              </button>
              <button
                aria-label="Open cart"
                className={`relative hover:text-gold transition-colors duration-300 ${scrolled ? 'text-charcoal' : 'text-white'}`}
                onClick={onCartOpen}
              >
                <ShoppingBag size={18} />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-gold text-white text-[10px] font-medium w-4 h-4 rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-400 ease-out ${
            mobileOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-6 pb-6 pt-2 bg-cream border-t border-stone/10 space-y-4">
            <Link to="/shop" className="block text-sm uppercase tracking-widest hover:text-gold" onClick={() => setMobileOpen(false)}>Shop</Link>
            <Link to="/shop" className="block text-sm uppercase tracking-widest hover:text-gold" onClick={() => setMobileOpen(false)}>Collections</Link>
            <Link to="/about" className="block text-sm uppercase tracking-widest hover:text-gold" onClick={() => setMobileOpen(false)}>About</Link>
            <Link to="/journal" className="block text-sm uppercase tracking-widest hover:text-gold" onClick={() => setMobileOpen(false)}>Journal</Link>
          </div>
        </div>
      </nav>

      {/* Overlay for mobile */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </>
  );
}