import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

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

  const textColor = isHome && !scrolled
    ? 'text-ivory'
    : 'text-obsidian';

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
            <Link
              to="/"
              className={`font-serif text-xl md:text-2xl font-light tracking-widest2 uppercase transition-colors duration-300 ${textColor}`}
            >
              Velmora
            </Link>

            {/* Center links — desktop */}
            <div className="hidden md:flex items-center gap-8">
              {links.map(link => (
                <Link
                  key={link.label}
                  to={link.to}
                  className={`font-sans text-xs tracking-widest uppercase transition-colors duration-300 hover:text-gold ${textColor}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right icons */}
            <div className="flex items-center gap-4">
              <button
                aria-label="Search"
                className={`hidden md:flex transition-colors duration-300 hover:text-gold ${textColor}`}
              >
                <Search size={18} strokeWidth={1.5} />
              </button>

              <button
                aria-label={`Cart (${totalItems} items)`}
                onClick={() => setIsOpen(true)}
                className={`relative transition-colors duration-300 hover:text-gold ${textColor}`}
              >
                <ShoppingBag size={18} strokeWidth={1.5} />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-gold text-obsidian text-[10px] font-sans font-semibold w-4 h-4 rounded-full flex items-center justify-center leading-none">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* Mobile menu toggle */}
              <button
                aria-label="Menu"
                onClick={() => setMobileOpen(v => !v)}
                className={`md:hidden transition-colors duration-300 hover:text-gold ${textColor}`}
              >
                {mobileOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden bg-ivory border-t border-divider animate-fade-in">
            <div className="px-6 py-6 flex flex-col gap-5">
              {links.map(link => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="font-sans text-xs tracking-widest uppercase text-obsidian hover:text-gold transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="hairline pt-4">
                <button className="flex items-center gap-2 font-sans text-xs tracking-widest uppercase text-obsidian hover:text-gold transition-colors">
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
