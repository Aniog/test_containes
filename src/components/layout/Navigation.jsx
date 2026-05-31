import { useState, useEffect } from 'react';
import { Menu, X, Waves } from 'lucide-react';

const navLinks = [
  { label: 'Cities', href: '#cities' },
  { label: 'Transport', href: '#transport' },
  { label: 'Government', href: '#government' },
  { label: 'Technology', href: '#technology' },
  { label: 'Culture', href: '#culture' },
];

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-abyss/90 backdrop-blur-md border-b border-bio-cyan/10 shadow-[0_4px_30px_rgba(0,212,255,0.05)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 group"
        >
          <div className="relative">
            <Waves className="w-7 h-7 text-bio-cyan group-hover:text-glow-aqua transition-colors duration-300" />
            <div className="absolute inset-0 blur-md bg-bio-cyan/30 group-hover:bg-glow-aqua/40 transition-all duration-300 rounded-full" />
          </div>
          <span className="font-display text-xl font-bold text-pearl tracking-widest">
            ABYSSIA
          </span>
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="font-heading text-sm font-medium text-muted-slate hover:text-bio-cyan transition-colors duration-300 tracking-wider uppercase relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-bio-cyan group-hover:w-full transition-all duration-300" />
            </button>
          ))}
          <button
            onClick={() => handleNav('#contact')}
            className="font-heading text-sm font-semibold bg-bio-cyan/10 border border-bio-cyan/40 text-bio-cyan px-5 py-2 rounded-full hover:bg-bio-cyan/20 hover:border-bio-cyan transition-all duration-300 tracking-wider uppercase"
          >
            Explore
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-bio-cyan p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-abyss/95 backdrop-blur-md border-t border-bio-cyan/10 px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="font-heading text-sm font-medium text-muted-slate hover:text-bio-cyan transition-colors duration-300 tracking-wider uppercase text-left py-2 border-b border-bio-cyan/10"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNav('#contact')}
            className="font-heading text-sm font-semibold bg-bio-cyan/10 border border-bio-cyan/40 text-bio-cyan px-5 py-3 rounded-full hover:bg-bio-cyan/20 transition-all duration-300 tracking-wider uppercase mt-2"
          >
            Explore
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
