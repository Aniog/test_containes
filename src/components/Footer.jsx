import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-space-navy/50 border-t border-slate-700/40 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <svg viewBox="0 0 28 28" fill="none" className="w-6 h-6">
                <circle cx="14" cy="14" r="2" fill="#4f8ef7" />
                <circle cx="6" cy="8" r="1.5" fill="#a78bfa" />
                <circle cx="22" cy="6" r="1" fill="#2dd4bf" />
                <circle cx="24" cy="20" r="1.5" fill="#f5c842" />
                <circle cx="4" cy="22" r="1" fill="#e879a0" />
                <line x1="14" y1="14" x2="6" y2="8" stroke="#4f8ef7" strokeOpacity="0.5" strokeWidth="0.8" />
                <line x1="14" y1="14" x2="22" y2="6" stroke="#4f8ef7" strokeOpacity="0.5" strokeWidth="0.8" />
                <line x1="14" y1="14" x2="24" y2="20" stroke="#4f8ef7" strokeOpacity="0.5" strokeWidth="0.8" />
                <line x1="14" y1="14" x2="4" y2="22" stroke="#4f8ef7" strokeOpacity="0.5" strokeWidth="0.8" />
              </svg>
              <span className="font-cinzel font-bold text-white text-base">Memory Archive</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              A global initiative to preserve the complete tapestry of human experience before the Great Migration.
              Every memory matters. Every story deserves to travel among the stars.
            </p>
            <div className="flex items-center gap-2 mt-4">
              <span className="w-1.5 h-1.5 rounded-full bg-aurora-teal animate-pulse" />
              <span className="text-xs text-aurora-teal">Archive actively collecting · 142M+ memories preserved</span>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-cinzel font-semibold text-white text-sm mb-4">Explore</h4>
            <ul className="space-y-2.5">
              {[
                { to: '/explore/era', label: 'Browse by Era' },
                { to: '/explore/emotion', label: 'Browse by Emotion' },
                { to: '/explore/location', label: 'Browse by Location' },
                { to: '/explore/event', label: 'Browse by Life Event' },
                { to: '/explore', label: 'All Memories' },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-slate-400 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contribute */}
          <div>
            <h4 className="font-cinzel font-semibold text-white text-sm mb-4">Contribute</h4>
            <ul className="space-y-2.5">
              {[
                { to: '/submit', label: 'Submit a Memory' },
                { to: '/submit', label: 'Record a Story' },
                { to: '/submit', label: 'Upload Photos' },
                { to: '/about', label: 'About the Initiative' },
                { to: '/about', label: 'Our Mission' },
              ].map((link, i) => (
                <li key={i}>
                  <Link to={link.to} className="text-slate-400 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700/40 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-xs">
            © 2031–2050 Memory Archive Initiative. All memories preserved with dignity.
          </p>
          <p className="text-slate-600 text-xs font-cinzel">
            Ad Astra Per Memoriam — To the Stars Through Memory
          </p>
        </div>
      </div>
    </footer>
  );
}
