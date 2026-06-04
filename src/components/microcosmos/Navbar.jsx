import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Worlds', href: '#worlds' },
  { label: 'Techniques', href: '#techniques' },
  { label: 'Facts', href: '#facts' },
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#050a0f]/90 backdrop-blur-md border-b border-[rgba(0,212,255,0.1)]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        <a href="#" className="text-xl font-black text-[#e2f0fb]">
          Micro<span className="text-[#00d4ff]">Cosmos</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-[#7fb3cc] hover:text-[#00d4ff] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-[#7fb3cc] hover:text-[#00d4ff] transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0d1a24] border-t border-[rgba(0,212,255,0.1)] px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm text-[#7fb3cc] hover:text-[#00d4ff] transition-colors duration-200 py-1"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
