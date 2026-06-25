import { useState, useEffect } from 'react';
import { Menu, X, Microscope } from 'lucide-react';

const links = [
  { label: 'Explore', href: '#explore' },
  { label: 'Organisms', href: '#organisms' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Science', href: '#science' },
  { label: 'Join', href: '#join' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/90 backdrop-blur-md border-b border-cyan-900/40 shadow-[0_4px_30px_rgba(0,229,255,0.06)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center group-hover:bg-cyan-500/30 transition-colors">
            <Microscope className="w-4 h-4 text-cyan-400" />
          </div>
          <span className="text-slate-50 font-bold text-lg tracking-tight">
            Micro<span className="text-cyan-400">Cosmos</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-slate-400 hover:text-cyan-400 text-sm font-medium transition-colors duration-200"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#join"
          className="hidden md:inline-flex items-center bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-sm px-5 py-2 rounded-full transition-colors duration-200"
        >
          Get Started
        </a>

        <button
          className="md:hidden text-slate-400 hover:text-cyan-400 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-slate-950/95 backdrop-blur-md border-t border-cyan-900/30 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-slate-300 hover:text-cyan-400 font-medium transition-colors"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#join"
            className="inline-flex items-center justify-center bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-sm px-5 py-2 rounded-full transition-colors mt-2"
            onClick={() => setOpen(false)}
          >
            Get Started
          </a>
        </div>
      )}
    </nav>
  );
}
