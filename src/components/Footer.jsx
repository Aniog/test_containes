import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-space-navy border-t border-white/10 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-6 rounded-full bg-cosmic-blue/40 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-cosmic-blue" />
              </div>
              <span className="font-space font-bold text-star-white">Memory Archive</span>
            </div>
            <p className="text-star-dim text-sm leading-relaxed max-w-xs">
              Preserving humanity's complete story before the interstellar migration. Every memory matters. Every story travels.
            </p>
            <div className="mt-4 text-xs font-mono text-star-dim">
              <span className="text-cosmic-teal">●</span> Archive Status: Online · 4.7M memories indexed
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-space font-semibold text-star-white text-sm mb-4">Archive</h4>
            <ul className="space-y-2">
              {[
                { to: '/explore', label: 'Explore Memories' },
                { to: '/explore?era=migration', label: 'Migration Era' },
                { to: '/explore?emotion=love', label: 'Love & Connection' },
                { to: '/submit', label: 'Submit a Memory' },
              ].map(link => (
                <li key={link.to}>
                  <Link to={link.to} className="text-star-dim hover:text-cosmic-blue text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-space font-semibold text-star-white text-sm mb-4">Initiative</h4>
            <ul className="space-y-2">
              {[
                { to: '/about', label: 'About the Project' },
                { to: '/about', label: 'Our Mission' },
                { to: '/about', label: 'The Colony Ships' },
                { to: '/about', label: 'Contact' },
              ].map(link => (
                <li key={link.label}>
                  <Link to={link.to} className="text-star-dim hover:text-cosmic-blue text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-star-dim text-xs font-mono">
            © 2051–2100 Interstellar Migration Initiative. All memories preserved for eternity.
          </p>
          <p className="text-star-dim text-xs font-mono">
            Carrying humanity's story to the stars ✦
          </p>
        </div>
      </div>
    </footer>
  );
}
