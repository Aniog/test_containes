import { Link } from 'react-router-dom';
import { Zap, Radio, Cpu, ShieldAlert, Globe, Mail } from 'lucide-react';

const FOOTER_LINKS = [
  {
    heading: 'Infrastructure',
    links: [
      { label: 'Daedalus Tokamak', to: '/reactors' },
      { label: 'Helios Laser Array', to: '/reactors' },
      { label: 'Magneto-Inertial Fusion', to: '/reactors' },
      { label: 'Tritium Breeding', to: '/reactors' },
    ],
  },
  {
    heading: 'Operations',
    links: [
      { label: 'Telemetry Gallery', to: '/gallery' },
      { label: 'Grid Request', to: '/contact' },
      { label: 'Power Allocation', to: '/contact' },
      { label: 'Research Collaboration', to: '/contact' },
    ],
  },
  {
    heading: 'Compliance',
    links: [
      { label: 'IAEA Protocol', to: '/' },
      { label: 'NRC Licensing', to: '/' },
      { label: 'Tritium Safeguards', to: '/' },
      { label: 'Grid Security', to: '/' },
    ],
  },
];

const SPECS = [
  { label: 'Plasma Temp', value: '1.5 × 10⁸ K' },
  { label: 'Magnetic Field', value: '13.5 T' },
  { label: 'Net Energy Gain', value: 'Q > 10' },
  { label: 'Grid Capacity', value: '2.4 GW' },
];

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-[#262626] mt-24">
      {/* Specs Bar */}
      <div className="border-b border-[#262626]">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-12 py-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {SPECS.map(({ label, value }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="w-1 h-8 bg-white" />
                <div>
                  <div className="font-mono text-[10px] tracking-widest uppercase text-[#555555]">
                    {label}
                  </div>
                  <div className="font-mono text-sm text-white">{value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-screen-xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 border border-white flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-mono text-sm tracking-widest uppercase text-white">
                  Ignition Dynamics
                </div>
                <div className="font-mono text-[10px] tracking-widest uppercase text-[#555555]">
                  The Fusion Era
                </div>
              </div>
            </div>
            <p className="text-[#888888] text-sm font-light leading-relaxed max-w-xs mb-6">
              Engineering the next epoch of human civilization through controlled thermonuclear fusion at planetary scale. Delivering clean, limitless energy to global grids by 2035.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 border border-[#262626] px-3 py-2">
                <Radio className="w-3 h-3 text-[#888888]" />
                <span className="font-mono text-[10px] tracking-widest uppercase text-[#888888]">
                  ITER Partner
                </span>
              </div>
              <div className="flex items-center gap-2 border border-[#262626] px-3 py-2">
                <ShieldAlert className="w-3 h-3 text-[#888888]" />
                <span className="font-mono text-[10px] tracking-widest uppercase text-[#888888]">
                  IAEA Certified
                </span>
              </div>
            </div>
          </div>

          {/* Links */}
          {FOOTER_LINKS.map(({ heading, links }) => (
            <div key={heading}>
              <div className="font-mono text-[10px] tracking-widest uppercase text-[#555555] mb-4 pb-2 border-b border-[#262626]">
                {heading}
              </div>
              <ul className="space-y-3">
                {links.map(({ label, to }) => (
                  <li key={label}>
                    <Link
                      to={to}
                      className="text-[#888888] text-xs font-light hover:text-white transition-colors duration-200"
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

      {/* Bottom Bar */}
      <div className="border-t border-[#262626]">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-12 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-mono text-[10px] tracking-widest uppercase text-[#555555]">
            © 2026 Ignition Dynamics Corp. — All Rights Reserved. Classified Infrastructure.
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Globe className="w-3 h-3 text-[#555555]" />
              <span className="font-mono text-[10px] text-[#555555]">Global Grid Node: ACTIVE</span>
            </div>
            <div className="flex items-center gap-2">
              <Cpu className="w-3 h-3 text-[#555555]" />
              <span className="font-mono text-[10px] text-[#555555]">Plasma Control: NOMINAL</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
