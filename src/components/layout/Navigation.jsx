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

export default function Navigation() {
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

  const navBg = isHome && !scrolled
    ? 'bg-transparent'
    : 'bg-velmora-cream/95 backdrop-blur-sm border-b border-velmora-stone/40';

  const textColor = isHome && !scrolled
    ? 'text-velmora-white'
    : 'text-velmora-obsidian';

  const logoColor = isHome && !scrolled
    ? 'text-velmora-white'
    : 'text-velmora-obsidian';

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${navBg}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* Logo */}
            <Link
              to="/"
              className={`font-cormorant font-light text-2xl md:text-3xl tracking-widest-xl uppercase transition-colors duration-300 ${logoColor}`}
            >
              Velmora
            </Link>

            {/* Center links — desktop */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`font-inter text-xs font-medium uppercase tracking-widest transition-colors duration-300 hover:text-velmora-gold ${textColor}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right icons */}
            <div className="flex items-center gap-5">
              <button
                aria-label="Search"
                className={`transition-colors duration-300 hover:text-velmora-gold ${textColor}`}
              >
                <Search className="w-5 h-5" strokeWidth={1.5} />
              </button>

              <button
                aria-label={`Cart (${totalItems} items)`}
                onClick={() => setIsOpen(true)}
                className={`relative transition-colors duration-300 hover:text-velmora-gold ${textColor}`}
              >
                <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-velmora-gold text-velmora-obsidian text-[10px] font-inter font-medium w-4 h-4 rounded-full flex items-center justify-center leading-none">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* Mobile menu toggle */}
              <button
                aria-label="Menu"
                onClick={() => setMobileOpen((v) => !v)}
                className={`md:hidden transition-colors duration-300 hover:text-velmora-gold ${textColor}`}
              >
                {mobileOpen ? <X className="w-5 h-5" strokeWidth={1.5} /> : <Menu className="w-5 h-5" strokeWidth={1.5} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-400 ${
            mobileOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          } bg-velmora-cream border-t border-velmora-stone/40`}
        >
          <div className="px-6 py-6 flex flex-col gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="font-inter text-xs font-medium uppercase tracking-widest text-velmora-obsidian hover:text-velmora-gold transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
