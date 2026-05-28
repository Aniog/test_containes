import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Camera } from 'lucide-react';

const links = [
  { label: 'Home',     to: '/' },
  { label: 'Cameras',  to: '/cameras' },
  { label: 'Gallery',  to: '/gallery' },
  { label: 'Specs',    to: '/specs' },
  { label: 'Learn',    to: '/learn' },
  { label: 'About',    to: '/about' },
  { label: 'Support',  to: '/support' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const linkClass = (to) =>
    `text-sm transition-colors ${
      pathname === to ? 'text-white font-medium' : 'text-zinc-400 hover:text-white'
    }`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-2 text-white font-bold text-lg flex-shrink-0">
          <Camera className="w-5 h-5 text-amber-400" />
          <span>LUMORA</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-6 flex-1 justify-center">
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
          className="hidden lg:inline-block bg-amber-400 text-zinc-950 font-semibold rounded-full px-5 py-2 text-sm hover:bg-amber-300 transition-colors flex-shrink-0"
        >
          Buy Now
        </Link>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-white bg-transparent border-0 p-0 ml-auto"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-zinc-950 border-t border-zinc-800 px-6 py-5 flex flex-col gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`py-2.5 text-sm border-b border-zinc-800 last:border-0 transition-colors ${
                pathname === l.to ? 'text-amber-400 font-medium' : 'text-zinc-300 hover:text-white'
              }`}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/cameras"
            className="mt-3 bg-amber-400 text-zinc-950 font-semibold rounded-full px-5 py-2.5 text-sm text-center hover:bg-amber-300 transition-colors"
            onClick={() => setOpen(false)}
          >
            Buy Now
          </Link>
        </div>
      )}
    </nav>
  );
}
