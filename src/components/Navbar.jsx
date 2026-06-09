import { useState, useEffect } from 'react';
import { Menu, X, Factory } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Products', href: '#products' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-brand-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" onClick={(e) => scrollTo(e, '#home')} className="flex items-center gap-2.5 group">
          <Factory className="w-6 h-6 text-accent-500" />
          <span className="font-display text-xl md:text-2xl font-semibold tracking-tight text-brand-900">
            ARTITECT <span className="text-accent-500 font-bold">MACHINERY</span>
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollTo(e, link.href)}
              className="px-4 py-2 text-sm font-medium text-brand-700 hover:text-accent-500 rounded-md transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => scrollTo(e, '#contact')}
            className="ml-3 px-5 py-2.5 text-sm font-semibold text-white bg-accent-500 hover:bg-accent-600 rounded-md transition-colors duration-200 shadow-sm"
          >
            Request Quote
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-brand-700 hover:text-accent-500 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-brand-100 shadow-lg">
          <div className="px-6 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollTo(e, link.href)}
                className="px-3 py-2.5 text-sm font-medium text-brand-700 hover:text-accent-500 hover:bg-brand-50 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => scrollTo(e, '#contact')}
              className="mt-2 px-4 py-3 text-sm font-semibold text-white bg-accent-500 hover:bg-accent-600 rounded-md text-center transition-colors"
            >
              Request Quote
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
