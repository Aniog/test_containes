import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Microscope } from 'lucide-react';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Specimens', path: '/specimens' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Lab Notes', path: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'backdrop-blur-lg bg-parchment/70 border-b border-fog/60 shadow-sm'
          : 'backdrop-blur-md bg-white/10 border-b border-white/10'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-full border border-ink/20 flex items-center justify-center group-hover:border-ink/50 transition-colors">
            <Microscope className="w-4 h-4 text-ink" strokeWidth={1.5} />
          </div>
          <span className="font-serif text-ink text-lg font-semibold tracking-tight">
            Micro<span className="font-light italic">Cosmos</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, path }) => {
            const active = location.pathname === path;
            return (
              <li key={path}>
                <Link
                  to={path}
                  className={`font-sans text-sm tracking-wide transition-colors duration-200 relative group ${
                    active ? 'text-ink font-medium' : 'text-ash hover:text-ink'
                  }`}
                >
                  {label}
                  <span
                    className={`absolute -bottom-0.5 left-0 h-px bg-ink transition-all duration-300 ${
                      active ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/contact"
            className="glass-btn px-5 py-2 text-sm"
          >
            Begin Observation
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-ink"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden backdrop-blur-lg bg-parchment/90 border-t border-fog/40 overflow-hidden"
          >
            <ul className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map(({ label, path }) => {
                const active = location.pathname === path;
                return (
                  <li key={path}>
                    <Link
                      to={path}
                      className={`font-sans text-sm tracking-wide block py-1 ${
                        active ? 'text-ink font-medium' : 'text-ash'
                      }`}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
              <li className="pt-2">
                <Link
                  to="/contact"
                  className="glass-btn px-5 py-2 text-sm inline-block"
                >
                  Begin Observation
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
