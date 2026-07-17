import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, setIsOpen } = useCart();
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

  const navLinks = [
    { label: 'Shop', to: '/shop' },
    { label: 'Collections', to: '/shop' },
    { label: 'About', to: '/about' },
    { label: 'Journal', to: '/journal' },
  ];

  const transparent = isHome && !scrolled && !mobileOpen;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          transparent
            ? 'bg-transparent'
            : 'bg-parchment/95 backdrop-blur-sm border-b border-sand'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              to="/"
              className={`font-cormorant text-xl md:text-2xl font-medium tracking-[0.15em] uppercase transition-colors duration-300 ${
                transparent ? 'text-cream' : 'text-obsidian'
              }`}
            >
              Velmora
            </Link>

            {/* Desktop Nav Links */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map(link => (
                <Link
                  key={link.label}
                  to={link.to}
                  className={`font-manrope text-xs tracking-widest uppercase transition-colors duration-200 hover:text-gold ${
                    transparent ? 'text-cream/90' : 'text-ink-muted'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right Icons */}
            <div className="flex items-center gap-4">
              <button
                className={`hidden md:flex transition-colors duration-200 hover:text-gold ${
                  transparent ? 'text-cream/90' : 'text-ink-muted'
                }`}
                aria-label="Search"
              >
                <Search size={18} />
              </button>

              <button
                onClick={() => setIsOpen(true)}
                className={`relative transition-colors duration-200 hover:text-gold ${
                  transparent ? 'text-cream/90' : 'text-ink-muted'
                }`}
                aria-label="Cart"
              >
                <ShoppingBag size={18} />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-gold text-obsidian text-[10px] font-manrope font-600 w-4 h-4 rounded-full flex items-center justify-center leading-none">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* Mobile menu toggle */}
              <button
                onClick={() => setMobileOpen(v => !v)}
                className={`md:hidden transition-colors duration-200 hover:text-gold ${
                  transparent ? 'text-cream/90' : 'text-ink-muted'
                }`}
                aria-label="Menu"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-400 ${
            mobileOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
          } bg-parchment border-t border-sand`}
        >
          <nav className="flex flex-col px-6 py-6 gap-5">
            {navLinks.map(link => (
              <Link
                key={link.label}
                to={link.to}
                className="font-manrope text-xs tracking-widest uppercase text-ink-muted hover:text-gold transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="border-t border-sand pt-4">
              <button className="flex items-center gap-2 font-manrope text-xs tracking-widest uppercase text-ink-muted hover:text-gold transition-colors">
                <Search size={14} />
                Search
              </button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
