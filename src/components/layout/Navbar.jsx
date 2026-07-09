import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/data/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, openCart } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const navBg = scrolled || !isHome
    ? 'backdrop-blur-md shadow-sm'
    : 'bg-transparent';

  const navBorder = scrolled || !isHome ? { borderBottom: '1px solid #E8E2D9', backgroundColor: 'rgba(250,247,242,0.97)' } : {};

  const textStyle = scrolled || !isHome ? { color: '#1A1A1A' } : { color: '#FAF7F2' };

  const links = [
    { label: 'Shop', to: '/shop' },
    { label: 'Collections', to: '/shop' },
    { label: 'About', to: '/#about' },
    { label: 'Journal', to: '/#journal' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`} style={navBorder}>
      <nav className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 flex items-center justify-between h-16 md:h-20">
        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden transition-colors"
          style={textStyle}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Logo */}
        <Link to="/" className="font-serif text-2xl md:text-3xl font-semibold tracking-wide transition-colors" style={textStyle}>
          VELMORA
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <Link
              key={link.label}
              to={link.to}
              className="text-sm font-medium tracking-wide uppercase hover:opacity-70 transition-opacity duration-200"
              style={textStyle}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right icons */}
        <div className="flex items-center gap-4">
          <button className="hover:opacity-70 transition-opacity" style={textStyle} aria-label="Search">
            <Search size={20} />
          </button>
          <button
            onClick={openCart}
            className="relative hover:opacity-70 transition-opacity"
            style={textStyle}
            aria-label="Cart"
          >
            <ShoppingBag size={20} />
            {totalItems > 0 && (
              <span className="absolute -top-1.5 -right-1.5 text-[10px] font-semibold w-4 h-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#B8860B', color: '#FAF7F2' }}>
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden" style={{ backgroundColor: '#FAF7F2', borderTop: '1px solid #E8E2D9' }}>
          <div className="px-5 py-6 flex flex-col gap-4">
            {links.map(link => (
              <Link
                key={link.label}
                to={link.to}
                className="text-sm font-medium tracking-wide uppercase hover:opacity-70 transition-opacity"
                style={{ color: '#1A1A1A' }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
