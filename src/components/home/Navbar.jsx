import { useState } from 'react';
import { Menu, X, Droplets } from 'lucide-react';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = ['Source', 'Benefits', 'About', 'Contact'];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-sky-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2 text-blue-700 font-extrabold text-xl tracking-tight">
          <Droplets className="w-6 h-6 text-cyan-500" />
          AquaPure
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                className="text-slate-600 hover:text-blue-700 font-medium text-sm transition-colors"
              >
                {l}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-block bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-full px-6 py-2 text-sm transition"
        >
          Order Now
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-slate-700 p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-sky-100 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-slate-700 font-medium text-base"
              onClick={() => setOpen(false)}
            >
              {l}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-blue-700 text-white font-semibold rounded-full px-6 py-2 text-sm text-center transition"
            onClick={() => setOpen(false)}
          >
            Order Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
