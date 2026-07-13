import { useState, useEffect } from 'react';
import { Microscope, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#intro' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Specimens', href: '#specimens' },
  { label: 'Ecosystems', href: '#ecosystem' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-cosmos-black/90 backdrop-blur-md border-b border-cosmos-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <Microscope className="w-6 h-6 text-cosmos-teal" />
          <span className="text-lg font-bold text-white">
            Micro<span className="text-cosmos-teal">Cosmos</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-slate-300 hover:text-cosmos-teal transition-colors duration-200 text-sm font-medium"
            >
              {label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#gallery"
          className="hidden md:inline-flex items-center gap-2 border border-cosmos-teal text-cosmos-teal text-sm font-semibold px-5 py-2 rounded-full hover:bg-cosmos-teal hover:text-cosmos-black transition-all duration-300"
        >
          Explore Now
        </a>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-slate-300 hover:text-cosmos-teal transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-cosmos-deep border-t border-cosmos-border px-6 py-4 flex flex-col gap-4">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-slate-300 hover:text-cosmos-teal transition-colors text-sm font-medium py-1"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
