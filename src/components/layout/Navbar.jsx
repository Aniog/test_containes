import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const navLinks = [
  { name: 'Shop', path: '/shop' },
  { name: 'Collections', path: '/shop' },
  { name: 'About', path: '/about' },
  { name: 'Journal', path: '/journal' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { itemCount, toggleCart } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const isHome = location.pathname === '/';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || !isHome
            ? 'bg-velmora-cream/95 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-[1440px] mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 -ml-2"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="w-5 h-5 text-velmora-charcoal" />
              ) : (
                <Menu className="w-5 h-5 text-velmora-charcoal" />
              )}
            </button>

            {/* Logo */}
            <Link to="/" className="absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0">
              <h1
                className={`font-serif text-xl lg:text-2xl tracking-widest-2xl transition-colors duration-300 ${
                  scrolled || !isHome ? 'text-velmora-charcoal' : 'text-white'
                }`}
              >
                VELMORA
              </h1>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`font-sans text-[11px] uppercase tracking-widest-xl transition-colors duration-300 hover:text-velmora-gold ${
                    scrolled || !isHome ? 'text-velmora-charcoal' : 'text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Right icons */}
            <div className="flex items-center gap-4">
              <button
                className={`p-2 transition-colors duration-300 hover:text-velmora-gold ${
                  scrolled || !isHome ? 'text-velmora-charcoal' : 'text-white'
                }`}
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                onClick={toggleCart}
                className={`p-2 relative transition-colors duration-300 hover:text-velmora-gold ${
                  scrolled || !isHome ? 'text-velmora-charcoal' : 'text-white'
                }`}
                aria-label="Shopping cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {itemCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-velmora-gold text-white text-[9px] font-sans font-semibold rounded-full flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile menu panel */}
      <div
        className={`fixed top-0 left-0 bottom-0 z-50 w-72 bg-velmora-cream transform transition-transform duration-300 lg:hidden ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-10">
            <h2 className="font-serif text-xl tracking-widest-2xl text-velmora-charcoal">VELMORA</h2>
            <button onClick={() => setMobileOpen(false)} className="p-2" aria-label="Close menu">
              <X className="w-5 h-5 text-velmora-charcoal" />
            </button>
          </div>
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="font-sans text-[11px] uppercase tracking-widest-xl text-velmora-charcoal hover:text-velmora-gold transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
