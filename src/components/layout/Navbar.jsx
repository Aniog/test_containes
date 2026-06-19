import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Shop', path: '/shop' },
    { name: 'Collections', path: '/shop' },
    { name: 'About', path: '/about' },
    { name: 'Journal', path: '/journal' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled || !isHome
            ? 'bg-[var(--color-cream)] shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-[72px]">
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 -ml-2"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" style={{ color: 'var(--color-warm-black)' }} />
            </button>

            {/* Logo */}
            <Link
              to="/"
              className="font-serif text-2xl tracking-[0.2em] font-semibold"
              style={{ color: 'var(--color-warm-black)' }}
            >
              VELMORA
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="font-sans text-sm tracking-wide hover:opacity-70 transition-opacity relative group"
                  style={{ color: 'var(--color-warm-black)' }}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-[var(--color-gold)] transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>

            {/* Icons */}
            <div className="flex items-center gap-4">
              <button
                className="p-2 hover:opacity-70 transition-opacity"
                aria-label="Search"
              >
                <Search className="w-5 h-5" style={{ color: 'var(--color-warm-black)' }} />
              </button>
              <button
                className="p-2 hover:opacity-70 transition-opacity relative"
                onClick={() => setIsCartOpen(true)}
                aria-label="Cart"
              >
                <ShoppingBag className="w-5 h-5" style={{ color: 'var(--color-warm-black)' }} />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center text-xs text-white bg-[var(--color-gold)] rounded-full">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-[var(--color-cream)] transition-transform duration-500 lg:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6">
            <span className="font-serif text-xl tracking-[0.2em]" style={{ color: 'var(--color-warm-black)' }}>
              VELMORA
            </span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X className="w-6 h-6" style={{ color: 'var(--color-warm-black)' }} />
            </button>
          </div>

          <nav className="flex-1 flex flex-col items-center justify-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-serif text-2xl tracking-wider hover:opacity-70 transition-opacity"
                style={{ color: 'var(--color-warm-black)' }}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}