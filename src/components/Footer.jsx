import { Link } from 'react-router-dom';
import { Zap, Globe, ShieldAlert, Activity, Cpu } from 'lucide-react';

const footerColumns = [
  {
    title: 'Infrastructure',
    links: [
      { label: 'Tokamak Systems', path: '/reactors' },
      { label: 'Laser Arrays', path: '/reactors' },
      { label: 'Magneto-Inertial', path: '/reactors' },
      { label: 'Grid Deployment', path: '/reactors' },
    ],
  },
  {
    title: 'Research',
    links: [
      { label: 'Plasma Physics', path: '/gallery' },
      { label: 'D-T Fuel Cycles', path: '/gallery' },
      { label: 'Tritium Breeding', path: '/gallery' },
      { label: 'Telemetry Data', path: '/gallery' },
    ],
  },
  {
    title: 'Operations',
    links: [
      { label: 'Grid Requests', path: '/contact' },
      { label: 'Gov. Partnerships', path: '/contact' },
      { label: 'Research Institutes', path: '/contact' },
      { label: 'Power Allocation', path: '/contact' },
    ],
  },
];

const specs = [
  { label: 'Max Output', value: '2.4 GW' },
  { label: 'Plasma Temp', value: '150M K' },
  { label: 'Confinement', value: '8.2 s' },
  { label: 'Q-Factor', value: '11.4' },
  { label: 'Uptime', value: '99.97%' },
];

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-[#262626]">
      {/* Specs Bar */}
      <div className="border-b border-[#262626] bg-[#121212]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4">
          <div className="flex flex-wrap items-center gap-6 lg:gap-12">
            <div className="flex items-center gap-2">
              <Activity className="w-3 h-3 text-[#00FF88]" />
              <span className="font-mono text-[10px] text-[#00FF88] tracking-widest uppercase">
                Live Reactor Telemetry
              </span>
            </div>
            {specs.map((spec) => (
              <div key={spec.label} className="flex items-center gap-2">
                <span className="font-mono text-[9px] text-[#606060] tracking-widest uppercase">
                  {spec.label}
                </span>
                <span className="font-mono text-[10px] text-white tracking-wider">
                  {spec.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">

          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 border border-white flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" strokeWidth={2.5} />
              </div>
              <div>
                <div className="font-grotesk font-bold text-white text-base tracking-widest uppercase">
                  Ignition Dynamics
                </div>
                <div className="font-mono text-[9px] text-[#606060] tracking-widest uppercase">
                  Fusion Systems Corp.
                </div>
              </div>
            </Link>
            <p className="text-[#606060] text-sm leading-relaxed max-w-xs mb-8">
              Engineering the post-carbon civilization through commercial nuclear fusion at planetary scale. Powering 10 billion lives by 2045.
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <Globe className="w-3 h-3 text-[#606060]" />
                <span className="font-mono text-[10px] text-[#606060] tracking-wider">
                  HQ: Geneva, Switzerland — 46.2044° N, 6.1432° E
                </span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldAlert className="w-3 h-3 text-[#606060]" />
                <span className="font-mono text-[10px] text-[#606060] tracking-wider">
                  IAEA Certified — Class IV Fusion Facility
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Cpu className="w-3 h-3 text-[#606060]" />
                <span className="font-mono text-[10px] text-[#606060] tracking-wider">
                  ISO 19443 · NQA-1 · IEEE 603 Compliant
                </span>
              </div>
            </div>
          </div>

          {/* Link Columns */}
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="font-mono text-[10px] text-[#606060] tracking-widest uppercase mb-6">
                {col.title}
              </h4>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="font-mono text-xs text-[#A0A0A0] hover:text-white transition-colors tracking-wide"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#262626]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-mono text-[10px] text-[#606060] tracking-wider">
            © 2026 Ignition Dynamics Fusion Systems Corp. All rights reserved.
          </span>
          <div className="flex items-center gap-6">
            <span className="font-mono text-[10px] text-[#606060] tracking-wider">
              Classification: UNCLASSIFIED // FOR OFFICIAL USE
            </span>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-[#00FF88] telemetry-live" />
              <span className="font-mono text-[10px] text-[#00FF88] tracking-widest uppercase">
                All Systems Online
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
