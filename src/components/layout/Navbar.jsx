import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, toggleCart } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { to: '/shop', label: 'Shop' },
    { to: '/collections', label: 'Collections' },
    { to: '/about', label: 'About' },
    { to: '/journal', label: 'Journal' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#faf8f6]/95 backdrop-blur-md shadow-[0_1px_0_#e8ddd3]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 -ml-2 text-stone-700"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Center nav - desktop */}
            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-xs tracking-widest uppercase text-stone-600 hover:text-warm-800 transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Logo */}
            <Link
              to="/"
              className={`font-serif text-2xl lg:text-3xl tracking-[0.28em] transition-colors duration-300 ${
                scrolled ? 'text-stone-900' : 'text-white'
              }`}
            >
              VELMORA
            </Link>

            {/* Right icons */}
            <div className="flex items-center gap-3">
              <button
                className={`p-2 transition-colors duration-300 ${
                  scrolled ? 'text-stone-700' : 'text-white'
                }`}
                aria-label="Search"
              >
                <Search className="w-4 h-4" />
              </button>
              <button
                onClick={() => toggleCart()}
                className={`p-2 relative transition-colors duration-300 ${
                  scrolled ? 'text-stone-700' : 'text-white'
                }`}
                aria-label="Cart"
              >
                <ShoppingBag className="w-4 h-4" />
                {totalItems > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-warm-700 text-white text-[10px] font-medium rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div className="absolute inset-0 bg-stone-900/40 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
          <div className="absolute top-0 left-0 bottom-0 w-80 bg-[#faf8f6] animate-slide-in-right shadow-2xl">
            <div className="flex items-center justify-between p-6 border-b border-velvet-200">
              <span className="font-serif text-xl tracking-[0.2em]">VELMORA</span>
              <button onClick={() => setMobileOpen(false)} className="p-2">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex flex-col p-6 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="py-3 text-sm tracking-widest uppercase text-stone-700 hover:text-warm-800 border-b border-velvet-100 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
