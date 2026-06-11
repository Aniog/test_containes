import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Zap, Menu, X, Radio } from 'lucide-react';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Reactors', path: '/reactors' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact', path: '/contact' },
];

export default function NavBar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const formatTime = (d) =>
    d.toISOString().replace('T', ' ').slice(0, 19) + ' UTC';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#050505]/98 border-b border-[#262626]' : 'bg-[#050505]/80 border-b border-[#262626]/50'
      }`}
      style={{ backdropFilter: 'blur(12px)' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-7 h-7 border border-white flex items-center justify-center">
              <Zap className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
            </div>
            <div>
              <div className="font-grotesk font-bold text-white text-sm tracking-widest uppercase leading-none">
                Ignition Dynamics
              </div>
              <div className="font-mono text-[9px] text-[#606060] tracking-widest uppercase leading-none mt-0.5">
                Fusion Systems Corp.
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-mono text-xs tracking-widest uppercase transition-colors duration-200 ${
                  location.pathname === link.path
                    ? 'text-white'
                    : 'text-[#606060] hover:text-[#A0A0A0]'
                }`}
              >
                {location.pathname === link.path && (
                  <span className="mr-1.5 text-[#00FF88]">▸</span>
                )}
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Telemetry Status */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2 border border-[#262626] px-3 py-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-[#00FF88] telemetry-live" />
              <span className="font-mono text-[10px] text-[#00FF88] tracking-widest uppercase">
                Systems Nominal
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <Radio className="w-3 h-3 text-[#606060]" />
              <span className="font-mono text-[9px] text-[#606060] tracking-wider">
                {formatTime(time)}
              </span>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#050505] border-t border-[#262626]">
          <div className="px-6 py-6 flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-mono text-xs tracking-widest uppercase transition-colors ${
                  location.pathname === link.path
                    ? 'text-white'
                    : 'text-[#606060]'
                }`}
              >
                {location.pathname === link.path && (
                  <span className="mr-2 text-[#00FF88]">▸</span>
                )}
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-2 pt-4 border-t border-[#262626]">
              <div className="w-1.5 h-1.5 rounded-full bg-[#00FF88] telemetry-live" />
              <span className="font-mono text-[10px] text-[#00FF88] tracking-widest uppercase">
                Systems Nominal
              </span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
