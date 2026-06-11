import { useState, useEffect, useRef } from 'react';
import { X, Maximize2, Activity, Cpu, Zap, Orbit, Radio, ShieldAlert } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const slides = [
  {
    id: 'slide-plasma-turbulence',
    index: '01',
    title: 'Plasma Turbulence Strobe',
    category: 'Thermal Diagnostics',
    icon: Activity,
    classification: 'ACTIVE BURN',
    statusColor: '#00FF88',
    titleId: 'slide-plasma-turbulence-title',
    descId: 'slide-plasma-turbulence-desc',
    imgId: 'gallery-slide-plasma-turbulence-a1b2',
    desc: 'High-speed strobe capture of a burning plasma core cross-section, revealing turbulent heat distribution gradients from 150 MK core to 10 MK edge. False-color thermal mapping: red-hot core (150 MK) transitioning through orange, yellow, and violet edge plasma.',
    telemetry: [
      { label: 'Core Temp', value: '1.5 × 10⁸ K' },
      { label: 'Edge Temp', value: '1.0 × 10⁷ K' },
      { label: 'Turbulence Mode', value: 'ITG / ETG' },
      { label: 'Capture Rate', value: '10⁹ fps' },
      { label: 'Diagnostic', value: 'Thomson Scattering' },
      { label: 'Chord Length', value: '2.8 m' },
    ],
  },
  {
    id: 'slide-superconducting-magnet',
    index: '02',
    title: 'Superconducting Magnet Core',
    category: 'Cryogenic Systems',
    icon: Orbit,
    classification: 'CRYOGENIC',
    statusColor: '#A0A0FF',
    titleId: 'slide-superconducting-magnet-title',
    descId: 'slide-superconducting-magnet-desc',
    imgId: 'gallery-slide-superconducting-magnet-c3d4',
    desc: 'UV diagnostic photograph of Nb₃Sn (niobium-tin) superconducting coil windings under 4.5 K cryogenic conditions. The coils glow with characteristic UV fluorescence under diagnostic illumination, revealing the precise winding geometry of the toroidal field coil cross-section.',
    telemetry: [
      { label: 'Operating Temp', value: '4.5 K' },
      { label: 'Peak Field', value: '13.2 T' },
      { label: 'Coil Material', value: 'Nb₃Sn' },
      { label: 'Current Density', value: '1,000 A/mm²' },
      { label: 'Stored Energy', value: '41 GJ' },
      { label: 'Coil Count', value: '18 TF + 6 CS' },
    ],
  },
  {
    id: 'slide-dt-burn-wave',
    index: '03',
    title: 'D-T Burn Wave Front',
    category: 'Ignition Physics',
    icon: Zap,
    classification: 'IGNITION EVENT',
    statusColor: '#FFB800',
    titleId: 'slide-dt-burn-wave-title',
    descId: 'slide-dt-burn-wave-desc',
    imgId: 'gallery-slide-dt-burn-wave-e5f6',
    desc: 'Computational fluid dynamics simulation of a thermonuclear burn wave propagating outward from the central hot spot of an ICF implosion. Multi-color thermal mapping shows the ignition front (white-hot, 100 keV) propagating through compressed D-T fuel at 1,000× liquid density.',
    telemetry: [
      { label: 'Hot Spot Temp', value: '100 keV' },
      { label: 'Burn Velocity', value: '3 × 10⁸ cm/s' },
      { label: 'Areal Density', value: 'ρR = 1.3 g/cm²' },
      { label: 'Burn Fraction', value: '67%' },
      { label: 'Yield', value: '3.88 MJ' },
      { label: 'Simulation Code', value: 'HYDRA / LASNEX' },
    ],
  },
  {
    id: 'slide-divertor-heat',
    index: '04',
    title: 'Divertor Heat Exhaust',
    category: 'Plasma-Facing Components',
    icon: ShieldAlert,
    classification: 'THERMAL LOAD',
    statusColor: '#FF6B00',
    titleId: 'slide-divertor-heat-title',
    descId: 'slide-divertor-heat-desc',
    imgId: 'gallery-slide-divertor-heat-g7h8',
    desc: 'Infrared and visible-light photograph of a tungsten monoblock divertor target under full-power plasma exhaust conditions. The tungsten surface glows with intense incandescent orange and yellow thermal emission under a heat flux of 20 MW/m², approaching the material\'s operational limit of 1,500°C.',
    telemetry: [
      { label: 'Heat Flux', value: '20 MW/m²' },
      { label: 'Surface Temp', value: '1,500°C' },
      { label: 'Material', value: 'W-grade Tungsten' },
      { label: 'Cooling', value: 'CuCrZr — 10 MPa' },
      { label: 'Tile Thickness', value: '28 mm' },
      { label: 'Lifetime', value: '~5,000 full shots' },
    ],
  },
  {
    id: 'slide-plasma-injector',
    index: '05',
    title: 'Plasma Liner Injector Array',
    category: 'MIF Systems',
    icon: Radio,
    classification: 'PULSED POWER',
    statusColor: '#CC44FF',
    titleId: 'slide-plasma-injector-title',
    descId: 'slide-plasma-injector-desc',
    imgId: 'gallery-slide-plasma-injector-i9j0',
    desc: 'Long-exposure photograph of 60 plasma gun injectors firing simultaneously, creating a converging spherical plasma liner for magneto-inertial fusion compression. Violet electrical arcs and orange plasma jets are visible against the stark black vacuum chamber background.',
    telemetry: [
      { label: 'Injector Count', value: '60 guns' },
      { label: 'Liner Velocity', value: '3 km/s' },
      { label: 'Pulse Energy', value: '1 MJ' },
      { label: 'Pulse Duration', value: '10 μs' },
      { label: 'Liner Material', value: 'Argon plasma' },
      { label: 'Symmetry', value: '≤ 2% RMS' },
    ],
  },
  {
    id: 'slide-tritium-breeding',
    index: '06',
    title: 'Tritium Breeding Blanket',
    category: 'Fuel Cycle',
    icon: Cpu,
    classification: 'FUEL CYCLE',
    statusColor: '#00FF88',
    titleId: 'slide-tritium-breeding-title',
    descId: 'slide-tritium-breeding-desc',
    imgId: 'gallery-slide-tritium-breeding-k1l2',
    desc: 'Cross-section photograph of a lithium-6 ceramic pebble bed tritium breeding blanket module under neutron irradiation. The Li₆ pebbles emit characteristic green-blue Cherenkov radiation as 14.1 MeV fusion neutrons are moderated and captured, breeding tritium at a TBR of 1.05.',
    telemetry: [
      { label: 'Breeding Ratio', value: 'TBR = 1.05' },
      { label: 'Blanket Material', value: 'Li₆ Ceramic Pebbles' },
      { label: 'Neutron Energy', value: '14.1 MeV' },
      { label: 'Tritium Output', value: '55 g/day' },
      { label: 'Coolant', value: 'He @ 8 MPa' },
      { label: 'Blanket Temp', value: '650°C' },
    ],
  },
];

