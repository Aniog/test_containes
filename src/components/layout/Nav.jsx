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
  }, [location.pathname]);

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
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-400 ${
          transparent
            ? 'bg-transparent'
            : 'bg-ivory/95 backdrop-blur-sm border-b border-linen shadow-soft'
        }`}
      >
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link
              to="/"
              className={`font-serif text-xl lg:text-2xl font-light tracking-[0.12em] transition-colors duration-300 ${
                transparent ? 'text-ivory' : 'text-obsidian'
              }`}
            >
              VELMORA
            </Link>

            {/* Center nav — desktop */}
            <nav className="hidden lg:flex items-center gap-10">
              {navLinks.map(link => (
                <Link
                  key={link.label}
                  to={link.to}
                  className={`font-sans text-xs font-semibold uppercase tracking-widest transition-colors duration-300 hover:text-gold ${
                    transparent ? 'text-ivory/90' : 'text-stone'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right icons */}
            <div className="flex items-center gap-4">
              <button
                aria-label="Search"
                className={`hidden lg:flex transition-colors duration-300 hover:text-gold ${
                  transparent ? 'text-ivory/90' : 'text-stone'
                }`}
              >
                <Search size={18} strokeWidth={1.5} />
              </button>

              <button
                aria-label={`Cart (${totalItems} items)`}
                onClick={() => setIsOpen(true)}
                className={`relative transition-colors duration-300 hover:text-gold ${
                  transparent ? 'text-ivory/90' : 'text-stone'
                }`}
              >
                <ShoppingBag size={20} strokeWidth={1.5} />
                {totalItems > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-gold text-obsidian text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center leading-none">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* Mobile menu toggle */}
              <button
                aria-label="Menu"
                onClick={() => setMobileOpen(v => !v)}
                className={`lg:hidden transition-colors duration-300 hover:text-gold ${
                  transparent ? 'text-ivory/90' : 'text-stone'
                }`}
              >
                {mobileOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-ivory border-t border-linen">
            <nav className="flex flex-col px-6 py-6 gap-5">
              {navLinks.map(link => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="font-sans text-sm font-semibold uppercase tracking-widest text-stone hover:text-gold transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="hairline pt-4">
                <button className="flex items-center gap-2 text-stone hover:text-gold transition-colors">
                  <Search size={16} strokeWidth={1.5} />
                  <span className="font-sans text-xs font-semibold uppercase tracking-widest">Search</span>
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
