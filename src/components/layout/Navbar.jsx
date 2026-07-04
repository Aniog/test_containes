import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
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

  const isTransparent = isHome && !scrolled && !mobileOpen;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-400 ${
          isTransparent
            ? 'bg-transparent'
            : 'bg-velmora-obsidian/95 backdrop-blur-sm shadow-lg'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link
              to="/"
              className={`font-cormorant text-xl lg:text-2xl font-medium tracking-[0.2em] uppercase transition-colors duration-300 ${
                isTransparent ? 'text-velmora-text-light' : 'text-velmora-gold'
              }`}
            >
              Velmora
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map(link => (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`font-manrope text-xs tracking-widest uppercase transition-colors duration-200 hover:text-velmora-gold ${
                    isTransparent ? 'text-velmora-text-light/80' : 'text-velmora-sand'
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
                className={`hidden lg:flex transition-colors duration-200 hover:text-velmora-gold ${
                  isTransparent ? 'text-velmora-text-light/80' : 'text-velmora-sand'
                }`}
              >
                <Search size={18} strokeWidth={1.5} />
              </button>

              <button
                aria-label={`Cart (${totalItems} items)`}
                onClick={() => setIsOpen(true)}
                className={`relative transition-colors duration-200 hover:text-velmora-gold ${
                  isTransparent ? 'text-velmora-text-light/80' : 'text-velmora-sand'
                }`}
              >
                <ShoppingBag size={20} strokeWidth={1.5} />
                {totalItems > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-velmora-gold text-velmora-obsidian text-[10px] font-manrope font-semibold w-4 h-4 rounded-full flex items-center justify-center leading-none">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* Mobile menu toggle */}
              <button
                aria-label="Toggle menu"
                onClick={() => setMobileOpen(v => !v)}
                className={`lg:hidden transition-colors duration-200 hover:text-velmora-gold ${
                  isTransparent ? 'text-velmora-text-light/80' : 'text-velmora-sand'
                }`}
              >
                {mobileOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-velmora-obsidian border-t border-velmora-stone/40">
            <nav className="flex flex-col px-6 py-6 gap-5">
              {navLinks.map(link => (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-manrope text-sm tracking-widest uppercase text-velmora-sand hover:text-velmora-gold transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
              <div className="hairline mt-2" />
              <button className="flex items-center gap-2 font-manrope text-sm tracking-widest uppercase text-velmora-sand hover:text-velmora-gold transition-colors duration-200">
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
