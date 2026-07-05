import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const navLinks = [
  { name: 'Shop', path: '/shop' },
  { name: 'Collections', path: '/shop' },
  { name: 'About', path: '/shop' },
  { name: 'Journal', path: '/shop' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalItems, openDrawer } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const bgClass = () => {
    if (!isHome) return 'bg-velmora-ivory/98 backdrop-blur-sm border-b border-black/5';
    if (scrolled) return 'bg-velmora-ivory/98 backdrop-blur-sm border-b border-black/5';
    return 'bg-transparent';
  };

  const textClass = () => {
    if (!isHome) return 'text-velmora-espresso';
    if (scrolled) return 'text-velmora-espresso';
    return 'text-white';
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${bgClass()}`}
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden ${textClass()}`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            {/* Logo */}
            <Link
              to="/"
              className={`font-serif text-xl lg:text-2xl tracking-[0.25em] font-medium ${textClass()} transition-colors duration-300`}
            >
              VELMORA
            </Link>

            {/* Center nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-xs tracking-[0.15em] uppercase font-sans font-medium hover:text-velmora-gold transition-colors duration-200 ${textClass()}`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Right icons */}
            <div className="flex items-center gap-4">
              <button className={`${textClass()} hover:text-velmora-gold transition-colors`} aria-label="Search">
                <Search className="w-4 h-4" />
              </button>
              <button
                onClick={openDrawer}
                className={`relative ${textClass()} hover:text-velmora-gold transition-colors`}
                aria-label="Cart"
              >
                <ShoppingBag className="w-4 h-4" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-velmora-gold text-white text-[10px] font-sans font-medium flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-black/30" onClick={() => setMobileMenuOpen(false)} />
          <div className="absolute top-16 left-0 right-0 bg-velmora-ivory border-b border-black/5 animate-slide-up">
            <div className="py-6 px-5 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-sm tracking-[0.15em] uppercase font-sans font-medium text-velmora-espresso hover:text-velmora-gold transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
