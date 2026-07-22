import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { path: '/', label: '首页' },
  { path: '/knowledge', label: '台风知识' },
  { path: '/history', label: '历史台风' },
  { path: '/safety', label: '防灾指南' },
];

const TyphoonIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="3" fill="#48cae4" />
    <path d="M16 4 C20 4 24 8 22 13 C20 18 14 18 12 14 C10 10 14 6 18 8" stroke="#48cae4" strokeWidth="2" fill="none" strokeLinecap="round"/>
    <path d="M28 16 C28 20 24 24 19 22 C14 20 14 14 18 12 C22 10 26 14 24 18" stroke="#00b4d8" strokeWidth="2" fill="none" strokeLinecap="round"/>
    <path d="M16 28 C12 28 8 24 10 19 C12 14 18 14 20 18 C22 22 18 26 14 24" stroke="#0096c7" strokeWidth="2" fill="none" strokeLinecap="round"/>
    <path d="M4 16 C4 12 8 8 13 10 C18 12 18 18 14 20 C10 22 6 18 8 14" stroke="#48cae4" strokeWidth="2" fill="none" strokeLinecap="round"/>
  </svg>
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#0a0f1e]/95 backdrop-blur-md shadow-lg shadow-black/30' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="group-hover:rotate-180 transition-transform duration-700">
              <TyphoonIcon />
            </div>
            <span className="text-white font-bold text-lg tracking-wide">
              台风<span className="text-[#48cae4]">专题</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  location.pathname === link.path
                    ? 'text-[#48cae4] bg-[#00b4d8]/10'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-300 hover:text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="菜单"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-[#0d1b2a] border-t border-slate-700/50 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-4 py-3 text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-[#48cae4]'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
