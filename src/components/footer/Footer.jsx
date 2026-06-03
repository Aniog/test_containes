import { Link } from 'react-router-dom';
import { Zap, Radio, Cpu, ShieldAlert, Activity, Orbit } from 'lucide-react';

const FOOTER_COLS = [
  {
    title: 'Infrastructure',
    links: ['Tokamak Systems', 'Laser Arrays', 'Magneto-Inertial', 'Divertor Tech', 'Cryostat Engineering'],
  },
  {
    title: 'Research',
    links: ['Plasma Physics', 'D-T Fuel Cycles', 'Tritium Breeding', 'Neutron Shielding', 'MHD Stability'],
  },
  {
    title: 'Operations',
    links: ['Grid Deployment', 'Power Allocation', 'Safety Protocols', 'Regulatory Compliance', 'Site Licensing'],
  },
  {
    title: 'Enterprise',
    links: ['Investor Relations', 'Government Contracts', 'Research Partnerships', 'Technical Licensing', 'Press & Media'],
  },
];

const SPECS = [
  { icon: Zap, label: 'Peak Output', value: '2.4 GW' },
  { icon: Activity, label: 'Plasma Temp', value: '150M °C' },
  { icon: Cpu, label: 'Confinement', value: '8.2 T' },
  { icon: Orbit, label: 'Q-Factor', value: '≥ 10.0' },
  { icon: Radio, label: 'Uptime', value: '99.97%' },
  { icon: ShieldAlert, label: 'Safety Class', value: 'IAEA-IV' },
];

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-[#262626]">
      {/* Specs Bar */}
      <div className="border-b border-[#262626]">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-6">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-px bg-[#262626]">
            {SPECS.map(({ icon: Icon, label, value }) => (
              <div key={label} className="bg-[#050505] px-6 py-4 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Icon className="w-3 h-3 text-[#5a5a5a]" />
                  <span className="text-[10px] font-mono tracking-widest uppercase text-[#5a5a5a]">{label}</span>
                </div>
                <span className="text-sm font-mono text-white">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 border border-[#262626] flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="text-xs font-mono tracking-[0.2em] uppercase text-white">Ignition</div>
                <div className="text-[10px] font-mono tracking-[0.15em] uppercase text-[#5a5a5a]">Dynamics</div>
              </div>
            </div>
            <p className="text-xs text-[#5a5a5a] leading-relaxed font-mono">
              Pioneering commercial nuclear fusion at planetary scale. The Fusion Era begins now.
            </p>
            <div className="mt-6 pt-6 border-t border-[#262626]">
              <div className="text-[10px] font-mono tracking-widest uppercase text-[#5a5a5a] mb-2">System Status</div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 blink" />
                <span className="text-[10px] font-mono text-[#5a5a5a]">All Systems Nominal</span>
              </div>
            </div>
          </div>

          {/* Link Columns */}
          {FOOTER_COLS.map((col) => (
            <div key={col.title}>
              <div className="text-[10px] font-mono tracking-widest uppercase text-[#5a5a5a] mb-4 pb-3 border-b border-[#262626]">
                {col.title}
              </div>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-xs text-[#5a5a5a] hover:text-white transition-colors font-mono">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#262626]">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-[10px] font-mono tracking-widest uppercase text-[#5a5a5a]">
            © 2026 Ignition Dynamics Corp. — All Rights Reserved
          </span>
          <div className="flex items-center gap-6">
            <span className="text-[10px] font-mono text-[#5a5a5a]">IAEA Certified</span>
            <span className="text-[10px] font-mono text-[#5a5a5a]">ISO 19443:2018</span>
            <span className="text-[10px] font-mono text-[#5a5a5a]">NRC Class A</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
