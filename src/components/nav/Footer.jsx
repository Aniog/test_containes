import { Link } from 'react-router-dom';
import { Zap, Cpu, ShieldAlert, Orbit, Radio, Activity, Globe } from 'lucide-react';

const FOOTER_LINKS = {
  'Technology': [
    { label: 'Magnetic Confinement', path: '/reactors#daedalus' },
    { label: 'Inertial Confinement', path: '/reactors#helios' },
    { label: 'Magneto-Inertial Fusion', path: '/reactors#mif' },
    { label: 'Plasma Physics', path: '/reactors' },
  ],
  'Infrastructure': [
    { label: 'Global Grid Deployment', path: '/contact' },
    { label: 'Tritium Breeding', path: '/reactors' },
    { label: 'Cryostat Systems', path: '/reactors' },
    { label: 'Divertor Engineering', path: '/gallery' },
  ],
  'Intelligence': [
    { label: 'Telemetry Gallery', path: '/gallery' },
    { label: 'Plasma Diagnostics', path: '/gallery' },
    { label: 'Grid Request', path: '/contact' },
    { label: 'Research Collaboration', path: '/contact' },
  ],
};

const SPECS = [
  { icon: Zap, label: 'Peak Output', value: '2.4 GW' },
  { icon: Cpu, label: 'Plasma Temp', value: '150M K' },
  { icon: ShieldAlert, label: 'Confinement', value: '8.2 T' },
  { icon: Orbit, label: 'Q-Factor', value: '≥ 10' },
];

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-[#262626]">
      {/* Specs strip */}
      <div className="border-b border-[#262626] px-6 md:px-12 py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {SPECS.map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-center gap-3">
              <div className="w-8 h-8 border border-[#262626] flex items-center justify-center flex-shrink-0">
                <Icon className="w-3.5 h-3.5 text-[#555555]" />
              </div>
              <div>
                <div className="font-mono text-[10px] text-[#555555] tracking-widest uppercase">{label}</div>
                <div className="font-mono text-sm text-white font-bold">{value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main footer content */}
      <div className="px-6 md:px-12 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Brand column */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 border border-[#262626] flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="text-white font-bold text-sm tracking-tight">IGNITION DYNAMICS</div>
                <div className="font-mono text-[9px] text-[#555555] tracking-widest uppercase">The Fusion Era</div>
              </div>
            </div>
            <p className="text-[#555555] text-sm leading-relaxed mb-6 max-w-xs">
              Engineering the post-carbon civilization through commercial nuclear fusion at planetary scale. Powering 10 billion lives by 2045.
            </p>
            <div className="flex items-center gap-2 mb-3">
              <Globe className="w-3 h-3 text-[#555555]" />
              <span className="font-mono text-[10px] text-[#555555] tracking-widest uppercase">Global Operations: 14 Nations</span>
            </div>
            <div className="flex items-center gap-2">
              <Radio className="w-3 h-3 text-[#555555]" />
              <span className="font-mono text-[10px] text-[#555555] tracking-widest uppercase">Secure: fusion-ops@ignition.io</span>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <div className="font-mono text-[10px] text-[#555555] tracking-widest uppercase mb-5 pb-3 border-b border-[#1f1f1f]">
                {category}
              </div>
              <ul className="space-y-3">
                {links.map(({ label, path }) => (
                  <li key={label}>
                    <Link
                      to={path}
                      className="text-[#555555] text-sm hover:text-white transition-colors duration-200"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#1f1f1f] px-6 md:px-12 py-5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Activity className="w-3 h-3 text-[#555555]" />
            <span className="font-mono text-[10px] text-[#555555] tracking-widest uppercase">
              © 2026 Ignition Dynamics Corp. — All Rights Reserved
            </span>
          </div>
          <div className="flex items-center gap-6">
            <span className="font-mono text-[10px] text-[#555555] tracking-widest uppercase">ITER Partner</span>
            <span className="text-[#262626]">|</span>
            <span className="font-mono text-[10px] text-[#555555] tracking-widest uppercase">IAEA Certified</span>
            <span className="text-[#262626]">|</span>
            <span className="font-mono text-[10px] text-[#555555] tracking-widest uppercase">ISO 19443</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
