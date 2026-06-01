import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Microscope, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Observatory', path: '/' },
  { label: 'Specimens', path: '/specimens' },
  { label: 'Slide Gallery', path: '/gallery' },
  { label: 'Lab Notes', path: '/contact' },
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
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl
          rounded-2xl transition-all duration-500
          ${scrolled
            ? 'bg-white/40 backdrop-blur-lg border border-white/30 shadow-xl shadow-black/10'
            : 'bg-white/20 backdrop-blur-md border border-white/20 shadow-lg shadow-black/5'
          }`}
      >
        <div className="flex items-center justify-between px-6 py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-full bg-ink/10 border border-ink/20 flex items-center justify-center
                            group-hover:bg-ink/20 transition-colors duration-300">
              <Microscope className="w-4 h-4 text-ink" strokeWidth={1.5} />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-serif text-sm font-semibold text-ink tracking-tight">MicroCosmos</span>
              <span className="font-mono text-[9px] tracking-widest uppercase text-mid-grey">The Microscopic World</span>
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
                  className={`relative px-4 py-2 rounded-xl font-sans text-sm font-medium transition-all duration-300
                    ${isActive
                      ? 'text-ink bg-white/40'
                      : 'text-charcoal hover:text-ink hover:bg-white/30'
                    }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-ink"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-9 h-9 rounded-xl bg-white/30 border border-white/20 flex items-center justify-center
                       hover:bg-white/50 transition-colors duration-200"
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X className="w-4 h-4 text-ink" /> : <Menu className="w-4 h-4 text-ink" />}
          </button>
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
            className="fixed top-20 left-4 right-4 z-40 rounded-2xl
                       bg-parchment/90 backdrop-blur-xl border border-white/30 shadow-2xl shadow-black/15
                       overflow-hidden"
          >
            <div className="p-4 flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-4 py-3 rounded-xl font-sans text-sm font-medium transition-all duration-200
                      ${isActive
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
