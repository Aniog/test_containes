import { NavLink } from 'react-router-dom';

const Footer = () => (
  <footer
    className="relative z-10 py-12 px-6 text-center"
    style={{
      background: 'rgba(0, 2, 10, 0.8)',
      backdropFilter: 'blur(10px)',
      borderTop: '1px solid rgba(0,255,255,0.1)',
    }}
  >
    <div className="max-w-4xl mx-auto">
      {/* Logo */}
      <div className="flex items-center justify-center gap-2 mb-6">
        <div
          className="w-6 h-6 rounded-full"
          style={{
            background: 'radial-gradient(circle, #00FFFF 0%, #000080 100%)',
            boxShadow: '0 0 12px rgba(0,255,255,0.4)',
          }}
        />
        <span className="font-cinzel font-bold tracking-widest text-lg" style={{ color: '#fff' }}>
          ABYSSOS
        </span>
      </div>

      {/* Nav links */}
      <div className="flex justify-center gap-6 mb-8">
        {[
          { to: '/', label: 'Descending' },
          { to: '/reef', label: 'The Reef' },
          { to: '/luminous', label: 'Luminous Life' },
        ].map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === '/'}
            className="no-underline text-sm font-cinzel tracking-wider transition-colors duration-300"
            style={({ isActive }) => ({
              color: isActive ? '#00FFFF' : 'rgba(255,255,255,0.4)',
            })}
          >
            {link.label}
          </NavLink>
        ))}
      </div>

      {/* Divider */}
      <div className="flex items-center justify-center gap-4 mb-6">
        <div className="h-px flex-1 max-w-32" style={{ background: 'linear-gradient(90deg, transparent, rgba(0,255,255,0.3))' }} />
        <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#00FFFF', boxShadow: '0 0 8px #00FFFF' }} />
        <div className="h-px flex-1 max-w-32" style={{ background: 'linear-gradient(90deg, rgba(0,255,255,0.3), transparent)' }} />
      </div>

      <p className="text-xs text-white/30 font-inter tracking-wider">
        © 2026 ABYSSOS · Into the Deep
      </p>
    </div>
  </footer>
);

export default Footer;
