import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function Navbar({ onCartOpen }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { itemCount } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cream/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 -ml-2 text-dark-forest"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            {['Shop', 'Collections', 'About', 'Journal'].map((link) => (
              <Link
                key={link}
                to={link === 'Shop' ? '/shop' : '/'}
                className="text-sm tracking-wider uppercase text-dark-forest/80 hover:text-warm-gold transition-colors duration-300"
              >
                {link}
              </Link>
            ))}
          </div>

          {/* Logo */}
          <Link
            to="/"
            className={`font-serif text-2xl md:text-3xl tracking-widest transition-colors duration-500 ${
              scrolled ? 'text-dark-forest' : 'text-white'
            }`}
          >
            VELMORA
          </Link>

          {/* Right icons */}
          <div className="flex items-center gap-4">
            <button
              className={`p-2 transition-colors duration-300 ${
                scrolled ? 'text-dark-forest hover:text-warm-gold' : 'text-white hover:text-muted-gold'
              }`}
            >
              <Search size={20} />
            </button>
            <button
              onClick={onCartOpen}
              className={`relative p-2 transition-colors duration-300 ${
                scrolled ? 'text-dark-forest hover:text-warm-gold' : 'text-white hover:text-muted-gold'
              }`}
            >
              <ShoppingBag size={20} />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-warm-gold text-white text-[10px] font-medium w-4 h-4 rounded-full flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ${
          mobileOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-cream border-t border-warm-beige px-4 py-4 space-y-3">
          {['Shop', 'Collections', 'About', 'Journal'].map((link) => (
            <Link
              key={link}
              to={link === 'Shop' ? '/shop' : '/'}
              className="block text-sm tracking-wider uppercase text-dark-forest/80 hover:text-warm-gold py-2"
              onClick={() => setMobileOpen(false)}
            >
              {link}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}