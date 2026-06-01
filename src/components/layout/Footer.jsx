import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-void border-t border-stardust/30 py-16 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-6">
              <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
                <circle cx="16" cy="16" r="2" fill="#4f8ef7" />
                <circle cx="6" cy="8" r="1.5" fill="#c8a8f0" />
                <circle cx="26" cy="10" r="1" fill="#f0c87a" />
                <circle cx="8" cy="24" r="1" fill="#7ab3ff" />
                <circle cx="24" cy="26" r="1.5" fill="#c8a8f0" />
                <line x1="16" y1="16" x2="6" y2="8" stroke="#4f8ef7" strokeWidth="0.5" strokeOpacity="0.5" />
                <line x1="16" y1="16" x2="26" y2="10" stroke="#4f8ef7" strokeWidth="0.5" strokeOpacity="0.5" />
                <line x1="16" y1="16" x2="8" y2="24" stroke="#4f8ef7" strokeWidth="0.5" strokeOpacity="0.5" />
                <line x1="16" y1="16" x2="24" y2="26" stroke="#4f8ef7" strokeWidth="0.5" strokeOpacity="0.5" />
              </svg>
            </div>
            <span className="font-cinzel font-semibold text-starlight">Memory Archive</span>
          </div>
          <p className="text-mist text-sm leading-relaxed max-w-sm">
            Preserving humanity's collective memory before the great interstellar migration.
            Every story matters. Every voice will be heard across the stars.
          </p>
          <div className="mt-4 text-xs text-fog font-mono">
            Archive Node: Earth-Prime · Status: Active · Est. 2041 CE
          </div>
        </div>

        <div>
          <h4 className="font-cinzel text-starlight text-sm font-semibold mb-4 uppercase tracking-wider">Navigate</h4>
          <ul className="space-y-2">
            {[
              { to: '/', label: 'Home' },
              { to: '/explore', label: 'Explore Archive' },
              { to: '/about', label: 'About the Initiative' },
              { to: '/contribute', label: 'Contribute' },
            ].map(link => (
              <li key={link.to}>
                <Link to={link.to} className="text-mist text-sm hover:text-starlight transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-cinzel text-starlight text-sm font-semibold mb-4 uppercase tracking-wider">Archive</h4>
          <ul className="space-y-2">
            {[
              { to: '/explore?era=ancient', label: 'Ancient World' },
              { to: '/explore?era=modern', label: 'Modern Age' },
              { to: '/explore?era=migration', label: 'Migration Era' },
              { to: '/explore?emotion=joy', label: 'Memories of Joy' },
              { to: '/explore?emotion=grief', label: 'Memories of Grief' },
            ].map(link => (
              <li key={link.to}>
                <Link to={link.to} className="text-mist text-sm hover:text-starlight transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-stardust/30 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-fog text-xs font-mono">
          © 2041–2100 Memory Archive Initiative. All memories preserved in perpetuity.
        </p>
        <p className="text-fog text-xs font-mono">
          Coordinates: 0°0′0″N 0°0′0″E · Earth · Sol System · Milky Way
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
