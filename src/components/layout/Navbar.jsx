import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Navbar({ onCartClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { itemCount } = useCart();
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

  const transparent = isHome && !scrolled && !mobileOpen;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        transparent
          ? 'bg-transparent text-white'
          : 'bg-velvet-50/95 backdrop-blur-md text-velvet-900 shadow-[0_1px_0_0_rgba(0,0,0,0.04)]'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="font-serif text-xl md:text-2xl tracking-[0.25em] font-medium z-10">
            VELMORA
          </Link>

          {/* Center links — desktop */}
          <div className="hidden md:flex items-center gap-10">
            {[
              ['/shop', 'Shop'],
              ['/shop?category=necklaces', 'Collections'],
              ['/about', 'About'],
              ['/journal', 'Journal'],
            ].map(([to, label]) => (
              <Link
                key={to}
                to={to}
                className={`text-xs tracking-[0.15em] uppercase font-medium transition-colors duration-200
                  hover:text-gold-600 ${transparent ? 'text-white/90' : 'text-velvet-700'}`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-5 z-10">
            <button className="p-1 hover:text-gold-600 transition-colors" aria-label="Search">
              <Search className="w-5 h-5" strokeWidth={1.5} />
            </button>
            <button
              className="relative p-1 hover:text-gold-600 transition-colors"
              onClick={onCartClick}
              aria-label="Cart"
            >
              <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-gold-500 text-velvet-950
                  text-[10px] font-bold flex items-center justify-center leading-none">
                  {itemCount}
                </span>
              )}
            </button>
            <button
              className="md:hidden p-1 hover:text-gold-600 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-velvet-50 border-t border-velvet-200 animate-fade-in">
          <div className="px-6 py-8 flex flex-col gap-6">
            {['Shop', 'Collections', 'About', 'Journal'].map((label) => (
              <Link
                key={label}
                to={label === 'Shop' ? '/shop' : label === 'Collections' ? '/shop?category=necklaces' : `/${label.toLowerCase()}`}
                className="text-sm tracking-[0.12em] uppercase font-medium text-velvet-700 hover:text-gold-600 transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
