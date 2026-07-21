import { useState, useEffect } from 'react';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Header({ navigate, currentPath }) {
  const { totalItems, toggleCart } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'Shop',        path: '/shop' },
    { label: 'Collections', path: '/shop' },
    { label: 'About',       path: '/#about' },
    { label: 'Journal',     path: '/#journal' },
  ];

  const handleNav = (path) => {
    if (path.startsWith('/#')) {
      if (currentPath !== '/') {
        navigate('/');
        setTimeout(() => {
          const el = document.getElementById(path.slice(2));
          el?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const el = document.getElementById(path.slice(2));
        el?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(path);
    }
    setMobileOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-velmora-ivory/95 backdrop-blur-md shadow-lux'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-5 md:px-10 h-16 md:h-[72px] flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => navigate('/')}
            className="font-serif text-xl md:text-2xl font-semibold tracking-[0.15em] text-velmora-charcoal uppercase bg-transparent border-none p-0"
          >
            Velmora
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <button
                key={l.label}
                onClick={() => handleNav(l.path)}
                className={`text-[13px] tracking-[0.12em] uppercase font-medium bg-transparent border-none p-0 transition-colors ${
                  scrolled ? 'text-velmora-charcoal hover:text-velmora-gold' : 'text-velmora-charcoal/90 hover:text-velmora-gold'
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-4">
            <button
              aria-label="Search"
              className={`bg-transparent border-none p-1 transition-colors ${
                scrolled ? 'text-velmora-charcoal' : 'text-velmora-charcoal/90'
              }`}
            >
              <Search size={20} strokeWidth={1.5} />
            </button>

            <button
              aria-label="Cart"
              onClick={toggleCart}
              className="relative bg-transparent border-none p-1 text-velmora-charcoal"
            >
              <ShoppingBag size={20} strokeWidth={1.5} />
              {totalItems > 0 && (
                <span className="badge-pop absolute -top-1 -right-2 w-[18px] h-[18px] bg-velmora-gold text-white text-[10px] font-semibold rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
              className="md:hidden bg-transparent border-none p-1 text-velmora-charcoal"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
          onClick={() => setMobileOpen(false)}
        >
          <div
            className="absolute top-0 right-0 w-72 h-full bg-velmora-ivory p-8 pt-20 flex flex-col gap-6"
            onClick={(e) => e.stopPropagation()}
          >
            {navLinks.map((l) => (
              <button
                key={l.label}
                onClick={() => handleNav(l.path)}
                className="text-left text-sm tracking-[0.12em] uppercase font-medium text-velmora-charcoal hover:text-velmora-gold transition-colors bg-transparent border-none p-0"
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
