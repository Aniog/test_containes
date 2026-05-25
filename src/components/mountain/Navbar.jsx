import { useState, useEffect } from 'react';
import { Menu, X, Mountain } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Peaks', href: '#peaks' },
  { label: 'Why Climb', href: '#why' },
  { label: 'Gear', href: '#gear' },
  { label: 'Gallery', href: '#gallery' },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-950/95 backdrop-blur-md border-b border-slate-800 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2 text-white font-black text-xl tracking-tight">
          <Mountain className="w-6 h-6 text-sky-400" />
          SUMMIT
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-slate-300 hover:text-sky-400 transition-colors text-sm font-semibold tracking-wide"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#peaks"
          className="hidden md:inline-block bg-sky-500 hover:bg-sky-600 text-white font-semibold px-5 py-2 rounded-full text-sm transition-colors"
        >
          Start Climbing
        </a>

        <button
          className="md:hidden text-white bg-transparent border-0 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-slate-950/98 border-t border-slate-800 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-slate-200 hover:text-sky-400 transition-colors font-semibold text-base"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#peaks"
            className="bg-sky-500 hover:bg-sky-600 text-white font-semibold px-5 py-2 rounded-full text-sm transition-colors text-center mt-2"
            onClick={() => setMenuOpen(false)}
          >
            Start Climbing
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
