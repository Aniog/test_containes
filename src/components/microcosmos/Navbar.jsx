import { useState } from 'react';
import { Menu, X, Microscope } from 'lucide-react';

const navLinks = [
  { label: 'Explore', href: '#explore' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Organisms', href: '#organisms' },
  { label: 'Science', href: '#science' },
  { label: 'About', href: '#about' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050a0f]/80 backdrop-blur-md border-b border-[#1e3a4a]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        <a href="#hero" className="flex items-center gap-2 text-white font-extrabold text-xl tracking-tight">
          <Microscope className="w-6 h-6 text-[#00d4c8]" />
          <span>Micro<span className="text-[#00d4c8]">Cosmos</span></span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-slate-300 hover:text-[#00d4c8] text-sm font-medium transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#explore"
          className="hidden md:inline-flex items-center px-4 py-2 rounded-full bg-[#00d4c8] text-[#050a0f] text-sm font-bold hover:bg-[#00bfb4] transition-colors duration-200"
        >
          Dive In
        </a>

        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#0d1a24] border-t border-[#1e3a4a] px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-slate-300 hover:text-[#00d4c8] text-base font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#explore"
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-[#00d4c8] text-[#050a0f] text-sm font-bold"
          >
            Dive In
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
