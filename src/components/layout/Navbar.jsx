import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import CartDrawer from './CartDrawer';

const navLinks = [
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/shop' },
  { label: 'About', href: '/#story' },
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

  // On non-home pages, always solid
  const solid = scrolled || !isHome;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          solid
            ? 'bg-obsidian shadow-md'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              to="/"
              className={`font-serif text-xl md:text-2xl font-light tracking-widest transition-colors duration-300 ${
                solid ? 'text-ivory' : 'text-ivory'
              }`}
            >
              VELMORA
            </Link>

            {/* Center nav — desktop */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map(link => (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`text-xs tracking-widest uppercase font-medium transition-colors duration-200 hover:text-gold ${
                    solid ? 'text-taupe-light' : 'text-ivory/80'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right icons */}
            <div className="flex items-center gap-4">
              <button
                aria-label="Search"
                className={`transition-colors duration-200 hover:text-gold ${
                  solid ? 'text-taupe-light' : 'text-ivory/80'
                }`}
              >
                <Search size={18} />
              </button>
              <button
                aria-label="Cart"
                onClick={() => setIsOpen(true)}
                className={`relative transition-colors duration-200 hover:text-gold ${
                  solid ? 'text-taupe-light' : 'text-ivory/80'
                }`}
              >
                <ShoppingBag size={18} />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-gold text-obsidian text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
              {/* Mobile menu toggle */}
              <button
                aria-label="Menu"
                onClick={() => setMobileOpen(v => !v)}
                className={`md:hidden transition-colors duration-200 hover:text-gold ${
                  solid ? 'text-taupe-light' : 'text-ivory/80'
                }`}
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden bg-obsidian border-t border-gold/20">
            <div className="px-6 py-6 flex flex-col gap-5">
              {navLinks.map(link => (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-ivory/80 text-sm tracking-widest uppercase font-medium hover:text-gold transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      <CartDrawer />
    </>
  );
}
