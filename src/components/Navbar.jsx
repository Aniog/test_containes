import { useState, useEffect } from 'react';
import { Microscope, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Introduction', href: '#introduction' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Subjects', href: '#subjects' },
  { label: 'Worlds', href: '#worlds' },
  { label: 'Showcase', href: '#showcase' },
  { label: 'Facts', href: '#facts' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-cosmos-dark/90 backdrop-blur-md border-b border-cosmos-border' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-cosmos-teal/20 flex items-center justify-center group-hover:bg-cosmos-teal/30 transition-colors">
            <Microscope className="w-4 h-4 text-cosmos-teal" />
          </div>
          <span className="text-cosmos-light font-bold text-lg tracking-tight">MicroCosmos</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-cosmos-muted text-sm hover:text-cosmos-teal transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-cosmos-muted hover:text-cosmos-teal transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-cosmos-dark/95 backdrop-blur-md border-b border-cosmos-border px-6 pb-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-cosmos-muted hover:text-cosmos-teal transition-colors border-b border-cosmos-border/50 last:border-0"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
