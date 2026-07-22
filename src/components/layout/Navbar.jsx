import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, toggleDrawer } = useCart();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <button
            className="md:hidden text-[#1A1A1A]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Logo */}
          <Link
            to="/"
            className={`font-serif text-xl md:text-2xl tracking-[0.2em] font-semibold transition-colors duration-300 ${
              scrolled ? 'text-[#1A1A1A]' : 'text-white'
            }`}
          >
            VELMORA
          </Link>

          {/* Center nav — desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {['Shop', 'Collections', 'About', 'Journal'].map((link) => (
              <Link
                key={link}
                to={link === 'Shop' ? '/shop' : '/'}
                className={`text-sm tracking-widest uppercase font-medium transition-colors duration-300 hover:text-[#C8A45C] ${
                  scrolled ? 'text-[#6B6B6B]' : 'text-white/80'
                }`}
              >
                {link}
              </Link>
            ))}
          </nav>

          {/* Right icons */}
          <div className="flex items-center gap-4">
            <button
              className={`transition-colors duration-300 hover:text-[#C8A45C] ${
                scrolled ? 'text-[#1A1A1A]' : 'text-white/80'
              }`}
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              className={`relative transition-colors duration-300 hover:text-[#C8A45C] ${
                scrolled ? 'text-[#1A1A1A]' : 'text-white/80'
              }`}
              onClick={toggleDrawer}
              aria-label="Open cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#C8A45C] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-medium">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-64 bg-white' : 'max-h-0'
        }`}
      >
        <div className="px-4 py-4 border-t border-[#E8E2D8] space-y-3">
          {['Shop', 'Collections', 'About', 'Journal'].map((link) => (
            <Link
              key={link}
              to={link === 'Shop' ? '/shop' : '/'}
              className="block text-sm tracking-widest uppercase text-[#6B6B6B] hover:text-[#C8A45C] transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}