import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Zap, Activity, Radio, Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { path: '/', label: 'Overview' },
  { path: '/reactors', label: 'Reactor Hub' },
  { path: '/gallery', label: 'Telemetry' },
  { path: '/contact', label: 'Grid Request' },
];

const TelemetryDot = ({ color = 'bg-white', label }) => (
  <div className="flex items-center gap-1.5">
    <span className={`w-1.5 h-1.5 rounded-full ${color} blink`} />
    <span className="text-[10px] font-mono tracking-widest uppercase text-[#5a5a5a]">{label}</span>
  </div>
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#050505]/98 backdrop-blur-md' : 'bg-[#050505]/90 backdrop-blur-sm'
      } border-b border-[#262626]`}
    >
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 border border-[#262626] flex items-center justify-center group-hover:border-white transition-colors duration-300">
            <Zap className="w-4 h-4 text-white" />
          </div>
          <div>
            <div className="text-xs font-mono tracking-[0.2em] uppercase text-white leading-none">Ignition</div>
            <div className="text-[10px] font-mono tracking-[0.15em] uppercase text-[#5a5a5a] leading-none mt-0.5">Dynamics</div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`text-[11px] font-mono tracking-widest uppercase transition-colors duration-200 ${
                location.pathname === path
                  ? 'text-white'
                  : 'text-[#5a5a5a] hover:text-[#A0A0A0]'
              }`}
            >
              {location.pathname === path && (
                <span className="mr-2 text-white">—</span>
              )}
              {label}
            </Link>
          ))}
        </nav>

        {/* Telemetry Status */}
        <div className="hidden lg:flex items-center gap-6 border-l border-[#262626] pl-6">
          <TelemetryDot color="bg-green-400" label="Plasma: Active" />
          <TelemetryDot color="bg-blue-400" label="Grid: Online" />
          <div className="flex items-center gap-1.5">
            <Activity className="w-3 h-3 text-[#5a5a5a]" />
            <span className="text-[10px] font-mono tracking-widest uppercase text-[#5a5a5a]">500 MW</span>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#050505] border-t border-[#262626]">
          <nav className="flex flex-col px-6 py-4 gap-4">
            {NAV_LINKS.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`text-[11px] font-mono tracking-widest uppercase py-2 border-b border-[#262626] transition-colors ${
                  location.pathname === path ? 'text-white' : 'text-[#5a5a5a]'
                }`}
              >
                {label}
              </Link>
            ))}
            <div className="flex items-center gap-4 pt-2">
              <TelemetryDot color="bg-green-400" label="Plasma: Active" />
              <TelemetryDot color="bg-blue-400" label="Grid: Online" />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
