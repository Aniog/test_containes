import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { to: '/shop', label: 'Shop' },
    { to: '/collections', label: 'Collections' },
    { to: '/about', label: 'About' },
    { to: '/journal', label: 'Journal' },
  ];

  const shouldBeTransparent = isHomePage && !isScrolled;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-400 ${
          shouldBeTransparent
            ? 'bg-transparent'
            : 'bg-cream/95 backdrop-blur-md shadow-sm'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Left: Mobile Menu + Desktop Nav */}
            <div className="flex items-center gap-6">
              <button
                className={`md:hidden p-2 -ml-2 transition-colors ${
                  shouldBeTransparent ? 'text-cream' : 'text-obsidian'
                }`}
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open menu"
              >
                <Menu className="w-5 h-5" />
              </button>

              <div className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`text-sm font-sans font-medium tracking-wide transition-colors hover:text-champagne ${
                      shouldBeTransparent
                        ? 'text-cream'
                        : 'text-obsidian'
                    } ${
                      location.pathname === link.to ? 'text-champagne' : ''
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Center: Logo */}
            <Link
              to="/"
              className={`font-serif text-2xl md:text-3xl font-semibold tracking-extra-wide transition-colors ${
                shouldBeTransparent ? 'text-cream' : 'text-obsidian'
              }`}
            >
              VELMORA
            </Link>

            {/* Right: Icons */}
            <div className="flex items-center gap-2 md:gap-4">
              <button
                className={`p-2 transition-colors hover:text-champagne ${
                  shouldBeTransparent ? 'text-cream' : 'text-obsidian'
                }`}
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>

              <button
                onClick={() => setIsCartOpen(true)}
                className={`p-2 transition-colors hover:text-champagne relative ${
                  shouldBeTransparent ? 'text-cream' : 'text-obsidian'
                }`}
                aria-label="Shopping cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-champagne text-obsidian text-[10px] font-medium rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-cream z-50 transform transition-transform duration-300 md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between px-4 py-4 border-b border-velvet-200">
            <span className="font-serif text-2xl font-semibold tracking-extra-wide text-obsidian">
              VELMORA
            </span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 -mr-2 text-obsidian"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 flex flex-col justify-center px-8">
            <nav className="space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="block font-serif text-3xl font-medium text-obsidian hover:text-champagne transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
