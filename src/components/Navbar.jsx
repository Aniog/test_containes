import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Microscope, Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'Specimens', path: '/specimens' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Lab Notes', path: '/contact' },
];

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

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
            ? 'backdrop-blur-xl bg-white/40 border border-white/30 shadow-2xl'
            : 'backdrop-blur-lg bg-white/20 border border-white/20 shadow-xl'
          } rounded-full px-6 py-3`}
        style={{ width: 'min(90vw, 720px)' }}
      >
        <div className="flex items-center justify-between gap-6">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group flex-shrink-0">
            <div className="w-8 h-8 rounded-full bg-ink/10 border border-ink/20 flex items-center justify-center
                            group-hover:bg-ink/20 transition-colors duration-300">
              <Microscope className="w-4 h-4 text-ink" strokeWidth={1.5} />
            </div>
            <span className="font-serif font-bold text-ink text-sm tracking-tight hidden sm:block">
              MicroCosmos
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-4 py-1.5 rounded-full font-sans text-sm font-medium
                    transition-all duration-300
                    ${isActive
                      ? 'text-ink bg-ink/10'
                      : 'text-charcoal hover:text-ink hover:bg-ink/5'
                    }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute inset-0 rounded-full bg-ink/10 -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* CTA */}
          <Link
            to="/gallery"
            className="hidden md:flex items-center gap-2 glass-btn px-5 py-2 text-sm text-ink"
          >
            <span>View Slides</span>
          </Link>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden w-8 h-8 flex items-center justify-center rounded-full
                       bg-ink/10 hover:bg-ink/20 transition-colors duration-200"
            aria-label="Toggle navigation"
          >
            {mobileOpen
              ? <X className="w-4 h-4 text-ink" />
              : <Menu className="w-4 h-4 text-ink" />
            }
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
            className="fixed top-20 left-1/2 -translate-x-1/2 z-40 w-[min(90vw,360px)]
                       backdrop-blur-xl bg-white/60 border border-white/30 rounded-2xl
                       shadow-2xl p-4 flex flex-col gap-1"
          >
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-3 rounded-xl font-sans text-sm font-medium
                    transition-all duration-200
                    ${isActive
                      ? 'text-ink bg-ink/10 font-semibold'
                      : 'text-charcoal hover:text-ink hover:bg-ink/5'
                    }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
