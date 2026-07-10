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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          transparent
            ? 'bg-transparent'
            : 'bg-ivory/95 backdrop-blur-sm border-b border-stone-200'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link
              to="/"
              className="font-cormorant text-xl lg:text-2xl font-medium tracking-[0.18em] uppercase transition-colors duration-300"
              style={{ color: transparent ? '#FAF7F2' : '#1A1714' }}
            >
              Velmora
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-10">
              {navLinks.map(link => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="font-manrope text-xs tracking-wider uppercase transition-colors duration-200 hover:opacity-70"
                  style={{ color: transparent ? 'rgba(250,247,242,0.9)' : '#4A3F35' }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right Icons */}
            <div className="flex items-center gap-4">
              <button
                aria-label="Search"
                className="hidden lg:flex transition-colors duration-200 hover:opacity-70"
                style={{ color: transparent ? '#FAF7F2' : '#1A1714' }}
              >
                <Search size={18} strokeWidth={1.5} />
              </button>

              <button
                aria-label={`Cart (${totalItems} items)`}
                onClick={() => setIsOpen(true)}
                className="relative transition-colors duration-200 hover:opacity-70"
                style={{ color: transparent ? '#FAF7F2' : '#1A1714' }}
              >
                <ShoppingBag size={18} strokeWidth={1.5} />
                {totalItems > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-champagne text-obsidian text-[10px] font-manrope font-600 w-4 h-4 rounded-full flex items-center justify-center leading-none">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* Mobile menu toggle */}
              <button
                aria-label="Menu"
                onClick={() => setMobileOpen(v => !v)}
                className="lg:hidden transition-colors duration-200"
                style={{ color: transparent ? '#FAF7F2' : '#1A1714' }}
              >
                {mobileOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-ivory border-t border-stone-200 animate-fadeIn">
            <nav className="flex flex-col px-6 py-6 gap-5">
              {navLinks.map(link => (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-manrope text-sm tracking-wider uppercase text-stone-700 hover:text-obsidian transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="divider mt-2" />
              <button className="flex items-center gap-2 font-manrope text-sm tracking-wider uppercase text-stone-700">
                <Search size={16} strokeWidth={1.5} />
                Search
              </button>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
