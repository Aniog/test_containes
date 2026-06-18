import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = ['Features', 'Health', 'Design', 'Specs'];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <span className="text-white font-semibold text-lg tracking-tight">Apple Watch</span>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link}>
              <button
                onClick={() => scrollTo(link)}
                className="text-zinc-400 hover:text-white text-sm font-medium transition-colors bg-transparent border-none cursor-pointer"
              >
                {link}
              </button>
            </li>
          ))}
        </ul>

        <a
          href="#cta"
          onClick={(e) => { e.preventDefault(); scrollTo('cta'); }}
          className="hidden md:inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors"
        >
          Buy Now
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white bg-transparent border-none cursor-pointer"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-black border-t border-zinc-800 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="text-zinc-300 hover:text-white text-base font-medium text-left bg-transparent border-none cursor-pointer"
            >
              {link}
            </button>
          ))}
          <button
            onClick={() => scrollTo('cta')}
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors w-fit"
          >
            Buy Now
          </button>
        </div>
      )}
    </nav>
  );
}
