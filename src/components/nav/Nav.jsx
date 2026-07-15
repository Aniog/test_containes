import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const navLinks = [
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/shop' },
  { label: 'About', href: '/#about' },
  { label: 'Journal', href: '/#journal' },
];

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { itemCount, toggleDrawer } = useCart();
  const location = useLocation();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => setMobileOpen(false), [location]);

  const solidNav = !isHome || scrolled || mobileOpen;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          solidNav
            ? 'bg-velvet shadow-[0_2px_20px_rgba(0,0,0,0.15)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              to="/"
              className={`font-serif text-xl md:text-2xl tracking-widest2 font-light transition-colors duration-300 ${
                solidNav ? 'text-ivory' : 'text-ivory'
              }`}
            >
              VELMORA
            </Link>

            {/* Desktop nav links */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map(link => (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`text-xs uppercase tracking-widest font-sans font-medium transition-colors duration-200 hover:text-gold ${
                    solidNav ? 'text-ivory/80' : 'text-ivory/90'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right icons */}
            <div className="flex items-center gap-4">
              <button
                aria-label="Search"
                className={`hidden md:flex transition-colors duration-200 hover:text-gold ${
                  solidNav ? 'text-ivory/80' : 'text-ivory/90'
                }`}
              >
                <Search size={18} strokeWidth={1.5} />
              </button>

              <button
                aria-label={`Cart (${itemCount} items)`}
                onClick={toggleDrawer}
                className={`relative transition-colors duration-200 hover:text-gold ${
                  solidNav ? 'text-ivory/80' : 'text-ivory/90'
                }`}
              >
                <ShoppingBag size={18} strokeWidth={1.5} />
                {itemCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-gold text-velvet text-[10px] font-sans font-semibold w-4 h-4 rounded-full flex items-center justify-center leading-none">
                    {itemCount > 9 ? '9+' : itemCount}
                  </span>
                )}
              </button>

              {/* Mobile menu toggle */}
              <button
                aria-label="Menu"
                onClick={() => setMobileOpen(v => !v)}
                className={`md:hidden transition-colors duration-200 hover:text-gold ${
                  solidNav ? 'text-ivory/80' : 'text-ivory/90'
                }`}
              >
                {mobileOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden bg-velvet overflow-hidden transition-all duration-400 ${
            mobileOpen ? 'max-h-80 border-t border-white/10' : 'max-h-0'
          }`}
        >
          <nav className="flex flex-col px-6 py-4 gap-5">
            {navLinks.map(link => (
              <Link
                key={link.label}
                to={link.href}
                className="text-ivory/80 text-sm uppercase tracking-widest font-sans hover:text-gold transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="border-t border-white/10 pt-4">
              <button className="flex items-center gap-2 text-ivory/80 text-sm uppercase tracking-widest font-sans hover:text-gold transition-colors">
                <Search size={16} strokeWidth={1.5} />
                Search
              </button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Nav;
