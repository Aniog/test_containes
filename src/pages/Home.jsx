import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Orbit, Zap, Globe, ArrowRight, Activity, Cpu, ShieldAlert } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const pillars = [
  {
    id: 'pillar-magnetic',
    icon: Orbit,
    index: '01',
    title: 'Magnetic Confinement & Tokamaks',
    desc: 'Superconducting toroidal fields exceeding 13 Tesla, confining 150-million-Kelvin D-T plasma in sustained ignition regimes.',
    path: '/reactors',
    titleId: 'pillar-magnetic-title',
    descId: 'pillar-magnetic-desc',
    imgId: 'pillar-magnetic-img-a1b2c3',
  },
  {
    id: 'pillar-laser',
    icon: Zap,
    index: '02',
    title: 'Laser Inertial Confinement',
    desc: 'Multi-petawatt laser arrays delivering 3.15 MJ of symmetric energy onto gold hohlraum capsules within 20-nanosecond implosion windows.',
    path: '/reactors',
    titleId: 'pillar-laser-title',
    descId: 'pillar-laser-desc',
    imgId: 'pillar-laser-img-d4e5f6',
  },
  {
    id: 'pillar-grid',
    icon: Globe,
    index: '03',
    title: 'Global Grid & Tritium Breeding',
    desc: 'Lithium-6 blanket modules breeding 1.05 tritium atoms per fusion event, sustaining closed-fuel-cycle grid deployments at gigawatt scale.',
    path: '/reactors',
    titleId: 'pillar-grid-title',
    descId: 'pillar-grid-desc',
    imgId: 'pillar-grid-img-g7h8i9',
  },
];

