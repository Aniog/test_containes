import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-white/6 py-16 px-6" style={{ background: 'rgba(3,4,10,0.8)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-7 h-7">
                <div className="absolute inset-0 rounded-full bg-aurora/20" />
                <div className="absolute inset-1 rounded-full bg-aurora/40" />
                <div className="absolute inset-2 rounded-full bg-aurora" />
              </div>
              <span className="font-display font-bold text-starlight text-base tracking-wide">
                MNEMOSYNE
              </span>
            </div>
            <p className="text-mist text-sm leading-relaxed max-w-xs mb-4">
              Preserving the full breadth of human experience before the interstellar migration.
              Every memory matters. Every life counts.
            </p>
            <p className="text-mist-dark text-xs font-mono">
              Est. 2051 · Archive Version 4.7.2
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-starlight font-semibold text-sm mb-4">Archive</h4>
            <ul className="space-y-2">
              {['Explore Memories', 'Browse by Era', 'Browse by Emotion', 'Featured Fragments', 'Recent Additions'].map((item) => (
                <li key={item}>
                  <Link to="/explore" className="text-mist text-sm hover:text-aurora-glow transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-starlight font-semibold text-sm mb-4">Project</h4>
            <ul className="space-y-2">
              {[
                { label: 'About Mnemosyne', to: '/about' },
                { label: 'Contribute', to: '/contribute' },
                { label: 'Our Mission', to: '/about' },
                { label: 'Archive Status', to: '/archive' },
                { label: 'Contact', to: '/about' },
              ].map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className="text-mist text-sm hover:text-aurora-glow transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="section-divider mb-6" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-mist-dark text-xs">
            © 2051–2099 Mnemosyne Archive Initiative. All memories preserved with consent.
          </p>
          <p className="text-mist-dark text-xs font-mono">
            47,823,401 memories and counting
          </p>
        </div>
      </div>
    </footer>
  );
}
