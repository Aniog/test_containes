import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const navLinks = [
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/shop' },
  { label: 'About', href: '/#story' },
  { label: 'Journal', href: '/' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { itemCount, setIsOpen } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const transparent = isHome && !scrolled && !mobileOpen;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          transparent
            ? 'bg-transparent'
            : 'bg-velmora-cream/95 backdrop-blur-sm border-b border-velmora-sand'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              to="/"
              className={`font-serif text-xl md:text-2xl font-light tracking-[0.2em] uppercase transition-colors duration-300 ${
                transparent ? 'text-velmora-cream' : 'text-velmora-obsidian'
              }`}
            >
              Velmora
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map(link => (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`font-sans text-xs tracking-[0.15em] uppercase transition-colors duration-200 relative group ${
                    transparent
                      ? 'text-velmora-cream/90 hover:text-velmora-cream'
                      : 'text-velmora-text-secondary hover:text-velmora-gold'
                  }`}
                >
                  {link.label}
                  <span className={`absolute -bottom-0.5 left-0 h-px w-0 group-hover:w-full transition-all duration-300 ${
                    transparent ? 'bg-velmora-cream' : 'bg-velmora-gold'
                  }`} />
                </Link>
              ))}
            </nav>

            {/* Icons */}
            <div className="flex items-center gap-4">
              <button
                aria-label="Search"
                className={`transition-colors duration-200 ${
                  transparent
                    ? 'text-velmora-cream/90 hover:text-velmora-cream'
                    : 'text-velmora-text-secondary hover:text-velmora-gold'
                }`}
              >
                <Search className="w-4 h-4 md:w-5 md:h-5" />
              </button>

              <button
                aria-label={`Cart (${itemCount} items)`}
                onClick={() => setIsOpen(true)}
                className={`relative transition-colors duration-200 ${
                  transparent
                    ? 'text-velmora-cream/90 hover:text-velmora-cream'
                    : 'text-velmora-text-secondary hover:text-velmora-gold'
                }`}
              >
                <ShoppingBag className="w-4 h-4 md:w-5 md:h-5" />
                {itemCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-velmora-gold text-velmora-obsidian text-[10px] font-semibold w-4 h-4 rounded-full flex items-center justify-center leading-none">
                    {itemCount}
                  </span>
                )}
              </button>

              {/* Mobile menu toggle */}
              <button
                aria-label="Menu"
                onClick={() => setMobileOpen(v => !v)}
                className={`md:hidden transition-colors duration-200 ${
                  transparent
                    ? 'text-velmora-cream/90 hover:text-velmora-cream'
                    : 'text-velmora-text-secondary hover:text-velmora-gold'
                }`}
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden bg-velmora-cream border-t border-velmora-sand animate-fadeIn">
            <nav className="flex flex-col px-6 py-6 gap-5">
              {navLinks.map(link => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="font-sans text-xs tracking-[0.2em] uppercase text-velmora-text-secondary hover:text-velmora-gold transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
