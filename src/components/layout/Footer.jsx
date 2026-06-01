import { Link } from 'react-router-dom';
import { Star, Github, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-space-navy border-t border-slate-800 py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-nebula-blue/20 border border-nebula-blue/40 flex items-center justify-center">
                <Star className="w-4 h-4 text-nebula-blue" />
              </div>
              <span className="font-cinzel font-bold text-white">Memory Archive</span>
            </div>
            <p className="font-inter text-sm text-slate-500 leading-relaxed max-w-xs">
              Preserving humanity's memories before the great interstellar migration. Every story matters. Every voice will travel to the stars.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-cinzel text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">
              Archive
            </h4>
            <ul className="space-y-2">
              {[
                { to: '/explore', label: 'Explore Memories' },
                { to: '/explore?era=migration', label: 'Migration Era' },
                { to: '/explore?emotion=nostalgia', label: 'Nostalgia' },
                { to: '/submit', label: 'Submit a Memory' },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="font-inter text-sm text-slate-500 hover:text-slate-300 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-cinzel text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">
              Initiative
            </h4>
            <ul className="space-y-2">
              {[
                { to: '/about', label: 'About Us' },
                { to: '/about#partners', label: 'Partners' },
                { to: '/about#faq', label: 'FAQ' },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="font-inter text-sm text-slate-500 hover:text-slate-300 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-inter text-xs text-slate-600">
            © 2051–2100 Global Memory Preservation Initiative. All memories preserved in perpetuity.
          </p>
          <div className="flex items-center gap-1 font-inter text-xs text-slate-600">
            <span className="w-2 h-2 rounded-full bg-aurora-teal animate-pulse" />
            Archive Status: Active · {(4700000).toLocaleString()} memories stored
          </div>
        </div>
      </div>
    </footer>
  );
}
