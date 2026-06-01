import { Link } from 'react-router-dom';
import { Archive, Github, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/60 bg-space-950 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-nebula-600/30 flex items-center justify-center">
                <Archive className="w-4 h-4 text-nebula-400" />
              </div>
              <span className="font-cinzel text-lg font-bold text-slate-100">Mnemosynē Archive</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Preserving the memories of humanity before the great interstellar migration.
              Every story matters. Every moment endures.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-mono text-xs text-nebula-400 uppercase tracking-widest mb-4">Navigate</h4>
            <ul className="space-y-2">
              {[
                { to: '/', label: 'Home' },
                { to: '/explore', label: 'Explore Memories' },
                { to: '/about', label: 'About the Archive' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="text-slate-500 hover:text-slate-300 text-sm transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Stats */}
          <div>
            <h4 className="font-mono text-xs text-nebula-400 uppercase tracking-widest mb-4">Archive Status</h4>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Memories Preserved</span>
                <span className="text-slate-300 font-mono">847.2M</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Contributors</span>
                <span className="text-slate-300 font-mono">2.3M</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Languages</span>
                <span className="text-slate-300 font-mono">4,891</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Years Spanned</span>
                <span className="text-slate-300 font-mono">5,100</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800/60 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-xs font-mono">
            © 2089 Mnemosynē Archive Initiative. All memories preserved in perpetuity.
          </p>
          <p className="text-slate-600 text-xs flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-emotion-love" /> for humanity
          </p>
        </div>
      </div>
    </footer>
  );
}
