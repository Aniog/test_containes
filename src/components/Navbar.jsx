import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Products', href: '#products' },
  { label: 'Features', href: '#features' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-steel-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-brand-950 rounded-sm flex items-center justify-center">
            <span className="text-white font-heading font-bold text-lg tracking-tight">A</span>
          </div>
          <div className="flex flex-col leading-tight">
            <span className={`font-heading font-bold text-lg tracking-wide transition-colors ${scrolled ? 'text-brand-950' : 'text-white'}`}>
              ARTITECT
            </span>
            <span className={`text-[10px] tracking-[0.3em] uppercase font-medium transition-colors ${scrolled ? 'text-steel-500' : 'text-white/70'}`}>
              Machinery
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium tracking-wide uppercase transition-colors hover:text-accent ${
                scrolled ? 'text-steel-700' : 'text-white/90'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-4 px-6 py-2.5 bg-accent text-white text-sm font-semibold rounded-sm tracking-wide uppercase hover:bg-accent-dark transition-colors"
          >
            Get a Quote
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className={`w-6 h-6 ${scrolled ? 'text-brand-950' : 'text-white'}`} />
          ) : (
            <Menu className={`w-6 h-6 ${scrolled ? 'text-brand-950' : 'text-white'}`} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-steel-100 shadow-lg">
          <div className="px-6 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-steel-800 font-medium py-2 border-b border-steel-100 last:border-0"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 px-6 py-3 bg-accent text-white text-sm font-semibold rounded-sm text-center tracking-wide uppercase"
            >
              Get a Quote
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
