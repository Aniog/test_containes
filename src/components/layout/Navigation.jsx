import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { to: '/', label: 'The Pattern' },
  { to: '/species', label: 'Species Index' },
  { to: '/herbarium', label: 'Herbarium' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled ? 'bg-[#FAF7F2]/95 backdrop-blur-sm border-b border-[#E8E0D0]' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-[1440px] mx-auto px-8 md:px-12 h-16 flex items-center justify-between">
        {/* Wordmark */}
        <NavLink to="/" className="font-serif text-xl font-light tracking-[0.15em] text-[#3D5C3A]">
          Phyllotaxis
        </NavLink>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `font-sans text-xs tracking-[0.2em] uppercase transition-colors duration-300 ${
                    isActive ? 'text-[#7A9E7E]' : 'text-[#8B7355] hover:text-[#3D5C3A]'
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-[#3D5C3A] p-1"
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-[#FAF7F2] border-t border-[#E8E0D0] px-8 py-6 flex flex-col gap-5">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `font-sans text-xs tracking-[0.2em] uppercase ${
                  isActive ? 'text-[#7A9E7E]' : 'text-[#8B7355]'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}
