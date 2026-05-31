import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-cosmos-dark border-t border-cosmos-blue/20 py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-6 relative">
                <div className="absolute inset-0 rounded-full bg-nebula-violet/20" />
                <div className="absolute inset-1 rounded-full bg-nebula-violet/40" />
                <div className="absolute inset-2 rounded-full bg-nebula-violet" style={{ boxShadow: '0 0 8px rgba(5,150,105,0.8)' }} />
              </div>
              <span className="font-cinzel text-sm font-semibold text-memory-white tracking-wider">
                Memory<span className="text-stardust-gold">Archive</span>
              </span>
            </div>
            <p className="text-memory-muted text-sm leading-relaxed max-w-xs font-inter">
              Preserving the full spectrum of human experience before humanity's greatest journey.
              Every memory is a star. Every star is a story.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-cinzel text-xs tracking-widest uppercase text-memory-white mb-4">Archive</h4>
            <ul className="space-y-2">
              {['Explore Memories', 'Browse by Era', 'Browse by Emotion', 'Featured', 'Recent'].map(item => (
                <li key={item}>
                  <Link to="/explore" className="text-sm text-memory-muted hover:text-memory-white transition-colors font-inter">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-cinzel text-xs tracking-widest uppercase text-memory-white mb-4">Initiative</h4>
            <ul className="space-y-2">
              {['About Us', 'Our Mission', 'Submit a Memory', 'Partners', 'Contact'].map(item => (
                <li key={item}>
                  <Link to="/about" className="text-sm text-memory-muted hover:text-memory-white transition-colors font-inter">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-cosmos-blue/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-memory-muted/60 font-inter">
            © 2047–2100 Global Memory Preservation Initiative. All memories preserved with dignity.
          </p>
          <p className="text-xs text-memory-muted/40 font-inter tracking-widest uppercase">
            For all who came before · For all who journey forward
          </p>
        </div>
      </div>
    </footer>
  );
}
