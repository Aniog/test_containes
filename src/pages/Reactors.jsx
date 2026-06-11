import { useEffect, useRef } from 'react';
import { Orbit, Zap, Cpu, Activity, ShieldAlert, ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

/* ── Telemetry Badge ── */
function TelemetryBadge({ label, value, highlight = false }) {
  return (
    <div className="border border-[#262626] p-3 bg-[#050505]">
      <div className="font-mono text-[9px] text-[#606060] tracking-widest uppercase mb-1">{label}</div>
      <div className={`font-mono text-sm tracking-wide ${highlight ? 'text-[#00FF88]' : 'text-white'}`}>
        {value}
      </div>
    </div>
  );
}

/* ── Spec Row ── */
function SpecRow({ label, value }) {
  return (
    <div className="flex items-start justify-between py-3 border-b border-[#262626] last:border-0">
      <span className="font-mono text-[10px] text-[#606060] tracking-widest uppercase">{label}</span>
      <span className="font-mono text-xs text-white tracking-wide text-right max-w-[55%]">{value}</span>
    </div>
  );
}

/* ── Section Header ── */
function SectionHeader({ index, label, title, subtitle }) {
  return (
    <div className="border-b border-[#262626] pb-12 mb-16">
      <div className="flex items-center gap-4 mb-6">
        <span className="font-mono text-[10px] text-[#3a3a3a] tracking-widest">{index}</span>
        <div className="h-px flex-1 bg-[#262626]" />
        <span className="font-mono text-[10px] text-[#606060] tracking-widest uppercase">{label}</span>
      </div>
      <h2 className="font-grotesk font-bold text-white text-4xl lg:text-5xl tracking-tight leading-tight mb-4">
        {title}
      </h2>
      <p className="text-[#606060] text-sm leading-relaxed max-w-2xl">{subtitle}</p>
    </div>
  );
}

export default function Reactors() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="bg-[#050505] min-h-screen pt-16">

      {/* ── PAGE HEADER ── */}
      <div className="border-b border-[#262626] bg-[#121212]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-[#00FF88] telemetry-live" />
            <span className="font-mono text-[10px] text-[#00FF88] tracking-widest uppercase">
              Reactor Hub — Infrastructure Registry
            </span>
          </div>
          <h1 className="font-grotesk font-bold text-white leading-none tracking-tighter mb-6"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
            Fusion Reactor<br />Infrastructure
          </h1>
          <p className="text-[#A0A0A0] text-base leading-relaxed max-w-2xl">
            Three distinct confinement architectures, each representing a sovereign pathway to net-positive fusion energy. From superconducting Tokamaks to petawatt laser arrays — the complete engineering portfolio of Ignition Dynamics.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* ══════════════════════════════════════════════
            SECTION A — DAEDALUS TOKAMAK
        ══════════════════════════════════════════════ */}
        <section className="py-20 lg:py-28 border-b border-[#262626]">
          <SectionHeader
            index="A.01"
            label="Magnetic Confinement Fusion"
            title={<>The Daedalus<br />Tokamak</>}
            subtitle="The world's most advanced superconducting Tokamak, achieving sustained Q = 11.4 operation through precision magnetic confinement of 150-million-Kelvin deuterium-tritium plasma."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-[#262626]">

            {/* Image Panel */}
            <div className="relative overflow-hidden border-b lg:border-b-0 lg:border-r border-[#262626]" style={{ minHeight: '480px' }}>
              <div className="absolute inset-0 scan-overlay z-10" />
              <img
                id="daedalus-tokamak-title"
                data-strk-img-id="daedalus-tokamak-main-j1k2l3"
                data-strk-img="[daedalus-tokamak-title] tokamak reactor cross section magnetic field plasma confinement neon blue"
                data-strk-img-ratio="4x3"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Daedalus Tokamak cross-section"
                className="w-full h-full object-cover absolute inset-0"
              />
              {/* Telemetry Overlay */}
              <div className="absolute top-4 left-4 z-20 space-y-2">
                <div className="flex items-center gap-2 bg-[#050505]/80 border border-[#262626] px-3 py-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00FF88] telemetry-live" />
                  <span className="font-mono text-[9px] text-[#00FF88] tracking-widest uppercase">Active Ignition</span>
                </div>
                <div className="bg-[#050505]/80 border border-[#262626] px-3 py-1.5">
                  <span className="font-mono text-[9px] text-[#606060] tracking-widest">UNIT: DAE-01 // GENEVA</span>
                </div>
              </div>
              <div className="absolute bottom-4 right-4 z-20">
                <div className="bg-[#050505]/80 border border-[#262626] px-3 py-2">
                  <div className="font-mono text-[9px] text-[#606060] tracking-widest uppercase">Plasma Current</div>
                  <div className="font-mono text-sm text-white tracking-wide">I_p = 17.4 MA</div>
                </div>
              </div>
            </div>

            {/* Data Panel */}
            <div className="p-8 lg:p-12 bg-[#121212]">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 border border-[#262626] flex items-center justify-center">
                  <Orbit className="w-4 h-4 text-[#606060]" />
                </div>
                <span className="font-mono text-[10px] text-[#606060] tracking-widest uppercase">
                  Magnetic Confinement — Tokamak Architecture
                </span>
              </div>

              <p className="text-[#A0A0A0] text-sm leading-relaxed mb-8">
                The Daedalus Tokamak employs a D-shaped plasma cross-section within a toroidal vacuum vessel, surrounded by 18 Nb₃Sn superconducting toroidal field coils operating at 4.5 K. The plasma is heated via neutral beam injection (NBI) at 1 MeV and electron cyclotron resonance heating (ECRH) at 170 GHz, achieving ignition temperatures without external sustenance.
              </p>

              {/* Telemetry Grid */}
              <div className="grid grid-cols-2 gap-2 mb-8">
                <TelemetryBadge label="Magnetic Field" value="B_T = 13.2 T" />
                <TelemetryBadge label="Plasma Temp" value="1.5 × 10⁸ K" highlight />
                <TelemetryBadge label="Plasma Volume" value="840 m³" />
                <TelemetryBadge label="Fusion Power" value="2,400 MW" highlight />
                <TelemetryBadge label="Cryostat Temp" value="4.5 K" />
                <TelemetryBadge label="Q-Factor" value="Q = 11.4" highlight />
              </div>

              {/* Specs */}
              <div className="border border-[#262626] p-6">
                <div className="font-mono text-[10px] text-[#606060] tracking-widest uppercase mb-4">
                  Engineering Specifications
                </div>
                <SpecRow label="Major Radius" value="R = 8.5 m" />
                <SpecRow label="Minor Radius" value="a = 2.8 m" />
                <SpecRow label="D-T Fuel Ratio" value="50:50 Deuterium-Tritium" />
                <SpecRow label="NBI Power" value="50 MW @ 1 MeV" />
                <SpecRow label="ECRH Power" value="20 MW @ 170 GHz" />
                <SpecRow label="Cryostat System" value="Nb₃Sn @ 4.5 K — 18 TF Coils" />
                <SpecRow label="Divertor Material" value="Tungsten Monoblocks — W-grade" />
                <SpecRow label="Energy Confinement" value="τ_E = 8.2 s" />
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            SECTION B — HELIOS LASER ARRAY
        ══════════════════════════════════════════════ */}
        <section className="py-20 lg:py-28 border-b border-[#262626]">
          <SectionHeader
            index="B.02"
            label="Inertial Confinement Fusion"
            title={<>Helios Laser<br />Array</>}
            subtitle="192 high-power laser beamlines delivering 3.15 MJ of ultraviolet energy onto a 2mm gold hohlraum capsule, achieving thermonuclear ignition through symmetric implosion within a 20-nanosecond window."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-[#262626]">

            {/* Data Panel — Left */}
            <div className="p-8 lg:p-12 bg-[#121212] border-b lg:border-b-0 lg:border-r border-[#262626] order-2 lg:order-1">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 border border-[#262626] flex items-center justify-center">
                  <Zap className="w-4 h-4 text-[#606060]" />
                </div>
                <span className="font-mono text-[10px] text-[#606060] tracking-widest uppercase">
                  Inertial Confinement — Laser Architecture
                </span>
              </div>

              <p className="text-[#A0A0A0] text-sm leading-relaxed mb-8">
                The Helios facility employs indirect-drive inertial confinement fusion (ICF). Laser energy is converted to X-rays inside a gold hohlraum, which then ablate the outer surface of a cryogenic D-T fuel capsule. The resulting rocket-like implosion compresses the fuel to 1,000× liquid density, initiating a thermonuclear burn wave that propagates outward from the central hot spot.
              </p>

              {/* Telemetry Grid */}
              <div className="grid grid-cols-2 gap-2 mb-8">
                <TelemetryBadge label="Laser Energy" value="3.15 MJ" highlight />
                <TelemetryBadge label="Peak Power" value="500 TW" />
                <TelemetryBadge label="Pulse Duration" value="20 ns" />
                <TelemetryBadge label="Symmetry" value="≤ 1% RMS" highlight />
                <TelemetryBadge label="Compression" value="1,000× ρ_liq" />
                <TelemetryBadge label="Yield" value="3.88 MJ" highlight />
              </div>

              {/* Specs */}
              <div className="border border-[#262626] p-6">
                <div className="font-mono text-[10px] text-[#606060] tracking-widest uppercase mb-4">
                  Engineering Specifications
                </div>
                <SpecRow label="Beamlines" value="192 × NIF-class UV Beams" />
                <SpecRow label="Wavelength" value="λ = 351 nm (3ω UV)" />
                <SpecRow label="Hohlraum" value="Au — 2.0 mm diameter" />
                <SpecRow label="Capsule Diameter" value="2.2 mm cryogenic D-T" />
                <SpecRow label="Hot Spot Temp" value="T_hs ≈ 100 keV" />
                <SpecRow label="Areal Density" value="ρR ≥ 1.3 g/cm²" />
                <SpecRow label="Implosion Velocity" value="v_imp = 380 km/s" />
                <SpecRow label="Shot Repetition" value="10 shots/day (target)" />
              </div>
            </div>

            {/* Image Panel — Right */}
            <div className="relative overflow-hidden order-1 lg:order-2" style={{ minHeight: '480px' }}>
              <div className="absolute inset-0 scan-overlay z-10" />
              <img
                id="helios-laser-title"
                data-strk-img-id="helios-laser-main-m4n5o6"
                data-strk-img="[helios-laser-title] high power laser beams converging green cyan emerald hohlraum capsule dark field"
                data-strk-img-ratio="4x3"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Helios laser array beams"
                className="w-full h-full object-cover absolute inset-0"
              />
              <div className="absolute top-4 right-4 z-20 space-y-2">
                <div className="flex items-center gap-2 bg-[#050505]/80 border border-[#262626] px-3 py-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00FF88] telemetry-live" />
                  <span className="font-mono text-[9px] text-[#00FF88] tracking-widest uppercase">Shot Ready</span>
                </div>
                <div className="bg-[#050505]/80 border border-[#262626] px-3 py-1.5">
                  <span className="font-mono text-[9px] text-[#606060] tracking-widest">UNIT: HEL-01 // LIVERMORE</span>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 z-20">
                <div className="bg-[#050505]/80 border border-[#262626] px-3 py-2">
                  <div className="font-mono text-[9px] text-[#606060] tracking-widest uppercase">Beam Symmetry</div>
                  <div className="font-mono text-sm text-white tracking-wide">σ_rms = 0.87%</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            SECTION C — MAGNETO-INERTIAL FUSION
        ══════════════════════════════════════════════ */}
        <section className="py-20 lg:py-28">
          <SectionHeader
            index="C.03"
            label="Magneto-Inertial Fusion — Hybrid Frontier"
            title={<>Magneto-Inertial<br />Fusion</>}
            subtitle="A hybrid confinement architecture combining pulsed magnetic flux compression with plasma liner implosion — achieving fusion conditions at 10× lower cost than pure ICF, enabling rapid grid-scale deployment."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-[#262626]">

            {/* Image Panel */}
            <div className="relative overflow-hidden border-b lg:border-b-0 lg:border-r border-[#262626]" style={{ minHeight: '480px' }}>
              <div className="absolute inset-0 scan-overlay z-10" />
              <img
                id="mif-plasma-title"
                data-strk-img-id="mif-plasma-main-p7q8r9"
                data-strk-img="[mif-plasma-title] plasma injector orange sparks violet electrical arcs high energy long exposure black background"
                data-strk-img-ratio="4x3"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Magneto-inertial fusion plasma injector"
                className="w-full h-full object-cover absolute inset-0"
              />
              <div className="absolute top-4 left-4 z-20 space-y-2">
                <div className="flex items-center gap-2 bg-[#050505]/80 border border-[#262626] px-3 py-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-signal-amber telemetry-live" />
                  <span className="font-mono text-[9px] text-signal-amber tracking-widest uppercase">Prototype Phase</span>
                </div>
                <div className="bg-[#050505]/80 border border-[#262626] px-3 py-1.5">
                  <span className="font-mono text-[9px] text-[#606060] tracking-widest">UNIT: MIF-P1 // ALBUQUERQUE</span>
                </div>
              </div>
              <div className="absolute bottom-4 right-4 z-20">
                <div className="bg-[#050505]/80 border border-[#262626] px-3 py-2">
                  <div className="font-mono text-[9px] text-[#606060] tracking-widest uppercase">Liner Velocity</div>
                  <div className="font-mono text-sm text-white tracking-wide">v_liner = 3 km/s</div>
                </div>
              </div>
            </div>

            {/* Data Panel */}
            <div className="p-8 lg:p-12 bg-[#121212]">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 border border-[#262626] flex items-center justify-center">
                  <Cpu className="w-4 h-4 text-[#606060]" />
                </div>
                <span className="font-mono text-[10px] text-[#606060] tracking-widest uppercase">
                  Hybrid Confinement — MIF Architecture
                </span>
              </div>

              <p className="text-[#A0A0A0] text-sm leading-relaxed mb-8">
                Magneto-Inertial Fusion (MIF) seeds a magnetized plasma target with an embedded axial magnetic field (B_seed ≈ 10 T), then compresses it with a converging plasma liner at 3 km/s. The magnetic flux is compressed to B_final &gt; 10,000 T, dramatically reducing thermal conduction losses and enabling fusion conditions at liner kinetic energies 100× lower than pure ICF. This architecture enables modular, factory-built reactor units deployable at 50 MW scale.
              </p>

              {/* Telemetry Grid */}
              <div className="grid grid-cols-2 gap-2 mb-8">
                <TelemetryBadge label="Seed Field" value="B₀ = 10 T" />
                <TelemetryBadge label="Peak Field" value="B_f > 10 kT" highlight />
                <TelemetryBadge label="Liner Velocity" value="3 km/s" />
                <TelemetryBadge label="Target Density" value="10¹⁷ cm⁻³" />
                <TelemetryBadge label="Compression Ratio" value="CR = 30:1" highlight />
                <TelemetryBadge label="Unit Output" value="50 MW" highlight />
              </div>

              {/* Specs */}
              <div className="border border-[#262626] p-6">
                <div className="font-mono text-[10px] text-[#606060] tracking-widest uppercase mb-4">
                  Engineering Specifications
                </div>
                <SpecRow label="Confinement Type" value="Magnetized Plasma Liner" />
                <SpecRow label="Plasma Formation" value="Field-Reversed Configuration (FRC)" />
                <SpecRow label="Liner Material" value="Argon plasma — 60 injectors" />
                <SpecRow label="Pulse Energy" value="~1 MJ per shot" />
                <SpecRow label="Repetition Rate" value="1 Hz (target: 10 Hz)" />
                <SpecRow label="Flux Retention" value="Φ_retained ≥ 85%" />
                <SpecRow label="Cost Advantage" value="10× lower CapEx vs. ICF" />
                <SpecRow label="Deployment Scale" value="50 MW modular units" />
              </div>

              {/* Status Banner */}
              <div className="mt-6 border border-[#262626] p-4 flex items-center gap-3">
                <ShieldAlert className="w-4 h-4 text-signal-amber flex-shrink-0" />
                <div>
                  <div className="font-mono text-[9px] text-signal-amber tracking-widest uppercase mb-0.5">
                    Development Status
                  </div>
                  <div className="font-mono text-[10px] text-[#A0A0A0] tracking-wide">
                    Prototype Phase — Q &gt; 1 demonstration target: Q4 2027
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 border border-[#262626] p-8 lg:p-12 bg-[#121212] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div>
              <div className="font-mono text-[10px] text-[#606060] tracking-widest uppercase mb-3">
                Infrastructure Deployment
              </div>
              <h3 className="font-grotesk font-bold text-white text-2xl tracking-tight">
                Request Power Allocation or Grid Partnership
              </h3>
            </div>
            <a
              href="/contact"
              className="flex items-center gap-3 bg-white text-black px-8 py-3.5 font-mono text-xs tracking-widest uppercase hover:bg-[#A0A0A0] transition-colors whitespace-nowrap"
            >
              <span>Contact Operations</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </section>

      </div>
    </div>
  );
}
