import { useEffect, useRef } from 'react';
import { ShieldAlert, Activity } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const SPECS = [
  { label: 'Concept', value: 'MIF — Hybrid' },
  { label: 'Liner Type', value: 'Plasma Liner' },
  { label: 'Injector Count', value: '60 Guns' },
  { label: 'Mach Number', value: 'M ≥ 20' },
  { label: 'Liner Velocity', value: '50 km/s' },
  { label: 'Peak Pressure', value: '10 Mbar' },
  { label: 'Flux Retention', value: 'Φ ≥ 0.85' },
  { label: 'Target Density', value: '10²³ m⁻³' },
  { label: 'Burn Time', value: '~1 μs' },
  { label: 'Cost/kWh', value: '< $0.02' },
  { label: 'Modularity', value: '500 MW Units' },
  { label: 'Deployment', value: '18 Months' },
];

export default function ReactorMIF() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section id="mif" ref={containerRef} className="border-b border-[#262626]">
      {/* Section label */}
      <div className="px-6 md:px-12 py-6 border-b border-[#262626] flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 border border-[#262626] flex items-center justify-center">
            <ShieldAlert className="w-4 h-4 text-[#555555]" />
          </div>
          <div>
            <div className="font-mono text-[9px] text-[#555555] tracking-widest uppercase">Section C — Hybrid Frontier</div>
            <div className="font-mono text-xs text-white font-bold">MAGNETO-INERTIAL FUSION</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Activity className="w-3 h-3 text-[#555555]" />
          <span className="font-mono text-[9px] text-[#555555] tracking-widest uppercase">DEVELOPMENT — PHASE III</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#555555] telemetry-pulse" />
        </div>
      </div>

      {/* Main content */}
      <div className="grid grid-cols-1 lg:grid-cols-5">
        {/* Image — 3 cols */}
        <div className="lg:col-span-3 relative overflow-hidden min-h-[400px] lg:min-h-[600px]">
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=90"
            alt="High-energy plasma injector — orange sparks and violet electrical arcs against black background"
            className="absolute inset-0 w-full h-full object-cover img-zoom"
            data-strk-img-id="mif-plasma-injector-9b1c7d"
            data-strk-img="[mif-title] [mif-subtitle]"
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
              <div className="font-mono text-[9px] text-[#555555] tracking-widest uppercase">PLASMA LINER INJECTOR — ARRAY VIEW</div>
              <div className="font-mono text-xs text-white mt-1">60 GUNS · M ≥ 20 · v = 50 km/s</div>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#050505]/30 z-[5]" />
        </div>

        {/* Text + specs — 2 cols */}
        <div className="lg:col-span-2 px-8 md:px-10 py-12 flex flex-col justify-between border-l border-[#262626]">
          <div>
            <div className="font-mono text-[9px] text-[#555555] tracking-widest uppercase mb-3" id="mif-subtitle">
              Magneto-Inertial Fusion
            </div>
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-white mb-6 leading-tight" id="mif-title">
              The Hybrid<br />Frontier
            </h2>
            <div className="w-8 h-px bg-[#262626] mb-6" />
            <p className="text-[#A0A0A0] text-sm leading-relaxed mb-4">
              Magneto-Inertial Fusion bridges the gap between magnetic and inertial confinement, combining the cost advantages of pulsed systems with the confinement benefits of embedded magnetic fields. Sixty plasma gun injectors fire simultaneously, forming a spherically converging plasma liner at Mach 20.
            </p>
            <p className="text-[#555555] text-sm leading-relaxed mb-8">
              The liner compresses a pre-magnetized field-reversed configuration (FRC) plasma target, retaining 85% of the embedded magnetic flux during compression. Peak pressures exceeding 10 Mbar are achieved within 1 microsecond — sufficient for thermonuclear burn. The modular 500 MW unit design enables 18-month deployment cycles at a projected cost below $0.02/kWh.
            </p>

            {/* Physics formula */}
            <div className="border border-[#262626] p-4 mb-8 bg-[#0a0a0a]">
              <div className="font-mono text-[9px] text-[#555555] tracking-widest uppercase mb-3">Liner Compression — Scaling Law</div>
              <div className="font-mono text-sm text-white">P_peak = ½ρ_liner · v²_imp · CR²</div>
              <div className="font-mono text-[10px] text-[#555555] mt-2">
                CR = 50 · ρ_liner = 10⁻³ g/cm³ · v_imp = 50 km/s
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
      </div>
    </section>
  );
}
