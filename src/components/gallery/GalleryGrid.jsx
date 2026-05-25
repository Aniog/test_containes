import { useState, useEffect, useRef } from 'react';
import { X, Activity, Cpu, Zap, ShieldAlert } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const slides = [
  {
    id: 'plasma-turbulence',
    tag: 'SLIDE 01',
    title: 'Plasma Turbulence Strobe',
    subtitle: 'Burning Plasma Core Heat Distribution Gradient',
    icon: Activity,
    telemetry: [
      { label: 'Core Temperature', value: '152.4 MK' },
      { label: 'Edge Temperature', value: '0.3 MK' },
      { label: 'Turbulence Mode', value: 'ITG / ETG' },
      { label: 'Transport Coeff.', value: 'χ_i = 0.8 m²/s' },
      { label: 'ELM Frequency', value: '42 Hz' },
      { label: 'Pedestal Height', value: '8.4 keV' },
    ],
    description:
      'False-color cross-sectional strobe capture of a burning D-T plasma core at peak ignition. The thermal gradient spans from 152 million Kelvin at the magnetic axis (deep violet) through intermediate ion temperature zones (red-orange) to the cool plasma edge (blue-green). Ion Temperature Gradient (ITG) turbulence is visible as radial filamentary structures.',
  },
  {
    id: 'superconducting-magnet',
    tag: 'SLIDE 02',
    title: 'Superconducting Magnet Core',
    subtitle: 'Niobium Tin Coil Assembly UV Diagnostic Glowing Blue Violet',
    icon: Cpu,
    telemetry: [
      { label: 'Operating Temp', value: '4.2 K' },
      { label: 'Field Strength', value: '12.4 T' },
      { label: 'Current Density', value: '1,200 A/mm²' },
      { label: 'Coil Material', value: 'Nb₃Sn' },
      { label: 'Stored Energy', value: '41 GJ' },
      { label: 'Quench Margin', value: '2.8 K' },
    ],
    description:
      'Close-up UV fluorescence diagnostic image of a niobium-tin (Nb₃Sn) superconducting coil assembly under 365nm ultraviolet illumination. The characteristic blue-violet glow reveals the superconducting wire winding geometry and epoxy impregnation quality. Operating at 4.2 Kelvin, these coils carry 1,200 A/mm² with zero electrical resistance.',
  },
  {
    id: 'dt-burn-wave',
    tag: 'SLIDE 03',
    title: 'D-T Burn Wave Front',
    subtitle: 'Ignition Propagation Thermal Mapping Multi-Color Simulation',
    icon: Zap,
    telemetry: [
      { label: 'Burn Velocity', value: '1,200 km/s' },
      { label: 'Peak Pressure', value: '10 Gbar' },
      { label: 'Alpha Heating', value: '3.5 MeV' },
      { label: 'Burn Fraction', value: '34%' },
      { label: 'Neutron Yield', value: '1.8 × 10¹⁹' },
      { label: 'Simulation Code', value: 'HYDRA v7.2' },
    ],
    description:
      'Computational multi-physics simulation of a thermonuclear burn wave propagating through compressed D-T fuel at 10 Gbar. The false-color thermal map shows the ignition front (white-yellow) advancing at 1,200 km/s through the dense fuel assembly. Alpha particle self-heating sustains the burn wave as it consumes 34% of the available fuel inventory.',
  },
  {
    id: 'divertor-heat',
    tag: 'SLIDE 04',
    title: 'Divertor Heat Exhaust',
    subtitle: 'Tungsten Divertor Glowing Orange Yellow Thermal Heat Exhaust Fusion Reactor',
    icon: ShieldAlert,
    telemetry: [
      { label: 'Surface Temp', value: '2,800 K' },
      { label: 'Heat Flux', value: '20 MW/m²' },
      { label: 'Material', value: 'W-26Re Alloy' },
      { label: 'Tile Thickness', value: '28 mm' },
      { label: 'Coolant Flow', value: '12 L/s' },
      { label: 'Erosion Rate', value: '0.3 nm/s' },
    ],
    description:
      'High-speed infrared and visible-light composite photograph of a tungsten-rhenium divertor tile under 20 MW/m² plasma heat flux loading. The incandescent orange-yellow glow indicates surface temperatures approaching 2,800 Kelvin — near the tungsten melting point. Active water cooling at 12 L/s maintains structural integrity while the divertor exhausts helium ash and impurities from the plasma.',
  },
];

