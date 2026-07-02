import { useState, useEffect } from 'react';
import { Menu, X, Microscope } from 'lucide-react';

const navLinks = [
  { label: 'Explore', href: '#explore' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Organisms', href: '#organisms' },
  { label: 'Science', href: '#science' },
  { label: 'About', href: '#about' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'backdrop-blur-md bg-[#050a0f]/90 border-b border-cyan-900/30' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
        <a href="#" className="flex items-center gap-2 group">
          <Microscope className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
          <span className="text-white font-black text-lg tracking-widest uppercase">
            Micro<span className="text-cyan-400">Cosmos</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-[#7fb3c8] hover:text-cyan-300 text-sm font-semibold uppercase tracking-widest transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#explore"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-400/50 text-cyan-400 text-sm font-semibold uppercase tracking-widest hover:bg-cyan-400/10 transition-all duration-200"
        >
          Discover
        </a>

        <button
          className="md:hidden text-cyan-400 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#050a0f]/95 backdrop-blur-md border-t border-cyan-900/30 px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-[#7fb3c8] hover:text-cyan-300 text-base font-semibold uppercase tracking-widest transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
