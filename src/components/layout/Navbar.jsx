import { useState, useEffect } from 'react';
import { Menu, X, Microscope } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Creatures', href: '#creatures' },
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
        scrolled ? 'bg-[#050a0f]/90 backdrop-blur-md border-b border-[#00d4c8]/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2 group">
          <Microscope className="w-6 h-6 text-[#00d4c8] group-hover:scale-110 transition-transform" />
          <span className="text-[#e2f0f9] font-bold text-lg tracking-tight">
            Micro<span className="text-[#00d4c8]">Cosmos</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[#7fa8c4] hover:text-[#00d4c8] text-sm font-medium tracking-wide transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#gallery"
          className="hidden md:inline-flex items-center bg-[#00d4c8] text-[#050a0f] font-semibold text-sm px-5 py-2 rounded-full hover:bg-[#00b8ad] transition-colors duration-200"
        >
          Explore Now
        </a>

        <button
          className="md:hidden text-[#e2f0f9] p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#0d1a24]/95 backdrop-blur-md border-t border-[#00d4c8]/10 px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#7fa8c4] hover:text-[#00d4c8] text-base font-medium transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#gallery"
            className="inline-flex items-center justify-center bg-[#00d4c8] text-[#050a0f] font-semibold text-sm px-5 py-2 rounded-full hover:bg-[#00b8ad] transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Explore Now
          </a>
        </div>
      )}
    </nav>
  );
}
