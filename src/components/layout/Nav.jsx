import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
    : 'bg-velmora-obsidian shadow-[0_1px_0_rgba(201,169,110,0.15)]';

  const textColor = 'text-velmora-text-light';

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* Logo */}
            <Link to="/" className={`font-serif text-xl md:text-2xl font-light tracking-[0.25em] uppercase ${textColor} hover:text-velmora-gold transition-colors duration-300`}>
              Velmora
            </Link>

            {/* Center Nav — desktop */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map(link => (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`text-xs tracking-[0.18em] uppercase font-medium ${textColor} hover:text-velmora-gold transition-colors duration-300 relative group`}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-velmora-gold transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>

            {/* Right icons */}
            <div className="flex items-center gap-4 md:gap-5">
              <button className={`${textColor} hover:text-velmora-gold transition-colors duration-300 hidden md:block`} aria-label="Search">
                <Search size={18} strokeWidth={1.5} />
              </button>

              <button
                onClick={() => setIsOpen(true)}
                className={`${textColor} hover:text-velmora-gold transition-colors duration-300 relative`}
                aria-label="Cart"
              >
                <ShoppingBag size={18} strokeWidth={1.5} />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-velmora-gold text-velmora-obsidian text-[9px] font-semibold w-4 h-4 rounded-full flex items-center justify-center leading-none">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* Mobile menu toggle */}
              <button
                onClick={() => setMobileOpen(v => !v)}
                className={`md:hidden ${textColor} hover:text-velmora-gold transition-colors duration-300`}
                aria-label="Menu"
              >
                {mobileOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden bg-velmora-obsidian border-t border-velmora-stone/30 animate-fadeIn">
            <div className="px-6 py-6 flex flex-col gap-6">
              {navLinks.map(link => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-sm tracking-[0.18em] uppercase font-medium text-velmora-text-light hover:text-velmora-gold transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
              <div className="border-t border-velmora-stone/30 pt-4">
                <button className="flex items-center gap-2 text-xs tracking-widest uppercase text-velmora-mist hover:text-velmora-gold transition-colors duration-300">
                  <Search size={14} strokeWidth={1.5} />
                  Search
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
