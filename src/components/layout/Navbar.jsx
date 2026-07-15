import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { itemCount, openCart } = useCart();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const navLinks = [
    { to: '/shop', label: 'Shop' },
    { to: '/shop?category=Earrings', label: 'Earrings' },
    { to: '/shop?category=Necklaces', label: 'Necklaces' },
    { to: '/shop?category=Huggies', label: 'Huggies' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-velmora-cream/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="section-padding flex items-center justify-between h-16 md:h-20">
        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden p-2 -ml-2 ${scrolled ? 'text-velmora-charcoal' : 'text-white'}`}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {/* Center Nav Links — Desktop */}
        <div className="hidden md:flex items-center gap-8 flex-1 justify-center">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className={`font-sans text-xs tracking-widest uppercase transition-colors duration-300 ${
                scrolled
                  ? 'text-velmora-smoke hover:text-velmora-gold'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Logo */}
        <Link
          to="/"
          className={`font-serif text-2xl md:text-3xl tracking-super transition-colors duration-500 ${
            scrolled ? 'text-velmora-charcoal' : 'text-white'
          }`}
        >
          VELMORA
        </Link>

        {/* Right icons */}
        <div className="flex items-center gap-4 md:gap-6">
          <button
            className={`p-1 transition-colors duration-300 ${
              scrolled ? 'text-velmora-smoke hover:text-velmora-gold' : 'text-white/80 hover:text-white'
            }`}
            aria-label="Search"
          >
            <Search className="w-4 h-4 md:w-5 md:h-5" />
          </button>
          <button
            onClick={openCart}
            className={`relative p-1 transition-colors duration-300 ${
              scrolled ? 'text-velmora-smoke hover:text-velmora-gold' : 'text-white/80 hover:text-white'
            }`}
            aria-label="Cart"
          >
            <ShoppingBag className="w-4 h-4 md:w-5 md:h-5" />
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-velmora-gold text-white text-[10px] font-sans rounded-full flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed inset-0 top-16 bg-velmora-cream z-40 transition-transform duration-400 ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center gap-8 pt-16">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              onClick={() => setMobileMenuOpen(false)}
              className="font-serif text-2xl tracking-wider text-velmora-charcoal hover:text-velmora-gold transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}