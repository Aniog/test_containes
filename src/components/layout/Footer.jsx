import { Link } from 'react-router-dom';
import { Star, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-cosmos-950 border-t border-nebula-500/10 py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-full bg-nebula-500/20 border border-nebula-500/40 flex items-center justify-center">
                <Star className="w-4 h-4 text-nebula-300 fill-nebula-300/50" />
              </div>
              <span className="font-cinzel text-base font-semibold text-text-primary">Memory Archive</span>
            </div>
            <p className="text-text-muted text-sm leading-relaxed max-w-xs">
              A global initiative to preserve humanity's collective memory before the interstellar migration of 2047.
            </p>
          </div>

          <div>
            <p className="font-mono text-xs text-text-muted uppercase tracking-widest mb-4">Navigate</p>
            <div className="space-y-2">
              {[['/', 'Home'], ['/explore', 'Explore'], ['/about', 'Mission'], ['/submit', 'Submit Memory']].map(([to, label]) => (
                <Link key={to} to={to} className="block text-sm text-text-secondary hover:text-text-primary transition-colors">
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="font-mono text-xs text-text-muted uppercase tracking-widest mb-4">Mission</p>
            <div className="space-y-2">
              {['About the Archive', 'How It Works', 'The Colony Ships', 'Archive Crystal', 'Partners'].map(label => (
                <span key={label} className="block text-sm text-text-muted cursor-default">{label}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-cosmos-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-text-muted">
            © 2041–2047 Memory Archive Initiative · All memories preserved with consent
          </p>
          <p className="font-mono text-xs text-text-muted">
            Departure: 2047 · Destination: Kepler-452b
          </p>
        </div>
      </div>
    </footer>
  );
}
