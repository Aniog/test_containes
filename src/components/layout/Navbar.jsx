import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

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

  const navLinks = [
    { label: 'Shop', to: '/shop' },
    { label: 'Collections', to: '/shop' },
    { label: 'About', to: '/#about' },
    { label: 'Journal', to: '/#journal' },
  ];

  const transparent = isHome && !scrolled && !mobileOpen;

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        transparent
          ? 'bg-transparent'
          : 'bg-ivory/95 backdrop-blur-sm border-b border-linen shadow-card'
      }`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <span className={`font-serif text-xl md:text-2xl font-light tracking-[0.18em] uppercase transition-colors duration-300 ${
                transparent ? 'text-ivory' : 'text-ink'
              }`}>
                Velmora
              </span>
            </Link>

            {/* Center nav links — desktop */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map(link => (
                <Link
                  key={link.label}
                  to={link.to}
                  className={`font-sans text-xs tracking-widest uppercase transition-colors duration-300 hover:text-gold ${
                    transparent ? 'text-ivory/90' : 'text-muted'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right icons */}
            <div className="flex items-center gap-4">
              <button
                aria-label="Search"
                className={`hidden md:flex transition-colors duration-300 hover:text-gold ${
                  transparent ? 'text-ivory/90' : 'text-muted'
                }`}
              >
                <Search size={18} strokeWidth={1.5} />
              </button>

              <button
                aria-label={`Cart (${itemCount} items)`}
                onClick={() => setIsOpen(true)}
                className={`relative transition-colors duration-300 hover:text-gold ${
                  transparent ? 'text-ivory/90' : 'text-muted'
                }`}
              >
                <ShoppingBag size={18} strokeWidth={1.5} />
                {itemCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-gold text-ivory text-[9px] font-sans font-semibold w-4 h-4 rounded-full flex items-center justify-center leading-none">
                    {itemCount}
                  </span>
                )}
              </button>

              {/* Mobile menu toggle */}
              <button
                aria-label="Menu"
                onClick={() => setMobileOpen(v => !v)}
                className={`md:hidden transition-colors duration-300 hover:text-gold ${
                  transparent ? 'text-ivory/90' : 'text-muted'
                }`}
              >
                {mobileOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden bg-ivory border-t border-linen">
            <div className="px-6 py-6 flex flex-col gap-5">
              {navLinks.map(link => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="font-sans text-xs tracking-widest uppercase text-muted hover:text-gold transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-linen flex items-center gap-3">
                <Search size={16} strokeWidth={1.5} className="text-muted" />
                <span className="font-sans text-xs tracking-widest uppercase text-muted">Search</span>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
