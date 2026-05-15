import { Link } from 'react-router-dom';
import { Zap, Cpu, ShieldAlert, Orbit, Radio, Activity, Globe } from 'lucide-react';

const FOOTER_COLS = [
  {
    heading: 'Infrastructure',
    links: [
      { label: 'Daedalus Tokamak', path: '/reactors' },
      { label: 'Helios Laser Array', path: '/reactors' },
      { label: 'Magneto-Inertial Fusion', path: '/reactors' },
      { label: 'Tritium Breeding Blanket', path: '/reactors' },
    ],
  },
  {
    heading: 'Research',
    links: [
      { label: 'Plasma Physics Division', path: '/gallery' },
      { label: 'Cryogenic Systems', path: '/gallery' },
      { label: 'Neutronics & Materials', path: '/gallery' },
      { label: 'Telemetry Archive', path: '/gallery' },
    ],
  },
  {
    heading: 'Operations',
    links: [
      { label: 'Grid Request Portal', path: '/contact' },
      { label: 'Government Liaison', path: '/contact' },
      { label: 'Investor Relations', path: '/contact' },
      { label: 'Safety Protocols', path: '/contact' },
    ],
  },
];

const SPECS = [
  { icon: Zap, label: 'Peak Output', value: '2.4 TW' },
  { icon: Cpu, label: 'Plasma Temp', value: '150 MK' },
  { icon: ShieldAlert, label: 'Uptime SLA', value: '99.97%' },
  { icon: Orbit, label: 'Active Sites', value: '14' },
  { icon: Radio, label: 'Grid Nodes', value: '3,847' },
  { icon: Activity, label: 'Q-Factor', value: '18.4' },
];

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-[#1a1a1a]">
      {/* Telemetry Bar */}
      <div className="border-b border-[#1a1a1a] overflow-x-auto">
        <div className="max-w-screen-2xl mx-auto px-6 py-4 flex items-center gap-8 min-w-max">
          {SPECS.map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-center gap-3">
              <Icon className="w-3.5 h-3.5 text-[#444444] flex-shrink-0" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#444444]">
                {label}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#888888]">
                {value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="max-w-screen-2xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-6 border border-white flex items-center justify-center">
                <Zap className="w-3 h-3 text-white" />
              </div>
              <span className="font-mono text-xs uppercase tracking-widest text-white">
                Ignition Dynamics
              </span>
            </div>
            <p className="font-mono text-[11px] text-[#444444] uppercase tracking-wider leading-relaxed mb-6">
              The Fusion Era
            </p>
            <p className="text-sm text-[#555555] leading-relaxed max-w-xs">
              Engineering the post-carbon civilization through commercial nuclear fusion at planetary scale.
            </p>
            <div className="mt-8 flex items-center gap-2">
              <Globe className="w-3 h-3 text-[#444444]" />
              <span className="font-mono text-[10px] text-[#444444] uppercase tracking-widest">
                14 Active Facilities Worldwide
              </span>
            </div>
          </div>

          {/* Link Columns */}
          {FOOTER_COLS.map((col) => (
            <div key={col.heading}>
              <h4 className="font-mono text-[10px] uppercase tracking-widest text-[#444444] mb-6">
                {col.heading}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-sm text-[#555555] hover:text-[#aaaaaa] transition-colors duration-200"
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
      <div className="border-t border-[#1a1a1a]">
        <div className="max-w-screen-2xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-mono text-[10px] text-[#333333] uppercase tracking-widest">
            © 2026 Ignition Dynamics Corp. — All Rights Reserved
          </span>
          <div className="flex items-center gap-6">
            <span className="font-mono text-[10px] text-[#333333] uppercase tracking-widest">
              ITER Protocol Compliant
            </span>
            <span className="font-mono text-[10px] text-[#333333] uppercase tracking-widest">
              IAEA Certified
            </span>
            <span className="font-mono text-[10px] text-[#333333] uppercase tracking-widest">
              ISO 19443
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
