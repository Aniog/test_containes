import { useState, useEffect } from 'react';
import { Menu, X, Microscope } from 'lucide-react';

const links = [
  { label: 'Explore', href: '#explore' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Organisms', href: '#organisms' },
  { label: 'Science', href: '#science' },
  { label: 'About', href: '#about' },
];

const NavBar = () => {
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
        scrolled ? 'bg-[#050a0f]/90 backdrop-blur-md border-b border-teal-900/30 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2 group">
          <Microscope className="w-6 h-6 text-teal-400 group-hover:text-cyan-300 transition-colors" />
          <span className="text-white font-black text-lg tracking-tight">
            Micro<span className="text-teal-400">Cosmos</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="text-slate-400 hover:text-teal-400 text-sm font-medium tracking-wide transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-slate-300 hover:text-teal-400 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#0d1a24]/95 backdrop-blur-md border-b border-teal-900/30 px-4 pb-4">
          <ul className="flex flex-col gap-4 pt-4">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="text-slate-300 hover:text-teal-400 text-base font-medium transition-colors block"
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
};

export default NavBar;
