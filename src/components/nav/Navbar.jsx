import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Zap, Activity, Radio, Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Overview', path: '/' },
  { label: 'Reactor Hub', path: '/reactors' },
  { label: 'Telemetry', path: '/gallery' },
  { label: 'Grid Request', path: '/contact' },
];

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const utcString = time.toISOString().replace('T', ' ').slice(0, 19) + ' UTC';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#050505]/98 border-b border-[#1a1a1a]' : 'bg-[#050505]/80'
      } backdrop-blur-md`}
    >
      <div className="max-w-screen-2xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-6 h-6 border border-white flex items-center justify-center">
            <Zap className="w-3 h-3 text-white" />
          </div>
          <span className="font-mono text-xs uppercase tracking-widest text-white">
            Ignition Dynamics
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-mono text-xs uppercase tracking-widest transition-colors duration-200 ${
                location.pathname === link.path
                  ? 'text-white'
                  : 'text-[#555555] hover:text-[#aaaaaa]'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Telemetry Status */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span className="font-mono text-[10px] text-[#555555] uppercase tracking-widest">
              Plasma Online
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Activity className="w-3 h-3 text-[#444444]" />
            <span className="font-mono text-[10px] text-[#444444] uppercase tracking-widest">
              {utcString}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Radio className="w-3 h-3 text-[#444444]" />
            <span className="font-mono text-[10px] text-[#444444] uppercase tracking-widest">
              Grid: 847 GW
            </span>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-[#888888] hover:text-white transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#050505] border-t border-[#1a1a1a]">
          <nav className="flex flex-col px-6 py-4 gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-mono text-xs uppercase tracking-widest py-2 border-b border-[#1a1a1a] transition-colors ${
                  location.pathname === link.path
                    ? 'text-white'
                    : 'text-[#555555]'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-2 pt-2">
              <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              <span className="font-mono text-[10px] text-[#555555] uppercase tracking-widest">
                Plasma Online — Grid: 847 GW
              </span>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
