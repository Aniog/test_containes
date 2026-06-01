import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-space-navy border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ background: 'radial-gradient(circle, #4f8ef7 0%, #8b5cf6 100%)' }}>
                <span className="text-white text-xs font-bold">M</span>
              </div>
              <span className="font-serif text-lg font-bold text-white">Mnemo</span>
            </div>
            <p className="font-sans text-sm text-slate-500 max-w-sm leading-relaxed">
              The Human Memory Archive is a global initiative to preserve the lived
              experiences of humanity before the Great Migration. Every memory matters.
            </p>
            <div className="flex items-center gap-2 mt-4">
              <span className="w-2 h-2 rounded-full bg-aurora-teal animate-pulse" />
              <span className="font-sans text-xs text-aurora-teal">Archive actively collecting memories</span>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-sans text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">
              Archive
            </h4>
            <ul className="space-y-2">
              {['Explore Memories', 'Browse by Era', 'Browse by Emotion', 'Featured Collections'].map((item) => (
                <li key={item}>
                  <Link to="/explore" className="font-sans text-sm text-slate-500 hover:text-slate-300 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">
              Initiative
            </h4>
            <ul className="space-y-2">
              {['About Mnemo', 'Contribute', 'Partners', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to="/about" className="font-sans text-sm text-slate-500 hover:text-slate-300 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-slate-600">
            © 2051–2100 Mnemo Global Initiative. All memories preserved with consent.
          </p>
          <p className="font-sans text-xs text-slate-600 italic">
            "We carry the stars within us. We are made of star-stuff." — Carl Sagan
          </p>
        </div>
      </div>
    </footer>
  );
}
