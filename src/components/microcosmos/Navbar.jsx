import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Specimens', href: '#specimens' },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cosmos-deep/90 backdrop-blur-md border-b border-cosmos-cyan/10 shadow-glow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-heading text-xl font-bold"
          style={{
            background: 'linear-gradient(135deg, #00d4ff, #00ffcc)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          MicroCosmos
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-cosmos-muted hover:text-cosmos-cyan transition-colors duration-200 text-sm font-heading font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#gallery"
            className="px-5 py-2 rounded-full text-sm font-semibold font-heading text-cosmos-deep transition-all duration-300 hover:scale-105 hover:shadow-glow-sm"
            style={{ background: 'linear-gradient(135deg, #00d4ff, #00ffcc)' }}
          >
            Explore
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-cosmos-muted hover:text-cosmos-cyan transition-colors p-2 bg-transparent border-0"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-5 flex flex-col gap-1">
            <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-cosmos-dark/95 backdrop-blur-md border-b border-cosmos-cyan/10 px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-cosmos-muted hover:text-cosmos-cyan transition-colors duration-200 text-base font-heading font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
