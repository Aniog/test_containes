import { NavLink, Outlet } from 'react-router-dom';
import { Atom, FlaskConical, Cpu } from 'lucide-react';

const navItems = [
  { to: '/', label: 'Atlas', icon: Atom, end: true },
  { to: '/theory', label: 'Theory', icon: FlaskConical },
  { to: '/simulations', label: 'Simulations', icon: Cpu },
];

export default function Layout() {
  return (
    <div className="blueprint-bg min-h-screen flex flex-col">
      {/* Top navigation bar */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          {/* Wordmark */}
          <NavLink to="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0">
              <Atom className="w-4.5 h-4.5 text-white" strokeWidth={1.75} />
            </div>
            <span
              className="font-display text-lg font-semibold tracking-tight text-slate-800"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Quantum Dynamics
            </span>
          </NavLink>

          {/* Nav links */}
          <nav className="flex items-center gap-8">
            {navItems.map(({ to, label, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                className={({ isActive }) =>
                  `nav-link pb-0.5 ${isActive ? 'active' : ''}`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* Right badge */}
          <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 bg-slate-50">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
            <span
              className="text-xs text-slate-500 tracking-widest uppercase"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              v2.4.1
            </span>
          </div>
        </div>
      </header>

      {/* Page content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            className="text-xs text-slate-400 tracking-widest uppercase"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            © 2026 Quantum Dynamics Research Institute
          </p>
          <div className="flex items-center gap-6">
            {['Research', 'Publications', 'Contact'].map((item) => (
              <span
                key={item}
                className="text-xs text-slate-400 hover:text-slate-600 cursor-pointer transition-colors uppercase tracking-wider"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
