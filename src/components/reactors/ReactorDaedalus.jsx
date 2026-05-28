import { useEffect, useRef } from 'react';
import { Orbit, Activity } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const SPECS = [
  { label: 'Reactor Type', value: 'Tokamak — D-Shape' },
  { label: 'Major Radius', value: 'R = 8.14 m' },
  { label: 'Minor Radius', value: 'a = 2.80 m' },
  { label: 'Plasma Volume', value: '840 m³' },
  { label: 'Toroidal Field', value: 'B_T = 8.2 T' },
  { label: 'Plasma Current', value: 'I_p = 17.4 MA' },
  { label: 'Fusion Power', value: 'P_fus = 500 MW' },
  { label: 'Net Electrical', value: 'P_net = 2.4 GW' },
  { label: 'Q-Factor', value: 'Q ≥ 10.0' },
  { label: 'Fuel Cycle', value: 'D-T / Li-6 Breed' },
  { label: 'Cryostat Temp', value: '4.2 K (LHe)' },
  { label: 'Coil Material', value: 'Nb₃Sn / REBCO' },
];

export default function ReactorDaedalus() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section id="daedalus" ref={containerRef} className="border-b border-[#262626]">
      {/* Section label */}
      <div className="px-6 md:px-12 py-6 border-b border-[#262626] flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 border border-[#262626] flex items-center justify-center">
            <Orbit className="w-4 h-4 text-[#555555]" />
          </div>
          <div>
            <div className="font-mono text-[9px] text-[#555555] tracking-widest uppercase">Section A — Magnetic Confinement</div>
            <div className="font-mono text-xs text-white font-bold">DAEDALUS TOKAMAK SERIES</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Activity className="w-3 h-3 text-[#555555]" />
          <span className="font-mono text-[9px] text-[#555555] tracking-widest uppercase">PLASMA BURNING</span>
          <span className="w-1.5 h-1.5 rounded-full bg-white telemetry-pulse" />
        </div>
      </div>

      {/* Main content */}
      <div className="grid grid-cols-1 lg:grid-cols-5">
        {/* Image — 3 cols */}
        <div className="lg:col-span-3 relative overflow-hidden min-h-[400px] lg:min-h-[600px]">
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=90"
            alt="Tokamak reactor cross-section — neon-blue magnetic field lines containing pink plasma"
            className="absolute inset-0 w-full h-full object-cover img-zoom"
            data-strk-img-id="daedalus-tokamak-cross-section-7a3b9c"
            data-strk-img="[daedalus-title] [daedalus-subtitle]"
            data-strk-img-ratio="4x3"
            data-strk-img-width="1200"
          />
          {/* Corner brackets */}
          <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-white/30 z-10" />
          <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-white/30 z-10" />
          <div className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-white/30 z-10" />
          <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-white/30 z-10" />
          {/* Overlay label */}
          <div className="absolute bottom-6 left-6 z-10">
            <div className="bg-[#050505]/80 backdrop-blur-sm border border-[#262626] px-4 py-3">
              <div className="font-mono text-[9px] text-[#555555] tracking-widest uppercase">PLASMA CORE — TOROIDAL CROSS-SECTION</div>
              <div className="font-mono text-xs text-white mt-1">B_T = 8.2 T · I_p = 17.4 MA · T_e = 150M K</div>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#050505]/30 z-[5]" />
        </div>

        {/* Text + specs — 2 cols */}
        <div className="lg:col-span-2 px-8 md:px-10 py-12 flex flex-col justify-between border-l border-[#262626]">
          <div>
            <div className="font-mono text-[9px] text-[#555555] tracking-widest uppercase mb-3" id="daedalus-subtitle">
              Magnetic Confinement Fusion
            </div>
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-white mb-6 leading-tight" id="daedalus-title">
              The Daedalus<br />Tokamak
            </h2>
            <div className="w-8 h-px bg-[#262626] mb-6" />
            <p className="text-[#A0A0A0] text-sm leading-relaxed mb-4">
              The Daedalus-VII represents the apex of magnetic confinement fusion engineering. Eighteen superconducting toroidal field coils — wound from niobium-tin (Nb₃Sn) and REBCO high-temperature superconductors — generate a 8.2 Tesla toroidal magnetic field, confining a D-shaped plasma at 150 million Kelvin.
            </p>
            <p className="text-[#555555] text-sm leading-relaxed mb-8">
              The cryostat system maintains coil temperatures at 4.2 K using liquid helium, while the divertor exhaust system handles 20 MW/m² heat flux through tungsten monoblocks. Deuterium-Tritium fuel achieves a fusion power of 500 MW with a Q-factor exceeding 10 — the commercial ignition threshold.
            </p>

            {/* Physics formula */}
            <div className="border border-[#262626] p-4 mb-8 bg-[#0a0a0a]">
              <div className="font-mono text-[9px] text-[#555555] tracking-widest uppercase mb-3">Lawson Criterion — Achieved</div>
              <div className="font-mono text-sm text-white">n·τ_E·T ≥ 3×10²¹ keV·s/m³</div>
              <div className="font-mono text-[10px] text-[#555555] mt-2">
                n = 10²⁰ m⁻³ · τ_E = 3.7 s · T = 25 keV
              </div>
            </div>
          </div>

          {/* Specs grid */}
          <div>
            <div className="font-mono text-[9px] text-[#555555] tracking-widest uppercase mb-4">Engineering Specifications</div>
            <div className="grid grid-cols-2 gap-0 border border-[#262626]">
              {SPECS.map(({ label, value }, i) => (
                <div
                  key={label}
                  className={`px-4 py-3 ${i % 2 === 0 ? 'border-r border-[#262626]' : ''} ${i < SPECS.length - 2 ? 'border-b border-[#262626]' : ''}`}
                >
                  <div className="font-mono text-[8px] text-[#555555] tracking-widest uppercase">{label}</div>
                  <div className="font-mono text-xs text-white font-bold mt-0.5">{value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
