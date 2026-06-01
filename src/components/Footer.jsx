import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-space-black border-t border-slate-800/60 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-nebula-blue to-aurora-teal flex items-center justify-center text-white text-xs font-bold">
                ✦
              </div>
              <span className="font-cinzel font-bold text-white text-base">Memory Archive</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Preserving humanity's collective memory before the great migration.
              Every story matters. Every voice will travel with us to the stars.
            </p>
            <div className="mt-4 text-xs text-slate-600 font-mono">
              Archive ID: IMI-MEM-2026-ALPHA
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-cinzel text-white text-sm font-semibold mb-4 tracking-wide">
              Explore
            </h4>
            <ul className="space-y-2">
              {[
                { label: 'All Memories', path: '/explore' },
                { label: 'By Era', path: '/explore?filter=era' },
                { label: 'By Emotion', path: '/explore?filter=emotion' },
                { label: 'By Location', path: '/explore?filter=location' },
                { label: 'By Life Event', path: '/explore?filter=lifeEvent' },
              ].map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="text-slate-400 text-sm hover:text-nebula-blue transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-cinzel text-white text-sm font-semibold mb-4 tracking-wide">
              Initiative
            </h4>
            <ul className="space-y-2">
              {[
                { label: 'About the Mission', path: '/about' },
                { label: 'Preserve a Memory', path: '/submit' },
                { label: 'How It Works', path: '/about#how' },
                { label: 'Partners', path: '/about#partners' },
              ].map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="text-slate-400 text-sm hover:text-nebula-blue transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800/60 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-xs">
            © 2026 Interstellar Migration Initiative — Memory Preservation Project. All memories preserved in perpetuity.
          </p>
          <div className="flex items-center gap-2 text-xs text-slate-600">
            <span className="w-1.5 h-1.5 rounded-full bg-aurora-teal animate-pulse" />
            Archive systems operational
          </div>
        </div>
      </div>
    </footer>
  );
}
