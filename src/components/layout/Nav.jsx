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
    : 'bg-cream border-b border-border';

  const textColor = isHome && !scrolled ? 'text-cream' : 'text-charcoal';
  const logoColor = isHome && !scrolled ? 'text-cream' : 'text-charcoal';

  const links = [
    { label: 'Shop', to: '/shop' },
    { label: 'Collections', to: '/shop' },
    { label: 'About', to: '/about' },
    { label: 'Journal', to: '/journal' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}
        style={{ backdropFilter: scrolled || !isHome ? 'none' : 'none' }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              to="/"
              className={`font-serif text-xl md:text-2xl font-light tracking-widest uppercase transition-colors duration-300 ${logoColor}`}
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              VELMORA
            </Link>

            {/* Center links — desktop */}
            <div className="hidden md:flex items-center gap-8">
              {links.map((l) => (
                <Link
                  key={l.label}
                  to={l.to}
                  className={`text-xs tracking-widest uppercase font-medium transition-colors duration-200 hover:text-gold ${textColor}`}
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  {l.label}
                </Link>
              ))}
            </div>

            {/* Right icons */}
            <div className="flex items-center gap-4">
              <button
                className={`hidden md:flex transition-colors duration-200 hover:text-gold ${textColor}`}
                aria-label="Search"
              >
                <Search size={18} strokeWidth={1.5} />
              </button>
              <button
                className={`relative transition-colors duration-200 hover:text-gold ${textColor}`}
                aria-label="Cart"
                onClick={() => setIsOpen(true)}
              >
                <ShoppingBag size={18} strokeWidth={1.5} />
                {totalItems > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-gold text-charcoal text-[10px] font-semibold w-4 h-4 rounded-full flex items-center justify-center leading-none">
                    {totalItems}
                  </span>
                )}
              </button>
              <button
                className={`md:hidden transition-colors duration-200 hover:text-gold ${textColor}`}
                aria-label="Menu"
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                {mobileOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden bg-cream border-t border-border">
            <div className="px-4 py-6 flex flex-col gap-5">
              {links.map((l) => (
                <Link
                  key={l.label}
                  to={l.to}
                  className="text-xs tracking-widest uppercase font-medium text-charcoal hover:text-gold transition-colors"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  {l.label}
                </Link>
              ))}
              <div className="hairline pt-4">
                <button className="flex items-center gap-2 text-xs tracking-widest uppercase text-charcoal hover:text-gold transition-colors">
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
