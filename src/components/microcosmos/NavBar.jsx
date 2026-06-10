import { useState } from 'react';
import { Menu, X, Microscope } from 'lucide-react';

const links = [
  { label: 'Explore', href: '#explore' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Worlds', href: '#worlds' },
  { label: 'Science', href: '#science' },
  { label: 'About', href: '#about' },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050a0f]/80 backdrop-blur-md border-b border-[#1e3a5f]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2 text-[#00d4ff] font-bold text-xl tracking-tight">
          <Microscope className="w-6 h-6" />
          <span className="text-[#f0f9ff]">Micro<span className="text-[#00d4ff]">Cosmos</span></span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="text-[#94a3b8] hover:text-[#00d4ff] text-sm font-medium transition-colors duration-200"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#explore"
          className="hidden md:inline-flex items-center px-4 py-2 rounded-full bg-[#00d4ff]/10 border border-[#00d4ff]/40 text-[#00d4ff] text-sm font-semibold hover:bg-[#00d4ff]/20 transition-all duration-200"
        >
          Dive In
        </a>

        <button
          className="md:hidden text-[#94a3b8] hover:text-[#00d4ff] transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#0a1628] border-t border-[#1e3a5f] px-4 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-[#94a3b8] hover:text-[#00d4ff] text-base font-medium transition-colors"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