function GallerySlide({ slide, onOpen }) {
  const [hovered, setHovered] = useState(false);
  const Icon = slide.icon;

  return (
    <div
      className="relative overflow-hidden border border-[#262626] cursor-pointer group"
      style={{ aspectRatio: '4/3' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onOpen(slide)}
    >
      {/* Image */}
      <img
        data-strk-img-id={slide.imgId}
        data-strk-img={`[${slide.descId}] [${slide.titleId}]`}
        data-strk-img-ratio="4x3"
        data-strk-img-width="700"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        alt={slide.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Scan overlay */}
      <div className="absolute inset-0 scan-overlay z-10" />

      {/* Top-left badge */}
      <div className="absolute top-3 left-3 z-20 flex items-center gap-2">
        <div className="bg-[#050505]/90 border border-[#262626] px-2 py-1 flex items-center gap-1.5">
          <div
            className="w-1.5 h-1.5 rounded-full telemetry-live"
            style={{ backgroundColor: slide.statusColor }}
          />
          <span className="font-mono text-[8px] tracking-widest uppercase" style={{ color: slide.statusColor }}>
            {slide.classification}
          </span>
        </div>
      </div>

      {/* Index */}
      <div className="absolute top-3 right-3 z-20">
        <span className="font-mono text-[10px] text-[#3a3a3a] tracking-widest">{slide.index}</span>
      </div>

      {/* Bottom info — always visible */}
      <div className="absolute bottom-0 left-0 right-0 z-20 p-4"
        style={{ background: 'linear-gradient(to top, rgba(5,5,5,0.95) 0%, transparent 100%)' }}>
        <div className="font-mono text-[9px] text-[#606060] tracking-widest uppercase mb-1">
          {slide.category}
        </div>
        <h3 id={slide.titleId} className="font-grotesk font-semibold text-white text-sm tracking-tight">
          {slide.title}
        </h3>
        <p id={slide.descId} className="hidden">{slide.desc}</p>
      </div>

      {/* Hover overlay */}
      <div
        className={`absolute inset-0 z-30 bg-[#050505]/90 flex flex-col justify-center p-6 transition-opacity duration-300 ${
          hovered ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="flex items-center gap-2 mb-4">
          <div className="w-6 h-6 border border-[#262626] flex items-center justify-center">
            <Icon className="w-3 h-3 text-[#606060]" />
          </div>
          <span className="font-mono text-[9px] text-[#606060] tracking-widest uppercase">
            {slide.category}
          </span>
        </div>
        <h3 className="font-grotesk font-semibold text-white text-base tracking-tight mb-3">
          {slide.title}
        </h3>
        <p className="text-[#606060] text-xs leading-relaxed mb-4 line-clamp-3">
          {slide.desc}
        </p>
        <div className="grid grid-cols-2 gap-1.5">
          {slide.telemetry.slice(0, 4).map((t) => (
            <div key={t.label} className="border border-[#262626] px-2 py-1.5">
              <div className="font-mono text-[8px] text-[#606060] tracking-widest uppercase">{t.label}</div>
              <div className="font-mono text-[10px] text-white tracking-wide">{t.value}</div>
            </div>
          ))}
        </div>
        <div className="mt-4 flex items-center gap-2 font-mono text-[9px] text-[#606060] tracking-widest uppercase">
          <Maximize2 className="w-3 h-3" />
          <span>Click to expand</span>
        </div>
      </div>
    </div>
  );
}

function SlideModal({ slide, onClose }) {
  const Icon = slide.icon;

  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 bg-[#050505]/95 flex items-center justify-center p-4 lg:p-8"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl bg-[#121212] border border-[#262626] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#262626]">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 border border-[#262626] flex items-center justify-center">
              <Icon className="w-3 h-3 text-[#606060]" />
            </div>
            <div>
              <div className="font-mono text-[9px] text-[#606060] tracking-widest uppercase">
                {slide.category} — Asset {slide.index}
              </div>
              <h3 className="font-grotesk font-semibold text-white text-base tracking-tight">
                {slide.title}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 border border-[#262626] flex items-center justify-center hover:border-white transition-colors"
          >
            <X className="w-4 h-4 text-white" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Image */}
          <div className="relative overflow-hidden border-b lg:border-b-0 lg:border-r border-[#262626]" style={{ minHeight: '320px' }}>
            <div className="absolute inset-0 scan-overlay z-10" />
            <img
              data-strk-img-id={`${slide.imgId}-modal`}
              data-strk-img={`[${slide.descId}] [${slide.titleId}]`}
              data-strk-img-ratio="4x3"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={slide.title}
              className="w-full h-full object-cover absolute inset-0"
            />
            <div className="absolute top-3 left-3 z-20">
              <div className="bg-[#050505]/90 border border-[#262626] px-2 py-1 flex items-center gap-1.5">
                <div
                  className="w-1.5 h-1.5 rounded-full telemetry-live"
                  style={{ backgroundColor: slide.statusColor }}
                />
                <span className="font-mono text-[8px] tracking-widest uppercase" style={{ color: slide.statusColor }}>
                  {slide.classification}
                </span>
              </div>
            </div>
          </div>

          {/* Data */}
          <div className="p-6 lg:p-8">
            <p className="text-[#A0A0A0] text-sm leading-relaxed mb-6">
              {slide.desc}
            </p>
            <div className="font-mono text-[10px] text-[#606060] tracking-widest uppercase mb-4">
              Telemetry Data
            </div>
            <div className="grid grid-cols-2 gap-2">
              {slide.telemetry.map((t) => (
                <div key={t.label} className="border border-[#262626] p-3 bg-[#050505]">
                  <div className="font-mono text-[8px] text-[#606060] tracking-widest uppercase mb-1">{t.label}</div>
                  <div className="font-mono text-xs text-white tracking-wide">{t.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Gallery() {
  const [activeSlide, setActiveSlide] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="bg-[#050505] min-h-screen pt-16">

      {/* Page Header */}
      <div className="border-b border-[#262626] bg-[#121212]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-[#00FF88] telemetry-live" />
            <span className="font-mono text-[10px] text-[#00FF88] tracking-widest uppercase">
              Telemetry & Industrial Gallery — High-Resolution Asset Archive
            </span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <h1 className="font-grotesk font-bold text-white leading-none tracking-tighter mb-4"
                style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
                Diagnostic<br />Asset Archive
              </h1>
              <p className="text-[#A0A0A0] text-base leading-relaxed max-w-xl">
                High-resolution scientific imagery and computational diagnostics from active fusion experiments. Each asset is annotated with real-time telemetry data from the corresponding reactor system.
              </p>
            </div>
            <div className="flex items-center gap-6 border border-[#262626] px-6 py-4 bg-[#050505]">
              <div>
                <div className="font-mono text-[9px] text-[#606060] tracking-widest uppercase">Total Assets</div>
                <div className="font-mono text-2xl text-white tracking-tight">{slides.length.toString().padStart(2, '0')}</div>
              </div>
              <div className="w-px h-10 bg-[#262626]" />
              <div>
                <div className="font-mono text-[9px] text-[#606060] tracking-widest uppercase">Classification</div>
                <div className="font-mono text-sm text-white tracking-wide">UNCLASSIFIED</div>
              </div>
              <div className="w-px h-10 bg-[#262626]" />
              <div>
                <div className="font-mono text-[9px] text-[#606060] tracking-widest uppercase">Archive</div>
                <div className="font-mono text-sm text-white tracking-wide">2026-06-11</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">

        {/* Grid Header */}
        <div className="flex items-center gap-4 mb-8">
          <span className="font-mono text-[10px] text-[#606060] tracking-widest uppercase">
            Hover to inspect — Click to expand
          </span>
          <div className="h-px flex-1 bg-[#262626]" />
          <span className="font-mono text-[10px] text-[#3a3a3a] tracking-widest">
            {slides.length} assets
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-[#262626]">
          {slides.map((slide, i) => (
            <div
              key={slide.id}
              className={`${
                i % 3 !== 2 ? 'border-r border-[#262626]' : ''
              } ${
                i < slides.length - 3 ? 'border-b border-[#262626]' : ''
              } ${
                i < slides.length - 1 && (i + 1) % 3 === 0 ? 'border-b border-[#262626]' : ''
              }`}
            >
              <GallerySlide slide={slide} onOpen={setActiveSlide} />
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="mt-12 border border-[#262626] p-6 bg-[#121212]">
          <div className="font-mono text-[10px] text-[#606060] tracking-widest uppercase mb-4">
            Classification Legend
          </div>
          <div className="flex flex-wrap gap-6">
            {[
              { color: '#00FF88', label: 'Active Burn / Fuel Cycle' },
              { color: '#A0A0FF', label: 'Cryogenic Systems' },
              { color: '#FFB800', label: 'Ignition Events' },
              { color: '#FF6B00', label: 'Thermal Load' },
              { color: '#CC44FF', label: 'Pulsed Power' },
            ].map(({ color, label }) => (
              <div key={label} className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
                <span className="font-mono text-[10px] text-[#606060] tracking-wider">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {activeSlide && (
        <SlideModal slide={activeSlide} onClose={() => setActiveSlide(null)} />
      )}
    </div>
  );
}
