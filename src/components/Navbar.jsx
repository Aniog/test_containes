import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Microscope, Menu, X } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Observatory' },
  { href: '/specimens', label: 'Specimen Hub' },
  { href: '/gallery', label: 'Slide Gallery' },
  { href: '/contact', label: 'Lab Notes' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
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
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl transition-all duration-500 rounded-2xl ${
          scrolled
            ? 'bg-white/40 backdrop-blur-xl border border-white/30 shadow-glass-lg'
            : 'bg-white/20 backdrop-blur-md border border-white/20 shadow-glass'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between px-5 py-3">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2.5 group"
            aria-label="MicroCosmos Home"
          >
            <div className="w-8 h-8 rounded-lg bg-ink/90 flex items-center justify-center shadow-sm group-hover:bg-ink transition-colors">
              <Microscope className="w-4 h-4 text-parchment" strokeWidth={1.5} />
            </div>
            <span className="font-playfair font-bold text-ink text-lg tracking-tight hidden sm:block">
              MicroCosmos
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`relative px-4 py-2 rounded-xl font-inter text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-ink bg-white/50'
                      : 'text-charcoal hover:text-ink hover:bg-white/30'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute inset-0 rounded-xl bg-white/50 -z-10"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-2">
            <Link
              to="/contact"
              className="hidden md:flex items-center gap-2 px-4 py-2 rounded-xl bg-ink text-parchment font-inter text-sm font-medium hover:bg-charcoal transition-colors shadow-sm"
            >
              Begin Observation
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden w-9 h-9 rounded-xl bg-white/40 border border-white/30 flex items-center justify-center text-ink hover:bg-white/60 transition-colors"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
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
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-4 right-4 z-40 rounded-2xl bg-white/60 backdrop-blur-xl border border-white/30 shadow-glass-xl p-4 md:hidden"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`px-4 py-3 rounded-xl font-inter text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-ink text-parchment'
                        : 'text-charcoal hover:bg-white/50 hover:text-ink'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="mt-2 pt-2 border-t border-ash/50">
                <Link
                  to="/contact"
                  className="block w-full text-center px-4 py-3 rounded-xl bg-ink text-parchment font-inter text-sm font-medium hover:bg-charcoal transition-colors"
                >
                  Begin Observation
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
