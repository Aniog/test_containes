import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Microscope } from 'lucide-react';

const navLinks = [
  { path: '/', label: 'Observatory' },
  { path: '/specimens', label: 'Specimens' },
  { path: '/gallery', label: 'Slide Gallery' },
  { path: '/contact', label: 'Lab Notes' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
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
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500
          ${scrolled
            ? 'backdrop-blur-xl bg-white/25 border border-white/25 shadow-2xl'
            : 'backdrop-blur-md bg-white/15 border border-white/15 shadow-lg'
          } rounded-full px-4 py-2.5`}
        style={{ width: 'min(92vw, 780px)' }}
      >
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group flex-shrink-0">
            <div className="w-8 h-8 rounded-full bg-ink/10 border border-ink/20 flex items-center justify-center group-hover:bg-ink/20 transition-colors">
              <Microscope className="w-4 h-4 text-ink" strokeWidth={1.5} />
            </div>
            <span className="font-playfair font-bold text-ink text-sm tracking-wide hidden sm:block">
              MicroCosmos
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-4 py-1.5 rounded-full font-inter text-xs font-medium tracking-widest uppercase transition-all duration-200
                    ${active
                      ? 'bg-ink text-parchment'
                      : 'text-charcoal hover:text-ink hover:bg-white/40'
                    }`}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-ink -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden w-8 h-8 flex items-center justify-center rounded-full bg-white/30 border border-white/20 text-ink hover:bg-white/50 transition-colors"
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 z-40 w-[min(88vw,340px)]
              backdrop-blur-xl bg-white/40 border border-white/30 rounded-2xl shadow-2xl
              overflow-hidden"
          >
            <div className="flex flex-col p-3 gap-1">
              {navLinks.map((link) => {
                const active = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-5 py-3 rounded-xl font-inter text-xs font-semibold tracking-widest uppercase transition-all
                      ${active
                        ? 'bg-ink text-parchment'
                        : 'text-charcoal hover:bg-white/50 hover:text-ink'
                      }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
