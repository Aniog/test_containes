import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Orbit, Zap, Radio, ArrowRight, Activity, Cpu, ShieldAlert } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const PILLARS = [
  {
    id: 'pillar-tokamak',
    icon: Orbit,
    code: 'MCF-01',
    title: 'Magnetic Confinement & Tokamaks',
    desc: 'Superconducting toroidal field coils generating 8.2 Tesla magnetic fields to confine 150-million-degree D-T plasma in a stable, self-sustaining burn.',
    spec: 'B-field: 8.2 T / Plasma Vol: 840 m³',
    href: '/reactors',
    imgId: 'pillar-tokamak-img-a1b2c3',
    titleId: 'pillar-tokamak-title',
    descId: 'pillar-tokamak-desc',
  },
  {
    id: 'pillar-laser',
    icon: Zap,
    code: 'ICF-02',
    title: 'Laser Inertial Confinement',
    desc: 'Petawatt-class laser arrays delivering 2.1 MJ of UV energy onto a gold hohlraum capsule within a 20-nanosecond implosion window, achieving ignition symmetry.',
    spec: 'Energy: 2.1 MJ / Pulse: 20 ns',
    href: '/reactors',
    imgId: 'pillar-laser-img-d4e5f6',
    titleId: 'pillar-laser-title',
    descId: 'pillar-laser-desc',
  },
  {
    id: 'pillar-grid',
    icon: Radio,
    code: 'GRD-03',
    title: 'Global Grid & Tritium Breeding',
    desc: 'Lithium-6 blanket modules surrounding the plasma chamber breed tritium fuel in situ, enabling closed-cycle fusion and direct coupling to national power grids at gigawatt scale.',
    spec: 'Output: 2.4 GW / Tritium: 1.1 kg/yr',
    href: '/reactors',
    imgId: 'pillar-grid-img-g7h8i9',
    titleId: 'pillar-grid-title',
    descId: 'pillar-grid-desc',
  },
];

