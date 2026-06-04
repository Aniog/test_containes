import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Microscope } from 'lucide-react';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/explore', label: 'Explore' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/about', label: 'About' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#050d1a]/95 backdrop-blur-md border-b border-[#00e5ff]/10 shadow-lg shadow-black/30'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-[#00e5ff]/10 border border-[#00e5ff]/30 flex items-center justify-center group-hover:bg-[#00e5ff]/20 transition-all">
              <Microscope className="w-4 h-4 text-[#00e5ff]" />
            </div>
            <span className="text-lg font-black tracking-tight text-white">
              Micro<span className="text-[#00e5ff]">Cosmos</span>
            </span>
          </NavLink>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-[#00e5ff] glow-text'
                      : 'text-slate-400 hover:text-slate-200'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <NavLink
              to="/explore"
              className="bg-[#00e5ff] text-[#050d1a] text-sm font-bold px-5 py-2 rounded-full hover:bg-cyan-300 transition-all duration-200"
            >
              Discover Now
            </NavLink>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-slate-400 hover:text-[#00e5ff] transition-colors p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#050d1a]/98 backdrop-blur-md border-b border-[#00e5ff]/10">
          <div className="px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-[#00e5ff]/10 text-[#00e5ff]'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <NavLink
              to="/explore"
              className="mt-2 bg-[#00e5ff] text-[#050d1a] text-sm font-bold px-5 py-3 rounded-full text-center hover:bg-cyan-300 transition-all"
            >
              Discover Now
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
