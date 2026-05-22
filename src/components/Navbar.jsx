import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Microscope } from 'lucide-react';

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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass-nav shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-8 h-8 rounded-full border border-ink/20 flex items-center justify-center group-hover:border-ink/60 transition-colors">
                <Microscope className="w-4 h-4 text-ink" />
              </div>
              <div>
                <span className="font-serif text-lg font-bold text-ink tracking-tight leading-none block">
                  MicroCosmos
                </span>
                <span className="text-[10px] font-mono text-graphite tracking-widest uppercase leading-none">
                  The Microscopic World
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium tracking-wide transition-all duration-200 relative group ${
                    location.pathname === link.path
                      ? 'text-ink'
                      : 'text-graphite hover:text-ink'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-ink transition-all duration-300 ${
                      location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              ))}
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-full border border-ink/10 hover:border-ink/30 transition-colors"
              aria-label="Toggle navigation"
            >
              {mobileOpen ? (
                <X className="w-4 h-4 text-ink" />
              ) : (
                <Menu className="w-4 h-4 text-ink" />
              )}
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
            className="fixed top-16 left-0 right-0 z-40 glass-nav border-t border-ink/5 md:hidden"
          >
            <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={link.path}
                    className={`block text-base font-medium py-2 border-b border-ash transition-colors ${
                      location.pathname === link.path
                        ? 'text-ink'
                        : 'text-charcoal hover:text-ink'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