function GallerySlide({ slide, index }) {
  const [hovered, setHovered] = useState(false);
  const [selected, setSelected] = useState(false);
  const Icon = slide.icon;

  return (
    <>
      {/* Hidden text elements for image query interpolation */}
      <span id={`${slide.id}-title`} className="sr-only">{slide.title}</span>
      <span id={`${slide.id}-subtitle`} className="sr-only">{slide.subtitle}</span>

      <div
        className="relative border border-[#262626] overflow-hidden cursor-pointer group aspect-[4/3]"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => setSelected(true)}
      >
        {/* Image */}
        <img
          alt={slide.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          data-strk-img-id={`gallery-slide-${index}-${slide.id.slice(0, 6)}`}
          data-strk-img={`[${slide.id}-subtitle] [${slide.id}-title]`}
          data-strk-img-ratio="4x3"
          data-strk-img-width="700"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        />

        {/* Default overlay — bottom info */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <p className="font-mono text-[9px] text-neutral-600 tracking-widest uppercase mb-1">{slide.tag}</p>
          <p className="font-mono text-sm text-white font-light">{slide.title}</p>
        </div>

        {/* Top-left icon */}
        <div className="absolute top-4 left-4 w-7 h-7 border border-[#262626] bg-[#050505]/60 flex items-center justify-center backdrop-blur-sm">
          <Icon className="w-3.5 h-3.5 text-neutral-500" />
        </div>

        {/* Hover overlay */}
        <div
          className={`absolute inset-0 bg-white transition-opacity duration-300 flex flex-col justify-between p-5 ${
            hovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div>
            <p className="font-mono text-[9px] text-neutral-500 tracking-widest uppercase mb-2">{slide.tag}</p>
            <p className="font-mono text-base text-black font-medium uppercase leading-tight mb-2">{slide.title}</p>
            <p className="font-mono text-[10px] text-neutral-500 uppercase">{slide.subtitle}</p>
          </div>
          <div className="space-y-1.5">
            {slide.telemetry.slice(0, 3).map(({ label, value }) => (
              <div key={label} className="flex items-center justify-between border-b border-neutral-200 pb-1">
                <span className="font-mono text-[9px] text-neutral-500 uppercase tracking-widest">{label}</span>
                <span className="font-mono text-[10px] text-black font-medium">{value}</span>
              </div>
            ))}
            <p className="font-mono text-[9px] text-neutral-400 pt-1">Click for full telemetry →</p>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 bg-[#050505]/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
          onClick={() => setSelected(false)}
        >
          <div
            className="bg-[#0a0a0a] border border-[#262626] max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            {/* Modal header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#262626]">
              <div>
                <p className="font-mono text-[9px] text-neutral-600 tracking-widest uppercase">{slide.tag}</p>
                <p className="font-mono text-lg text-white uppercase font-light">{slide.title}</p>
              </div>
              <button
                onClick={() => setSelected(false)}
                className="w-8 h-8 border border-[#262626] flex items-center justify-center hover:border-neutral-400 transition-colors"
              >
                <X className="w-4 h-4 text-neutral-400" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Image */}
              <div className="relative aspect-[4/3] border-b md:border-b-0 md:border-r border-[#262626]">
                <img
                  alt={slide.title}
                  className="w-full h-full object-cover"
                  data-strk-img-id={`gallery-modal-${index}-${slide.id.slice(0, 6)}`}
                  data-strk-img={`[${slide.id}-subtitle] [${slide.id}-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>

              {/* Telemetry panel */}
              <div className="p-6 flex flex-col">
                <p className="font-mono text-[10px] text-neutral-600 tracking-widest uppercase mb-4">
                  Full Telemetry Readout
                </p>
                <div className="space-y-2 mb-6">
                  {slide.telemetry.map(({ label, value }) => (
                    <div key={label} className="flex items-center justify-between border-b border-[#1f1f1f] pb-2">
                      <span className="font-mono text-[10px] text-neutral-600 uppercase tracking-widest">{label}</span>
                      <span className="font-mono text-xs text-white">{value}</span>
                    </div>
                  ))}
                </div>
                <p className="text-neutral-500 text-xs leading-relaxed flex-1">
                  {slide.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default function GalleryGrid() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1f1f1f] border border-[#262626]">
        {slides.map((slide, i) => (
          <div key={slide.id} className="bg-[#050505]">
            <GallerySlide slide={slide} index={i} />
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-between">
        <p className="font-mono text-[10px] text-neutral-700 tracking-widest uppercase">
          {slides.length} High-Resolution Assets — Hover to Preview / Click for Full Telemetry
        </p>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          <span className="font-mono text-[10px] text-neutral-600 tracking-widest uppercase">Live Archive</span>
        </div>
      </div>
    </div>
  );
}
