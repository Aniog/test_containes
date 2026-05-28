import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Waves } from 'lucide-react';

const links = [
  { label: 'Home', to: '/' },
  { label: 'Products', to: '/products' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-sky-100">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2 text-sky-700 font-extrabold text-xl">
          <Waves className="w-6 h-6 text-cyan-500" />
          SwimGear
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.label}>
              <NavLink
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  `font-medium transition ${isActive ? 'text-sky-700' : 'text-slate-600 hover:text-sky-700'}`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <Link
          to="/products"
          className="hidden md:inline-flex bg-sky-700 hover:bg-sky-800 text-white rounded-full px-6 py-2 font-semibold text-sm transition"
        >
          Shop Now
        </Link>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-sky-700 bg-transparent border-0 p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-sky-100 px-4 pb-4">
          <ul className="flex flex-col gap-4 pt-4">
            {links.map((l) => (
              <li key={l.label}>
                <NavLink
                  to={l.to}
                  end={l.to === '/'}
                  className={({ isActive }) =>
                    `font-medium transition block ${isActive ? 'text-sky-700' : 'text-slate-600 hover:text-sky-700'}`
                  }
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <Link
            to="/products"
            className="mt-4 inline-flex bg-sky-700 text-white rounded-full px-6 py-2 font-semibold text-sm"
            onClick={() => setOpen(false)}
          >
            Shop Now
          </Link>
        </div>
      )}
    </nav>
  );
}
