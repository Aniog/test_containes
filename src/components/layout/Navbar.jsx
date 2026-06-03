import { useState, useEffect } from 'react';
import { Menu, X, Microscope } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Categories', href: '#categories' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Specimens', href: '#specimens' },
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
        scrolled ? 'bg-[#050a14]/95 backdrop-blur-md shadow-lg shadow-black/40' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <Microscope className="w-7 h-7 text-[#00d4c8] group-hover:scale-110 transition-transform" />
          <span className="text-[#f0f4ff] font-black text-xl tracking-tight">
            Micro<span className="text-[#00d4c8]">Cosmos</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[#8ba3c7] hover:text-[#00d4c8] text-sm font-medium tracking-wide transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#gallery"
          className="hidden md:inline-flex items-center gap-2 bg-[#00d4c8] text-[#050a14] text-sm font-bold px-5 py-2 rounded-full hover:bg-[#00bfb4] transition-colors"
        >
          Explore Now
        </a>

        <button
          className="md:hidden text-[#f0f4ff] p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#0d1526]/98 backdrop-blur-md border-t border-[#1e3050] px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#8ba3c7] hover:text-[#00d4c8] text-base font-medium transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#gallery"
            className="inline-flex items-center justify-center bg-[#00d4c8] text-[#050a14] text-sm font-bold px-5 py-2 rounded-full hover:bg-[#00bfb4] transition-colors mt-2"
            onClick={() => setMenuOpen(false)}
          >
            Explore Now
          </a>
        </div>
      )}
    </nav>
  );
}
