import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, setIsOpen } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'Shop', href: '/shop' },
    { label: 'Collections', href: '/shop' },
    { label: 'About', href: '/#about' },
    { label: 'Journal', href: '/#journal' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled
            ? 'bg-ivory border-b border-linen shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 md:h-20 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className={`font-serif text-xl md:text-2xl tracking-widest font-light transition-colors duration-300 ${
              scrolled ? 'text-obsidian' : 'text-white'
            }`}
          >
            VELMORA
          </Link>

          {/* Center nav — desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={`font-sans text-xs tracking-widest uppercase transition-colors duration-300 hover:text-gold ${
                  scrolled ? 'text-stone' : 'text-white/90'
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
              className={`p-1 bg-transparent border-none transition-colors duration-300 hover:text-gold ${
                scrolled ? 'text-stone' : 'text-white/90'
              }`}
            >
              <Search className="w-4 h-4" />
            </button>

            <button
              aria-label={`Cart (${totalItems} items)`}
              onClick={() => setIsOpen(true)}
              className={`relative p-1 bg-transparent border-none transition-colors duration-300 hover:text-gold ${
                scrolled ? 'text-stone' : 'text-white/90'
              }`}
            >
              <ShoppingBag className="w-4 h-4" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-gold text-white text-[10px] font-sans font-600 w-4 h-4 rounded-full flex items-center justify-center leading-none">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile menu toggle */}
            <button
              aria-label="Menu"
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`md:hidden p-1 bg-transparent border-none transition-colors duration-300 ${
                scrolled ? 'text-stone' : 'text-white/90'
              }`}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-ivory transition-transform duration-400 ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full pt-24 px-8 pb-12">
          <div className="flex flex-col gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-serif text-3xl text-obsidian tracking-wide hover:text-gold transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="mt-auto">
            <p className="font-sans text-xs text-pebble tracking-widest uppercase">
              Free Worldwide Shipping · 30-Day Returns
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
