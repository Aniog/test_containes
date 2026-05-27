import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Microscope } from 'lucide-react';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/explore', label: 'Explore' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/about', label: 'About' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-microbg/95 backdrop-blur-md shadow-lg shadow-black/30' : 'bg-transparent'
      } border-b border-microborder/50`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2 group">
          <Microscope className="w-7 h-7 text-microteal group-hover:text-microglow transition-colors" />
          <span className="font-display font-bold text-xl text-microtext tracking-tight">
            Micro<span className="text-microteal">Cosmos</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `font-body text-sm font-medium transition-colors duration-200 ${
                  isActive ? 'text-microteal' : 'text-micromuted hover:text-microtext'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <Link
            to="/explore"
            className="bg-microteal text-microbg font-semibold text-sm px-5 py-2 rounded-full hover:bg-microglow transition-colors"
          >
            Discover
          </Link>
        </div>

        <button
          className="md:hidden text-micromuted hover:text-microtext transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-microbg/98 backdrop-blur-md border-t border-microborder/50 px-4 py-4 flex flex-col gap-4">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `font-body text-base font-medium py-2 transition-colors ${
                  isActive ? 'text-microteal' : 'text-micromuted'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
