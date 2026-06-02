import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'The Connection', path: '/' },
  { label: 'Global Stories', path: '/stories' },
  { label: 'The Lab', path: '/lab' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#F5EDE3]/95 backdrop-blur-md shadow-[0_1px_20px_rgba(139,111,94,0.1)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex flex-col leading-none group">
            <span
              className="font-handwriting text-2xl md:text-3xl text-[#4A6741] group-hover:text-[#8B6F5E] transition-colors duration-300"
              style={{ fontFamily: 'Caveat, cursive' }}
            >
              Intertwined
            </span>
            <span className="section-label text-[0.6rem] tracking-[0.2em] text-[#5A5A5A]">
              Environmental Photography
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'active' : ''}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 text-[#2C2C2C] hover:text-[#4A6741] transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[#F5EDE3]/98 backdrop-blur-sm flex flex-col items-center justify-center gap-10 md:hidden"
          >
            {navItems.map((item, i) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
              >
                <NavLink
                  to={item.path}
                  end={item.path === '/'}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `font-serif text-2xl text-[#2C2C2C] hover:text-[#4A6741] transition-colors ${
                      isActive ? 'text-[#4A6741]' : ''
                    }`
                  }
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {item.label}
                </NavLink>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
