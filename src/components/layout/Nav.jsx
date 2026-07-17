import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const navLinks = [
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/shop' },
  { label: 'About', href: '/#story' },
  { label: 'Journal', href: '/' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, setIsOpen } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navBg = scrolled
    ? 'bg-ivory/95 backdrop-blur-sm shadow-sm border-b border-obsidian/8'
    : 'bg-transparent';

  const textColor = scrolled ? 'text-obsidian' : 'text-ivory';
  const logoColor = scrolled ? 'text-obsidian' : 'text-ivory';

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${navBg}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className={`font-serif text-xl tracking-widest2 font-light ${logoColor} transition-colors duration-400 hover:opacity-80`}>
            VELMORA
          </Link>

          {/* Center nav — desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <Link
                key={l.label}
                to={l.href}
                className={`font-sans text-xs tracking-widest uppercase font-medium ${textColor} transition-colors duration-400 hover:opacity-60`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Right icons */}
          <div className="flex items-center gap-4">
            <button
              aria-label="Search"
              className={`${textColor} transition-colors duration-400 hover:opacity-60`}
            >
              <Search size={18} strokeWidth={1.5} />
            </button>

            <button
              aria-label={`Cart (${totalItems} items)`}
              onClick={() => setIsOpen(true)}
              className={`relative ${textColor} transition-colors duration-400 hover:opacity-60`}
            >
              <ShoppingBag size={18} strokeWidth={1.5} />
              {totalItems > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-champagne text-obsidian text-[10px] font-semibold w-4 h-4 rounded-full flex items-center justify-center leading-none">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile menu toggle */}
            <button
              aria-label="Menu"
              className={`md:hidden ${textColor} transition-colors duration-400`}
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-obsidian/95 flex flex-col items-center justify-center gap-8">
          <button
            className="absolute top-5 right-6 text-ivory"
            onClick={() => setMobileOpen(false)}
          >
            <X size={24} strokeWidth={1.5} />
          </button>
          {navLinks.map((l) => (
            <Link
              key={l.label}
              to={l.href}
              onClick={() => setMobileOpen(false)}
              className="font-serif text-3xl text-ivory tracking-widest font-light hover:text-champagne transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
