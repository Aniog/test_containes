import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Microscope } from 'lucide-react';

const NAV_LINKS = [
  { path: '/', label: 'Observatory' },
  { path: '/specimens', label: 'Specimen Hub' },
  { path: '/gallery', label: 'Slide Gallery' },
  { path: '/contact', label: 'Lab Notes' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/15 backdrop-blur-lg border-b border-white/20 shadow-sm shadow-black/5'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-full bg-ink/10 border border-ink/20 flex items-center justify-center group-hover:bg-ink/20 transition-colors">
              <Microscope className="w-4 h-4 text-ink" strokeWidth={1.5} />
            </div>
            <span className="font-playfair text-ink font-semibold text-lg tracking-tight hidden sm:block">
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
                    className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-full ${
                      active
                        ? 'text-ink bg-ink/8'
                        : 'text-charcoal hover:text-ink hover:bg-ink/5'
                    }`}
                  >
                    {label}
                    {active && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute inset-0 rounded-full bg-ink/8 -z-10"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* CTA */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="glass-btn px-5 py-2 text-sm font-medium text-ink"
            >
              Begin Observation
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-ink"
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed top-16 left-4 right-4 z-40 glass-card p-4 shadow-xl shadow-black/10 md:hidden"
          >
            <ul className="flex flex-col gap-1">
              {NAV_LINKS.map(({ path, label }) => {
                const active = location.pathname === path;
                return (
                  <li key={path}>
                    <Link
                      to={path}
                      className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                        active
                          ? 'bg-ink/10 text-ink'
                          : 'text-charcoal hover:bg-ink/5 hover:text-ink'
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
