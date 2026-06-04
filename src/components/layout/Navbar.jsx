import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Microscope } from 'lucide-react';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Explore', path: '/explore' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'About', path: '/about' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#050d1a]/95 backdrop-blur-md border-b border-slate-800' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-[#00d4c8]/20 border border-[#00d4c8]/40 flex items-center justify-center group-hover:bg-[#00d4c8]/30 transition">
              <Microscope className="w-4 h-4 text-[#00d4c8]" />
            </div>
            <span className="text-lg font-bold text-slate-50 tracking-tight">
              Micro<span className="text-[#00d4c8]">Cosmos</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-[#00d4c8] bg-[#00d4c8]/10'
                      : 'text-slate-400 hover:text-slate-50 hover:bg-slate-800/60'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Link
              to="/explore"
              className="px-4 py-2 rounded-full bg-[#00d4c8] text-[#050d1a] text-sm font-semibold hover:bg-[#00bfb4] transition"
            >
              Start Exploring
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg text-slate-400 hover:text-slate-50 hover:bg-slate-800/60 transition"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0a1628]/98 backdrop-blur-md border-b border-slate-800">
          <div className="px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition ${
                    isActive
                      ? 'text-[#00d4c8] bg-[#00d4c8]/10'
                      : 'text-slate-400 hover:text-slate-50 hover:bg-slate-800/60'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              to="/explore"
              className="mt-2 px-4 py-3 rounded-full bg-[#00d4c8] text-[#050d1a] text-sm font-semibold text-center hover:bg-[#00bfb4] transition"
            >
              Start Exploring
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
