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

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { itemCount, openCart } = useCart();
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

  const navBg = isHome && !scrolled
    ? 'bg-transparent'
    : 'bg-velmora-cream/95 backdrop-blur-sm shadow-[0_1px_0_rgba(201,169,110,0.15)]';

  const textColor = isHome && !scrolled ? 'text-velmora-cream' : 'text-velmora-ink';
  const logoColor = isHome && !scrolled ? 'text-velmora-cream' : 'text-velmora-ink';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${navBg}`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              to="/"
              className={`font-cormorant text-xl md:text-2xl font-medium tracking-[0.25em] uppercase transition-colors duration-400 ${logoColor}`}
            >
              Velmora
            </Link>

            {/* Desktop Nav Links */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`font-inter text-xs tracking-[0.12em] uppercase transition-colors duration-300 hover:text-velmora-gold ${textColor}`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right Icons */}
            <div className="flex items-center gap-4">
              <button
                aria-label="Search"
                className={`hidden md:flex transition-colors duration-300 hover:text-velmora-gold ${textColor}`}
              >
                <Search className="w-4 h-4" strokeWidth={1.5} />
              </button>

              <button
                aria-label={`Cart (${itemCount} items)`}
                onClick={openCart}
                className={`relative transition-colors duration-300 hover:text-velmora-gold ${textColor}`}
              >
                <ShoppingBag className="w-4 h-4" strokeWidth={1.5} />
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-velmora-gold text-velmora-ink text-[10px] font-inter font-medium w-4 h-4 rounded-full flex items-center justify-center leading-none">
                    {itemCount > 9 ? '9+' : itemCount}
                  </span>
                )}
              </button>

              {/* Mobile menu toggle */}
              <button
                aria-label="Toggle menu"
                onClick={() => setMobileOpen((v) => !v)}
                className={`md:hidden transition-colors duration-300 hover:text-velmora-gold ${textColor}`}
              >
                {mobileOpen ? <X className="w-5 h-5" strokeWidth={1.5} /> : <Menu className="w-5 h-5" strokeWidth={1.5} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-velmora-cream transition-all duration-400 md:hidden flex flex-col pt-20 px-8 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col gap-6 mt-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="font-cormorant text-3xl font-light text-velmora-ink tracking-wide hover:text-velmora-gold transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="mt-auto pb-12 border-t border-velmora-gold/20 pt-8">
          <p className="font-inter text-xs tracking-[0.12em] uppercase text-velmora-muted">
            Free Worldwide Shipping · 30-Day Returns
          </p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
