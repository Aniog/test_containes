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
          rounded-2xl px-5 py-3 flex items-center justify-between
          transition-all duration-500
          ${scrolled
            ? 'bg-white/30 backdrop-blur-xl border border-white/25 shadow-lg shadow-ink-black/5'
            : 'bg-white/18 backdrop-blur-md border border-white/18'
          }`}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-full bg-ink-black/90 flex items-center justify-center
            group-hover:bg-ink-black transition-colors duration-300">
            <Microscope className="w-4 h-4 text-parchment" strokeWidth={1.5} />
          </div>
          <div className="hidden sm:block">
            <span className="font-serif text-sm font-semibold text-ink-black tracking-tight leading-none block">
              MicroCosmos
            </span>
            <span className="font-sans text-[10px] text-ink-light uppercase tracking-widest leading-none">
              The Microscopic World
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const active = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 rounded-xl font-sans text-sm font-medium
                  transition-all duration-300 group
                  ${active
                    ? 'text-ink-black bg-white/40'
                    : 'text-ink-mid hover:text-ink-black hover:bg-white/25'
                  }`}
              >
                {link.label}
                {active && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-ink-black"
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/contact"
            className="px-4 py-2 rounded-full bg-ink-black/85 backdrop-blur-sm
              border border-white/10 text-parchment font-sans text-sm font-medium
              hover:bg-ink-black transition-all duration-300"
          >
            Begin Study
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden w-9 h-9 rounded-xl bg-white/30 border border-white/20
            flex items-center justify-center text-ink-black hover:bg-white/50 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
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
              bg-white/40 backdrop-blur-xl border border-white/25 shadow-xl
              p-4 flex flex-col gap-1"
          >
            {navLinks.map((link) => {
              const active = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-3 rounded-xl font-sans text-sm font-medium
                    transition-all duration-200
                    ${active
                      ? 'bg-ink-black text-parchment'
                      : 'text-ink-charcoal hover:bg-white/50'
                    }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="mt-2 pt-2 border-t border-ink-faint/30">
              <Link
                to="/contact"
                className="block px-4 py-3 rounded-xl bg-ink-black text-parchment
                  font-sans text-sm font-medium text-center"
              >
                Begin Study
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
