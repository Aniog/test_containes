import { Link } from 'react-router-dom';
import { Orbit, Zap, Globe, ArrowRight } from 'lucide-react';

const PILLARS = [
  {
    id: 'magnetic',
    icon: Orbit,
    number: '01',
    title: 'Magnetic Confinement & Tokamaks',
    subtitle: 'Daedalus-Class Reactors',
    description:
      'Superconducting toroidal field coils generating 8.2 Tesla magnetic fields to confine 150-million-degree Deuterium-Tritium plasma. The Daedalus series achieves sustained Q ≥ 10 ignition with 2.4 GW net electrical output.',
    specs: [
      { label: 'Field Strength', value: '8.2 T' },
      { label: 'Plasma Volume', value: '840 m³' },
      { label: 'Burn Duration', value: '∞ Steady' },
    ],
    path: '/reactors#daedalus',
    anchor: 'daedalus',
  },
  {
    id: 'laser',
    icon: Zap,
    number: '02',
    title: 'Laser Inertial Confinement',
    subtitle: 'Helios Array Systems',
    description:
      'Converging 192 high-power laser beams onto a gold hohlraum capsule with nanosecond precision. Symmetrical implosion compresses D-T fuel to 1,000× liquid density, triggering thermonuclear ignition at 100 MJ energy delivery.',
    specs: [
      { label: 'Laser Energy', value: '2.15 MJ' },
      { label: 'Pulse Width', value: '3.5 ns' },
      { label: 'Gain Factor', value: '× 48' },
    ],
    path: '/reactors#helios',
    anchor: 'helios',
  },
  {
    id: 'grid',
    icon: Globe,
    number: '03',
    title: 'Global Grid & Tritium Breeding',
    subtitle: 'Planetary Energy Infrastructure',
    description:
      'Lithium-6 blanket modules surrounding each reactor breed tritium fuel in-situ, achieving fuel self-sufficiency. Modular 500 MW grid nodes deploy across 14 nations, feeding into a unified high-voltage direct-current supergrid.',
    specs: [
      { label: 'Tritium Breed', value: '1.12 TBR' },
      { label: 'Grid Nodes', value: '47 Active' },
      { label: 'Coverage', value: '14 Nations' },
    ],
    path: '/reactors#mif',
    anchor: 'mif',
  },
];

export default function HomePillars() {
  return (
    <section className="bg-[#050505] border-t border-[#262626]">
      {/* Section header */}
      <div className="px-6 md:px-12 py-12 border-b border-[#262626]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="font-mono text-[10px] text-[#555555] tracking-widest uppercase mb-3">
              — Industrial Pillars
            </div>
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-white">
              Three Vectors of<br />Fusion Dominance
            </h2>
          </div>
          <Link
            to="/reactors"
            className="flex items-center gap-2 font-mono text-xs text-[#555555] tracking-widest uppercase hover:text-white transition-colors duration-200 group"
          >
            View All Reactors
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </div>

      {/* Pillars grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#262626]">
        {PILLARS.map(({ id, icon: Icon, number, title, subtitle, description, specs, path }) => (
          <Link
            key={id}
            to={path}
            className="group block px-8 md:px-10 py-12 hover:bg-[#0a0a0a] transition-colors duration-300"
          >
            {/* Number + icon */}
            <div className="flex items-start justify-between mb-8">
              <span className="font-mono text-5xl font-bold text-[#1a1a1a] group-hover:text-[#262626] transition-colors duration-300 leading-none">
                {number}
              </span>
              <div className="w-10 h-10 border border-[#262626] flex items-center justify-center group-hover:border-[#404040] transition-colors duration-300">
                <Icon className="w-4 h-4 text-[#555555] group-hover:text-white transition-colors duration-300" />
              </div>
            </div>

            {/* Title */}
            <div className="mb-2">
              <div className="font-mono text-[9px] text-[#555555] tracking-widest uppercase mb-2">{subtitle}</div>
              <h3 className="text-xl font-bold text-white leading-tight tracking-tight">{title}</h3>
            </div>

            {/* Divider */}
            <div className="w-8 h-px bg-[#262626] my-5 group-hover:w-16 group-hover:bg-white transition-all duration-300" />

            {/* Description */}
            <p className="text-[#555555] text-sm leading-relaxed mb-8 group-hover:text-[#A0A0A0] transition-colors duration-300">
              {description}
            </p>

            {/* Specs */}
            <div className="grid grid-cols-3 gap-0 border border-[#1f1f1f] group-hover:border-[#262626] transition-colors duration-300">
              {specs.map(({ label, value }, i) => (
                <div
                  key={label}
                  className={`px-3 py-3 ${i < 2 ? 'border-r border-[#1f1f1f] group-hover:border-[#262626]' : ''} transition-colors duration-300`}
                >
                  <div className="font-mono text-[8px] text-[#555555] tracking-widest uppercase mb-1">{label}</div>
                  <div className="font-mono text-xs text-white font-bold">{value}</div>
                </div>
              ))}
            </div>

            {/* Arrow */}
            <div className="mt-6 flex items-center gap-2 font-mono text-[10px] text-[#555555] tracking-widest uppercase group-hover:text-white transition-colors duration-200">
              Explore
              <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-200" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
