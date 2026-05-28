import { Link } from 'react-router-dom';
import { Zap, Cpu, ShieldAlert, Orbit, Radio, Activity, Globe } from 'lucide-react';

const FooterColumn = ({ title, links }) => (
  <div>
    <div
      className="font-mono text-[10px] uppercase tracking-widest text-neutral-600 mb-4 pb-3"
      style={{ borderBottom: '1px solid #1a1a1a' }}
    >
      {title}
    </div>
    <ul className="flex flex-col gap-2.5">
      {links.map(({ label, to }) => (
        <li key={label}>
          <Link
            to={to}
            className="font-mono text-xs text-neutral-500 hover:text-white transition-colors duration-200 uppercase tracking-wider"
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const SystemStatus = ({ label, value, ok = true }) => (
  <div className="flex items-center justify-between py-2" style={{ borderBottom: '1px solid #1a1a1a' }}>
    <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-600">{label}</span>
    <div className="flex items-center gap-2">
      <span
        className="w-1.5 h-1.5 rounded-full"
        style={{ backgroundColor: ok ? '#4ade80' : '#ef4444', animation: 'telemetry-pulse 2s ease-in-out infinite' }}
      />
      <span className="font-mono text-[10px] text-neutral-400">{value}</span>
    </div>
  </div>
);

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#050505', borderTop: '1px solid #262626' }}>
      {/* Main footer grid */}
      <div className="px-6 md:px-12 lg:px-24 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 flex items-center justify-center" style={{ border: '1px solid #262626' }}>
                <Zap className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="font-mono text-xs uppercase tracking-widest text-white font-bold">
                  Ignition Dynamics
                </div>
                <div className="font-mono text-[9px] uppercase tracking-widest text-neutral-600">
                  The Fusion Era
                </div>
              </div>
            </div>
            <p className="text-neutral-500 text-sm leading-relaxed mb-6 max-w-xs">
              Engineering the post-carbon civilization through commercial nuclear fusion at planetary scale. Delivering clean, limitless energy to global grids by 2035.
            </p>
            <div className="flex items-center gap-3">
              <Globe className="w-3.5 h-3.5 text-neutral-600" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-600">
                Global Operations Active
              </span>
            </div>
          </div>

          {/* Navigation columns */}
          <FooterColumn
            title="Platform"
            links={[
              { label: 'Overview', to: '/' },
              { label: 'Reactor Hub', to: '/reactors' },
              { label: 'Telemetry Gallery', to: '/gallery' },
              { label: 'Grid Access', to: '/contact' },
            ]}
          />
          <FooterColumn
            title="Technology"
            links={[
              { label: 'Tokamak Systems', to: '/reactors' },
              { label: 'Laser ICF', to: '/reactors' },
              { label: 'Magneto-Inertial', to: '/reactors' },
              { label: 'Tritium Breeding', to: '/reactors' },
            ]}
          />
          <FooterColumn
            title="Infrastructure"
            links={[
              { label: 'Grid Deployment', to: '/contact' },
              { label: 'Power Allocation', to: '/contact' },
              { label: 'Research Partners', to: '/contact' },
              { label: 'Government Access', to: '/contact' },
            ]}
          />
        </div>
      </div>

      {/* System telemetry bar */}
      <div
        className="px-6 md:px-12 lg:px-24 py-6"
        style={{ borderTop: '1px solid #1a1a1a' }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-neutral-700 mb-3">
              System Status
            </div>
            <SystemStatus label="Plasma Core A" value="NOMINAL" ok />
            <SystemStatus label="Plasma Core B" value="NOMINAL" ok />
            <SystemStatus label="Cryostat" value="4.2 K" ok />
          </div>
          <div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-neutral-700 mb-3">
              Power Output
            </div>
            <SystemStatus label="Net Fusion Yield" value="847 MW" ok />
            <SystemStatus label="Grid Delivery" value="612 MW" ok />
            <SystemStatus label="Q-Factor" value="Q = 8.4" ok />
          </div>
          <div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-neutral-700 mb-3">
              Magnetic Systems
            </div>
            <SystemStatus label="Toroidal Field" value="12.4 T" ok />
            <SystemStatus label="Poloidal Field" value="5.3 T" ok />
            <SystemStatus label="Coil Temp" value="20 mK" ok />
          </div>
          <div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-neutral-700 mb-3">
              Fuel Systems
            </div>
            <SystemStatus label="D-T Ratio" value="50:50" ok />
            <SystemStatus label="Tritium Breed" value="ACTIVE" ok />
            <SystemStatus label="Fuel Reserve" value="99.7%" ok />
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="px-6 md:px-12 lg:px-24 py-4 flex flex-col md:flex-row items-center justify-between gap-3"
        style={{ borderTop: '1px solid #1a1a1a' }}
      >
        <div className="flex items-center gap-6">
          <span className="font-mono text-[10px] text-neutral-700 uppercase tracking-widest">
            © 2026 Ignition Dynamics Corp.
          </span>
          <span className="font-mono text-[10px] text-neutral-700 uppercase tracking-widest hidden md:block">
            All Rights Reserved
          </span>
        </div>
        <div className="flex items-center gap-4">
          <Cpu className="w-3 h-3 text-neutral-700" />
          <span className="font-mono text-[10px] text-neutral-700 uppercase tracking-widest">
            ITER-Class Infrastructure
          </span>
          <ShieldAlert className="w-3 h-3 text-neutral-700" />
          <span className="font-mono text-[10px] text-neutral-700 uppercase tracking-widest">
            IAEA Certified
          </span>
          <Orbit className="w-3 h-3 text-neutral-700" />
          <span className="font-mono text-[10px] text-neutral-700 uppercase tracking-widest">
            ISO 19443
          </span>
        </div>
      </div>
    </footer>
  );
}
