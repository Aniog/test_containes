import { useState, useEffect } from 'react';
import { Menu, X, Microscope } from 'lucide-react';

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
        scrolled
          ? 'bg-[#050a0f]/90 backdrop-blur-md border-b border-[#1a3a4a]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <Microscope className="w-6 h-6 text-[#00d4ff] group-hover:drop-shadow-[0_0_8px_rgba(0,212,255,0.8)] transition-all" />
          <span className="text-[#e8f4f8] font-black text-lg tracking-tight">
            Micro<span className="text-[#00d4ff]">Cosmos</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#7fb3c8] hover:text-[#00d4ff] text-sm font-medium transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#explore"
            className="bg-[#00d4ff] text-[#050a0f] font-bold rounded-full px-5 py-2 text-sm hover:bg-[#00ffcc] transition-colors duration-200"
          >
            Discover
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-[#7fb3c8] hover:text-[#00d4ff] transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0d1a26]/95 backdrop-blur-md border-b border-[#1a3a4a] px-4 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-[#7fb3c8] hover:text-[#00d4ff] text-sm font-medium border-b border-[#1a3a4a] last:border-0 transition-colors"
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
