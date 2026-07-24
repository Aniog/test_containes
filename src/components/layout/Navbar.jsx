import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, setIsOpen } = useCart();
  const location = useLocation();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
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

  const isTransparent = isHome && !scrolled && !mobileOpen;

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${
        isTransparent
          ? 'bg-transparent'
          : 'bg-velmora-cream/95 backdrop-blur-sm border-b border-velmora-sand/30 shadow-[0_1px_20px_rgba(26,22,20,0.06)]'
      }`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <span
                className="font-cormorant text-xl md:text-2xl tracking-[0.2em] font-medium transition-colors duration-300"
                style={{ color: isTransparent ? '#F5EFE6' : '#1A1614' }}
              >
                VELMORA
              </span>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map(link => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="font-inter text-xs uppercase tracking-widest transition-colors duration-200 hover:text-velmora-gold"
                  style={{ color: isTransparent ? 'rgba(245,239,230,0.9)' : '#6B5E54' }}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right Icons */}
            <div className="flex items-center gap-4">
              <button
                className="hidden md:flex transition-colors duration-200 hover:text-velmora-gold"
                style={{ color: isTransparent ? 'rgba(245,239,230,0.9)' : '#6B5E54' }}
              >
                <Search className="w-4 h-4" />
              </button>

              <button
                onClick={() => setIsOpen(true)}
                className="relative transition-colors duration-200 hover:text-velmora-gold"
                style={{ color: isTransparent ? 'rgba(245,239,230,0.9)' : '#6B5E54' }}
              >
                <ShoppingBag className="w-4 h-4" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 w-4 h-4 text-[10px] font-inter font-medium rounded-full flex items-center justify-center" style={{ backgroundColor: '#C9A96E', color: '#1A1614' }}>
                    {totalItems}
                  </span>
                )}
              </button>

              {/* Mobile menu toggle */}
              <button
                onClick={() => setMobileOpen(v => !v)}
                className="md:hidden transition-colors duration-200"
                style={{ color: isTransparent ? 'rgba(245,239,230,0.9)' : '#6B5E54' }}
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden bg-velmora-cream border-t border-velmora-sand/30 overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-6 py-4 space-y-4">
            {navLinks.map(link => (
              <Link
                key={link.label}
                to={link.to}
                className="block font-inter text-xs uppercase tracking-widest text-velmora-text-muted hover:text-velmora-gold transition-colors py-1"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 border-t border-velmora-sand/30">
              <button className="flex items-center gap-2 font-inter text-xs uppercase tracking-widest text-velmora-text-muted hover:text-velmora-gold transition-colors py-1">
                <Search className="w-3.5 h-3.5" />
                Search
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
