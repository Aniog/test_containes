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
            : 'bg-ivory/95 backdrop-blur-sm border-b border-mink-light/20'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link
              to="/"
              className={`font-cormorant text-xl lg:text-2xl font-medium tracking-[0.2em] uppercase transition-colors duration-300 ${
                transparent ? 'text-ivory' : 'text-obsidian'
              }`}
            >
              Velmora
            </Link>

            {/* Desktop Nav Links */}
            <nav className="hidden lg:flex items-center gap-10">
              {navLinks.map(link => (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`font-manrope text-xs uppercase tracking-[0.12em] transition-colors duration-200 hover:text-gold ${
                    transparent ? 'text-ivory/90' : 'text-charcoal'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right Icons */}
            <div className="flex items-center gap-4 lg:gap-5">
              <button
                aria-label="Search"
                className={`hidden lg:flex transition-colors duration-200 hover:text-gold ${
                  transparent ? 'text-ivory/90' : 'text-charcoal'
                }`}
              >
                <Search size={18} strokeWidth={1.5} />
              </button>

              <button
                aria-label={`Cart (${totalItems} items)`}
                onClick={() => setIsOpen(true)}
                className={`relative transition-colors duration-200 hover:text-gold ${
                  transparent ? 'text-ivory/90' : 'text-charcoal'
                }`}
              >
                <ShoppingBag size={18} strokeWidth={1.5} />
                {totalItems > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-gold text-obsidian text-[9px] font-manrope font-semibold w-4 h-4 rounded-full flex items-center justify-center leading-none">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* Mobile menu toggle */}
              <button
                aria-label="Menu"
                onClick={() => setMobileOpen(v => !v)}
                className={`lg:hidden transition-colors duration-200 ${
                  transparent ? 'text-ivory/90' : 'text-charcoal'
                }`}
              >
                {mobileOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-ivory border-t border-mink-light/20 animate-fadeIn">
            <nav className="flex flex-col px-6 py-6 gap-5">
              {navLinks.map(link => (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-manrope text-sm uppercase tracking-[0.12em] text-charcoal hover:text-gold transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="hairline pt-4">
                <button className="flex items-center gap-2 font-manrope text-sm uppercase tracking-[0.12em] text-charcoal hover:text-gold transition-colors">
                  <Search size={16} strokeWidth={1.5} />
                  Search
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
