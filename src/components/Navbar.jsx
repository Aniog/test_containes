import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Microscope, Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { path: '/',          label: 'Observatory' },
  { path: '/specimens', label: 'Specimen Hub' },
  { path: '/gallery',   label: 'Slide Gallery' },
  { path: '/contact',   label: 'Lab Notes' },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const location                  = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [location.pathname]);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-parchment/70 backdrop-blur-lg border-b border-mist/60 shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-full bg-ink/10 border border-ink/20 flex items-center justify-center group-hover:bg-ink/20 transition-colors duration-300">
              <Microscope className="w-4 h-4 text-ink" strokeWidth={1.5} />
            </div>
            <span className="font-serif text-ink font-semibold text-lg tracking-tight hidden sm:block">
              MicroCosmos
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(({ path, label }) => {
              const active = location.pathname === path;
              return (
                <li key={path}>
                  <Link
                    to={path}
                    className={`relative px-4 py-2 text-sm font-sans font-medium rounded-full transition-all duration-300 ${
                      active
                        ? 'text-ink bg-ink/8'
                        : 'text-graphite hover:text-ink hover:bg-ink/5'
                    }`}
                  >
                    {label}
                    {active && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute inset-0 rounded-full bg-ink/8 -z-10"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden md:inline-flex items-center gap-2 glass-btn text-sm py-2 px-5"
            >
              Begin Observation
            </Link>
            <button
              onClick={() => setMenuOpen(v => !v)}
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-full bg-ink/8 hover:bg-ink/15 transition-colors"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-4 h-4 text-ink" /> : <Menu className="w-4 h-4 text-ink" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed top-16 left-0 right-0 z-40 bg-parchment/95 backdrop-blur-xl border-b border-mist/60 shadow-lg md:hidden"
          >
            <ul className="flex flex-col py-4 px-6 gap-1">
              {NAV_LINKS.map(({ path, label }) => {
                const active = location.pathname === path;
                return (
                  <li key={path}>
                    <Link
                      to={path}
                      className={`block px-4 py-3 rounded-xl text-sm font-sans font-medium transition-colors ${
                        active ? 'text-ink bg-ink/8' : 'text-charcoal hover:text-ink hover:bg-ink/5'
                      }`}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
