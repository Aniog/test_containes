import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Nav() {
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

  const navBg = isHome && !scrolled
    ? 'bg-transparent'
    : 'bg-cream border-b border-linen shadow-sm';

  const textColor = isHome && !scrolled ? 'text-cream' : 'text-ink';
  const logoColor = isHome && !scrolled ? 'text-cream' : 'text-ink';

  const navLinks = [
    { label: 'Shop', to: '/shop' },
    { label: 'Collections', to: '/shop' },
    { label: 'About', to: '/about' },
    { label: 'Journal', to: '/journal' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className={`font-serif text-xl md:text-2xl font-light tracking-[0.2em] uppercase ${logoColor} transition-colors duration-300`}>
              Velmora
            </Link>

            {/* Center nav links — desktop */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map(link => (
                <Link
                  key={link.label}
                  to={link.to}
                  className={`font-sans text-xs font-medium tracking-widest uppercase ${textColor} hover:text-gold transition-colors duration-300`}
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
                aria-label={`Cart (${itemCount} items)`}
                onClick={() => setIsOpen(true)}
                className={`${textColor} hover:text-gold transition-colors duration-300 relative`}
              >
                <ShoppingBag size={18} strokeWidth={1.5} />
                {itemCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-gold text-cream text-[10px] font-sans font-semibold w-4 h-4 rounded-full flex items-center justify-center leading-none">
                    {itemCount}
                  </span>
                )}
              </button>
              {/* Mobile menu toggle */}
              <button
                aria-label="Menu"
                onClick={() => setMobileOpen(v => !v)}
                className={`md:hidden ${textColor} hover:text-gold transition-colors duration-300`}
              >
                {mobileOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden bg-cream border-t border-linen">
            <div className="px-6 py-6 flex flex-col gap-5">
              {navLinks.map(link => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="font-sans text-sm font-medium tracking-widest uppercase text-ink hover:text-gold transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2 border-t border-linen">
                <button className="flex items-center gap-2 font-sans text-sm text-mist">
                  <Search size={16} strokeWidth={1.5} />
                  Search
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
