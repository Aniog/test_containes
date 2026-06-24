import { useState, useEffect } from 'react';
import { Microscope, Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Organisms', href: '#organisms' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Facts', href: '#facts' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#050d1a]/90 backdrop-blur-md border-b border-[#1a2d4a]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2 group"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
        >
          <div className="w-8 h-8 rounded-lg bg-[#00d4ff]/10 border border-[#00d4ff]/20 flex items-center justify-center group-hover:bg-[#00d4ff]/20 transition-colors">
            <Microscope className="w-4 h-4 text-[#00d4ff]" />
          </div>
          <span
            className="text-white font-bold text-lg"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            MicroCosmos
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNav(link.href)}
              className="text-[#8ab4c8] hover:text-[#00d4ff] transition-colors text-sm font-medium cursor-pointer bg-transparent border-none"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNav('#cta')}
            className="bg-[#00d4ff]/10 border border-[#00d4ff]/30 text-[#00d4ff] text-sm font-medium px-5 py-2 rounded-full hover:bg-[#00d4ff]/20 transition-all cursor-pointer"
          >
            Subscribe
          </button>
        </nav>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-[#8ab4c8] hover:text-[#00d4ff] transition-colors cursor-pointer bg-transparent border-none"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#050d1a]/95 backdrop-blur-md border-b border-[#1a2d4a] px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNav(link.href)}
              className="text-[#8ab4c8] hover:text-[#00d4ff] transition-colors text-base font-medium text-left cursor-pointer bg-transparent border-none"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNav('#cta')}
            className="bg-[#00d4ff]/10 border border-[#00d4ff]/30 text-[#00d4ff] text-sm font-medium px-5 py-2.5 rounded-full hover:bg-[#00d4ff]/20 transition-all cursor-pointer w-fit"
          >
            Subscribe
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
