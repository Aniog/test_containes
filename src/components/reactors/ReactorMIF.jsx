import { useEffect, useRef } from 'react';
import { Cpu, Radio } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const specs = [
  { label: 'Liner Velocity', value: '10 km/s' },
  { label: 'Compression Ratio', value: '×1,000' },
  { label: 'Seed B-Field', value: '1.0 T' },
  { label: 'Final B-Field', value: '~10 kT' },
  { label: 'Plasma Pressure', value: '10 Mbar' },
  { label: 'Burn Duration', value: '~100 ns' },
  { label: 'Cost per Shot', value: '$0.12' },
  { label: 'Rep Rate', value: '1 Hz' },
];

const telemetry = [
  { label: 'Liner Integrity', value: '100%', status: 'nominal' },
  { label: 'Flux Retention', value: '94.2%', status: 'nominal' },
  { label: 'Plasma Density', value: '10²⁶ m⁻³', status: 'active' },
  { label: 'Grid Sync', value: 'Phase-Lock', status: 'locked' },
];

export default function ReactorMIF() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="mif" ref={containerRef} className="bg-[#050505]">
      {/* Section header */}
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-10 border-b border-[#1f1f1f]">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 border border-[#262626] flex items-center justify-center">
              <Cpu className="w-4 h-4 text-neutral-400" />
            </div>
            <div>
              <p className="font-mono text-[10px] tracking-[0.3em] text-neutral-600 uppercase">
                System C — Hybrid Frontier
              </p>
              <h2 id="mif-title" className="font-mono text-2xl md:text-3xl text-white uppercase font-light tracking-tight">
                Magneto-Inertial Fusion
              </h2>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Radio className="w-3 h-3 text-neutral-600" />
            <span className="font-mono text-[10px] text-neutral-400 tracking-widest uppercase">
              Plasma Liner — Compression Phase
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Image + Telemetry */}
          <div className="space-y-4">
            <div className="relative border border-[#262626] overflow-hidden aspect-[4/3]">
              <img
                alt="Magneto-inertial fusion plasma injector with orange sparks and violet arcs"
                className="w-full h-full object-cover"
                data-strk-img-id="mif-plasma-g7h8i9"
                data-strk-img="[mif-title] plasma injector long exposure orange sparks violet electrical arcs high energy physics dark background"
                data-strk-img-ratio="4x3"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/60 to-transparent" />
              <div className="absolute top-4 left-4 bg-[#050505]/80 border border-[#262626] px-3 py-2 backdrop-blur-sm">
                <p className="font-mono text-[9px] text-neutral-500 tracking-widest uppercase">Long-Exposure Capture</p>
                <p className="font-mono text-[9px] text-neutral-400">MIF-LINER // HYBRID-CLASS</p>
              </div>
            </div>

            {/* Telemetry grid */}
            <div className="grid grid-cols-2 gap-px bg-[#1f1f1f] border border-[#262626]">
              {telemetry.map(({ label, value, status }) => (
                <div key={label} className="bg-[#0a0a0a] px-4 py-3 flex items-start justify-between">
                  <div>
                    <p className="font-mono text-[9px] text-neutral-700 tracking-widest uppercase mb-1">{label}</p>
                    <p className="font-mono text-sm text-white">{value}</p>
                  </div>
                  <div className="flex items-center gap-1 mt-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-white" />
                    <span className="font-mono text-[9px] text-neutral-600 uppercase">{status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Physics breakdown */}
          <div className="flex flex-col justify-center">
            <p className="font-mono text-[10px] tracking-[0.3em] text-neutral-600 uppercase mb-6">
              Compression Dynamics
            </p>

            <p className="text-neutral-300 text-sm leading-relaxed mb-6">
              Magneto-Inertial Fusion (MIF) occupies the fertile parameter space between pure magnetic confinement and pure inertial confinement. A magnetized plasma target — pre-seeded with a 1.0 Tesla axial magnetic field — is compressed by a converging plasma liner traveling at 10 km/s. Flux conservation during compression amplifies the embedded field to approximately 10 kiloTesla, dramatically reducing thermal conduction losses and relaxing the implosion symmetry requirements.
            </p>

            <p className="text-neutral-500 text-sm leading-relaxed mb-8">
              This hybrid approach enables fusion at plasma densities intermediate between MCF and ICF (n ~ 10²⁶ m⁻³), with compression ratios of 1,000× achievable using pulsed-power drivers costing orders of magnitude less than laser or superconducting magnet systems. At $0.12 per shot and 1 Hz repetition rate, MIF represents the most cost-effective pathway to commercial grid-scale fusion energy deployment.
            </p>

            {/* Spec table */}
            <div className="border border-[#262626]">
              <div className="px-4 py-2 border-b border-[#262626]">
                <span className="font-mono text-[10px] text-neutral-600 tracking-widest uppercase">
                  Compression Parameters
                </span>
              </div>
              <div className="grid grid-cols-2 gap-px bg-[#1f1f1f]">
                {specs.map(({ label, value }) => (
                  <div key={label} className="bg-[#0a0a0a] px-4 py-3">
                    <p className="font-mono text-[9px] text-neutral-700 tracking-widest uppercase mb-1">{label}</p>
                    <p className="font-mono text-xs text-neutral-200">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Formula */}
            <div className="mt-6 border border-[#1f1f1f] px-4 py-3 bg-[#0a0a0a]">
              <p className="font-mono text-[9px] text-neutral-700 tracking-widest uppercase mb-2">Flux Conservation</p>
              <p className="font-mono text-sm text-neutral-300">B_f = B_i · (r_i / r_f)² ≈ 10⁴ T</p>
              <p className="font-mono text-xs text-neutral-600 mt-1">Magnetized target: χ_⊥ reduced by factor ~10⁶</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