const telemetryData = [
  { label: 'Plasma Temp', value: '1.5 × 10⁸ K', unit: 'Kelvin' },
  { label: 'Fusion Power', value: '2,400 MW', unit: 'Megawatts' },
  { label: 'Q-Factor', value: 'Q = 11.4', unit: 'Gain Ratio' },
  { label: 'Confinement', value: 'τ = 8.2 s', unit: 'Energy Time' },
];

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="bg-[#050505] min-h-screen">

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col lg:flex-row pt-16">

        {/* Left Panel — 60% */}
        <div className="relative z-10 flex flex-col justify-center px-6 lg:px-16 xl:px-24 py-20 lg:py-0 w-full lg:w-[60%] border-r border-[#262626]">

          {/* Classification Tag */}
          <div className="flex items-center gap-3 mb-12">
            <div className="w-1.5 h-1.5 rounded-full bg-[#00FF88] telemetry-live" />
            <span className="font-mono text-[10px] text-[#00FF88] tracking-widest uppercase">
              Commercial Fusion — Generation IV
            </span>
            <span className="font-mono text-[10px] text-[#262626] tracking-widest">
              ///
            </span>
            <span className="font-mono text-[10px] text-[#606060] tracking-widest uppercase">
              Est. 2019 — Geneva
            </span>
          </div>

          {/* Main Title */}
          <div className="mb-8">
            <h1 className="font-grotesk font-bold text-white leading-none tracking-tighter mb-2"
              style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}>
              IGNITION
            </h1>
            <h1 className="font-grotesk font-bold leading-none tracking-tighter mb-2"
              style={{ fontSize: 'clamp(3rem, 8vw, 7rem)', color: '#262626', WebkitTextStroke: '1px #606060' }}>
              DYNAMICS
            </h1>
            <div className="flex items-center gap-4 mt-6">
              <div className="h-px flex-1 bg-[#262626]" />
              <span className="font-mono text-xs text-[#606060] tracking-widest uppercase whitespace-nowrap">
                The Fusion Era
              </span>
              <div className="h-px w-12 bg-[#262626]" />
            </div>
          </div>

          {/* Subtitle */}
          <p className="text-[#A0A0A0] text-lg leading-relaxed max-w-xl mb-12">
            Engineering the post-carbon civilization through commercial nuclear fusion at planetary scale. From Tokamak confinement to global tritium breeding — we are the infrastructure of tomorrow's energy epoch.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-16">
            <Link
              to="/reactors"
              className="flex items-center gap-3 bg-white text-black px-8 py-3.5 font-mono text-xs tracking-widest uppercase hover:bg-[#A0A0A0] transition-colors"
            >
              <span>Explore Reactors</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              to="/contact"
              className="flex items-center gap-3 border border-[#262626] text-white px-8 py-3.5 font-mono text-xs tracking-widest uppercase hover:border-white transition-colors"
            >
              <span>Request Grid Access</span>
            </Link>
          </div>

          {/* Telemetry Row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 border border-[#262626]">
            {telemetryData.map((item, i) => (
              <div
                key={item.label}
                className={`p-4 ${i < telemetryData.length - 1 ? 'border-r border-[#262626]' : ''}`}
              >
                <div className="font-mono text-[9px] text-[#606060] tracking-widest uppercase mb-1">
                  {item.label}
                </div>
                <div className="font-mono text-sm text-white tracking-wide">
                  {item.value}
                </div>
                <div className="font-mono text-[9px] text-[#3a3a3a] tracking-wider mt-0.5">
                  {item.unit}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Panel — 40% — Vibrant Image */}
        <div className="relative w-full lg:w-[40%] h-64 lg:h-auto min-h-[400px] overflow-hidden">
          <div className="absolute inset-0 scan-overlay z-10" />
          <img
            id="hero-plasma-title"
            data-strk-img-id="hero-plasma-main-x9y8z7"
            data-strk-img="[hero-plasma-title] nuclear fusion plasma tokamak glowing reactor core"
            data-strk-img-ratio="9x16"
            data-strk-img-width="900"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="Tokamak plasma core"
            className="w-full h-full object-cover"
          />
          {/* Gradient fade to black on left edge */}
          <div className="absolute inset-y-0 left-0 w-24 z-20"
            style={{ background: 'linear-gradient(to right, #050505, transparent)' }} />
          {/* Gradient fade to black on bottom */}
          <div className="absolute inset-x-0 bottom-0 h-32 z-20 lg:hidden"
            style={{ background: 'linear-gradient(to top, #050505, transparent)' }} />

          {/* Overlay Label */}
          <div className="absolute bottom-8 right-6 z-30 text-right">
            <div className="font-mono text-[9px] text-[#606060] tracking-widest uppercase">
              Daedalus Tokamak — Unit 01
            </div>
            <div className="font-mono text-[9px] text-[#3a3a3a] tracking-wider">
              Plasma Core — Active Ignition
            </div>
          </div>
        </div>
      </section>

      {/* ── INDUSTRIAL PILLARS ── */}
      <section className="border-t border-[#262626]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          {/* Section Header */}
          <div className="py-16 border-b border-[#262626] flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <div className="font-mono text-[10px] text-[#606060] tracking-widest uppercase mb-4">
                Core Infrastructure Domains
              </div>
              <h2 className="font-grotesk font-bold text-white text-4xl lg:text-5xl tracking-tight leading-tight">
                Three Pillars of<br />Fusion Supremacy
              </h2>
            </div>
            <p className="text-[#606060] text-sm leading-relaxed max-w-sm">
              Each domain represents a distinct pathway to net-positive fusion energy, engineered for industrial-scale deployment across sovereign grid networks.
            </p>
          </div>

          {/* Pillar Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-[#262626]">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <Link
                  key={pillar.id}
                  to={pillar.path}
                  className="group block p-10 lg:p-12 hover:bg-[#121212] transition-colors duration-300"
                >
                  {/* Index + Icon */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-[10px] text-[#3a3a3a] tracking-widest">
                      {pillar.index}
                    </span>
                    <div className="w-10 h-10 border border-[#262626] flex items-center justify-center group-hover:border-[#3a3a3a] transition-colors">
                      <Icon className="w-4 h-4 text-[#606060] group-hover:text-white transition-colors" />
                    </div>
                  </div>

                  {/* Image */}
                  <div className="w-full h-40 overflow-hidden mb-8 border border-[#262626]">
                    <img
                      data-strk-img-id={pillar.imgId}
                      data-strk-img={`[${pillar.descId}] [${pillar.titleId}]`}
                      data-strk-img-ratio="3x2"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={pillar.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  {/* Content */}
                  <h3 id={pillar.titleId} className="font-grotesk font-semibold text-white text-xl tracking-tight mb-4 leading-snug">
                    {pillar.title}
                  </h3>
                  <p id={pillar.descId} className="text-[#606060] text-sm leading-relaxed mb-8">
                    {pillar.desc}
                  </p>

                  {/* CTA */}
                  <div className="flex items-center gap-2 font-mono text-[10px] text-[#606060] tracking-widest uppercase group-hover:text-white transition-colors">
                    <span>Explore System</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── MISSION STATEMENT ── */}
      <section className="border-t border-[#262626] py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="font-mono text-[10px] text-[#606060] tracking-widest uppercase mb-6">
                Mission Directive — 2026
              </div>
              <h2 className="font-grotesk font-bold text-white text-4xl lg:text-5xl tracking-tight leading-tight mb-8">
                The Sun's Power,<br />
                <span style={{ color: '#262626', WebkitTextStroke: '1px #606060' }}>
                  On Earth's Grid.
                </span>
              </h2>
              <p className="text-[#A0A0A0] text-base leading-relaxed mb-6">
                Nuclear fusion replicates the stellar nucleosynthesis process that powers our sun — fusing deuterium and tritium nuclei at temperatures exceeding 150 million Kelvin to release 17.6 MeV per reaction. Unlike fission, fusion produces no long-lived radioactive waste, consumes fuel derived from seawater, and cannot sustain a runaway chain reaction.
              </p>
              <p className="text-[#606060] text-sm leading-relaxed mb-10">
                Ignition Dynamics operates the world's first commercially licensed fusion power stations, delivering baseload electricity to sovereign grid operators across 14 nations. Our Daedalus-class Tokamaks achieve sustained Q &gt; 10 operation — the definitive threshold of commercial viability.
              </p>
              <div className="flex flex-wrap gap-6">
                {[
                  { icon: Activity, label: '14 Nations', sub: 'Grid Deployments' },
                  { icon: Cpu, label: '6 Reactors', sub: 'Online Globally' },
                  { icon: ShieldAlert, label: 'Zero Incidents', sub: 'Safety Record' },
                ].map(({ icon: Icon, label, sub }) => (
                  <div key={label} className="flex items-center gap-3">
                    <div className="w-8 h-8 border border-[#262626] flex items-center justify-center">
                      <Icon className="w-3.5 h-3.5 text-[#606060]" />
                    </div>
                    <div>
                      <div className="font-grotesk font-semibold text-white text-sm">{label}</div>
                      <div className="font-mono text-[9px] text-[#606060] tracking-wider uppercase">{sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Formula Block */}
            <div className="border border-[#262626] bg-[#121212] p-10">
              <div className="font-mono text-[10px] text-[#606060] tracking-widest uppercase mb-8">
                Core Fusion Reaction — D-T Cycle
              </div>
              <div className="space-y-6">
                <div className="border-b border-[#262626] pb-6">
                  <div className="font-mono text-2xl text-white tracking-wide mb-2">
                    ²H + ³H → ⁴He + n
                  </div>
                  <div className="font-mono text-xs text-[#606060] tracking-wider">
                    Deuterium + Tritium → Helium-4 + Neutron
                  </div>
                </div>
                <div className="border-b border-[#262626] pb-6">
                  <div className="font-mono text-xl text-white tracking-wide mb-2">
                    ΔE = 17.6 MeV / reaction
                  </div>
                  <div className="font-mono text-xs text-[#606060] tracking-wider">
                    Energy Release per Fusion Event
                  </div>
                </div>
                <div className="border-b border-[#262626] pb-6">
                  <div className="font-mono text-xl text-white tracking-wide mb-2">
                    Q = P_fusion / P_input &gt; 10
                  </div>
                  <div className="font-mono text-xs text-[#606060] tracking-wider">
                    Commercial Ignition Threshold
                  </div>
                </div>
                <div>
                  <div className="font-mono text-xl text-white tracking-wide mb-2">
                    nτT ≥ 3 × 10²¹ keV·s/m³
                  </div>
                  <div className="font-mono text-xs text-[#606060] tracking-wider">
                    Lawson Criterion — Sustained Ignition
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
