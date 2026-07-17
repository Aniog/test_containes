import { useState, useEffect } from 'react';
import { Menu, X, Microscope } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Specimens', href: '#specimens' },
  { label: 'Ecosystem', href: '#ecosystem' },
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
        scrolled ? 'bg-cosmos-bg/90 backdrop-blur-md border-b border-cosmos-teal/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2 group">
          <Microscope className="w-6 h-6 text-cosmos-teal group-hover:scale-110 transition-transform" />
          <span className="text-slate-50 font-bold text-lg tracking-tight">
            Micro<span className="text-cosmos-teal">Cosmos</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-slate-400 hover:text-cosmos-teal text-sm font-medium tracking-wide transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#gallery"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cosmos-teal/40 text-cosmos-teal text-sm font-medium hover:bg-cosmos-teal/10 transition-colors duration-200"
        >
          Explore Now
        </a>

        <button
          className="md:hidden text-slate-400 hover:text-cosmos-teal transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-cosmos-surface/95 backdrop-blur-md border-b border-cosmos-teal/10 px-6 py-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-slate-300 hover:text-cosmos-teal text-base font-medium transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
