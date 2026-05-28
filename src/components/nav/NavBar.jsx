import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Zap, Activity, Radio, Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { path: '/', label: 'Overview' },
  { path: '/reactors', label: 'Reactor Hub' },
  { path: '/gallery', label: 'Telemetry' },
  { path: '/contact', label: 'Grid Request' },
];

const TelemetryDot = ({ active = true }) => (
  <span
    className={`inline-block w-1.5 h-1.5 rounded-full ${active ? 'bg-white telemetry-pulse' : 'bg-[#555555]'}`}
  />
);

export default function NavBar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [time, setTime] = useState('');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setTime(now.toISOString().replace('T', ' ').slice(0, 19) + ' UTC');
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#050505]/95 backdrop-blur-md border-b border-[#262626]' : 'bg-transparent'
      }`}
    >
      {/* Top telemetry strip */}
      <div className="border-b border-[#1f1f1f] px-6 py-1.5 hidden md:flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="font-mono text-[10px] text-[#555555] tracking-widest uppercase">
            SYS:IGNITION-DYNAMICS-v4.2.1
          </span>
          <span className="text-[#262626]">|</span>
          <div className="flex items-center gap-1.5">
            <TelemetryDot active />
            <span className="font-mono text-[10px] text-[#555555] tracking-widest uppercase">PLASMA ONLINE</span>
          </div>
          <div className="flex items-center gap-1.5">
            <TelemetryDot active />
            <span className="font-mono text-[10px] text-[#555555] tracking-widest uppercase">GRID NOMINAL</span>
          </div>
          <div className="flex items-center gap-1.5">
            <TelemetryDot active={false} />
            <span className="font-mono text-[10px] text-[#555555] tracking-widest uppercase">ITER STANDBY</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Activity className="w-3 h-3 text-[#555555]" />
          <span className="font-mono text-[10px] text-[#555555] tracking-widest">{time}</span>
        </div>
      </div>

      {/* Main nav */}
      <nav className="px-6 md:px-12 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 border border-[#262626] flex items-center justify-center group-hover:border-white transition-colors duration-300">
            <Zap className="w-4 h-4 text-white" />
          </div>
          <div>
            <div className="text-white font-bold text-sm tracking-tight leading-none">IGNITION DYNAMICS</div>
            <div className="font-mono text-[9px] text-[#555555] tracking-widest uppercase leading-none mt-0.5">The Fusion Era</div>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ path, label }) => {
            const active = location.pathname === path;
            return (
              <Link
                key={path}
                to={path}
                className={`font-mono text-xs tracking-widest uppercase transition-colors duration-200 ${
                  active ? 'text-white' : 'text-[#555555] hover:text-[#A0A0A0]'
                }`}
              >
                {active && <span className="mr-2 text-white">—</span>}
                {label}
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Radio className="w-3 h-3 text-[#555555]" />
            <span className="font-mono text-[10px] text-[#555555] tracking-widest uppercase">SECURE CHANNEL</span>
          </div>
          <Link
            to="/contact"
            className="border border-[#262626] px-4 py-2 font-mono text-xs tracking-widest uppercase text-white hover:border-white hover:bg-white hover:text-black transition-all duration-200"
          >
            Request Access
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#050505] border-t border-[#262626] px-6 py-6 flex flex-col gap-6">
          {NAV_LINKS.map(({ path, label }) => {
            const active = location.pathname === path;
            return (
              <Link
                key={path}
                to={path}
                className={`font-mono text-sm tracking-widest uppercase ${
                  active ? 'text-white' : 'text-[#555555]'
                }`}
              >
                {label}
              </Link>
            );
          })}
          <Link
            to="/contact"
            className="border border-[#262626] px-4 py-3 font-mono text-xs tracking-widest uppercase text-white text-center hover:border-white transition-colors duration-200"
          >
            Request Access
          </Link>
        </div>
      )}
    </header>
  );
}
