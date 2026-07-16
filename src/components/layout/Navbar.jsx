import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, openCart } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const navLinks = [
    { label: 'Shop', href: '/shop' },
    { label: 'Collections', href: '/collections' },
    { label: 'About', href: '/about' },
    { label: 'Journal', href: '/journal' },
  ];

  const navBg = scrolled || !isHome
    ? 'bg-cream-50/95 backdrop-blur-md shadow-sm border-b border-charcoal-100'
    : 'bg-transparent';

  const textColor = scrolled || !isHome ? 'text-charcoal-800' : 'text-cream-50';

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}>
        <div className="container-narrow">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`md:hidden ${textColor} hover:opacity-70 transition-opacity`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            {/* Logo */}
            <Link
              to="/"
              className="font-serif text-2xl md:text-3xl tracking-wider uppercase absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0"
            >
              <span className={textColor}>Velmora</span>
            </Link>

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
              {navLinks.map(link => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`text-[11px] font-medium tracking-ultra-wide uppercase ${textColor} hover:opacity-70 transition-opacity`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right icons */}
            <div className={`flex items-center gap-5 ${textColor}`}>
              <button className="hover:opacity-70 transition-opacity" aria-label="Search">
                <Search size={18} />
              </button>
              <button
                onClick={openCart}
                className="relative hover:opacity-70 transition-opacity"
                aria-label="Shopping bag"
              >
                <ShoppingBag size={18} />
                {totalItems > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-gold-500 text-white text-[9px] font-bold flex items-center justify-center rounded-full">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-charcoal-950/50" onClick={() => setMobileOpen(false)} />
        <div
          className={`absolute left-0 top-0 bottom-0 w-80 max-w-[85vw] bg-cream-50 transform transition-transform duration-300 ${
            mobileOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="p-8 pt-24">
            <div className="space-y-6">
              {navLinks.map(link => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="block font-serif text-2xl tracking-wider uppercase text-charcoal-800 hover:text-gold-500 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
