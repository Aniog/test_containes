import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Microscope } from 'lucide-react';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/explore', label: 'Explore' },
  { to: '/science', label: 'Science' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/about', label: 'About' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-950/95 backdrop-blur-md shadow-lg shadow-black/30' : 'bg-transparent'
      } border-b border-slate-800/60`}
    >
      <nav className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group" onClick={() => setOpen(false)}>
          <div className="w-8 h-8 rounded-full bg-teal-500/20 border border-teal-500/40 flex items-center justify-center group-hover:bg-teal-500/30 transition-colors">
            <Microscope className="w-4 h-4 text-teal-400" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent">
            MicroCosmos
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors duration-200 ${
                    isActive ? 'text-teal-400' : 'text-slate-300 hover:text-teal-400'
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          to="/explore"
          className="hidden md:inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold text-sm px-5 py-2 rounded-full transition-colors duration-200"
        >
          Explore Now
        </Link>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-slate-300 hover:text-teal-400 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-slate-950/98 backdrop-blur-md border-t border-slate-800 px-4 py-6 flex flex-col gap-4">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `text-base font-medium py-2 transition-colors ${
                  isActive ? 'text-teal-400' : 'text-slate-300 hover:text-teal-400'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <Link
            to="/explore"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex justify-center bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold px-6 py-3 rounded-full transition-colors"
          >
            Explore Now
          </Link>
        </div>
      )}
    </header>
  );
}
