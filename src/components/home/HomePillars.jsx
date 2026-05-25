import { Link } from 'react-router-dom';
import { Orbit, Cpu, Zap, ArrowRight } from 'lucide-react';

const pillars = [
  {
    id: 'magnetic',
    icon: Orbit,
    tag: 'Technology — 01',
    title: 'Magnetic Confinement & Tokamaks',
    description:
      'Superconducting toroidal field coils generating 12.4 Tesla magnetic fields to confine 150-million-Kelvin D-T plasma in a stable, self-sustaining burn configuration.',
    specs: [
      { label: 'Field Strength', value: '12.4 T' },
      { label: 'Plasma Volume', value: '840 m³' },
      { label: 'Confinement', value: 'H-Mode' },
    ],
    path: '/reactors#daedalus',
  },
  {
    id: 'laser',
    icon: Zap,
    tag: 'Technology — 02',
    title: 'Laser Inertial Confinement',
    description:
      'Petawatt-class laser arrays delivering 3.4 MJ of UV energy onto a 2mm gold hohlraum capsule within a 20-nanosecond pulse window, achieving thermonuclear ignition through symmetric implosion.',
    specs: [
      { label: 'Laser Energy', value: '3.4 MJ' },
      { label: 'Pulse Width', value: '20 ns' },
      { label: 'Gain Factor', value: '×32' },
    ],
    path: '/reactors#helios',
  },
  {
    id: 'grid',
    icon: Cpu,
    tag: 'Technology — 03',
    title: 'Global Grid & Tritium Breeding',
    description:
      'Lithium-6 blanket modules surrounding the plasma chamber breed tritium fuel in situ at 99.7% efficiency, enabling closed-cycle fuel self-sufficiency across our seven global deployment sites.',
    specs: [
      { label: 'Tritium Breed', value: '99.7%' },
      { label: 'Grid Output', value: '2.4 GW' },
      { label: 'Sites Active', value: '7 Global' },
    ],
    path: '/reactors#mif',
  },
];

export default function HomePillars() {
  return (
    <section className="bg-[#050505] border-t border-[#262626]">
      {/* Section header */}
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-12 border-b border-[#1f1f1f]">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="font-mono text-[10px] tracking-[0.4em] text-neutral-600 uppercase mb-3">
              Core Infrastructure
            </p>
            <h2 className="font-mono text-3xl md:text-4xl text-white uppercase font-light tracking-tight">
              Three Pillars of<br />Fusion Dominance
            </h2>
          </div>
          <p className="text-neutral-500 text-sm max-w-sm leading-relaxed">
            Each technology pathway represents a distinct vector of plasma physics mastery, converging toward a unified commercial energy paradigm.
          </p>
        </div>
      </div>

      {/* Pillar cards */}
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#262626]">
          {pillars.map(({ id, icon: Icon, tag, title, description, specs, path }) => (
            <div key={id} className="group flex flex-col py-12 px-0 md:px-10 first:pl-0 last:pr-0">
              {/* Tag + Icon */}
              <div className="flex items-center justify-between mb-8">
                <span className="font-mono text-[10px] tracking-[0.3em] text-neutral-600 uppercase">{tag}</span>
                <div className="w-8 h-8 border border-[#262626] flex items-center justify-center group-hover:border-neutral-400 transition-colors duration-300">
                  <Icon className="w-4 h-4 text-neutral-600 group-hover:text-neutral-200 transition-colors duration-300" />
                </div>
              </div>

              {/* Title */}
              <h3 className="font-mono text-lg text-white uppercase font-light leading-tight tracking-tight mb-4">
                {title}
              </h3>

              {/* Description */}
              <p className="text-neutral-500 text-sm leading-relaxed mb-8 flex-1">
                {description}
              </p>

              {/* Specs */}
              <div className="grid grid-cols-3 gap-px bg-[#1f1f1f] border border-[#262626] mb-8">
                {specs.map(({ label, value }) => (
                  <div key={label} className="bg-[#0a0a0a] px-3 py-3">
                    <p className="font-mono text-[9px] text-neutral-700 tracking-widest uppercase mb-1">{label}</p>
                    <p className="font-mono text-xs text-white">{value}</p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Link
                to={path}
                className="flex items-center gap-2 font-mono text-xs tracking-[0.2em] uppercase text-neutral-500 hover:text-white transition-colors duration-200 group/link"
              >
                View System
                <ArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
