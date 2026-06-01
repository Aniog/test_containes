import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { to: '/', label: '宇宙', en: 'Home' },
  { to: '/gallery', label: '銀河', en: 'Galleries' },
  { to: '/data', label: 'データ', en: 'Data Sheets' },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-white/10 backdrop-blur-md bg-black/40'
          : 'border-b border-white/5 backdrop-blur-sm bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="tracking-[0.4em] text-xs font-light text-slate-100 uppercase hover:text-star-gold transition-colors duration-300"
        >
          Celestial Odyssey
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map(({ to, label, en }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `group flex flex-col items-center gap-0.5 transition-colors duration-300 ${
                    isActive ? 'text-violet-400' : 'text-slate-400 hover:text-slate-100'
                  }`
                }
              >
                <span className="text-[10px] tracking-[0.25em] uppercase font-light">{en}</span>
                <span className="text-[9px] tracking-widest text-current opacity-50">{label}</span>
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-slate-300 hover:text-white transition-colors"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-black/90 backdrop-blur-md border-b border-white/10"
          >
            <ul className="flex flex-col py-4">
              {navLinks.map(({ to, label, en }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    end={to === '/'}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center justify-between px-8 py-4 text-sm tracking-[0.2em] uppercase font-light transition-colors ${
                        isActive ? 'text-violet-400' : 'text-slate-400 hover:text-slate-100'
                      }`
                    }
                  >
                    <span>{en}</span>
                    <span className="text-xs opacity-40">{label}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
