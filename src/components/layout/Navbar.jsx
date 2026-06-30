import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const navLinks = [
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/shop' },
  { label: 'About', href: '/#about' },
  { label: 'Journal', href: '/' },
];

export default function Navbar() {
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

  const navBg = isHome && !scrolled
    ? 'bg-transparent'
    : 'bg-cream/95 backdrop-blur-sm border-b border-divider';

  const textColor = isHome && !scrolled ? 'text-white' : 'text-charcoal';
  const logoColor = isHome && !scrolled ? 'text-white' : 'text-charcoal';

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${navBg}`}>
        <div className="max-w-screen-xl mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className={`font-serif text-xl md:text-2xl font-light tracking-widest uppercase ${logoColor} transition-colors duration-400`}>
            Velmora
          </Link>

          {/* Center nav — desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <Link
                key={link.label}
                to={link.href}
                className={`font-sans text-xs tracking-widest uppercase ${textColor} hover:text-gold transition-colors duration-300`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-4">
            <button
              aria-label="Search"
              className={`${textColor} hover:text-gold transition-colors duration-300 hidden md:block`}
            >
              <Search size={18} strokeWidth={1.5} />
            </button>
            <button
              aria-label={`Cart (${totalItems} items)`}
              onClick={() => setIsOpen(true)}
              className={`${textColor} hover:text-gold transition-colors duration-300 relative`}
            >
              <ShoppingBag size={18} strokeWidth={1.5} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-gold text-white text-[10px] font-sans w-4 h-4 rounded-full flex items-center justify-center leading-none">
                  {totalItems}
                </span>
              )}
            </button>
            <button
              aria-label="Menu"
              onClick={() => setMobileOpen(true)}
              className={`${textColor} hover:text-gold transition-colors duration-300 md:hidden`}
            >
              <Menu size={20} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] bg-cream flex flex-col">
          <div className="flex items-center justify-between px-6 h-16 border-b border-divider">
            <Link to="/" className="font-serif text-xl tracking-widest uppercase text-charcoal" onClick={() => setMobileOpen(false)}>
              Velmora
            </Link>
            <button onClick={() => setMobileOpen(false)} className="text-charcoal">
              <X size={20} strokeWidth={1.5} />
            </button>
          </div>
          <div className="flex flex-col items-center justify-center flex-1 gap-8">
            {navLinks.map(link => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-serif text-3xl font-light text-charcoal hover:text-gold transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="px-6 pb-8 text-center">
            <p className="font-sans text-xs tracking-widest uppercase text-charcoal-muted">Free Worldwide Shipping · 30-Day Returns</p>
          </div>
        </div>
      )}
    </>
  );
}
