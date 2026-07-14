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
            : 'bg-velmora-obsidian/98 backdrop-blur-sm shadow-lg'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link
              to="/"
              className={`font-serif text-xl lg:text-2xl tracking-widest-xl font-light transition-colors duration-300 ${
                transparent ? 'text-velmora-pale' : 'text-velmora-pale'
              }`}
            >
              VELMORA
            </Link>

            {/* Desktop Nav Links */}
            <nav className="hidden lg:flex items-center gap-10">
              {navLinks.map(link => (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`font-sans text-xs tracking-widest uppercase transition-colors duration-300 ${
                    transparent
                      ? 'text-velmora-pale/80 hover:text-velmora-gold'
                      : 'text-velmora-mist hover:text-velmora-gold'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right Icons */}
            <div className="flex items-center gap-5">
              <button
                aria-label="Search"
                className={`hidden lg:flex transition-colors duration-300 ${
                  transparent
                    ? 'text-velmora-pale/80 hover:text-velmora-gold'
                    : 'text-velmora-mist hover:text-velmora-gold'
                }`}
              >
                <Search size={18} strokeWidth={1.5} />
              </button>

              <button
                aria-label={`Cart (${totalItems} items)`}
                onClick={() => setIsOpen(true)}
                className={`relative transition-colors duration-300 ${
                  transparent
                    ? 'text-velmora-pale/80 hover:text-velmora-gold'
                    : 'text-velmora-mist hover:text-velmora-gold'
                }`}
              >
                <ShoppingBag size={18} strokeWidth={1.5} />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-velmora-gold text-velmora-obsidian text-[10px] font-sans font-700 w-4 h-4 rounded-full flex items-center justify-center leading-none">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* Mobile menu toggle */}
              <button
                aria-label="Toggle menu"
                onClick={() => setMobileOpen(v => !v)}
                className={`lg:hidden transition-colors duration-300 ${
                  transparent
                    ? 'text-velmora-pale/80 hover:text-velmora-gold'
                    : 'text-velmora-mist hover:text-velmora-gold'
                }`}
              >
                {mobileOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-velmora-obsidian border-t border-velmora-stone/40">
            <nav className="flex flex-col px-6 py-6 gap-6">
              {navLinks.map(link => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="font-sans text-sm tracking-widest uppercase text-velmora-mist hover:text-velmora-gold transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-velmora-stone/40">
                <button className="flex items-center gap-2 font-sans text-sm tracking-widest uppercase text-velmora-mist hover:text-velmora-gold transition-colors duration-300">
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
