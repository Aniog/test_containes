import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const navLinks = [
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/shop' },
  { label: 'About', href: '/#about' },
  { label: 'Journal', href: '/' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, setIsOpen } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-velmora-ivory/95 backdrop-blur-sm shadow-sm border-b border-velmora-border'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              to="/"
              className={`font-serif text-xl md:text-2xl tracking-[0.2em] uppercase font-light transition-colors duration-300 ${
                scrolled ? 'text-velmora-obsidian' : 'text-velmora-ivory'
              }`}
            >
              Velmora
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map(link => (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`font-sans text-xs tracking-widest uppercase font-medium transition-colors duration-300 hover:text-velmora-gold ${
                    scrolled ? 'text-velmora-muted' : 'text-velmora-ivory/80'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right Icons */}
            <div className="flex items-center gap-4">
              <button
                aria-label="Search"
                className={`transition-colors duration-300 hover:text-velmora-gold ${
                  scrolled ? 'text-velmora-muted' : 'text-velmora-ivory/80'
                }`}
              >
                <Search size={18} strokeWidth={1.5} />
              </button>

              <button
                aria-label={`Cart (${totalItems} items)`}
                onClick={() => setIsOpen(true)}
                className={`relative transition-colors duration-300 hover:text-velmora-gold ${
                  scrolled ? 'text-velmora-muted' : 'text-velmora-ivory/80'
                }`}
              >
                <ShoppingBag size={18} strokeWidth={1.5} />
                {totalItems > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-velmora-gold text-velmora-obsidian text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center font-sans">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* Mobile menu toggle */}
              <button
                aria-label="Menu"
                onClick={() => setMobileOpen(v => !v)}
                className={`md:hidden transition-colors duration-300 hover:text-velmora-gold ${
                  scrolled ? 'text-velmora-muted' : 'text-velmora-ivory/80'
                }`}
              >
                {mobileOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-velmora-obsidian flex flex-col pt-20 px-8">
          <button
            onClick={() => setMobileOpen(false)}
            className="absolute top-5 right-5 text-velmora-ivory/60 hover:text-velmora-gold"
          >
            <X size={24} strokeWidth={1.5} />
          </button>
          <nav className="flex flex-col gap-8 mt-8">
            {navLinks.map(link => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-serif text-3xl font-light text-velmora-ivory hover:text-velmora-gold transition-colors duration-300 tracking-wide"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto pb-12">
            <p className="font-sans text-xs tracking-widest uppercase text-velmora-subtle">
              Free Worldwide Shipping · 30-Day Returns
            </p>
          </div>
        </div>
      )}
    </>
  );
}
