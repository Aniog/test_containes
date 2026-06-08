import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const links = [
  { to: '/', label: 'The Connection' },
  { to: '/stories', label: 'Global Stories' },
  { to: '/lab', label: 'The Lab' },
];

export default function Nav() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-parchment/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex flex-col leading-none">
            <span className="font-playfair text-xl md:text-2xl font-semibold text-soil tracking-tight">
              Intertwined
            </span>
            <span className="font-caveat text-xs md:text-sm text-sky tracking-wide">
              environmental photography
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-10">
            {links.map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  className={`font-inter text-sm tracking-widest uppercase transition-colors duration-300 ${
                    pathname === to
                      ? 'text-moss border-b border-moss pb-0.5'
                      : 'text-bark hover:text-moss'
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-soil p-1"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-parchment flex flex-col items-center justify-center gap-10"
          >
            {links.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`font-playfair text-3xl transition-colors duration-300 ${
                  pathname === to ? 'text-moss' : 'text-soil hover:text-moss'
                }`}
              >
                {label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
