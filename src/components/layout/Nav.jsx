import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Zap, Activity, Radio, Menu, X } from 'lucide-react';

const navLinks = [
  { path: '/', label: 'Overview' },
  { path: '/reactors', label: 'Reactor Hub' },
  { path: '/gallery', label: 'Telemetry' },
  { path: '/contact', label: 'Grid Request' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [tick, setTick] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => setTick(t => t + 1), 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const plasmaLevel = (42.7 + (tick % 5) * 0.3).toFixed(1);
  const fieldStrength = (12.4 + (tick % 3) * 0.1).toFixed(1);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#050505]/95 backdrop-blur-sm border-b border-[#262626]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 border-b border-[#1f1f1f]">

          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-3 group">
            <div className="w-7 h-7 border border-white flex items-center justify-center">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <div>
              <span className="font-mono text-xs tracking-[0.25em] uppercase text-white font-medium">
                Ignition Dynamics
              </span>
              <span className="hidden sm:block font-mono text-[10px] tracking-widest text-neutral-600 uppercase">
                Fusion Era
              </span>
            </div>
          </NavLink>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(({ path, label }) => (
              <NavLink
                key={path}
                to={path}
                end={path === '/'}
                className={({ isActive }) =>
                  `font-mono text-xs tracking-[0.2em] uppercase transition-colors duration-200 ${
                    isActive ? 'text-white' : 'text-neutral-500 hover:text-neutral-200'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* Telemetry Status */}
          <div className="hidden lg:flex items-center gap-6 border-l border-[#262626] pl-6">
            <div className="flex items-center gap-2">
              <Activity className="w-3 h-3 text-neutral-600" />
              <span className="font-mono text-[10px] text-neutral-600 tracking-widest">
                PLASMA {plasmaLevel} MW
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Radio className="w-3 h-3 text-neutral-600" />
              <span className="font-mono text-[10px] text-neutral-600 tracking-widest">
                B-FIELD {fieldStrength} T
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              <span className="font-mono text-[10px] text-neutral-400 tracking-widest uppercase">
                Online
              </span>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white p-1"
            onClick={() => setMobileOpen(o => !o)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0a0a0a] border-b border-[#262626]">
          <nav className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map(({ path, label }) => (
              <NavLink
                key={path}
                to={path}
                end={path === '/'}
                className={({ isActive }) =>
                  `font-mono text-xs tracking-[0.2em] uppercase py-2 border-b border-[#1f1f1f] ${
                    isActive ? 'text-white' : 'text-neutral-500'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