const METRICS = [
  { icon: Zap, label: 'Net Energy Gain', value: 'Q ≥ 10', sub: 'Fusion Power Ratio' },
  { icon: Activity, label: 'Plasma Temperature', value: '150M °C', sub: 'Core Ion Temp' },
  { icon: Cpu, label: 'Magnetic Field', value: '8.2 Tesla', sub: 'Toroidal B-Field' },
  { icon: ShieldAlert, label: 'Safety Class', value: 'IAEA-IV', sub: 'Passive Safe' },
];

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="bg-[#050505]">
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex">
        {/* Left: Typography Panel — 55% */}
        <div className="relative z-10 w-full lg:w-[55%] flex flex-col justify-center px-8 md:px-16 lg:px-20 py-24 border-r border-[#262626]">
          {/* System label */}
          <div className="flex items-center gap-3 mb-12">
            <span className="w-1.5 h-1.5 rounded-full bg-white blink" />
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#5a5a5a]">
              System Online — Fusion Era v4.0
            </span>
          </div>

          {/* Main Title */}
          <div className="mb-8">
            <div className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#5a5a5a] mb-4">
              IGN-DYN / CORP / 2026
            </div>
            <h1 className="font-grotesk font-700 text-white leading-[0.92] mb-0">
              <span className="block text-5xl md:text-7xl lg:text-8xl tracking-tight">IGNITION</span>
              <span className="block text-5xl md:text-7xl lg:text-8xl tracking-tight text-[#A0A0A0]">DYNAMICS</span>
              <span className="block text-2xl md:text-3xl lg:text-4xl tracking-widest font-mono font-normal mt-4 text-[#5a5a5a]">
                THE FUSION ERA
              </span>
            </h1>
          </div>

          {/* Divider */}
          <div className="w-16 h-px bg-white mb-8" />

          {/* Tagline */}
          <p className="text-sm text-[#A0A0A0] leading-relaxed max-w-md mb-12 font-light">
            Commercial nuclear fusion at planetary scale. We engineer the stars — confining 150-million-degree plasma in magnetic fields stronger than any force on Earth, delivering clean, limitless energy to civilization.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Link
              to="/reactors"
              className="inline-flex items-center gap-3 bg-white text-black px-8 py-3.5 text-[11px] font-mono tracking-widest uppercase hover:bg-[#F0F0F0] transition-colors"
            >
              Explore Reactors
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 border border-[#262626] text-white px-8 py-3.5 text-[11px] font-mono tracking-widest uppercase hover:border-[#5a5a5a] transition-colors"
            >
              Request Grid Access
            </Link>
          </div>

          {/* Metrics Row */}
          <div className="grid grid-cols-2 gap-px bg-[#262626] border border-[#262626]">
            {METRICS.map(({ icon: Icon, label, value, sub }) => (
              <div key={label} className="bg-[#050505] p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Icon className="w-3 h-3 text-[#5a5a5a]" />
                  <span className="text-[9px] font-mono tracking-widest uppercase text-[#5a5a5a]">{label}</span>
                </div>
                <div className="text-lg font-mono text-white">{value}</div>
                <div className="text-[10px] font-mono text-[#5a5a5a] mt-0.5">{sub}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Hero Image — 45% */}
        <div className="hidden lg:block absolute right-0 top-0 w-[45%] h-full">
          <div className="relative w-full h-full scan-overlay img-zoom">
            <img
              data-strk-img-id="hero-plasma-img-x9y8z7"
              data-strk-img="[hero-desc] [hero-title]"
              data-strk-img-ratio="9x16"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Tokamak plasma core"
              className="w-full h-full object-cover"
            />
            {/* Gradient fade to left */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-transparent" />
            {/* Gradient fade to bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />

            {/* Telemetry Overlay */}
            <div className="absolute top-8 right-8 border border-[#262626] bg-[#050505]/80 backdrop-blur-sm p-4">
              <div className="text-[9px] font-mono tracking-widest uppercase text-[#5a5a5a] mb-3">Live Telemetry</div>
              <div className="space-y-2">
                {[
                  ['Plasma β', '0.042'],
                  ['n·τ·T', '3.2×10²¹'],
                  ['Ip (MA)', '15.0'],
                  ['Te (keV)', '12.9'],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-8">
                    <span className="text-[10px] font-mono text-[#5a5a5a]">{k}</span>
                    <span className="text-[10px] font-mono text-white">{v}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom label */}
            <div className="absolute bottom-8 left-8 right-8">
              <div className="text-[9px] font-mono tracking-widest uppercase text-[#5a5a5a]">
                Daedalus Tokamak — Plasma Core Cross-Section
              </div>
            </div>
          </div>
        </div>

        {/* Hidden text refs for image query */}
        <span id="hero-title" className="sr-only">Tokamak nuclear fusion plasma core reactor interior glowing purple blue</span>
        <span id="hero-desc" className="sr-only">nuclear fusion reactor plasma confinement magnetic field glowing energy</span>
      </section>

      {/* ── INDUSTRIAL PILLARS ── */}
      <section className="border-t border-[#262626]">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-6">
          <div className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#5a5a5a]">
            Core Technology Pillars — IGN/TECH/2026
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#262626] border-t border-b border-[#262626]">
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <Link
                key={pillar.id}
                to={pillar.href}
                className="group bg-[#050505] hover:bg-[#0a0a0a] transition-colors duration-300 flex flex-col"
              >
                {/* Image */}
                <div className="relative aspect-[16/9] overflow-hidden img-zoom border-b border-[#262626]">
                  <img
                    data-strk-img-id={pillar.imgId}
                    data-strk-img={`[${pillar.descId}] [${pillar.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={pillar.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="text-[9px] font-mono tracking-widest uppercase text-[#5a5a5a] bg-[#050505]/80 px-2 py-1">
                      {pillar.code}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-7 h-7 border border-[#262626] flex items-center justify-center group-hover:border-[#5a5a5a] transition-colors">
                      <Icon className="w-3.5 h-3.5 text-[#5a5a5a]" />
                    </div>
                    <span className="text-[9px] font-mono tracking-widest uppercase text-[#5a5a5a]">{pillar.code}</span>
                  </div>

                  <h3 id={pillar.titleId} className="text-base font-grotesk font-semibold text-white mb-3 leading-snug">
                    {pillar.title}
                  </h3>
                  <p id={pillar.descId} className="text-xs text-[#5a5a5a] leading-relaxed mb-6 flex-1">
                    {pillar.desc}
                  </p>

                  <div className="border-t border-[#262626] pt-4 flex items-center justify-between">
                    <span className="text-[9px] font-mono text-[#5a5a5a]">{pillar.spec}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#5a5a5a] group-hover:text-white transition-colors" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ── MISSION STATEMENT ── */}
      <section className="border-b border-[#262626]">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <div className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#5a5a5a] mb-6">
                Mission Statement — 2026
              </div>
              <h2 className="text-4xl md:text-5xl font-grotesk font-semibold text-white leading-tight mb-8">
                We Are Building<br />
                <span className="text-[#5a5a5a]">The Last Energy</span><br />
                Infrastructure<br />
                <span className="text-[#5a5a5a]">Humanity Will Ever Need.</span>
              </h2>
              <div className="w-12 h-px bg-[#262626] mb-8" />
              <p className="text-sm text-[#A0A0A0] leading-relaxed mb-6">
                Nuclear fusion is not a future technology. It is an engineering challenge we have solved. The Daedalus Tokamak achieves a Q-factor exceeding 10, producing ten joules of fusion energy for every joule of input — a threshold that transforms fusion from laboratory curiosity to industrial reality.
              </p>
              <p className="text-sm text-[#5a5a5a] leading-relaxed">
                Our global deployment roadmap targets 47 commercial fusion power plants across 23 nations by 2035, delivering 112 GW of baseload clean energy — equivalent to eliminating 1.4 billion tonnes of CO₂ annually.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-px bg-[#262626] border border-[#262626]">
              {[
                { label: 'Fusion Plants', value: '47', sub: 'Planned by 2035' },
                { label: 'Nations', value: '23', sub: 'Deployment Targets' },
                { label: 'Clean Energy', value: '112 GW', sub: 'Baseload Capacity' },
                { label: 'CO₂ Reduction', value: '1.4 Gt', sub: 'Annual Equivalent' },
                { label: 'Q-Factor', value: '≥ 10.0', sub: 'Net Energy Gain' },
                { label: 'Fuel Reserve', value: '∞', sub: 'Deuterium from Seawater' },
              ].map(({ label, value, sub }) => (
                <div key={label} className="bg-[#050505] p-6">
                  <div className="text-[9px] font-mono tracking-widest uppercase text-[#5a5a5a] mb-2">{label}</div>
                  <div className="text-2xl font-mono text-white mb-1">{value}</div>
                  <div className="text-[10px] font-mono text-[#5a5a5a]">{sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section className="border-b border-[#262626]">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <div className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#5a5a5a] mb-2">
              Grid Access Protocol
            </div>
            <h3 className="text-2xl font-grotesk font-semibold text-white">
              Request Power Allocation for Your Nation
            </h3>
          </div>
          <div className="flex gap-4 shrink-0">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-white text-black px-8 py-3.5 text-[11px] font-mono tracking-widest uppercase hover:bg-[#F0F0F0] transition-colors"
            >
              Submit Request
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-3 border border-[#262626] text-white px-8 py-3.5 text-[11px] font-mono tracking-widest uppercase hover:border-[#5a5a5a] transition-colors"
            >
              View Telemetry
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
