import { useEffect, useRef } from 'react';
import { Orbit, ShieldAlert, Activity } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const specs = [
  { label: 'Major Radius', value: 'R = 8.14 m' },
  { label: 'Minor Radius', value: 'a = 2.65 m' },
  { label: 'Plasma Volume', value: '840 m³' },
  { label: 'Toroidal Field', value: 'B_T = 12.4 T' },
  { label: 'Plasma Current', value: 'I_p = 17 MA' },
  { label: 'Fusion Power', value: 'P_fus = 2.4 GW' },
  { label: 'Heating Power', value: 'P_heat = 73 MW' },
  { label: 'Energy Gain', value: 'Q = 10.7' },
];

const telemetry = [
  { label: 'Core Temp', value: '152.4 MK', status: 'nominal' },
  { label: 'Confinement', value: 'H-Mode', status: 'nominal' },
  { label: 'Disruption Risk', value: '0.003%', status: 'nominal' },
  { label: 'Cryostat Temp', value: '4.2 K', status: 'nominal' },
];

export default function ReactorDaedalus() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="daedalus" ref={containerRef} className="bg-[#050505] border-b border-[#262626]">
      {/* Section header */}
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-10 border-b border-[#1f1f1f]">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 border border-[#262626] flex items-center justify-center">
              <Orbit className="w-4 h-4 text-neutral-400" />
            </div>
            <div>
              <p className="font-mono text-[10px] tracking-[0.3em] text-neutral-600 uppercase">
                System A — Magnetic Confinement
              </p>
              <h2 id="daedalus-title" className="font-mono text-2xl md:text-3xl text-white uppercase font-light tracking-tight">
                The Daedalus Tokamak
              </h2>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span className="font-mono text-[10px] text-neutral-400 tracking-widest uppercase">
              Plasma Active — Steady State
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
                alt="Daedalus Tokamak magnetic confinement reactor cross-section"
                className="w-full h-full object-cover"
                data-strk-img-id="daedalus-tokamak-a1b2c3"
                data-strk-img="[daedalus-title] tokamak reactor interior magnetic field lines plasma confinement neon blue pink glowing"
                data-strk-img-ratio="4x3"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/60 to-transparent" />
              {/* Corner badge */}
              <div className="absolute top-4 left-4 bg-[#050505]/80 border border-[#262626] px-3 py-2 backdrop-blur-sm">
                <p className="font-mono text-[9px] text-neutral-500 tracking-widest uppercase">Cross-Section Render</p>
                <p className="font-mono text-[9px] text-neutral-400">DAEDALUS-7 // ITER-CLASS</p>
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
              Physics Specification
            </p>

            <p className="text-neutral-300 text-sm leading-relaxed mb-6">
              The Daedalus Tokamak employs a D-shaped plasma cross-section within a superconducting toroidal field coil assembly wound from Nb₃Sn (niobium-tin) wire, cooled to 4.2 Kelvin by a closed-loop liquid helium cryostat. The resulting 12.4 Tesla toroidal field, combined with a 17 MA plasma current, generates the helical magnetic topology required for stable H-mode confinement.
            </p>

            <p className="text-neutral-500 text-sm leading-relaxed mb-8">
              Deuterium-Tritium fuel is injected via supersonic pellet injection at 1,200 m/s, achieving a fuel density of n_e = 1.2 × 10²⁰ m⁻³. Neutral beam injection (NBI) at 1 MeV and ion cyclotron resonance heating (ICRH) at 55 MHz provide the 73 MW of auxiliary heating required to sustain ignition-grade plasma temperatures exceeding 150 million Kelvin.
            </p>

            {/* Spec table */}
            <div className="border border-[#262626]">
              <div className="px-4 py-2 border-b border-[#262626] flex items-center gap-2">
                <ShieldAlert className="w-3 h-3 text-neutral-600" />
                <span className="font-mono text-[10px] text-neutral-600 tracking-widest uppercase">
                  Engineering Parameters
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
              <p className="font-mono text-[9px] text-neutral-700 tracking-widest uppercase mb-2">Lawson Criterion — Achieved</p>
              <p className="font-mono text-sm text-neutral-300">n · τ_E · T ≥ 3 × 10²¹ keV·s·m⁻³</p>
              <p className="font-mono text-xs text-neutral-600 mt-1">Daedalus-7: nτT = 3.4 × 10²¹ — 113% above threshold</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
