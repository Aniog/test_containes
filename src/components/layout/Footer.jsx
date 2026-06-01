import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-ma-stone bg-ma-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div>
            <p className="font-display text-2xl font-light tracking-ultra text-ma-ink mb-3">
              MA<span className="italic"> (Space)</span>
            </p>
            <p className="text-xs text-ma-ash tracking-widest uppercase">
              Architectural Studio — Tokyo
            </p>
          </div>

          <nav className="flex flex-col md:flex-row gap-4 md:gap-10">
            {[
              { to: '/projects', label: 'Projects' },
              { to: '/materials', label: 'Materials' },
              { to: '/philosophy', label: 'Philosophy' },
            ].map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="text-xs tracking-widest uppercase text-ma-ash hover:text-ma-ink transition-colors duration-400"
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="text-right">
            <p className="text-xs text-ma-ash tracking-wide">
              © {new Date().getFullYear()} MA (Space)
            </p>
            <p className="text-xs text-ma-stone mt-1 tracking-wide">
              All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
