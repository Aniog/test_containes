import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const navLinks = [
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/shop' },
  { label: 'About', href: '/#about' },
  { label: 'Journal', href: '/#journal' },
];

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

  const transparent = isHome && !scrolled && !mobileOpen;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          transparent
            ? 'bg-transparent'
            : 'bg-parchment/95 backdrop-blur-sm border-b border-stone/30 shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              to="/"
              className={`font-cormorant text-xl md:text-2xl font-medium tracking-widest uppercase transition-colors duration-300 ${
                transparent ? 'text-cream' : 'text-ink'
              }`}
            >
              Velmora
            </Link>

            {/* Center nav — desktop */}
            <nav className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`font-inter text-xs tracking-widest uppercase transition-colors duration-200 hover:text-gold ${
                    transparent ? 'text-cream/90' : 'text-mist'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right icons */}
            <div className="flex items-center gap-4 md:gap-5">
              <button
                aria-label="Search"
                className={`transition-colors duration-200 hover:text-gold ${
                  transparent ? 'text-cream/90' : 'text-mist'
                }`}
              >
                <Search size={18} strokeWidth={1.5} />
              </button>

              <button
                aria-label={`Cart (${totalItems} items)`}
                onClick={() => setIsOpen(true)}
                className={`relative transition-colors duration-200 hover:text-gold ${
                  transparent ? 'text-cream/90' : 'text-mist'
                }`}
              >
                <ShoppingBag size={18} strokeWidth={1.5} />
                {totalItems > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-gold text-obsidian text-[9px] font-inter font-semibold w-4 h-4 rounded-full flex items-center justify-center leading-none">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* Mobile menu toggle */}
              <button
                aria-label="Menu"
                onClick={() => setMobileOpen((v) => !v)}
                className={`md:hidden transition-colors duration-200 hover:text-gold ${
                  transparent ? 'text-cream/90' : 'text-mist'
                }`}
              >
                {mobileOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden bg-parchment border-t border-stone/30 px-6 py-6 flex flex-col gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-inter text-xs tracking-widest uppercase text-mist hover:text-gold transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </header>
    </>
  );
}
