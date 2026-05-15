import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Zap, Activity, Radio, Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { path: '/', label: 'Overview' },
  { path: '/reactors', label: 'Reactor Hub' },
  { path: '/gallery', label: 'Telemetry' },
  { path: '/contact', label: 'Grid Request' },
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

  const timeStr = time.toISOString().replace('T', ' ').slice(0, 19) + ' UTC';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#050505]/95 backdrop-blur-sm border-b border-[#262626]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 border-b border-[#262626]">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 border border-white flex items-center justify-center">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="font-mono text-xs tracking-widest uppercase text-white leading-none">
                Ignition Dynamics
              </div>
              <div className="font-mono text-[10px] tracking-widest uppercase text-[#555555] leading-none mt-0.5">
                The Fusion Era
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`font-mono text-xs tracking-widest uppercase transition-colors duration-200 ${
                  location.pathname === path
                    ? 'text-white border-b border-white pb-0.5'
                    : 'text-[#888888] hover:text-white'
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Telemetry Status */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2 border border-[#262626] px-3 py-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span className="font-mono text-[10px] tracking-widest text-[#888888] uppercase">
                Systems Online
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Activity className="w-3 h-3 text-[#555555]" />
              <span className="font-mono text-[10px] text-[#555555]">{timeStr}</span>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="md:hidden bg-[#050505] border-b border-[#262626]">
            {NAV_LINKS.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`block px-6 py-4 font-mono text-xs tracking-widest uppercase border-b border-[#262626] transition-colors ${
                  location.pathname === path ? 'text-white' : 'text-[#888888]'
                }`}
              >
                {label}
              </Link>
            ))}
            <div className="px-6 py-3 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span className="font-mono text-[10px] text-[#555555]">{timeStr}</span>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
