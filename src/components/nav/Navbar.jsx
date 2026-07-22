import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const navLinks = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop' },
  { label: 'About', to: '/#about' },
  { label: 'Journal', to: '/' },
];

const Navbar = () => {
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
    : 'bg-ivory border-b border-linen shadow-[0_1px_0_rgba(26,23,20,0.06)]';

  const textColor = isHome && !scrolled ? 'text-ivory' : 'text-obsidian';
  const logoColor = isHome && !scrolled ? 'text-ivory' : 'text-obsidian';

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${navBg}`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              to="/"
              className={`font-cormorant text-xl md:text-2xl font-light tracking-[0.2em] uppercase transition-colors duration-400 ${logoColor}`}
            >
              Velmora
            </Link>

            {/* Center links — desktop */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className={`font-inter text-xs uppercase tracking-[0.12em] transition-colors duration-300 hover:text-champagne ${textColor}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right icons */}
            <div className="flex items-center gap-4 md:gap-5">
              <button
                aria-label="Search"
                className={`transition-colors duration-300 hover:text-champagne ${textColor}`}
              >
                <Search className="w-4 h-4" strokeWidth={1.5} />
              </button>

              <button
                aria-label={`Cart (${totalItems} items)`}
                onClick={() => setIsOpen(true)}
                className={`relative transition-colors duration-300 hover:text-champagne ${textColor}`}
              >
                <ShoppingBag className="w-4 h-4" strokeWidth={1.5} />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-champagne text-ivory text-[9px] font-inter font-medium w-4 h-4 rounded-full flex items-center justify-center leading-none">
                    {totalItems > 9 ? '9+' : totalItems}
                  </span>
                )}
              </button>

              {/* Mobile menu toggle */}
              <button
                aria-label="Menu"
                className={`md:hidden transition-colors duration-300 hover:text-champagne ${textColor}`}
                onClick={() => setMobileOpen((v) => !v)}
              >
                {mobileOpen ? (
                  <X className="w-5 h-5" strokeWidth={1.5} />
                ) : (
                  <Menu className="w-5 h-5" strokeWidth={1.5} />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-ivory flex flex-col pt-20 px-8 transition-all duration-400 md:hidden ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-8 mt-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className="font-cormorant text-3xl font-light text-obsidian tracking-wide hover:text-champagne transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="mt-auto pb-12 border-t border-linen pt-8">
          <p className="font-inter text-xs text-stone uppercase tracking-[0.12em]">
            Free Worldwide Shipping · 30-Day Returns
          </p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
