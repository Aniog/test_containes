import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Zap, Activity, Radio, Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { path: '/', label: 'Overview' },
  { path: '/reactors', label: 'Reactors' },
  { path: '/gallery', label: 'Gallery' },
  { path: '/contact', label: 'Grid Access' },
];

const TelemetryItem = ({ label, value, active = true }) => (
  <div className="flex items-center gap-2">
    <span
      className="w-1.5 h-1.5 rounded-full"
      style={{ backgroundColor: active ? '#4ade80' : '#ef4444', animation: active ? 'telemetry-pulse 2s ease-in-out infinite' : 'none' }}
    />
    <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">
      {label}
    </span>
    <span className="font-mono text-[10px] text-neutral-400">{value}</span>
  </div>
);

export default function Navbar() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [time, setTime] = useState('');

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
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? 'rgba(5,5,5,0.98)' : '#050505',
        borderBottom: '1px solid #262626',
        backdropFilter: 'blur(12px)',
      }}
    >
      {/* Top telemetry bar */}
      <div
        className="hidden md:flex items-center justify-between px-6 lg:px-12 py-1.5"
        style={{ borderBottom: '1px solid #1a1a1a' }}
      >
        <div className="flex items-center gap-6">
          <TelemetryItem label="PLASMA CORE" value="NOMINAL" active />
          <TelemetryItem label="MAGNETIC FIELD" value="12.4 T" active />
          <TelemetryItem label="FUSION YIELD" value="847 MW" active />
        </div>
        <div className="flex items-center gap-2">
          <Activity className="w-3 h-3 text-neutral-600" />
          <span className="font-mono text-[10px] text-neutral-600">{time}</span>
        </div>
      </div>

      {/* Main nav */}
      <nav className="flex items-center justify-between px-6 lg:px-12 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div
            className="w-8 h-8 flex items-center justify-center"
            style={{ border: '1px solid #262626' }}
          >
            <Zap className="w-4 h-4 text-white" />
          </div>
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-white font-bold leading-none">
              Ignition Dynamics
            </div>
            <div className="font-mono text-[9px] uppercase tracking-widest text-neutral-600 leading-none mt-0.5">
              The Fusion Era
            </div>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ path, label }) => {
            const isActive = location.pathname === path;
            return (
              <Link
                key={path}
                to={path}
                className={`nav-link font-mono text-[11px] uppercase tracking-widest transition-colors duration-200 ${
                  isActive ? 'text-white active' : 'text-neutral-500 hover:text-white'
                }`}
              >
                {label}
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Radio className="w-3 h-3 text-neutral-600" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-600">
              GRID ONLINE
            </span>
          </div>
          <Link
            to="/contact"
            className="font-mono text-[10px] uppercase tracking-widest px-5 py-2.5 transition-all duration-200"
            style={{
              border: '1px solid #262626',
              color: '#ffffff',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#ffffff'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = '#262626'; }}
          >
            Request Access
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setMobileOpen(v => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-4"
          style={{ borderTop: '1px solid #262626', backgroundColor: '#050505' }}
        >
          {NAV_LINKS.map(({ path, label }) => {
            const isActive = location.pathname === path;
            return (
              <Link
                key={path}
                to={path}
                className={`font-mono text-xs uppercase tracking-widest py-2 ${
                  isActive ? 'text-white' : 'text-neutral-500'
                }`}
                style={{ borderBottom: '1px solid #1a1a1a' }}
              >
                {label}
              </Link>
            );
          })}
          <Link
            to="/contact"
            className="font-mono text-[10px] uppercase tracking-widest px-5 py-3 text-center mt-2"
            style={{ border: '1px solid #262626', color: '#ffffff' }}
          >
            Request Access
          </Link>
        </div>
      )}
    </header>
  );
}
