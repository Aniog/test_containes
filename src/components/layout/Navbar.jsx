import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { cartCount, toggleCart } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const navLinks = [
    { to: '/shop', label: 'Shop' },
    { to: '/shop?category=earrings', label: 'Collections' },
    { to: '/about', label: 'About' },
    { to: '/journal', label: 'Journal' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-velmora-cream/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 -ml-2 text-velmora-black"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          {/* Left nav links - desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.slice(0, 2).map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-xs font-sans font-medium tracking-widest uppercase text-velmora-black/80 hover:text-velmora-gold-dark transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Logo */}
          <Link
            to="/"
            className="font-serif text-2xl md:text-3xl font-semibold tracking-wide text-velmora-black"
          >
            VELMORA
          </Link>

          {/* Right nav links - desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.slice(2).map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-xs font-sans font-medium tracking-widest uppercase text-velmora-black/80 hover:text-velmora-gold-dark transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
            <button className="p-2 text-velmora-black/80 hover:text-velmora-gold-dark transition-colors duration-300" aria-label="Search">
              <Search size={18} />
            </button>
            <button
              className="p-2 text-velmora-black/80 hover:text-velmora-gold-dark transition-colors duration-300 relative"
              onClick={toggleCart}
              aria-label="Open cart"
            >
              <ShoppingBag size={18} />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-velmora-gold text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile right icons */}
          <div className="flex md:hidden items-center gap-2">
            <button className="p-2 text-velmora-black/80" aria-label="Search">
              <Search size={18} />
            </button>
            <button
              className="p-2 text-velmora-black/80 relative"
              onClick={toggleCart}
              aria-label="Open cart"
            >
              <ShoppingBag size={18} />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-velmora-gold text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden bg-velmora-cream border-t border-velmora-border">
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="block text-sm font-sans font-medium tracking-widest uppercase text-velmora-black/80 hover:text-velmora-gold-dark transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
