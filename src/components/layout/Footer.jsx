import { Link } from 'react-router-dom';
import { Zap, Cpu, ShieldAlert, Orbit } from 'lucide-react';

const footerColumns = [
  {
    label: 'Infrastructure',
    links: [
      { label: 'Daedalus Tokamak', path: '/reactors#daedalus' },
      { label: 'Helios Laser Array', path: '/reactors#helios' },
      { label: 'Magneto-Inertial', path: '/reactors#mif' },
      { label: 'Grid Deployment', path: '/reactors' },
    ],
  },
  {
    label: 'Research',
    links: [
      { label: 'Plasma Physics', path: '/gallery' },
      { label: 'Telemetry Data', path: '/gallery' },
      { label: 'D-T Fuel Cycles', path: '/reactors' },
      { label: 'Tritium Breeding', path: '/reactors' },
    ],
  },
  {
    label: 'Operations',
    links: [
      { label: 'Grid Request', path: '/contact' },
      { label: 'Government Access', path: '/contact' },
      { label: 'Research Institutes', path: '/contact' },
      { label: 'Investor Relations', path: '/contact' },
    ],
  },
];

const specs = [
  { icon: Zap, label: 'Peak Output', value: '2.4 GW' },
  { icon: Cpu, label: 'Plasma Temp', value: '150M K' },
  { icon: ShieldAlert, label: 'Uptime SLA', value: '99.97%' },
  { icon: Orbit, label: 'Active Sites', value: '7 Global' },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#262626]">
      {/* Spec Bar */}
      <div className="border-b border-[#1f1f1f]">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {specs.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-center gap-3">
                <Icon className="w-4 h-4 text-neutral-600 shrink-0" />
                <div>
                  <p className="font-mono text-[10px] text-neutral-600 tracking-widest uppercase">{label}</p>
                  <p className="font-mono text-sm text-white font-medium">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="w-7 h-7 border border-white flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span className="font-mono text-xs tracking-[0.25em] uppercase text-white">
                Ignition Dynamics
              </span>
            </Link>
            <p className="text-neutral-600 text-xs leading-relaxed font-mono">
              Engineering the post-carbon civilization through commercial nuclear fusion at planetary scale.
            </p>
            <div className="mt-6 pt-6 border-t border-[#1f1f1f]">
              <p className="font-mono text-[10px] text-neutral-700 tracking-widest uppercase">
                Classification
              </p>
              <p className="font-mono text-[10px] text-neutral-500 mt-1">
                UNCLASSIFIED // FOR OFFICIAL USE
              </p>
            </div>
          </div>

          {/* Link Columns */}
          {footerColumns.map(({ label, links }) => (
            <div key={label}>
              <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-neutral-500 mb-4">
                {label}
              </p>
              <ul className="space-y-3">
                {links.map(({ label: linkLabel, path }) => (
                  <li key={linkLabel}>
                    <Link
                      to={path}
                      className="font-mono text-xs text-neutral-600 hover:text-neutral-200 transition-colors duration-200"
                    >
                      {linkLabel}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-[#1f1f1f] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="font-mono text-[10px] text-neutral-700 tracking-widest">
            © 2047 IGNITION DYNAMICS CORP. ALL RIGHTS RESERVED. FUSION ERA INITIATIVE.
          </p>
          <div className="flex items-center gap-6">
            <span className="font-mono text-[10px] text-neutral-700">ITER PROTOCOL v4.2</span>
            <span className="font-mono text-[10px] text-neutral-700">ISO 19443:2047</span>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              <span className="font-mono text-[10px] text-neutral-500">ALL SYSTEMS NOMINAL</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
