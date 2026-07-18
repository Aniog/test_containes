import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCartCount } from '@/context/CartContext';

export default function Navbar({ onCartOpen }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const cartCount = useCartCount();
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isHome = pathname === '/';
  const bg = scrolled || !isHome
    ? 'bg-[#FDFBF7]/95 backdrop-blur-md shadow-sm'
    : 'bg-transparent';
  const textColor = scrolled || !isHome ? 'text-[#252320]' : 'text-white';

  const navLinks = [
    { to: '/shop', label: 'Shop' },
    { to: '/shop?collection=bestsellers', label: 'Collections' },
    { to: '/about', label: 'About' },
    { to: '/journal', label: 'Journal' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${bg}`}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile hamburger */}
          <button
            className={`md:hidden p-2 -ml-2 ${textColor}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* Center: Nav links (desktop) */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-[13px] tracking-wider uppercase font-medium transition-colors duration-300 hover:text-[#C4952E] ${textColor}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Logo — centered */}
          <Link
            to="/"
            className={`absolute left-1/2 -translate-x-1/2 font-serif text-2xl md:text-[28px] tracking-[0.15em] transition-colors duration-500 ${textColor}`}
          >
            VELMORA
          </Link>

          {/* Right: search + cart */}
          <div className="flex items-center gap-4 md:gap-5">
            <button
              className={`p-1 transition-colors duration-300 hover:text-[#C4952E] ${textColor}`}
              aria-label="Search"
            >
              <Search size={19} strokeWidth={1.5} />
            </button>
            <button
              className={`relative p-1 transition-colors duration-300 hover:text-[#C4952E] ${textColor}`}
              onClick={onCartOpen}
              aria-label={`Cart (${cartCount} items)`}
            >
              <ShoppingBag size={19} strokeWidth={1.5} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 flex items-center justify-center w-4.5 h-4.5 text-[10px] font-sans font-semibold text-white bg-[#C4952E] rounded-full min-w-[18px] h-[18px]">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ${
          mobileOpen ? 'max-h-80 pb-4' : 'max-h-0'
        }`}
        style={{ backgroundColor: '#FDFBF7' }}
      >
        <div className="flex flex-col gap-1 px-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="py-3 text-[13px] tracking-wider uppercase font-medium text-[#252320] border-b border-[#E8E3D9]/50"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
