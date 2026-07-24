import React from 'react';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Navbar({ onCartOpen }) {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { totalItems } = useCart();

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Shop', href: '/shop' },
    { label: 'Collections', href: '/collections' },
    { label: 'About', href: '/about' },
    { label: 'Journal', href: '/journal' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-8xl mx-auto px-6">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 -ml-2"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Desktop nav links */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs uppercase tracking-[0.12em] text-[#1A1A1A] hover:text-[#C79A5E] transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Logo */}
            <a href="/" className="font-serif text-2xl md:text-3xl tracking-[0.15em] text-[#1A1A1A]">
              VELMORA
            </a>

            {/* Right icons */}
            <div className="flex items-center gap-4">
              <button className="p-2 hover:text-[#C79A5E] transition-colors" aria-label="Search">
                <Search className="w-5 h-5" />
              </button>
              <button
                className="p-2 relative hover:text-[#C79A5E] transition-colors"
                onClick={onCartOpen}
                aria-label="Open cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-[#C79A5E] text-white text-[9px] font-medium rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 bg-black/30 z-50 transition-opacity duration-300 md:hidden ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile menu drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-[#FAF7F2] z-50 shadow-xl transform transition-transform duration-300 ease-in-out md:hidden ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-6 py-6 border-b border-[#E8E2D8]">
          <span className="font-serif text-xl tracking-[0.15em]">VELMORA</span>
          <button
            onClick={() => setMobileOpen(false)}
            className="p-2"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <nav className="px-6 py-8 space-y-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block text-sm uppercase tracking-[0.12em] text-[#1A1A1A] hover:text-[#C79A5E] transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}