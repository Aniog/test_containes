import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
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

  const transparent = isHome && !scrolled && !mobileOpen;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          transparent
            ? 'bg-transparent'
            : 'bg-cream/95 backdrop-blur-sm border-b border-velvet-200 shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              to="/"
              className={`font-serif text-xl md:text-2xl font-light tracking-widest transition-colors duration-300 ${
                transparent ? 'text-cream' : 'text-obsidian'
              }`}
            >
              VELMORA
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`font-sans text-xs tracking-widest uppercase transition-colors duration-200 hover:text-gold ${
                    transparent ? 'text-cream/90' : 'text-mink'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Icons */}
            <div className="flex items-center gap-4">
              <button
                aria-label="Search"
                className={`hidden md:flex transition-colors duration-200 hover:text-gold ${
                  transparent ? 'text-cream/90' : 'text-mink'
                }`}
              >
                <Search size={18} />
              </button>
              <button
                aria-label={`Cart (${totalItems} items)`}
                onClick={() => setIsOpen(true)}
                className={`relative transition-colors duration-200 hover:text-gold ${
                  transparent ? 'text-cream/90' : 'text-mink'
                }`}
              >
                <ShoppingBag size={20} />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-gold text-cream text-[10px] font-sans font-medium w-4 h-4 rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
              <button
                aria-label="Menu"
                onClick={() => setMobileOpen(!mobileOpen)}
                className={`md:hidden transition-colors duration-200 ${
                  transparent ? 'text-cream/90' : 'text-mink'
                }`}
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden bg-cream border-t border-velvet-200">
            <nav className="flex flex-col px-6 py-6 gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-sans text-sm tracking-widest uppercase text-mink hover:text-gold transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <hr className="divider" />
              <button className="flex items-center gap-2 font-sans text-sm text-mink hover:text-gold transition-colors">
                <Search size={16} />
                Search
              </button>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
