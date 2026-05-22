import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Microscope, Menu, X } from 'lucide-react';

const navLinks = [
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
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
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
            ? 'bg-parchment/80 backdrop-blur-xl border-b border-ash/70 shadow-glass'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-full bg-ink/10 border border-ink/20 flex items-center justify-center group-hover:bg-ink/15 transition-colors">
              <Microscope className="w-4 h-4 text-ink" strokeWidth={1.5} />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-playfair text-sm font-semibold text-ink tracking-tight">
                MicroCosmos
              </span>
              <span className="font-inter text-[9px] text-graphite tracking-widest uppercase">
                The Microscopic World
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-4 py-2 font-inter text-sm font-medium tracking-wide transition-colors duration-200 rounded-full ${
                    isActive
                      ? 'text-ink bg-ink/8'
                      : 'text-charcoal hover:text-ink hover:bg-ink/5'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute inset-0 rounded-full bg-ink/8 border border-ink/10"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full bg-ink text-parchment font-inter text-sm font-medium tracking-wide hover:bg-charcoal transition-colors duration-200"
            >
              Begin Observation
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden w-9 h-9 rounded-full bg-ink/8 border border-ink/10 flex items-center justify-center text-ink hover:bg-ink/15 transition-colors"
              aria-label="Toggle navigation"
            >
              {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed top-16 left-0 right-0 z-40 bg-parchment/95 backdrop-blur-xl border-b border-ash shadow-glass-lg"
          >
            <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-4 py-3 rounded-xl font-inter text-base font-medium transition-colors ${
                      isActive
                        ? 'text-ink bg-ink/8'
                        : 'text-charcoal hover:text-ink hover:bg-ink/5'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="divider mt-3 mb-3" />
              <Link
                to="/contact"
                className="px-4 py-3 rounded-xl bg-ink text-parchment font-inter text-base font-medium text-center hover:bg-charcoal transition-colors"
              >
                Begin Observation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
