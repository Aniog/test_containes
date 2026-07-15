import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const navLinks = [
  { to: '/shop', label: 'Shop' },
  { to: '/collections', label: 'Collections' },
  { to: '/about', label: 'About' },
  { to: '/journal', label: 'Journal' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, setIsOpen } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const isHome = location.pathname === '/';
  const navBg = scrolled || !isHome
    ? 'bg-velmora-white/95 backdrop-blur-md shadow-sm'
    : 'bg-transparent';
  const textColor = scrolled || !isHome ? 'text-velmora-charcoal' : 'text-velmora-white';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}
      >
        <nav className="max-w-[1400px] mx-auto px-5 md:px-8 flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden p-2 -ml-2 ${textColor} transition-colors duration-300`}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* Logo */}
          <Link
            to="/"
            className={`font-serif text-2xl md:text-[1.75rem] font-medium tracking-[0.08em] ${textColor} transition-colors duration-300 order-none md:order-none`}
          >
            VELMORA
          </Link>

          {/* Center nav links - desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-nav uppercase ${textColor} transition-colors duration-300 relative
                  after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px]
                  after:bg-current after:transition-all after:duration-300
                  hover:after:w-full`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right icons */}
          <div className={`flex items-center gap-4 ${textColor} transition-colors duration-300`}>
            <button className="p-2 hidden md:block" aria-label="Search">
              <Search size={20} strokeWidth={1.5} />
            </button>
            <button
              onClick={() => setIsOpen(true)}
              className="p-2 relative"
              aria-label="Open cart"
            >
              <ShoppingBag size={20} strokeWidth={1.5} />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4.5 h-4.5 bg-velmora-gold text-velmora-black text-[10px] font-medium rounded-full flex items-center justify-center leading-none">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </nav>

        {/* Thin gold accent line */}
        {scrolled && (
          <div className="h-[1px] bg-gradient-to-r from-transparent via-velmora-gold/30 to-transparent" />
        )}
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-400 md:hidden ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-velmora-black/50 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute top-0 left-0 h-full w-[80%] max-w-sm bg-velmora-white shadow-2xl transition-transform duration-400 ${
            mobileOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="p-6 pt-20">
            <div className="flex flex-col gap-1">
              {navLinks.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-heading-sm font-serif text-velmora-charcoal py-3 border-b border-velmora-light/50 transition-colors hover:text-velmora-gold"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-4">
              <a href="#" className="text-body-sm text-velmora-muted hover:text-velmora-charcoal transition-colors">
                Contact Us
              </a>
              <a href="#" className="text-body-sm text-velmora-muted hover:text-velmora-charcoal transition-colors">
                Track Order
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
