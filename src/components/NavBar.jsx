import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Intro', href: '#intro' },
  { label: 'Organisms', href: '#organisms' },
  { label: 'Facts', href: '#facts' },
  { label: 'Gallery', href: '#gallery' },
];

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#030b18]/90 backdrop-blur-md border-b border-cyan-500/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2.5 no-underline"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
        >
          <div className="w-8 h-8 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
            <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
          </div>
          <span
            className="text-lg font-bold text-sky-50"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Micro<span className="gradient-text">Cosmos</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-slate-400 hover:text-cyan-400 text-sm font-medium transition-colors duration-200 no-underline"
            >
              {label}
            </a>
          ))}
          <a
            href="#organisms"
            className="px-5 py-2 rounded-full border border-cyan-500/40 text-cyan-400 hover:bg-cyan-500/10 text-sm font-medium transition-all duration-200 no-underline"
          >
            Explore
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-slate-400 hover:text-cyan-400 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#030b18]/95 backdrop-blur-md border-b border-cyan-500/10 px-6 py-4">
          <nav className="flex flex-col gap-4">
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-slate-300 hover:text-cyan-400 text-base font-medium transition-colors duration-200 no-underline"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default NavBar;
