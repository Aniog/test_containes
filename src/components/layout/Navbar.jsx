import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { toggleCart, totalItems } = useCart();
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

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const navBg = scrolled
    ? 'bg-brand-cream/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(0,0,0,0.05)]'
    : isHome
    ? 'bg-transparent'
    : 'bg-brand-cream/95 backdrop-blur-md';

  const textColor = scrolled || !isHome ? 'text-brand-charcoal' : 'text-white';

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Left: Mobile menu + Desktop nav */}
            <div className="flex items-center gap-8">
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={`md:hidden p-1 transition-colors ${textColor}`}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
              <div className="hidden md:flex items-center gap-8">
                {['Shop', 'Collections', 'About', 'Journal'].map((link) => (
                  <Link
                    key={link}
                    to={link === 'Shop' ? '/shop' : '/'}
                    className={`font-sans text-[11px] tracking-super-wide uppercase transition-colors hover:text-brand-gold ${textColor}`}
                  >
                    {link}
                  </Link>
                ))}
              </div>
            </div>

            {/* Center: Logo */}
            <Link
              to="/"
              className={`font-serif text-xl md:text-2xl tracking-ultra-wide uppercase transition-colors absolute left-1/2 -translate-x-1/2 ${textColor}`}
            >
              Velmora
            </Link>

            {/* Right icons */}
            <div className="flex items-center gap-4">
              <button className={`p-1 transition-colors hover:text-brand-gold hidden md:block ${textColor}`} aria-label="Search">
                <Search className="w-[18px] h-[18px]" />
              </button>
              <button
                onClick={toggleCart}
                className={`p-1 transition-colors hover:text-brand-gold relative ${textColor}`}
                aria-label="Cart"
              >
                <ShoppingBag className="w-[18px] h-[18px]" />
                {totalItems > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-brand-gold text-white text-[9px] font-sans font-medium w-4 h-4 flex items-center justify-center rounded-full">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-brand-cream transition-opacity duration-300 md:hidden ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="pt-24 px-8">
          <div className="flex flex-col gap-6">
            {['Shop', 'Collections', 'About', 'Journal'].map((link, i) => (
              <Link
                key={link}
                to={link === 'Shop' ? '/shop' : '/'}
                className="font-serif text-3xl tracking-ultra-wide uppercase text-brand-charcoal hover:text-brand-gold transition-colors"
                style={{ transitionDelay: mobileOpen ? `${i * 75}ms` : '0ms', opacity: mobileOpen ? 1 : 0, transform: mobileOpen ? 'translateY(0)' : 'translateY(10px)' }}
                onClick={() => setMobileOpen(false)}
              >
                {link}
              </Link>
            ))}
          </div>
          <div className="mt-12 pt-8 border-t border-brand-sand">
            <div className="flex items-center gap-6">
              <button className="text-brand-warm-gray hover:text-brand-charcoal transition-colors" aria-label="Search">
                <Search className="w-5 h-5" />
              </button>
              <button
                onClick={() => { setMobileOpen(false); setTimeout(() => toggleCart(), 300); }}
                className="text-brand-warm-gray hover:text-brand-charcoal transition-colors relative"
                aria-label="Cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-brand-gold text-white text-[9px] font-sans font-medium w-4 h-4 flex items-center justify-center rounded-full">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
