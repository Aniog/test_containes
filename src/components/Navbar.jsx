import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, setIsOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Shop', path: '/shop' },
    { label: 'Collections', path: '/shop' },
    { label: 'About', path: '/#about' },
    { label: 'Journal', path: '/#journal' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cream/95 backdrop-blur-sm border-b border-sand shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-charcoal"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {/* Logo */}
        <Link to="/" className="font-serif text-2xl md:text-3xl font-semibold tracking-wide text-charcoal">
          VELMORA
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <Link
              key={link.label}
              to={link.path}
              className="text-xs uppercase tracking-widest text-stone hover:text-charcoal transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right icons */}
        <div className="flex items-center gap-4">
          <button className="p-2 text-charcoal hover:text-gold transition-colors" aria-label="Search">
            <Search className="w-4 h-4 md:w-5 md:h-5" />
          </button>
          <button
            className="p-2 text-charcoal hover:text-gold transition-colors relative"
            onClick={() => setIsOpen(true)}
            aria-label="Cart"
          >
            <ShoppingBag className="w-4 h-4 md:w-5 md:h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-gold text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-medium">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-cream border-t border-sand">
          <div className="px-4 py-6 flex flex-col gap-4">
            {navLinks.map(link => (
              <Link
                key={link.label}
                to={link.path}
                className="text-sm uppercase tracking-widest text-stone hover:text-charcoal transition-colors py-2"
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
};

export default Navbar;
