import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

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

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const transparent = isHome && !scrolled && !mobileOpen;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          transparent
            ? 'bg-transparent'
            : 'bg-velmora-obsidian shadow-nav'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              to="/"
              className={`font-cormorant text-xl md:text-2xl tracking-widest-xl font-medium transition-colors duration-300 ${
                transparent ? 'text-velmora-text-light' : 'text-velmora-gold'
              }`}
            >
              VELMORA
            </Link>

            {/* Desktop Nav Links */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map(link => (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`font-manrope text-xs tracking-widest-md uppercase transition-colors duration-300 hover:text-velmora-gold ${
                    transparent ? 'text-velmora-text-light/80' : 'text-velmora-text-light/70'
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
                className={`hidden md:flex transition-colors duration-300 hover:text-velmora-gold ${
                  transparent ? 'text-velmora-text-light/80' : 'text-velmora-text-light/70'
                }`}
              >
                <Search size={18} strokeWidth={1.5} />
              </button>

              <button
                aria-label={`Cart (${totalItems} items)`}
                onClick={() => setIsOpen(true)}
                className={`relative transition-colors duration-300 hover:text-velmora-gold ${
                  transparent ? 'text-velmora-text-light/80' : 'text-velmora-text-light/70'
                }`}
              >
                <ShoppingBag size={18} strokeWidth={1.5} />
                {totalItems > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-velmora-gold text-velmora-obsidian text-[10px] font-manrope font-600 w-4 h-4 flex items-center justify-center leading-none">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* Mobile menu toggle */}
              <button
                aria-label="Toggle menu"
                onClick={() => setMobileOpen(v => !v)}
                className={`md:hidden transition-colors duration-300 hover:text-velmora-gold ${
                  transparent ? 'text-velmora-text-light/80' : 'text-velmora-text-light/70'
                }`}
              >
                {mobileOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden bg-velmora-obsidian overflow-hidden transition-all duration-400 ${
            mobileOpen ? 'max-h-80 border-t border-velmora-gold/10' : 'max-h-0'
          }`}
        >
          <nav className="flex flex-col px-6 py-6 gap-5">
            {navLinks.map(link => (
              <Link
                key={link.label}
                to={link.href}
                className="font-manrope text-xs tracking-widest-md uppercase text-velmora-text-light/70 hover:text-velmora-gold transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
            <div className="hairline pt-4">
              <button className="flex items-center gap-2 font-manrope text-xs tracking-widest-md uppercase text-velmora-text-light/70 hover:text-velmora-gold transition-colors duration-300">
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
