import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Products', href: '#products' },
  { label: 'Features', href: '#features' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-brand-navy flex items-center justify-center">
              <span className="text-brand-gold font-serif text-lg font-bold">A</span>
            </div>
            <div>
              <span className={`font-serif text-xl font-bold tracking-wide transition-colors ${
                scrolled ? 'text-brand-navy' : 'text-white'
              }`}>
                ARTITECT
              </span>
              <span className={`block text-[10px] uppercase tracking-[0.2em] transition-colors ${
                scrolled ? 'text-brand-navy/60' : 'text-white/70'
              }`}>
                Machinery
              </span>
            </div>
          </a>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm font-medium uppercase tracking-wider transition-colors hover:text-brand-gold ${
                  scrolled ? 'text-brand-navy' : 'text-white/90'
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-brand-gold text-white px-6 py-2.5 text-sm font-medium uppercase tracking-wider hover:bg-brand-navy transition-colors"
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className={`md:hidden p-2 transition-colors ${
              scrolled ? 'text-brand-navy' : 'text-white'
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white border-t border-gray-100 px-4 py-4 space-y-3">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block text-brand-navy font-medium py-2 uppercase tracking-wider text-sm hover:text-brand-gold transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="block text-center bg-brand-gold text-white px-6 py-3 text-sm font-medium uppercase tracking-wider hover:bg-brand-navy transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Get a Quote
          </a>
        </div>
      </div>
    </nav>
  );
}