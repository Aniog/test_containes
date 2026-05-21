import { useState, useEffect } from 'react';
import { Menu, X, Microscope } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Categories', href: '#categories' },
  { label: 'Specimens', href: '#specimens' },
  { label: 'Facts', href: '#facts' },
];

export default function NavBar() {
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
        scrolled ? 'bg-[#050d1a]/90 backdrop-blur-md border-b border-[#1e3a5f]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full bg-[#00d4ff]/20 flex items-center justify-center group-hover:bg-[#00d4ff]/30 transition-colors">
            <Microscope className="w-4 h-4 text-[#00d4ff]" />
          </div>
          <span className="text-[#f0f9ff] font-bold text-lg tracking-tight">
            Micro<span className="text-[#00d4ff]">Cosmos</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[#94a3b8] hover:text-[#00d4ff] text-sm font-medium transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#gallery"
          className="hidden md:inline-flex items-center gap-2 bg-[#00d4ff] text-[#050d1a] text-sm font-bold px-5 py-2 rounded-full hover:bg-cyan-300 transition-colors"
        >
          Explore Now
        </a>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-[#94a3b8] hover:text-[#00d4ff] transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#050d1a]/95 backdrop-blur-md border-b border-[#1e3a5f] px-4 pb-4">
          <ul className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[#94a3b8] hover:text-[#00d4ff] text-base font-medium transition-colors block"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#gallery"
                className="inline-flex items-center bg-[#00d4ff] text-[#050d1a] text-sm font-bold px-5 py-2 rounded-full hover:bg-cyan-300 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Explore Now
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
