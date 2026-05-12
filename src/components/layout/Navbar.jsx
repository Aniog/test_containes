import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Telescope, Menu, X } from 'lucide-react';

const navLinks = [
  { to: '/',          label: 'Home' },
  { to: '/knowledge', label: 'Knowledge Hub' },
  { to: '/gallery',   label: 'Sky Map' },
  { to: '/contact',   label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-nebula/90 backdrop-blur-md border-b border-stardust/60 shadow-glow' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2.5 group">
          <Telescope className="w-5 h-5 text-aurora group-hover:text-amber-star transition-colors duration-300" />
          <span className="font-cormorant text-lg font-medium text-moonlight tracking-wide">
            Starry Night
          </span>
        </NavLink>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `font-inter text-sm tracking-wide transition-colors duration-200 ${
                    isActive ? 'text-moonlight' : 'text-comet hover:text-moonlight'
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <NavLink
          to="/contact"
          className="hidden md:inline-flex items-center gap-2 border border-aurora/40 text-aurora text-sm font-inter px-4 py-1.5 rounded-lg hover:bg-aurora/10 transition-all duration-200"
        >
          Ask a Question
        </NavLink>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-comet hover:text-moonlight transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-nebula/95 backdrop-blur-md border-b border-stardust/60">
          <ul className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-4">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    `block font-inter text-sm tracking-wide py-1 transition-colors duration-200 ${
                      isActive ? 'text-aurora' : 'text-comet hover:text-moonlight'
                    }`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
