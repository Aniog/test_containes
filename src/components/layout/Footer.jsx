import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-cosmos border-t border-stardust/30 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full border border-aurora/50 flex items-center justify-center bg-aurora/10">
                <span className="text-aurora-light text-xs">✦</span>
              </div>
              <span className="font-cinzel text-sm tracking-widest text-starlight">Memory Archive</span>
            </div>
            <p className="text-mist text-sm leading-relaxed max-w-sm mb-4">
              A global initiative to preserve the full breadth of human experience before the Great Migration.
              Every memory matters. Every voice deserves to travel to the stars.
            </p>
            <p className="text-xs font-mono text-ghost tracking-wide">
              Archive Status: <span className="text-nova-light">Active</span> · Est. 2060
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-xs font-mono tracking-widest text-ghost uppercase mb-4">Archive</p>
            <div className="flex flex-col gap-2">
              {['Explore Memories', 'Browse by Era', 'Browse by Emotion', 'Featured Memories'].map((l) => (
                <Link key={l} to="/explore" className="text-sm text-mist hover:text-starlight transition-colors">
                  {l}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-mono tracking-widest text-ghost uppercase mb-4">Initiative</p>
            <div className="flex flex-col gap-2">
              {[
                { label: 'About the Archive', to: '/about' },
                { label: 'Contribute a Memory', to: '/contribute' },
                { label: 'The Migration', to: '/about' },
                { label: 'Partners', to: '/about' },
              ].map((l) => (
                <Link key={l.label} to={l.to} className="text-sm text-mist hover:text-starlight transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-stardust/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs font-mono text-ghost">
            © 2087 The Memory Archive Initiative · All memories preserved in perpetuity
          </p>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-nova animate-pulse" />
            <span className="text-xs font-mono text-ghost">
              4,712,847 memories archived · Migration in 7 years
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
