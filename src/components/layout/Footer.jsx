import { useNavigate } from 'react-router-dom';

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="bg-space-black border-t border-slate-800/60 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-6 rounded-full bg-nebula-blue/60 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-nebula-blue" />
              </div>
              <span className="font-cinzel text-white font-semibold">Memory Archive</span>
            </div>
            <p className="text-slate-500 text-sm font-inter leading-relaxed max-w-xs">
              A global initiative to preserve humanity's memories before the Great Interstellar Migration of 2051.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-slate-300 text-sm font-semibold mb-4 font-inter">Archive</h4>
            <ul className="space-y-2">
              {['Explore Memories', 'Browse by Era', 'Browse by Emotion', 'Browse by Location'].map(item => (
                <li key={item}>
                  <button
                    onClick={() => navigate('/explore')}
                    className="text-slate-500 hover:text-slate-300 text-sm font-inter transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-slate-300 text-sm font-semibold mb-4 font-inter">Initiative</h4>
            <ul className="space-y-2">
              {[
                { label: 'Our Mission', path: '/about' },
                { label: 'Submit a Memory', path: '/submit' },
                { label: 'The Migration', path: '/about' },
              ].map(item => (
                <li key={item.label}>
                  <button
                    onClick={() => navigate(item.path)}
                    className="text-slate-500 hover:text-slate-300 text-sm font-inter transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800/60 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-xs font-inter">
            © 2026 Memory Archive Initiative. All memories preserved for eternity.
          </p>
          <p className="text-slate-700 text-xs font-inter">
            Migration Year: <span className="text-stardust-gold">2051</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
