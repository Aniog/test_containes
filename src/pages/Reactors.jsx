import { useEffect, useRef } from 'react';
import { Orbit, Zap, Activity, Cpu, ShieldAlert, Radio } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

/* ── Telemetry Row ── */
function TelemetryRow({ label, value, unit }) {
  return (
    <div className="flex items-center justify-between py-2.5 border-b border-[#262626] last:border-0">
      <span className="text-[10px] font-mono tracking-widest uppercase text-[#5a5a5a]">{label}</span>
      <span className="text-xs font-mono text-white">
        {value} <span className="text-[#5a5a5a]">{unit}</span>
      </span>
    </div>
  );
}

/* ── Section Header ── */
function SectionHeader({ code, title, subtitle }) {
  return (
    <div className="border-b border-[#262626] pb-8 mb-12">
      <div className="flex items-center gap-3 mb-4">
        <span className="w-1.5 h-1.5 rounded-full bg-white blink" />
        <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#5a5a5a]">{code}</span>
      </div>
      <h2 className="text-3xl md:text-4xl font-grotesk font-semibold text-white mb-3">{title}</h2>
      <p className="text-sm text-[#5a5a5a] max-w-2xl leading-relaxed">{subtitle}</p>
    </div>
  );
}

export default function Reactors() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="bg-[#050505]">
      {/* ── PAGE HEADER ── */}
      <div className="border-b border-[#262626]">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
          <div className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#5a5a5a] mb-4">
            IGN-DYN / REACTOR HUB / 2026
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-grotesk font-semibold text-white leading-tight mb-6">
            Reactor Hub &<br />
            <span className="text-[#5a5a5a]">Infrastructure</span>
          </h1>
          <p className="text-sm text-[#A0A0A0] max-w-2xl leading-relaxed">
            Three distinct fusion architectures — each engineered for a specific ignition regime, plasma confinement strategy, and commercial deployment pathway. Together, they form the backbone of the Fusion Era.
          </p>
        </div>
      </div>

      {/* ── SECTION A: DAEDALUS TOKAMAK ── */}
      <section className="border-b border-[#262626]">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
          <SectionHeader
            code="MCF-01 / Magnetic Confinement Fusion"
            title="The Daedalus Tokamak"
            subtitle="The world's most advanced superconducting tokamak. A 840 m³ plasma chamber enclosed by 18 niobium-tin toroidal field coils, achieving sustained D-T ignition at Q ≥ 10."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-[#262626] border border-[#262626]">
            {/* Image */}
            <div className="relative bg-[#050505] scan-overlay img-zoom">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  data-strk-img-id="daedalus-tokamak-img-a1b2c3"
                  data-strk-img="[daedalus-desc] [daedalus-title]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="900"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="Daedalus Tokamak cross-section"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/60 to-transparent" />

                {/* Corner labels */}
                <div className="absolute top-4 left-4 border border-[#262626] bg-[#050505]/80 px-3 py-1.5">
                  <span className="text-[9px] font-mono tracking-widest uppercase text-[#5a5a5a]">MCF-01 / Active</span>
                </div>
                <div className="absolute bottom-4 right-4 border border-[#262626] bg-[#050505]/80 px-3 py-1.5">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 blink" />
                    <span className="text-[9px] font-mono tracking-widest uppercase text-[#5a5a5a]">Plasma Stable</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Specs Panel */}
            <div className="bg-[#050505] p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 border border-[#262626] flex items-center justify-center">
                  <Orbit className="w-4 h-4 text-[#5a5a5a]" />
                </div>
                <div>
                  <div className="text-[9px] font-mono tracking-widest uppercase text-[#5a5a5a]">System Designation</div>
                  <div className="text-xs font-mono text-white">Daedalus-IV Tokamak</div>
                </div>
              </div>

              <h3 id="daedalus-title" className="text-xl font-grotesk font-semibold text-white mb-2">
                Magnetic Confinement Fusion Reactor
              </h3>
              <p id="daedalus-desc" className="text-xs text-[#5a5a5a] leading-relaxed mb-8">
                Tokamak nuclear fusion reactor plasma core cross-section with glowing neon blue magnetic field lines and pink plasma stream
              </p>

              <div className="space-y-0 border border-[#262626] p-4 mb-6">
                <div className="text-[9px] font-mono tracking-widest uppercase text-[#5a5a5a] mb-3">Engineering Specifications</div>
                <TelemetryRow label="Toroidal B-Field" value="8.2" unit="Tesla" />
                <TelemetryRow label="Plasma Volume" value="840" unit="m³" />
                <TelemetryRow label="Plasma Current (Ip)" value="15.0" unit="MA" />
                <TelemetryRow label="Core Ion Temperature" value="150" unit="× 10⁶ °C" />
                <TelemetryRow label="Electron Density (ne)" value="1.0×10²⁰" unit="m⁻³" />
                <TelemetryRow label="Energy Confinement (τE)" value="3.7" unit="seconds" />
                <TelemetryRow label="Fusion Power Output" value="500" unit="MW" />
                <TelemetryRow label="Net Q-Factor" value="≥ 10.0" unit="" />
              </div>

              <div className="grid grid-cols-2 gap-px bg-[#262626] border border-[#262626]">
                {[
                  { label: 'Cryostat Temp', value: '4.5 K' },
                  { label: 'D-T Fuel Ratio', value: '50:50' },
                  { label: 'TF Coils', value: '18 × NbSn' },
                  { label: 'Blanket Type', value: 'Li-6 HCPB' },
                ].map(({ label, value }) => (
                  <div key={label} className="bg-[#050505] p-4">
                    <div className="text-[9px] font-mono tracking-widest uppercase text-[#5a5a5a] mb-1">{label}</div>
                    <div className="text-sm font-mono text-white">{value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Physics Breakdown */}
          <div className="mt-px grid grid-cols-1 md:grid-cols-3 gap-px bg-[#262626] border border-[#262626] border-t-0">
            {[
              {
                title: 'Superconducting Magnet System',
                body: 'Eighteen niobium-tin (Nb₃Sn) toroidal field coils operate at 4.5 K, generating a 8.2 Tesla toroidal magnetic field. Six poloidal field coils and a central solenoid provide plasma shaping and inductive current drive. The cryostat system maintains thermal isolation at 4 × 10⁻⁶ Pa vacuum.',
              },
              {
                title: 'D-T Plasma Physics',
                body: 'Deuterium-Tritium fuel is injected via pellet injection at 300 m/s. The plasma achieves ignition when the Lawson criterion n·τ·T ≥ 3×10²¹ keV·s·m⁻³ is satisfied. Neutral beam injection (NBI) at 1 MeV provides auxiliary heating to overcome the ignition threshold.',
              },
              {
                title: 'Tritium Breeding Blanket',
                body: 'Lithium-6 enriched ceramic pebble beds surround the plasma chamber. Fast neutrons from D-T fusion (14.1 MeV) react with ⁶Li to breed tritium in situ: ⁶Li + n → T + ⁴He + 4.8 MeV. Tritium breeding ratio (TBR) ≥ 1.15 ensures fuel self-sufficiency.',
              },
            ].map(({ title, body }) => (
              <div key={title} className="bg-[#050505] p-8">
                <div className="w-px h-8 bg-[#262626] mb-6" />
                <h4 className="text-sm font-grotesk font-semibold text-white mb-3">{title}</h4>
                <p className="text-xs text-[#5a5a5a] leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION B: HELIOS LASER ARRAY ── */}
      <section className="border-b border-[#262626]">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
          <SectionHeader
            code="ICF-02 / Inertial Confinement Fusion"
            title="Helios Laser Array"
            subtitle="192 high-power laser beamlines delivering 2.1 MJ of ultraviolet energy onto a 2mm gold hohlraum capsule within a 20-nanosecond implosion window. Ignition achieved through spherical symmetry and hydrodynamic compression."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-[#262626] border border-[#262626]">
            {/* Specs Panel — Left */}
            <div className="bg-[#050505] p-8 lg:p-10 order-2 lg:order-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 border border-[#262626] flex items-center justify-center">
                  <Zap className="w-4 h-4 text-[#5a5a5a]" />
                </div>
                <div>
                  <div className="text-[9px] font-mono tracking-widest uppercase text-[#5a5a5a]">System Designation</div>
                  <div className="text-xs font-mono text-white">Helios-ICF Array</div>
                </div>
              </div>

              <h3 id="helios-title" className="text-xl font-grotesk font-semibold text-white mb-2">
                Inertial Confinement Fusion System
              </h3>
              <p id="helios-desc" className="text-xs text-[#5a5a5a] leading-relaxed mb-8">
                High power laser beams emerald green electric cyan converging onto gold hohlraum capsule nuclear fusion ignition dark field
              </p>

              <div className="space-y-0 border border-[#262626] p-4 mb-6">
                <div className="text-[9px] font-mono tracking-widest uppercase text-[#5a5a5a] mb-3">Engineering Specifications</div>
                <TelemetryRow label="Laser Beamlines" value="192" unit="beams" />
                <TelemetryRow label="Total UV Energy" value="2.1" unit="MJ" />
                <TelemetryRow label="Peak Power" value="500" unit="TW" />
                <TelemetryRow label="Pulse Duration" value="20" unit="nanoseconds" />
                <TelemetryRow label="Wavelength (3ω)" value="351" unit="nm (UV)" />
                <TelemetryRow label="Hohlraum Diameter" value="5.75" unit="mm" />
                <TelemetryRow label="Capsule Implosion Vel." value="370" unit="km/s" />
                <TelemetryRow label="Fusion Yield" value="3.15" unit="MJ" />
              </div>

              <div className="grid grid-cols-2 gap-px bg-[#262626] border border-[#262626]">
                {[
                  { label: 'Symmetry', value: '< 1% RMS' },
                  { label: 'Compression', value: '× 1000' },
                  { label: 'Hot Spot Temp', value: '100 keV' },
                  { label: 'Gain (G)', value: '≥ 1.5' },
                ].map(({ label, value }) => (
                  <div key={label} className="bg-[#050505] p-4">
                    <div className="text-[9px] font-mono tracking-widest uppercase text-[#5a5a5a] mb-1">{label}</div>
                    <div className="text-sm font-mono text-white">{value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image — Right */}
            <div className="relative bg-[#050505] scan-overlay img-zoom order-1 lg:order-2">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  data-strk-img-id="helios-laser-img-d4e5f6"
                  data-strk-img="[helios-desc] [helios-title]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="900"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="Helios laser array"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/60 to-transparent" />
                <div className="absolute top-4 right-4 border border-[#262626] bg-[#050505]/80 px-3 py-1.5">
                  <span className="text-[9px] font-mono tracking-widest uppercase text-[#5a5a5a]">ICF-02 / Standby</span>
                </div>
                <div className="absolute bottom-4 left-4 border border-[#262626] bg-[#050505]/80 px-3 py-1.5">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 blink" />
                    <span className="text-[9px] font-mono tracking-widest uppercase text-[#5a5a5a]">Charging: 94%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Physics Breakdown */}
          <div className="mt-px grid grid-cols-1 md:grid-cols-3 gap-px bg-[#262626] border border-[#262626] border-t-0">
            {[
              {
                title: 'Energetic Symmetry & Drive',
                body: 'Achieving ignition requires < 1% RMS drive asymmetry across the hohlraum. Laser beams are arranged in 48 quads of 4 beams each, entering through two laser entrance holes (LEH). X-ray drive uniformity is maintained through precise beam-pointing and power balance to within ±0.5%.',
              },
              {
                title: 'Capsule Implosion Physics',
                body: 'The DT-ice layered capsule (2.2 mm diameter) is compressed by X-ray ablation pressure exceeding 300 Gbar. The ablator (HDC diamond, 70 μm) accelerates the DT shell to 370 km/s. Rayleigh-Taylor instability is suppressed through surface finish < 1 nm RMS and shaped laser pulses.',
              },
              {
                title: 'Mega-Joule Power Delivery',
                body: 'The Helios pulsed power system stores 422 MJ in capacitor banks, delivering 2.1 MJ to target in 20 ns. Frequency conversion from 1053 nm (1ω) to 351 nm (3ω) achieves 60% conversion efficiency. Shot repetition rate of 10 Hz enables continuous power generation at 31.5 MW average fusion power.',
              },
            ].map(({ title, body }) => (
              <div key={title} className="bg-[#050505] p-8">
                <div className="w-px h-8 bg-[#262626] mb-6" />
                <h4 className="text-sm font-grotesk font-semibold text-white mb-3">{title}</h4>
                <p className="text-xs text-[#5a5a5a] leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION C: MAGNETO-INERTIAL FUSION ── */}
      <section className="border-b border-[#262626]">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
          <SectionHeader
            code="MIF-03 / Magneto-Inertial Fusion"
            title="Magneto-Inertial Fusion — The Hybrid Frontier"
            subtitle="A revolutionary hybrid architecture combining magnetic flux compression with inertial confinement. Plasma liner implosion at 50 km/s compresses a magnetized plasma target to fusion conditions at 1/100th the cost of conventional ICF."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-[#262626] border border-[#262626]">
            {/* Image */}
            <div className="relative bg-[#050505] scan-overlay img-zoom">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  data-strk-img-id="mif-plasma-img-g7h8i9"
                  data-strk-img="[mif-desc] [mif-title]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="900"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="Magneto-inertial fusion plasma injector"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/60 to-transparent" />
                <div className="absolute top-4 left-4 border border-[#262626] bg-[#050505]/80 px-3 py-1.5">
                  <span className="text-[9px] font-mono tracking-widest uppercase text-[#5a5a5a]">MIF-03 / Firing</span>
                </div>
                <div className="absolute bottom-4 right-4 border border-[#262626] bg-[#050505]/80 px-3 py-1.5">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400 blink" />
                    <span className="text-[9px] font-mono tracking-widest uppercase text-[#5a5a5a]">Implosion: Active</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Specs Panel */}
            <div className="bg-[#050505] p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 border border-[#262626] flex items-center justify-center">
                  <Activity className="w-4 h-4 text-[#5a5a5a]" />
                </div>
                <div>
                  <div className="text-[9px] font-mono tracking-widest uppercase text-[#5a5a5a]">System Designation</div>
                  <div className="text-xs font-mono text-white">Prometheus-MIF Engine</div>
                </div>
              </div>

              <h3 id="mif-title" className="text-xl font-grotesk font-semibold text-white mb-2">
                Magneto-Inertial Fusion Reactor
              </h3>
              <p id="mif-desc" className="text-xs text-[#5a5a5a] leading-relaxed mb-8">
                High energy plasma injector long exposure orange sparks violet electrical arcs plasma compression fusion experiment
              </p>

              <div className="space-y-0 border border-[#262626] p-4 mb-6">
                <div className="text-[9px] font-mono tracking-widest uppercase text-[#5a5a5a] mb-3">Engineering Specifications</div>
                <TelemetryRow label="Plasma Liner Velocity" value="50" unit="km/s" />
                <TelemetryRow label="Seed B-Field" value="10" unit="Tesla" />
                <TelemetryRow label="Compressed B-Field" value="10,000" unit="Tesla" />
                <TelemetryRow label="Target Density" value="10²⁶" unit="m⁻³" />
                <TelemetryRow label="Compression Ratio" value="× 10,000" unit="" />
                <TelemetryRow label="Burn Duration" value="100" unit="nanoseconds" />
                <TelemetryRow label="Repetition Rate" value="1" unit="Hz" />
                <TelemetryRow label="Capital Cost" value="< $500M" unit="per plant" />
              </div>

              <div className="grid grid-cols-2 gap-px bg-[#262626] border border-[#262626]">
                {[
                  { label: 'Liner Material', value: 'Plasma Jets' },
                  { label: 'Target Config', value: 'FRC Plasma' },
                  { label: 'Flux Retention', value: '> 80%' },
                  { label: 'Grid Scale', value: '100 MW' },
                ].map(({ label, value }) => (
                  <div key={label} className="bg-[#050505] p-4">
                    <div className="text-[9px] font-mono tracking-widest uppercase text-[#5a5a5a] mb-1">{label}</div>
                    <div className="text-sm font-mono text-white">{value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Physics Breakdown */}
          <div className="mt-px grid grid-cols-1 md:grid-cols-3 gap-px bg-[#262626] border border-[#262626] border-t-0">
            {[
              {
                title: 'Plasma Liner Compression',
                body: 'Sixty plasma guns arranged spherically fire simultaneously, generating a converging plasma liner at 50 km/s. The liner impacts a pre-formed Field-Reversed Configuration (FRC) plasma target, compressing it from 20 cm to 2 mm radius. Liner-on-target timing precision is maintained to ±10 nanoseconds.',
              },
              {
                title: 'Magnetic Flux Retention',
                body: 'The embedded magnetic field in the FRC target is compressed proportionally to the density increase: B ∝ ρ^(2/3). Starting from 10 Tesla seed field, compression to 10,000 Tesla suppresses thermal conduction losses by a factor of 10⁶, enabling fusion conditions with 100× less driver energy than pure ICF.',
              },
              {
                title: 'Cost-Effective Grid Scaling',
                body: 'The Prometheus-MIF architecture eliminates the need for expensive superconducting magnets or petawatt laser systems. Each 100 MW plant costs < $500M to construct — 5× cheaper than tokamak equivalents. Modular design enables rapid deployment: a 1 GW grid node requires 10 Prometheus units operating in parallel.',
              },
            ].map(({ title, body }) => (
              <div key={title} className="bg-[#050505] p-8">
                <div className="w-px h-8 bg-[#262626] mb-6" />
                <h4 className="text-sm font-grotesk font-semibold text-white mb-3">{title}</h4>
                <p className="text-xs text-[#5a5a5a] leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ── */}
      <section>
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
          <div className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#5a5a5a] mb-8">
            Architecture Comparison Matrix
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-[#262626]">
              <thead>
                <tr className="bg-[#0a0a0a]">
                  <th className="text-left p-4 text-[10px] font-mono tracking-widest uppercase text-[#5a5a5a] border-b border-r border-[#262626]">Parameter</th>
                  <th className="text-left p-4 text-[10px] font-mono tracking-widest uppercase text-[#5a5a5a] border-b border-r border-[#262626]">Daedalus Tokamak</th>
                  <th className="text-left p-4 text-[10px] font-mono tracking-widest uppercase text-[#5a5a5a] border-b border-r border-[#262626]">Helios Laser Array</th>
                  <th className="text-left p-4 text-[10px] font-mono tracking-widest uppercase text-[#5a5a5a] border-b border-[#262626]">Prometheus MIF</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Confinement Method', 'Magnetic (Tokamak)', 'Inertial (Laser)', 'Magneto-Inertial'],
                  ['Q-Factor', '≥ 10.0', '≥ 1.5', '≥ 5.0 (projected)'],
                  ['Output Power', '500 MW', '31.5 MW avg', '100 MW'],
                  ['Fuel', 'D-T (50:50)', 'D-T ice layer', 'D-T FRC target'],
                  ['Capital Cost', '$15B', '$8B', '< $500M'],
                  ['Maturity', 'Commercial Ready', 'Pilot Scale', 'Pre-Commercial'],
                  ['Deployment', 'Baseload Grid', 'Research + Grid', 'Distributed Grid'],
                ].map(([param, tok, las, mif], i) => (
                  <tr key={param} className={i % 2 === 0 ? 'bg-[#050505]' : 'bg-[#080808]'}>
                    <td className="p-4 text-[10px] font-mono tracking-widest uppercase text-[#5a5a5a] border-r border-[#262626]">{param}</td>
                    <td className="p-4 text-xs font-mono text-white border-r border-[#262626]">{tok}</td>
                    <td className="p-4 text-xs font-mono text-white border-r border-[#262626]">{las}</td>
                    <td className="p-4 text-xs font-mono text-white">{mif}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
