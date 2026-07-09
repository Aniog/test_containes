import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { toggleCart, totalItems } = useCart();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const isHome = location.pathname === '/';
  const navBg = scrolled || !isHome ? 'bg-brand-cream/95 backdrop-blur-md shadow-sm' : 'bg-transparent';
  const textColor = scrolled || !isHome ? 'text-brand-charcoal' : 'text-white';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}>
      <nav className="max-w-7xl mx-auto section-padding flex items-center justify-between h-16 md:h-20">
        {/* Left — Logo */}
        <Link to="/" className={`font-serif text-xl md:text-2xl tracking-wider ${textColor} transition-colors`}>
          VELMORA
        </Link>

        {/* Center — Desktop links */}
        <div className="hidden md:flex items-center gap-10">
          {[
            { to: '/shop', label: 'Shop' },
            { to: '/shop?category=earrings', label: 'Collections' },
            { to: '/#about', label: 'About' },
            { to: '/', label: 'Journal' },
          ].map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className={`font-sans text-[11px] uppercase tracking-ultra-wide ${textColor} hover:opacity-70 transition-opacity`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right — Icons */}
        <div className="flex items-center gap-4">
          <button className={`${textColor} hover:opacity-70 transition-opacity hidden sm:block`} aria-label="Search">
            <Search size={18} strokeWidth={1.5} />
          </button>
          <button
            onClick={toggleCart}
            className={`${textColor} hover:opacity-70 transition-opacity relative`}
            aria-label="Cart"
          >
            <ShoppingBag size={18} strokeWidth={1.5} />
            {totalItems > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-brand-gold text-white text-[9px] font-sans font-bold rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`${textColor} md:hidden hover:opacity-70 transition-opacity`}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-brand-cream/98 backdrop-blur-md border-t border-brand-mid-gray/30">
          <div className="section-padding py-6 flex flex-col gap-5">
            {[
              { to: '/shop', label: 'Shop All' },
              { to: '/shop?category=earrings', label: 'Earrings' },
              { to: '/shop?category=necklaces', label: 'Necklaces' },
              { to: '/shop?category=huggies', label: 'Huggies' },
              { to: '/#about', label: 'Our Story' },
            ].map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="font-sans text-sm uppercase tracking-ultra-wide text-brand-charcoal"
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
