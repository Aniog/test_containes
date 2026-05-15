import { Link } from 'react-router-dom';
import { Orbit, Zap, Globe, ArrowRight, ChevronDown, Cpu, ShieldAlert } from 'lucide-react';

const PILLARS = [
  {
    icon: Orbit,
    tag: '01 — Magnetic Confinement',
    title: 'Tokamak\nReactors',
    desc: 'Superconducting magnetic fields exceeding 13 Tesla confine 150-million-degree plasma in a toroidal chamber, sustaining D-T fusion reactions for continuous baseload power generation.',
    spec: 'Q-Factor: 18.4 / Plasma Current: 15 MA',
    path: '/reactors',
  },
  {
    icon: Zap,
    tag: '02 — Inertial Confinement',
    title: 'Laser\nIgnition',
    desc: 'Synchronized arrays of 192 high-power laser beams deliver 2.15 megajoules of UV energy onto a 2mm gold hohlraum capsule within a 20-nanosecond pulse window, achieving thermonuclear ignition.',
    spec: 'Laser Energy: 2.15 MJ / Pulse Width: 20 ns',
    path: '/reactors',
  },
  {
    icon: Globe,
    tag: '03 — Grid Infrastructure',
    title: 'Global\nEnergy Grid',
    desc: 'Tritium breeding blankets, superconducting transmission corridors, and AI-managed load balancing nodes form the backbone of a planetary-scale clean energy distribution network.',
    spec: 'Grid Capacity: 847 GW / Nodes: 3,847',
    path: '/reactors',
  },
];

const STATS = [
  { value: '2.4 TW', label: 'Peak Thermal Output' },
  { value: '150 MK', label: 'Plasma Temperature' },
  { value: '14', label: 'Active Facilities' },
  { value: '99.97%', label: 'Grid Uptime SLA' },
];

