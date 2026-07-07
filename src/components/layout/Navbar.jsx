import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
  const { totalItems, setIsOpen } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-ivory/95 backdrop-blur-sm shadow-[0_1px_0_rgba(201,169,110,0.2)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              to="/"
              className={`font-serif text-xl md:text-2xl tracking-[0.18em] font-light transition-colors duration-300 ${
                scrolled ? 'text-charcoal' : 'text-ivory'
              }`}
            >
              VELMORA
            </Link>

            {/* Center nav — desktop */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map(link => (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`text-xs uppercase tracking-widest font-sans font-medium transition-colors duration-300 hover:text-gold ${
                    scrolled ? 'text-charcoal-soft' : 'text-ivory/90'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right icons */}
            <div className="flex items-center gap-4">
              <button
                aria-label="Search"
                className={`transition-colors duration-300 hover:text-gold ${
                  scrolled ? 'text-charcoal' : 'text-ivory'
                }`}
              >
                <Search size={18} strokeWidth={1.5} />
              </button>

              <button
                aria-label={`Cart (${totalItems} items)`}
                onClick={() => setIsOpen(true)}
                className={`relative transition-colors duration-300 hover:text-gold ${
                  scrolled ? 'text-charcoal' : 'text-ivory'
                }`}
              >
                <ShoppingBag size={18} strokeWidth={1.5} />
                {totalItems > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-gold text-charcoal text-[9px] font-sans font-semibold w-4 h-4 rounded-full flex items-center justify-center leading-none">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* Mobile menu toggle */}
              <button
                aria-label="Menu"
                onClick={() => setMobileOpen(v => !v)}
                className={`md:hidden transition-colors duration-300 hover:text-gold ${
                  scrolled ? 'text-charcoal' : 'text-ivory'
                }`}
              >
                {mobileOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-charcoal/95 backdrop-blur-sm flex flex-col items-center justify-center gap-8 animate-fadeIn">
          <Link
            to="/"
            className="font-serif text-3xl tracking-[0.18em] text-ivory font-light"
            onClick={() => setMobileOpen(false)}
          >
            VELMORA
          </Link>
          <div className="w-12 h-px bg-gold/40" />
          {navLinks.map(link => (
            <Link
              key={link.label}
              to={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-sm uppercase tracking-widest text-ivory/80 hover:text-gold transition-colors font-sans"
            >
              {link.label}
            </Link>
          ))}
          <div className="w-12 h-px bg-gold/40" />
          <button
            onClick={() => { setIsOpen(true); setMobileOpen(false); }}
            className="text-sm uppercase tracking-widest text-ivory/80 hover:text-gold transition-colors font-sans flex items-center gap-2"
          >
            <ShoppingBag size={16} strokeWidth={1.5} />
            Cart
          </button>
        </div>
      )}
    </>
  );
};

export default Navbar;
