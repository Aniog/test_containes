import { useState, useEffect } from 'react';
import { Menu, X, Microscope } from 'lucide-react';

const navLinks = [
  { label: 'Explore', href: '#explore' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Worlds', href: '#worlds' },
  { label: 'Science', href: '#science' },
  { label: 'Discover', href: '#discover' },
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
        scrolled
          ? 'bg-cosmos-deep/90 backdrop-blur-md border-b border-cosmos-cyan/10 shadow-lg shadow-black/40'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2 group">
          <Microscope className="w-6 h-6 text-cosmos-cyan group-hover:rotate-12 transition-transform duration-300" />
          <span className="text-white font-black text-lg tracking-tight">
            Micro<span className="text-cosmos-cyan">Cosmos</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-slate-300 hover:text-cosmos-cyan text-sm font-medium transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#discover"
            className="bg-cosmos-cyan text-cosmos-deep text-sm font-bold px-5 py-2 rounded-full hover:bg-white transition-colors duration-200"
          >
            Start Exploring
          </a>
        </div>

        <button
          className="md:hidden text-slate-300 hover:text-cosmos-cyan transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-cosmos-deep/95 backdrop-blur-md border-t border-cosmos-cyan/10 px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-slate-300 hover:text-cosmos-cyan text-base font-medium transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#discover"
            className="bg-cosmos-cyan text-cosmos-deep text-sm font-bold px-5 py-2 rounded-full text-center hover:bg-white transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Start Exploring
          </a>
        </div>
      )}
    </nav>
  );
}
