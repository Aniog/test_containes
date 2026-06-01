import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#050d1a] border-t border-[rgba(0,212,255,0.1)] py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-full bg-[#00d4ff]/20 border border-[#00d4ff]/40 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-[#00d4ff] shadow-[0_0_6px_#00d4ff]" />
              </div>
              <span className="text-base font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Micro<span className="text-[#00d4ff]">Cosmos</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Exploring the invisible universe that exists all around us — from bacteria to viruses, from cells to crystals.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">Explore</h4>
            <ul className="space-y-2">
              {[
                { label: 'Home', path: '/' },
                { label: 'Explore', path: '/explore' },
                { label: 'Organisms', path: '/organisms' },
                { label: 'Gallery', path: '/gallery' },
                { label: 'About', path: '/about' },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-slate-400 hover:text-[#00d4ff] text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Topics */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">Topics</h4>
            <div className="flex flex-wrap gap-2">
              {['Bacteria', 'Viruses', 'Fungi', 'Protozoa', 'Algae', 'Cells', 'Crystals', 'Insects'].map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 rounded-full border border-[rgba(0,212,255,0.2)] text-slate-400 bg-[#00d4ff]/5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-[rgba(0,212,255,0.08)] pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs">
            © 2026 MicroCosmos. Revealing the invisible world.
          </p>
          <p className="text-slate-600 text-xs">
            Science · Photography · Discovery
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
