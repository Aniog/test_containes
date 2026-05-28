import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Explore', href: '#explore' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Organisms', href: '#organisms' },
  { label: 'Science', href: '#science' },
  { label: 'About', href: '#about' },
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
        scrolled ? 'bg-gray-950/90 backdrop-blur-md border-b border-gray-800' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center">
            <span className="w-3 h-3 rounded-full bg-gray-950" />
          </span>
          <span className="text-white font-bold text-lg tracking-tight">MicroCosmos</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-400 hover:text-cyan-400 text-sm font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#explore"
            className="bg-cyan-500 hover:bg-cyan-400 text-gray-950 font-semibold rounded-full px-5 py-2 text-sm transition"
          >
            Discover
          </a>
        </div>

        <button
          className="md:hidden text-gray-300 hover:text-white"
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

      {menuOpen && (
        <div className="md:hidden bg-gray-950/95 backdrop-blur-md border-b border-gray-800 px-4 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-gray-300 hover:text-cyan-400 text-sm font-medium border-b border-gray-800 last:border-0 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
