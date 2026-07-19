import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const navLinks = [
  { label: 'Shop', path: '/shop' },
  { label: 'Collections', path: '/collections' },
  { label: 'About', path: '/about' },
  { label: 'Journal', path: '/journal' },
];

export default function Navbar({ onCartOpen }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { itemCount } = useCart();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#F8F5F0]/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <button
            className="md:hidden text-velvet-900"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Desktop nav left */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.slice(0, 2).map(link => (
              <Link
                key={link.path}
                to={link.path}
                className="text-sm tracking-wider text-velvet-700 hover:text-velvet-900 transition-colors duration-300 uppercase"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Logo */}
          <Link
            to="/"
            className="font-serif text-2xl md:text-3xl tracking-[0.15em] text-velvet-900 hover:text-gold transition-colors duration-300"
          >
            VELMORA
          </Link>

          {/* Desktop nav right */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.slice(2).map(link => (
              <Link
                key={link.path}
                to={link.path}
                className="text-sm tracking-wider text-velvet-700 hover:text-velvet-900 transition-colors duration-300 uppercase"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-4">
            <button className="text-velvet-700 hover:text-velvet-900 transition-colors duration-300" aria-label="Search">
              <Search className="w-5 h-5" />
            </button>
            <button
              className="text-velvet-700 hover:text-velvet-900 transition-colors duration-300 relative"
              onClick={onCartOpen}
              aria-label="Open cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 w-4 h-4 bg-gold text-white text-[10px] font-medium flex items-center justify-center rounded-full">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#F8F5F0] border-t border-velvet-200">
          <div className="px-6 py-6 space-y-4">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className="block text-sm tracking-wider text-velvet-700 hover:text-velvet-900 uppercase"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}