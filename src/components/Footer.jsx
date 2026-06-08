import { Link } from 'react-router-dom';

const footerLinks = [
  { label: 'Home', path: '/' },
  { label: 'Explore', path: '/explore' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'About', path: '/about' },
];

const categories = ['Bacteria', 'Fungi', 'Protozoa', 'Viruses', 'Algae', 'Archaea'];

export default function Footer() {
  return (
    <footer className="bg-midnight border-t border-violet-900/30 mt-auto">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-full bg-violet-500/20 border border-violet-500/50 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-violet-400" />
              </div>
              <span className="font-display font-bold text-base text-slate-50">
                Micro<span className="text-violet-400">Cosmos</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Exploring the invisible world that surrounds us — from the depths of the ocean to the surface of your skin.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-slate-50 font-semibold text-sm mb-4 uppercase tracking-widest">Navigation</h4>
            <ul className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-slate-400 hover:text-violet-400 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-slate-50 font-semibold text-sm mb-4 uppercase tracking-widest">Categories</h4>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <span
                  key={cat}
                  className="bg-violet-900/30 text-violet-300 text-xs px-3 py-1 rounded-full border border-violet-900/50"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-violet-900/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs">
            © 2026 MicroCosmos. Exploring the invisible world.
          </p>
          <p className="text-slate-600 text-xs">
            Science · Discovery · Wonder
          </p>
        </div>
      </div>
    </footer>
  );
}
