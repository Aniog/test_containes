import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'Explore', href: '#explore' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Worlds', href: '#worlds' },
  { label: 'Science', href: '#science' },
  { label: 'About', href: '#about' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-md bg-[#050a0f]/90 border-b border-[#00d4c8]/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2 group">
          <span className="w-8 h-8 rounded-full bg-gradient-to-br from-[#00d4c8] to-violet-600 flex items-center justify-center text-xs font-black text-white">M</span>
          <span className="text-[#e8f4f8] font-bold text-lg tracking-tight">MicroCosmos</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[#7fb3c8] hover:text-[#00d4c8] text-sm font-medium tracking-wide transition-colors duration-200"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#explore"
          className="hidden md:inline-flex items-center px-4 py-2 rounded-full border border-[#00d4c8]/40 text-[#00d4c8] text-sm font-semibold hover:bg-[#00d4c8]/10 transition-all duration-200"
        >
          Dive In
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-[#7fb3c8] hover:text-[#00d4c8] bg-transparent border-none p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0d1a24]/95 backdrop-blur-md border-t border-[#00d4c8]/10 px-4 py-4">
          <ul className="flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-[#7fb3c8] hover:text-[#00d4c8] text-base font-medium block transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
