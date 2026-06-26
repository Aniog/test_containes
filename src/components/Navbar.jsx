import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Products', href: '#products' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 h-[72px] flex items-center justify-between">
        <a
          href="#home"
          className={`text-xl font-bold tracking-tight transition-colors ${
            scrolled ? 'text-brand' : 'text-white'
          }`}
        >
          ARTITECT <span className="text-accent">MACHINERY</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium uppercase tracking-[0.05em] transition-colors hover:text-accent ${
                scrolled ? 'text-text-primary' : 'text-white/90'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center bg-accent text-brand px-6 py-2.5 rounded text-sm font-semibold uppercase tracking-[0.05em] hover:bg-accent-hover transition-colors"
          >
            Get a Quote
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden p-2 transition-colors ${
            scrolled ? 'text-brand' : 'text-white'
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-border shadow-lg">
          <div className="flex flex-col px-6 py-6 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="text-sm font-medium uppercase tracking-[0.05em] text-text-primary hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={handleLinkClick}
              className="inline-flex items-center justify-center bg-accent text-brand px-6 py-3 rounded text-sm font-semibold uppercase tracking-[0.05em] hover:bg-accent-hover transition-colors mt-2"
            >
              Get a Quote
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
