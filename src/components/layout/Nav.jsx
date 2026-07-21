import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

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
    : 'bg-ivory/95 backdrop-blur-sm shadow-sm';

  const textColor = isHome && !scrolled ? 'text-ivory' : 'text-obsidian';
  const logoColor = isHome && !scrolled ? 'text-ivory' : 'text-obsidian';

  const links = [
    { label: 'Shop', to: '/shop' },
    { label: 'Collections', to: '/shop' },
    { label: 'About', to: '/about' },
    { label: 'Journal', to: '/journal' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${navBg}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className={`font-serif text-xl md:text-2xl font-light tracking-ultra-wide uppercase ${logoColor} transition-colors duration-300`}>
              Velmora
            </Link>

            {/* Center links — desktop */}
            <div className="hidden md:flex items-center gap-8">
              {links.map(l => (
                <Link key={l.label} to={l.to} className={`font-sans text-xs tracking-widest uppercase transition-colors duration-200 ${textColor} opacity-80 hover:opacity-100`}>
                  {l.label}
                </Link>
              ))}
            </div>

            {/* Right icons */}
            <div className="flex items-center gap-4">
              <button className={`${textColor} opacity-80 hover:opacity-100 transition-opacity`} aria-label="Search">
                <Search size={18} strokeWidth={1.5} />
              </button>
              <button
                className={`${textColor} opacity-80 hover:opacity-100 transition-opacity relative`}
                aria-label="Cart"
                onClick={() => setIsOpen(true)}
              >
                <ShoppingBag size={18} strokeWidth={1.5} />
                {totalItems > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-gold text-obsidian text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center font-sans">
                    {totalItems}
                  </span>
                )}
              </button>
              {/* Mobile menu toggle */}
              <button
                className={`md:hidden ${textColor} opacity-80 hover:opacity-100 transition-opacity`}
                onClick={() => setMobileOpen(v => !v)}
                aria-label="Menu"
              >
                {mobileOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden bg-ivory border-t border-taupe/20 overflow-hidden transition-all duration-300 ${mobileOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-6 py-6 flex flex-col gap-5">
            {links.map(l => (
              <Link key={l.label} to={l.to} className="font-sans text-xs tracking-widest uppercase text-obsidian/70 hover:text-obsidian transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
