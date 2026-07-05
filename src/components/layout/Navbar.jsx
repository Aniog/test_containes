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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          transparent
            ? 'bg-transparent'
            : 'bg-obsidian/95 backdrop-blur-md border-b border-mink/50'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              to="/"
              className="font-serif text-xl md:text-2xl tracking-[0.2em] text-parchment hover:text-gold transition-colors duration-300 font-light"
            >
              VELMORA
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map(link => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="text-[10px] tracking-widest uppercase text-parchment/70 hover:text-gold transition-colors duration-300 font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right Icons */}
            <div className="flex items-center gap-4">
              <button
                aria-label="Search"
                className="hidden md:flex text-parchment/70 hover:text-gold transition-colors duration-300"
              >
                <Search size={18} strokeWidth={1.5} />
              </button>

              <button
                aria-label={`Cart (${totalItems} items)`}
                onClick={() => setIsOpen(true)}
                className="relative text-parchment/70 hover:text-gold transition-colors duration-300"
              >
                <ShoppingBag size={18} strokeWidth={1.5} />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-gold text-obsidian text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center leading-none">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* Mobile menu toggle */}
              <button
                aria-label="Menu"
                onClick={() => setMobileOpen(v => !v)}
                className="md:hidden text-parchment/70 hover:text-gold transition-colors duration-300"
              >
                {mobileOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-400 bg-obsidian/98 border-t border-mink/50 ${
            mobileOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="flex flex-col px-6 py-6 gap-5">
            {navLinks.map(link => (
              <Link
                key={link.label}
                to={link.to}
                className="text-[11px] tracking-widest uppercase text-parchment/80 hover:text-gold transition-colors duration-300 font-medium"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 border-t border-mink/50">
              <button className="flex items-center gap-2 text-[11px] tracking-widest uppercase text-parchment/60 hover:text-gold transition-colors duration-300">
                <Search size={14} strokeWidth={1.5} />
                Search
              </button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
