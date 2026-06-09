import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Products', href: '#products' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Specifications', href: '#specs' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-steel-900/97 shadow-xl' : 'bg-steel-900/80'
      } backdrop-blur-md`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <button
            onClick={() => handleNav('#home')}
            className="flex flex-col items-start group"
          >
            <span className="font-serif font-bold text-xl text-white tracking-wide leading-tight group-hover:text-gold-400 transition-colors">
              ARTITECT
            </span>
            <span className="text-gold-500 text-xs font-medium tracking-[0.25em] uppercase leading-tight">
              MACHINERY
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="text-steel-200 hover:text-gold-400 text-sm font-medium tracking-wide transition-colors duration-200"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => handleNav('#contact')}
              className="bg-gold-500 hover:bg-gold-400 text-steel-900 font-semibold text-sm px-5 py-2.5 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Request a Quote
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-steel-900 border-t border-steel-700/50 px-4 pb-6 pt-2">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="block w-full text-left text-steel-200 hover:text-gold-400 py-3 text-base font-medium border-b border-steel-700/30 transition-colors"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNav('#contact')}
            className="mt-4 w-full bg-gold-500 hover:bg-gold-400 text-steel-900 font-semibold py-3 rounded-lg transition-all"
          >
            Request a Quote
          </button>
        </div>
      )}
    </header>
  );
}
