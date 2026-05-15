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
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl"
      >
        <div
          className="glass rounded-2xl px-6 py-3 flex items-center justify-between"
          style={{
            background: scrolled
              ? 'rgba(242, 240, 233, 0.72)'
              : 'rgba(242, 240, 233, 0.45)',
            boxShadow: '0 4px 32px rgba(26,26,26,0.08)',
          }}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-full bg-[#1A1A1A] flex items-center justify-center">
              <Microscope className="w-4 h-4 text-[#F2F0E9]" />
            </div>
            <span
              className="font-serif text-[#1A1A1A] font-semibold tracking-tight text-base leading-none"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Micro<span className="font-light italic">Cosmos</span>
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map(({ path, label }) => {
              const active = location.pathname === path;
              return (
                <li key={path}>
                  <Link
                    to={path}
                    className="relative px-4 py-1.5 text-sm font-medium tracking-wide transition-colors duration-200"
                    style={{
                      color: active ? '#1A1A1A' : '#6B6B6B',
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    {active && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full"
                        style={{ background: 'rgba(26,26,26,0.08)' }}
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded-lg text-[#1A1A1A] hover:bg-black/5 transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.97 }}
              transition={{ duration: 0.2 }}
              className="glass mt-2 rounded-2xl px-4 py-3 flex flex-col gap-1"
              style={{ background: 'rgba(242, 240, 233, 0.88)' }}
            >
              {navLinks.map(({ path, label }) => {
                const active = location.pathname === path;
                return (
                  <Link
                    key={path}
                    to={path}
                    className="px-4 py-2.5 rounded-xl text-sm font-medium transition-colors"
                    style={{
                      color: active ? '#1A1A1A' : '#6B6B6B',
                      background: active ? 'rgba(26,26,26,0.07)' : 'transparent',
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    {label}
                  </Link>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
