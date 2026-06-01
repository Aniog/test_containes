import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#080d1a] border-t border-slate-800/60 py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-5 h-5 rounded-full bg-cyan-400" style={{ boxShadow: '0 0 8px rgba(6,182,212,0.6)' }} />
              <span className="font-cinzel text-sm font-bold text-slate-100 tracking-wider">MEMORY ARCHIVE</span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
              Preserving humanity's memories before the great migration. Every story matters.
              Every moment endures.
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs text-slate-600">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Archive broadcasting · Last memory added 2 seconds ago
            </div>
          </div>

          {/* Links */}
          <div>
            <p className="text-xs text-slate-600 uppercase tracking-widest mb-4">Navigate</p>
            <div className="space-y-2.5">
              {[
                { to: '/', label: 'Home' },
                { to: '/explore', label: 'Explore Memories' },
                { to: '/about', label: 'Our Mission' },
                { to: '/submit', label: 'Submit a Memory' },
              ].map(link => (
                <Link key={link.to} to={link.to} className="block text-sm text-slate-500 hover:text-slate-300 transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Browse */}
          <div>
            <p className="text-xs text-slate-600 uppercase tracking-widest mb-4">Browse By</p>
            <div className="space-y-2.5">
              {[
                { to: '/explore?era=ancient', label: 'Ancient World' },
                { to: '/explore?emotion=love', label: 'Love & Connection' },
                { to: '/explore?lifeEvent=journey', label: 'Journeys' },
                { to: '/explore?era=migration', label: 'Migration Era' },
              ].map(link => (
                <Link key={link.to} to={link.to} className="block text-sm text-slate-500 hover:text-slate-300 transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-800/60 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-700">
          <span>© 2051–2100 Global Memory Archive Initiative. All memories preserved in perpetuity.</span>
          <span className="font-cinzel tracking-widest">HUMANITY REMEMBERS</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
