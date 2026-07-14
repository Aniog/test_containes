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

  const navBg = isHome && !scrolled
    ? 'bg-transparent'
    : 'bg-ivory/95 backdrop-blur-sm border-b border-sand shadow-sm';

  const textColor = isHome && !scrolled ? 'text-ivory' : 'text-ink';
  const logoColor = isHome && !scrolled ? 'text-ivory' : 'text-obsidian';

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className={`font-display text-xl lg:text-2xl font-light tracking-ultra-wide uppercase ${logoColor} transition-colors duration-300`}>
              Velmora
            </Link>

            {/* Center links — desktop */}
            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`text-xs tracking-widest uppercase font-sans font-medium ${textColor} hover:text-gold transition-colors duration-200`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right icons */}
            <div className="flex items-center gap-5">
              <button
                aria-label="Search"
                className={`${textColor} hover:text-gold transition-colors duration-200 hidden lg:block`}
              >
                <Search size={18} strokeWidth={1.5} />
              </button>
              <button
                aria-label="Cart"
                onClick={() => setIsOpen(true)}
                className={`${textColor} hover:text-gold transition-colors duration-200 relative`}
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
                onClick={() => setMobileOpen(!mobileOpen)}
                className={`lg:hidden ${textColor} hover:text-gold transition-colors duration-200`}
              >
                {mobileOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-ivory border-t border-sand">
            <div className="px-6 py-6 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-xs tracking-widest uppercase font-sans font-medium text-ink hover:text-gold transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
              <div className="divider" />
              <button className="flex items-center gap-2 text-xs tracking-widest uppercase font-sans font-medium text-ink hover:text-gold transition-colors duration-200">
                <Search size={16} strokeWidth={1.5} />
                Search
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
