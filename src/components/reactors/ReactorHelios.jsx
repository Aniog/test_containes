import { useEffect, useRef } from 'react';
import { Zap, Activity } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const specs = [
  { label: 'Laser Beamlines', value: '192 Arms' },
  { label: 'Total Energy', value: '3.4 MJ UV' },
  { label: 'Peak Power', value: '500 TW' },
  { label: 'Pulse Duration', value: '20 ns' },
  { label: 'Wavelength', value: '351 nm (3ω)' },
  { label: 'Capsule Diameter', value: '2.2 mm' },
  { label: 'Implosion Vel.', value: '380 km/s' },
  { label: 'Fusion Yield', value: '3.15 MJ' },
];

const telemetry = [
  { label: 'Laser Readiness', value: '100%', status: 'armed' },
  { label: 'Hohlraum Temp', value: '3.3 MK', status: 'nominal' },
  { label: 'Symmetry RMS', value: '0.8%', status: 'nominal' },
  { label: 'Shot Frequency', value: '10 Hz', status: 'active' },
];

export default function ReactorHelios() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="helios" ref={containerRef} className="bg-[#050505] border-b border-[#262626]">
      {/* Section header */}
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-10 border-b border-[#1f1f1f]">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 border border-[#262626] flex items-center justify-center">
              <Zap className="w-4 h-4 text-neutral-400" />
            </div>
            <div>
              <p className="font-mono text-[10px] tracking-[0.3em] text-neutral-600 uppercase">
                System B — Inertial Confinement
              </p>
              <h2 id="helios-title" className="font-mono text-2xl md:text-3xl text-white uppercase font-light tracking-tight">
                Helios Laser Array
              </h2>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Activity className="w-3 h-3 text-neutral-600" />
            <span className="font-mono text-[10px] text-neutral-400 tracking-widest uppercase">
              Ignition Sequence — Armed
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-16">
        {/* Reversed layout for visual variety */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Physics breakdown */}
          <div className="flex flex-col justify-center order-2 lg:order-1">
            <p className="font-mono text-[10px] tracking-[0.3em] text-neutral-600 uppercase mb-6">
              Implosion Physics
            </p>

            <p className="text-neutral-300 text-sm leading-relaxed mb-6">
              The Helios Array deploys 192 independent laser beamlines, each frequency-tripled to 351 nm ultraviolet radiation, delivering a combined 3.4 megajoules of energy onto a 2.2mm gold hohlraum capsule within a precisely shaped 20-nanosecond pulse envelope. The hohlraum converts laser energy into a uniform X-ray bath at 3.3 million Kelvin, driving the DT ice shell inward at 380 km/s.
            </p>

            <p className="text-neutral-500 text-sm leading-relaxed mb-8">
              Achieving thermonuclear ignition requires implosion symmetry better than 1% RMS across the capsule surface. Our adaptive optics system and precision pulse shaping maintain 0.8% RMS symmetry, ensuring the Rayleigh-Taylor instability growth factor remains below the critical threshold. The resulting hot-spot ignition propagates a supersonic burn wave through the compressed DT fuel, releasing 3.15 MJ of fusion energy — a gain factor of 32× over laser input.
            </p>

            {/* Spec table */}
            <div className="border border-[#262626]">
              <div className="px-4 py-2 border-b border-[#262626]">
                <span className="font-mono text-[10px] text-neutral-600 tracking-widest uppercase">
                  System Parameters
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
              <p className="font-mono text-[9px] text-neutral-700 tracking-widest uppercase mb-2">Ignition Condition</p>
              <p className="font-mono text-sm text-neutral-300">ρR ≥ 0.3 g/cm² at T_hs ≥ 10 keV</p>
              <p className="font-mono text-xs text-neutral-600 mt-1">Helios-3: ρR = 0.41 g/cm² — Ignition Confirmed</p>
            </div>
          </div>

          {/* Right: Image + Telemetry */}
          <div className="space-y-4 order-1 lg:order-2">
            <div className="relative border border-[#262626] overflow-hidden aspect-[4/3]">
              <img
                alt="Helios laser array beams converging on hohlraum capsule"
                className="w-full h-full object-cover"
                data-strk-img-id="helios-laser-d4e5f6"
                data-strk-img="[helios-title] high power laser beams emerald green cyan converging gold capsule dark field inertial confinement fusion"
                data-strk-img-ratio="4x3"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/60 to-transparent" />
              <div className="absolute top-4 left-4 bg-[#050505]/80 border border-[#262626] px-3 py-2 backdrop-blur-sm">
                <p className="font-mono text-[9px] text-neutral-500 tracking-widest uppercase">Dark-Field Capture</p>
                <p className="font-mono text-[9px] text-neutral-400">HELIOS-3 // NIF-CLASS</p>
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
        </div>
      </div>
    </section>
  );
}
