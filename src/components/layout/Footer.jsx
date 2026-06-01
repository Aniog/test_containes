import { useNavigate } from 'react-router-dom';

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer
      className="border-t border-white/[0.06] py-12 px-4"
      style={{ background: '#050810' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div
                className="w-6 h-6 rounded-full flex items-center justify-center text-xs"
                style={{ background: 'linear-gradient(135deg, #4a9eff, #2563eb)' }}
              >
                ✦
              </div>
              <span className="font-cinzel font-bold text-sm" style={{ color: '#e8edf5' }}>
                Memory Archive
              </span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: '#4a5568' }}>
              Preserving humanity's memories before the Great Migration. Est. 2041.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#4a5568' }}>
              Archive
            </h4>
            <div className="flex flex-col gap-2.5">
              {[
                { label: 'Explore Memories', path: '/explore' },
                { label: 'Submit a Memory', path: '/submit' },
                { label: 'About the Initiative', path: '/about' },
              ].map((l) => (
                <button
                  key={l.path}
                  onClick={() => navigate(l.path)}
                  className="text-sm text-left transition-colors hover:text-[#4a9eff]"
                  style={{ color: '#8899b4' }}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          {/* Mission */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#4a5568' }}>
              Mission
            </h4>
            <p className="text-sm leading-relaxed" style={{ color: '#4a5568' }}>
              Every memory submitted becomes part of the permanent record that will travel
              with humanity to the stars. Your story matters.
            </p>
          </div>
        </div>

        <div
          className="pt-6 border-t border-white/[0.05] flex flex-col md:flex-row items-center justify-between gap-3"
        >
          <p className="text-xs" style={{ color: '#2a3a52' }}>
            © 2041–2057 Global Memory Archive Initiative. All memories preserved in perpetuity.
          </p>
          <p className="text-xs font-mono" style={{ color: '#2a3a52' }}>
            Archive Node: EARTH-PRIME · Status: ACTIVE
          </p>
        </div>
      </div>
    </footer>
  );
}
