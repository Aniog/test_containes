import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Camera } from 'lucide-react';

const links = [
  { label: 'Home', to: '/' },
  { label: 'Cameras', to: '/cameras' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Specs', to: '/specs' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const linkClass = (to) =>
    `text-sm transition-colors ${
      pathname === to ? 'text-white font-medium' : 'text-zinc-400 hover:text-white'
    }`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-white font-bold text-lg">
          <Camera className="w-5 h-5 text-amber-400" />
          <span>LUMORA</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.to}>
              <Link to={l.to} className={linkClass(l.to)}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          to="/cameras"
          className="hidden md:inline-block bg-amber-400 text-zinc-950 font-semibold rounded-full px-5 py-2 text-sm hover:bg-amber-300 transition-colors"
        >
          Buy Now
        </Link>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white bg-transparent border-0 p-0"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-zinc-950 border-t border-zinc-800 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-zinc-300 hover:text-white text-sm"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/cameras"
            className="bg-amber-400 text-zinc-950 font-semibold rounded-full px-5 py-2 text-sm text-center hover:bg-amber-300 transition-colors"
            onClick={() => setOpen(false)}
          >
            Buy Now
          </Link>
        </div>
      )}
    </nav>
  );
}
