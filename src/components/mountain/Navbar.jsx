import { useState, useEffect } from 'react';
import { Mountain, Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Geography', href: '#geography' },
  { label: 'Equipment', href: '#equipment' },
  { label: 'Teams', href: '#teams' },
  { label: 'Safety', href: '#safety' },
  { label: 'Gallery', href: '#gallery' },
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
        scrolled ? 'bg-slate-950/95 backdrop-blur-md border-b border-slate-800 shadow-xl' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2 text-white font-black text-xl tracking-tight">
          <Mountain className="w-6 h-6 text-amber-500" />
          <span>SummitQuest</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-slate-300 hover:text-amber-400 text-sm font-medium transition-colors uppercase tracking-widest"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#teams"
          className="hidden md:inline-flex bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-5 py-2 rounded-xl text-sm transition-colors"
        >
          Join Expedition
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-slate-950/98 border-t border-slate-800 px-4 pb-6 pt-4">
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-slate-300 hover:text-amber-400 text-base font-medium transition-colors block"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#teams"
            className="mt-6 inline-flex bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-5 py-2 rounded-xl text-sm transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Join Expedition
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
