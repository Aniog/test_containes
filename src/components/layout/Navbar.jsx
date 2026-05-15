import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Microscope, Menu, X } from 'lucide-react';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/specimens', label: 'Specimen Hub' },
  { path: '/gallery', label: 'Slide Gallery' },
  { path: '/contact', label: 'Lab Notes' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-obsidian/95 backdrop-blur-md border-b border-subtle'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative">
            <Microscope
              className="w-6 h-6 text-bio-green transition-all duration-300 group-hover:text-bio-cyan"
              strokeWidth={1.5}
            />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-bio-green rounded-full animate-pulse" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-grotesk font-semibold text-primary-text text-sm tracking-wide">
              MicroCosmos
            </span>
            <span className="font-mono-lab text-muted-text text-[10px] tracking-widest uppercase">
              The Microscopic World
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ path, label }) => {
            const isActive = location.pathname === path;
            return (
              <li key={path}>
                <Link
                  to={path}
                  className={`font-inter text-sm tracking-wide transition-all duration-300 relative group ${
                    isActive
                      ? 'text-bio-green'
                      : 'text-secondary-text hover:text-primary-text'
                  }`}
                >
                  {label}
                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-bio-green transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <Link
          to="/contact"
          className="hidden md:flex items-center gap-2 px-4 py-2 border border-bio-green/40 text-bio-green text-sm font-inter tracking-wide rounded-sm hover:bg-bio-green/10 hover:border-bio-green transition-all duration-300"
        >
          Submit Observation
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-secondary-text hover:text-primary-text transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-charcoal/98 backdrop-blur-md border-b border-subtle">
          <ul className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map(({ path, label }) => {
              const isActive = location.pathname === path;
              return (
                <li key={path}>
                  <Link
                    to={path}
                    className={`block font-inter text-sm tracking-wide py-2 border-b border-subtle/50 transition-colors ${
                      isActive ? 'text-bio-green' : 'text-secondary-text'
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
            <li>
              <Link
                to="/contact"
                className="block text-center mt-2 px-4 py-2 border border-bio-green/40 text-bio-green text-sm rounded-sm hover:bg-bio-green/10 transition-all"
              >
                Submit Observation
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
