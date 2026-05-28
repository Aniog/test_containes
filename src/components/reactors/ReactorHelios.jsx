import { useEffect, useRef } from 'react';
import { Zap, Activity } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const SPECS = [
  { label: 'Laser Count', value: '192 Beams' },
  { label: 'Total Energy', value: '2.15 MJ' },
  { label: 'Pulse Width', value: '3.5 ns' },
  { label: 'Peak Power', value: '500 TW' },
  { label: 'Wavelength', value: '351 nm (3ω)' },
  { label: 'Capsule Ø', value: '2.2 mm' },
  { label: 'Hohlraum', value: 'Au — 10.2 mm' },
  { label: 'Compression', value: '1,000× ρ_liq' },
  { label: 'Hot Spot T', value: '50–100 keV' },
  { label: 'Gain Factor', value: '× 48' },
  { label: 'Symmetry', value: '< 1% RMS' },
  { label: 'Rep Rate', value: '10 shots/day' },
];

export default function ReactorHelios() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section id="helios" ref={containerRef} className="border-b border-[#262626]">
      {/* Section label */}
      <div className="px-6 md:px-12 py-6 border-b border-[#262626] flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 border border-[#262626] flex items-center justify-center">
            <Zap className="w-4 h-4 text-[#555555]" />
          </div>
          <div>
            <div className="font-mono text-[9px] text-[#555555] tracking-widest uppercase">Section B — Inertial Confinement</div>
            <div className="font-mono text-xs text-white font-bold">HELIOS LASER ARRAY SYSTEM</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Activity className="w-3 h-3 text-[#555555]" />
          <span className="font-mono text-[9px] text-[#555555] tracking-widest uppercase">STANDBY — CHARGE</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#555555]" />
        </div>
      </div>

      {/* Main content — reversed layout */}
      <div className="grid grid-cols-1 lg:grid-cols-5">
        {/* Text + specs — 2 cols */}
        <div className="lg:col-span-2 px-8 md:px-10 py-12 flex flex-col justify-between border-r border-[#262626] order-2 lg:order-1">
          <div>
            <div className="font-mono text-[9px] text-[#555555] tracking-widest uppercase mb-3" id="helios-subtitle">
              Inertial Confinement Fusion
            </div>
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-white mb-6 leading-tight" id="helios-title">
              Helios Laser<br />Array
            </h2>
            <div className="w-8 h-px bg-[#262626] mb-6" />
            <p className="text-[#A0A0A0] text-sm leading-relaxed mb-4">
              The Helios Array deploys 192 neodymium-glass laser beams, frequency-tripled to 351 nm, delivering 2.15 megajoules of energy onto a 2.2 mm D-T fuel capsule suspended within a gold hohlraum. The indirect-drive configuration converts laser energy to X-rays with 85% efficiency.
            </p>
            <p className="text-[#555555] text-sm leading-relaxed mb-8">
              Symmetrical implosion compresses the cryogenic D-T ice layer to 1,000 times liquid density within 3.5 nanoseconds. The central hot spot reaches 50–100 keV, triggering thermonuclear ignition and a self-sustaining burn wave propagating outward through the compressed fuel at 3×10⁸ cm/s.
            </p>

            {/* Physics formula */}
            <div className="border border-[#262626] p-4 mb-8 bg-[#0a0a0a]">
              <div className="font-mono text-[9px] text-[#555555] tracking-widest uppercase mb-3">Implosion Velocity — Achieved</div>
              <div className="font-mono text-sm text-white">v_imp ≥ 3.5 × 10⁷ cm/s</div>
              <div className="font-mono text-[10px] text-[#555555] mt-2">
                ρR ≥ 0.3 g/cm² · α_drive = 1.5 · G = 48
              </div>
            </div>
          </div>

          {/* Specs grid */}
          <div>
            <div className="font-mono text-[9px] text-[#555555] tracking-widest uppercase mb-4">System Specifications</div>
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

        {/* Image — 3 cols */}
        <div className="lg:col-span-3 relative overflow-hidden min-h-[400px] lg:min-h-[600px] order-1 lg:order-2">
          <img
            src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200&q=90"
            alt="High-power laser beams — emerald green and electric cyan converging on hohlraum capsule"
            className="absolute inset-0 w-full h-full object-cover img-zoom"
            data-strk-img-id="helios-laser-array-2e8f4a"
            data-strk-img="[helios-title] [helios-subtitle]"
            data-strk-img-ratio="4x3"
            data-strk-img-width="1200"
          />
          {/* Corner brackets */}
          <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-white/30 z-10" />
          <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-white/30 z-10" />
          <div className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-white/30 z-10" />
          <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-white/30 z-10" />
          {/* Overlay label */}
          <div className="absolute bottom-6 right-6 z-10">
            <div className="bg-[#050505]/80 backdrop-blur-sm border border-[#262626] px-4 py-3">
              <div className="font-mono text-[9px] text-[#555555] tracking-widest uppercase">LASER CONVERGENCE — TARGET CHAMBER</div>
              <div className="font-mono text-xs text-white mt-1">192 BEAMS · 2.15 MJ · 3.5 ns PULSE</div>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#050505]/30 z-[5]" />
        </div>
      </div>
    </section>
  );
}
