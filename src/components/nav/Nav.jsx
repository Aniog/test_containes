import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { to: '/', label: 'Index' },
  { to: '/collections', label: 'Collections' },
  { to: '/lookbook', label: 'Lookbook' },
  { to: '/studio', label: 'The Studio' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-nf-black">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Wordmark */}
        <NavLink to="/" className="font-mono font-bold text-nf-black text-sm tracking-widest-xl uppercase">
          NEO-FORM
        </NavLink>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `font-mono text-xs tracking-widest-lg uppercase transition-all duration-200 ${
                  isActive
                    ? 'text-nf-red border-b border-nf-red pb-0.5'
                    : 'text-nf-black hover:text-nf-red'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Season tag */}
        <span className="hidden md:block font-mono text-xs text-nf-muted tracking-widest-md uppercase">
          SS_2026
        </span>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden bg-transparent border-none text-nf-black p-0 hover:text-nf-red hover:bg-transparent hover:border-none"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          style={{ background: 'none', border: 'none', color: '#0A0A0A' }}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-white border-t border-nf-black">
          <nav className="flex flex-col">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `font-mono text-xs tracking-widest-lg uppercase px-6 py-4 border-b border-nf-gray transition-colors duration-200 ${
                    isActive ? 'text-nf-red bg-nf-gray' : 'text-nf-black hover:bg-nf-gray'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
            <div className="px-6 py-4 font-mono text-xs text-nf-muted tracking-widest-md uppercase">
              SS_2026
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