export default function Home() {
  return (
    <div className="bg-[#050505]">
      {/* ── Hero ── */}
      <section className="min-h-screen flex flex-col lg:flex-row">
        {/* Left — Typography */}
        <div className="flex-none lg:w-[55%] flex flex-col justify-center px-8 md:px-16 lg:px-20 py-24 lg:py-0 border-b lg:border-b-0 lg:border-r border-[#1a1a1a]">
          <div className="mb-8">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#444444]">
              Commercial Fusion — Est. 2026
            </span>
          </div>

          <h1 className="font-mono uppercase leading-none mb-8">
            <span className="block text-5xl md:text-7xl lg:text-8xl text-white tracking-tight">
              Ignition
            </span>
            <span className="block text-5xl md:text-7xl lg:text-8xl text-white tracking-tight">
              Dynamics
            </span>
            <span className="block text-2xl md:text-3xl lg:text-4xl text-[#333333] tracking-widest mt-4">
              The Fusion Era
            </span>
          </h1>

          <p className="text-[#888888] text-base md:text-lg leading-relaxed max-w-lg mb-12">
            We have crossed the ignition threshold. Commercial nuclear fusion is no longer a
            theoretical horizon — it is operational infrastructure, delivering clean, limitless
            energy to a civilization that demands it.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Link
              to="/reactors"
              className="inline-flex items-center gap-3 bg-white text-black font-mono text-xs uppercase tracking-widest px-8 py-4 hover:bg-[#e0e0e0] transition-colors duration-200"
            >
              Explore Reactors
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 border border-[#262626] text-[#888888] font-mono text-xs uppercase tracking-widest px-8 py-4 hover:border-[#555555] hover:text-white transition-colors duration-200"
            >
              Request Grid Access
            </Link>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px border border-[#1a1a1a]">
            {STATS.map((s) => (
              <div key={s.label} className="bg-[#0a0a0a] px-5 py-5">
                <div className="font-mono text-xl md:text-2xl text-white mb-1">{s.value}</div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-[#444444]">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Hero Image */}
        <div className="flex-1 relative min-h-[50vh] lg:min-h-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1400&q=90&fit=crop"
            alt="Tokamak plasma core"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Edge fade to black */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />

          {/* Telemetry Overlay */}
          <div className="absolute top-8 right-8 border border-[#262626] bg-[#050505]/80 backdrop-blur-sm p-4">
            <div className="font-mono text-[10px] uppercase tracking-widest text-[#444444] mb-3">
              Live Telemetry
            </div>
            {[
              ['Plasma β', '0.042'],
              ['B-Field', '13.2 T'],
              ['n·τ·T', '3.1×10²¹'],
              ['Fusion Power', '500 MW'],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between gap-8 mb-1.5">
                <span className="font-mono text-[10px] text-[#444444]">{k}</span>
                <span className="font-mono text-[10px] text-[#888888]">{v}</span>
              </div>
            ))}
            <div className="mt-3 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              <span className="font-mono text-[10px] text-[#555555] uppercase tracking-widest">
                Active
              </span>
            </div>
          </div>

          {/* Bottom label */}
          <div className="absolute bottom-8 left-8">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#444444]">
              Daedalus-VII Tokamak — Plasma Core Cross-Section
            </span>
          </div>
        </div>
      </section>

      {/* ── Scroll Indicator ── */}
      <div className="flex justify-center py-6 border-b border-[#1a1a1a]">
        <ChevronDown className="w-4 h-4 text-[#333333] animate-bounce" />
      </div>

      {/* ── Industrial Pillars ── */}
      <section className="border-b border-[#1a1a1a]">
        <div className="max-w-screen-2xl mx-auto px-6 py-6 border-b border-[#1a1a1a]">
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#444444]">
            Core Technology Pillars
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#1a1a1a]">
          {PILLARS.map(({ icon: Icon, tag, title, desc, spec, path }) => (
            <Link
              key={tag}
              to={path}
              className="group block p-10 lg:p-14 hover:bg-[#0a0a0a] transition-colors duration-300"
            >
              <div className="flex items-start justify-between mb-8">
                <Icon className="w-5 h-5 text-[#444444] group-hover:text-[#888888] transition-colors" />
                <ArrowRight className="w-4 h-4 text-[#333333] group-hover:text-[#666666] transition-colors" />
              </div>

              <div className="font-mono text-[10px] uppercase tracking-widest text-[#444444] mb-4">
                {tag}
              </div>

              <h2 className="font-mono text-3xl lg:text-4xl text-white uppercase leading-tight mb-6 whitespace-pre-line">
                {title}
              </h2>

              <p className="text-sm text-[#666666] leading-relaxed mb-8">{desc}</p>

              <div className="border-t border-[#1a1a1a] pt-6">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#444444]">
                  {spec}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Mission Statement ── */}
      <section className="max-w-screen-2xl mx-auto px-6 md:px-16 py-24 md:py-32">
        <div className="max-w-4xl">
          <div className="font-mono text-[10px] uppercase tracking-widest text-[#444444] mb-8">
            Mission Directive — 2026
          </div>
          <blockquote className="font-mono text-2xl md:text-4xl text-white leading-tight uppercase tracking-wide mb-12">
            "We do not predict the future of energy. We engineer it."
          </blockquote>
          <p className="text-[#666666] text-base leading-relaxed max-w-2xl">
            Ignition Dynamics operates at the intersection of plasma physics, advanced materials
            science, and global infrastructure engineering. Our mandate is singular: deliver
            commercially viable, grid-scale fusion power to every nation on Earth before 2035.
            The Lawson criterion has been surpassed. The era of fossil dependency ends here.
          </p>
        </div>
      </section>

      {/* ── Feature Strip ── */}
      <section className="border-t border-[#1a1a1a]">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#1a1a1a]">
          {[
            {
              icon: Cpu,
              title: 'Superconducting Magnets',
              desc: 'Niobium-tin (Nb₃Sn) coils operating at 4.2 K generate sustained 13.2 Tesla fields with zero resistive loss, enabling indefinite plasma confinement.',
            },
            {
              icon: ShieldAlert,
              title: 'Tritium Breeding Cycle',
              desc: 'Lithium-6 ceramic blanket modules surrounding the plasma chamber breed tritium fuel in situ, achieving a tritium breeding ratio (TBR) of 1.15 — full fuel self-sufficiency.',
            },
            {
              icon: Globe,
              title: 'HVDC Transmission Grid',
              desc: 'Ultra-high-voltage direct current corridors transmit fusion-generated electricity across continental distances with less than 3% transmission loss over 5,000 km.',
            },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="p-10 lg:p-14">
              <Icon className="w-5 h-5 text-[#444444] mb-6" />
              <h3 className="font-mono text-sm uppercase tracking-widest text-white mb-4">
                {title}
              </h3>
              <p className="text-sm text-[#555555] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
