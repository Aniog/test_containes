import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-space-navy border-t border-slate-800 py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-6 relative">
                <div className="absolute inset-0 rounded-full border border-nebula-blue/60" />
                <div className="absolute inset-1 rounded-full bg-nebula-blue/30" />
                <div className="absolute inset-2 rounded-full bg-nebula-blue" />
              </div>
              <span className="font-display text-lg text-white font-light">Memory Archive</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Preserving the complete record of human experience before the Great Migration.
              Every memory matters. Every voice will travel with us.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-slate-600 mb-4">Explore</h4>
            <div className="space-y-2">
              {['All Memories', 'By Era', 'By Emotion', 'By Location', 'Featured'].map(item => (
                <Link key={item} to="/explore" className="block text-sm text-slate-400 hover:text-white transition-colors duration-200">
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-slate-600 mb-4">Initiative</h4>
            <div className="space-y-2">
              {['Our Mission', 'How to Contribute', 'Preservation Methods', 'Partners', 'Contact'].map(item => (
                <Link key={item} to="/about" className="block text-sm text-slate-400 hover:text-white transition-colors duration-200">
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600">
            © 2051–2100 Memory Archive Initiative. All memories preserved in perpetuity.
          </p>
          <p className="text-xs text-slate-700 italic font-display">
            "We carry Earth within us."
          </p>
        </div>
      </div>
    </footer>
  );
}
