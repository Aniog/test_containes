import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { useCart } from '../../context/CartContext';

export default function Navigation() {
  const { isScrolled } = useScrollPosition();
  const { toggleCart, itemCount } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  const navLinks = [
    { name: 'Shop', href: '/shop' },
    { name: 'Collections', href: '/shop?collection=new' },
    { name: 'About', href: '/about' },
    { name: 'Journal', href: '/journal' }
  ];

  const shouldBeTransparent = isHomePage && !isScrolled;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          shouldBeTransparent
            ? 'bg-transparent'
            : 'bg-velmora-cream/95 backdrop-blur-sm shadow-soft'
        }`}
      >
        <nav className="section-container">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2 -ml-2 text-velmora-charcoal hover:text-velmora-gold transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Logo */}
            <Link
              to="/"
              className={`font-serif text-xl md:text-2xl tracking-wider transition-colors duration-300 ${
                shouldBeTransparent ? 'text-white' : 'text-velmora-charcoal'
              }`}
            >
              VELMORA
            </Link>

            {/* Desktop navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`relative text-sm font-medium tracking-wider transition-colors duration-300 group ${
                    shouldBeTransparent
                      ? 'text-white/90 hover:text-white'
                      : 'text-velmora-charcoal hover:text-velmora-gold'
                  }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full ${
                    shouldBeTransparent ? 'bg-white' : 'bg-velmora-gold'
                  }`} />
                </Link>
              ))}
            </div>

            {/* Right icons */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsSearchOpen(true)}
                className={`p-2 transition-colors duration-300 hover:text-velmora-gold ${
                  shouldBeTransparent ? 'text-white/90' : 'text-velmora-charcoal'
                }`}
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>

              <button
                onClick={toggleCart}
                className={`relative p-2 transition-colors duration-300 hover:text-velmora-gold ${
                  shouldBeTransparent ? 'text-white/90' : 'text-velmora-charcoal'
                }`}
                aria-label="Shopping bag"
              >
                <ShoppingBag className="w-5 h-5" />
                {itemCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-velmora-gold text-white text-xs font-medium rounded-full flex items-center justify-center">
                    {itemCount > 9 ? '9+' : itemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-velmora-cream">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between px-6 h-16 border-b border-velmora-border">
              <span className="font-serif text-xl tracking-wider">VELMORA</span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-velmora-charcoal hover:text-velmora-gold transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex-1 px-6 py-8">
              <ul className="space-y-6">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block font-serif text-2xl text-velmora-charcoal hover:text-velmora-gold transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 bg-velmora-charcoal/95 backdrop-blur-sm flex items-start justify-center pt-32">
          <div className="w-full max-w-2xl px-6">
            <div className="flex items-center justify-between mb-8">
              <span className="font-serif text-xl text-white">Search</span>
              <button
                onClick={() => setIsSearchOpen(false)}
                className="p-2 text-white/70 hover:text-white transition-colors"
                aria-label="Close search"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-velmora-warm-gray" />
              <input
                type="text"
                placeholder="Search for jewelry..."
                className="w-full pl-12 pr-4 py-4 bg-transparent border-b border-white/20 text-white text-lg placeholder:text-white/40 focus:outline-none focus:border-velmora-gold transition-colors"
                autoFocus
              />
            </div>
            <p className="mt-8 text-sm text-white/50">
              Press ESC to close
            </p>
          </div>
        </div>
      )}

      {/* Spacer for non-hero pages */}
      {!isHomePage && <div className="h-16 md:h-20" />}
    </>
  );
}
