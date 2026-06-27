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

  const isTransparent = isHome && !scrolled && !mobileOpen;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isTransparent
            ? 'bg-gradient-to-b from-[#1a1714]/60 to-transparent'
            : 'bg-[#1a1714] shadow-[0_2px_20px_rgba(26,23,20,0.15)]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              to="/"
              className={`font-serif text-xl md:text-2xl font-light tracking-[0.2em] uppercase transition-colors duration-300 ${
                isTransparent ? 'text-white' : 'text-[#c9a96e]'
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
                  className={`text-xs font-sans font-medium tracking-[0.12em] uppercase transition-colors duration-300 hover:text-[#c9a96e] ${
                    isTransparent ? 'text-white/90' : 'text-[#e8d5b0]/80'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right Icons */}
            <div className="flex items-center gap-4">
              <button
                aria-label="Search"
                className={`transition-colors duration-300 hover:text-[#c9a96e] ${
                  isTransparent ? 'text-white' : 'text-[#e8d5b0]'
                }`}
              >
                <Search size={18} strokeWidth={1.5} />
              </button>

              <button
                aria-label={`Cart (${totalItems} items)`}
                onClick={() => setIsOpen(true)}
                className={`relative transition-colors duration-300 hover:text-[#c9a96e] ${
                  isTransparent ? 'text-white' : 'text-[#e8d5b0]'
                }`}
              >
                <ShoppingBag size={18} strokeWidth={1.5} />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#c9a96e] text-[#1a1714] text-[10px] font-sans font-bold w-4 h-4 rounded-full flex items-center justify-center leading-none">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* Mobile menu toggle */}
              <button
                aria-label="Menu"
                onClick={() => setMobileOpen(v => !v)}
                className={`md:hidden transition-colors duration-300 hover:text-[#c9a96e] ${
                  isTransparent ? 'text-white' : 'text-[#e8d5b0]'
                }`}
              >
                {mobileOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden bg-[#1a1714] overflow-hidden transition-all duration-400 ${
            mobileOpen ? 'max-h-80 border-t border-[#2c2825]' : 'max-h-0'
          }`}
        >
          <nav className="flex flex-col px-6 py-4 gap-5">
            {navLinks.map(link => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-[#e8d5b0]/80 text-xs font-sans tracking-[0.12em] uppercase hover:text-[#c9a96e] transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
}
