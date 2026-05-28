import { useState, useEffect, useRef } from 'react';
import { X, ZoomIn, Activity } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const SLIDES = [
  {
    id: 'plasma-turbulence',
    number: '001',
    title: 'Plasma Turbulence Strobe',
    category: 'Plasma Diagnostics',
    description:
      'High-speed Thomson scattering diagnostic capture of a burning plasma core cross-section. False-color thermal mapping reveals heat distribution gradients from 150 million Kelvin at the magnetic axis (deep violet) to 10 million Kelvin at the separatrix (infrared red). Turbulent eddies at the 10 mm scale are resolved at 10 ns temporal resolution.',
    specs: [
      { label: 'Capture Method', value: 'Thomson Scattering' },
      { label: 'Temporal Res.', value: '10 ns' },
      { label: 'Spatial Res.', value: '1 mm' },
      { label: 'T_e Range', value: '10M – 150M K' },
      { label: 'Color Map', value: 'Thermal Gradient' },
      { label: 'Reactor', value: 'Daedalus-VII' },
    ],
    imgSrc: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=90',
    imgAlt: 'Plasma turbulence cross-section — colorful heat distribution gradient from red to violet',
    imgId: 'gallery-plasma-turbulence-4f2a1b',
    imgQuery: '[slide-1-title] [slide-1-cat]',
  },
  {
    id: 'superconducting-magnet',
    number: '002',
    title: 'Superconducting Magnet Core',
    category: 'Cryogenic Engineering',
    description:
      'UV fluorescence diagnostic photograph of a niobium-tin (Nb₃Sn) superconducting coil winding pack under liquid helium pre-cooling. The characteristic blue-violet glow reveals the REBCO high-temperature superconductor tape layers within the cable-in-conduit conductor (CICC). Operating at 4.2 K, these coils sustain 8.2 Tesla without resistive losses.',
    specs: [
      { label: 'Material', value: 'Nb₃Sn / REBCO' },
      { label: 'Operating Temp', value: '4.2 K' },
      { label: 'Field Strength', value: '8.2 T' },
      { label: 'Current Density', value: '650 A/mm²' },
      { label: 'Diagnostic', value: 'UV Fluorescence' },
      { label: 'Coil Count', value: '18 TF Coils' },
    ],
    imgSrc: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=90',
    imgAlt: 'Superconducting magnet coil — niobium-tin winding glowing under UV diagnostic light',
    imgId: 'gallery-superconducting-magnet-8c3e5f',
    imgQuery: '[slide-2-title] [slide-2-cat]',
  },
  {
    id: 'dt-burn-wave',
    number: '003',
    title: 'D-T Burn Wave Front',
    category: 'Ignition Physics',
    description:
      'Computational radiation-hydrodynamics simulation of a thermonuclear ignition front propagating through compressed D-T fuel. Multi-color thermal mapping shows the alpha-particle deposition zone (white-yellow core), the burn wave front (orange-red), and the unburned compressed fuel (deep blue-violet). Simulation timestep: 100 ps intervals from ignition.',
    specs: [
      { label: 'Simulation Code', value: 'HYDRA / LASNEX' },
      { label: 'Timestep', value: '100 ps' },
      { label: 'Peak T_ion', value: '100 keV' },
      { label: 'Burn Fraction', value: '34%' },
      { label: 'Alpha Heating', value: '3.5 MeV' },
      { label: 'Yield', value: '103 MJ' },
    ],
    imgSrc: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=90',
    imgAlt: 'D-T burn wave front simulation — multi-color thermal mapping of fusion ignition',
    imgId: 'gallery-dt-burn-wave-1d7b9e',
    imgQuery: '[slide-3-title] [slide-3-cat]',
  },
  {
    id: 'divertor-heat',
    number: '004',
    title: 'Divertor Heat Exhaust',
    category: 'Plasma-Facing Components',
    description:
      'Infrared thermography of a tungsten monoblock divertor target under full-power plasma exhaust conditions. The incandescent orange-yellow glow indicates surface temperatures approaching 2,500°C under 20 MW/m² steady-state heat flux. Active water cooling channels maintain structural integrity. This component is the most thermally loaded surface in any fusion device.',
    specs: [
      { label: 'Material', value: 'W Monoblocks' },
      { label: 'Heat Flux', value: '20 MW/m²' },
      { label: 'Surface Temp', value: '2,500 °C' },
      { label: 'Cooling', value: 'Active H₂O' },
      { label: 'Diagnostic', value: 'IR Thermography' },
      { label: 'Lifetime', value: '5,000 h' },
    ],
    imgSrc: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=90',
    imgAlt: 'Tungsten divertor glowing incandescent orange-yellow under intense thermal heat flux',
    imgId: 'gallery-divertor-heat-6a4c2d',
    imgQuery: '[slide-4-title] [slide-4-cat]',
  },
];

function GallerySlide({ slide, onOpen }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative overflow-hidden border border-[#262626] cursor-pointer group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onOpen(slide)}
    >
      {/* Image */}
      <div className="aspect-[4/3] relative overflow-hidden">
        <img
          src={slide.imgSrc}
          alt={slide.imgAlt}
          className="w-full h-full object-cover img-zoom"
          data-strk-img-id={slide.imgId}
          data-strk-img={slide.imgQuery}
          data-strk-img-ratio="4x3"
          data-strk-img-width="800"
        />
        {/* Hover overlay */}
        <div
          className={`absolute inset-0 bg-[#050505]/85 backdrop-blur-sm flex flex-col justify-between p-6 transition-opacity duration-300 ${
            hovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="flex items-start justify-between">
            <div className="font-mono text-[9px] text-[#555555] tracking-widest uppercase">{slide.category}</div>
            <ZoomIn className="w-4 h-4 text-white" />
          </div>
          <div>
            <h3 className="text-white font-bold text-lg tracking-tight mb-3">{slide.title}</h3>
            <p className="text-[#A0A0A0] text-xs leading-relaxed line-clamp-3">{slide.description}</p>
            <div className="mt-4 grid grid-cols-2 gap-2">
              {slide.specs.slice(0, 4).map(({ label, value }) => (
                <div key={label}>
                  <div className="font-mono text-[8px] text-[#555555] uppercase">{label}</div>
                  <div className="font-mono text-[10px] text-white">{value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom label */}
      <div className="bg-[#0a0a0a] border-t border-[#262626] px-5 py-4 flex items-center justify-between">
        <div>
          <div className="font-mono text-[9px] text-[#555555] tracking-widest uppercase">{slide.category}</div>
          <div className="font-mono text-xs text-white font-bold mt-0.5">{slide.title}</div>
        </div>
        <div className="font-mono text-2xl font-black text-[#1a1a1a] group-hover:text-[#262626] transition-colors duration-300">
          {slide.number}
        </div>
      </div>
    </div>
  );
}

function SlideModal({ slide, onClose }) {
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 bg-[#050505]/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      <div
        className="bg-[#0a0a0a] border border-[#262626] max-w-5xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#262626]">
          <div className="flex items-center gap-4">
            <span className="font-mono text-[9px] text-[#555555] tracking-widest uppercase">{slide.category}</span>
            <span className="text-[#262626]">—</span>
            <span className="font-mono text-xs text-white font-bold">{slide.title}</span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 border border-[#262626] flex items-center justify-center hover:border-white transition-colors duration-200"
          >
            <X className="w-4 h-4 text-white" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden">
            <img
              src={slide.imgSrc}
              alt={slide.imgAlt}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 w-5 h-5 border-t border-l border-white/30" />
            <div className="absolute bottom-4 right-4 w-5 h-5 border-b border-r border-white/30" />
          </div>

          {/* Details */}
          <div className="p-8 flex flex-col justify-between">
            <div>
              <div className="font-mono text-[9px] text-[#555555] tracking-widest uppercase mb-2">{slide.category}</div>
              <h2 className="text-2xl font-black tracking-tighter text-white mb-4">{slide.title}</h2>
              <div className="w-6 h-px bg-[#262626] mb-5" />
              <p className="text-[#A0A0A0] text-sm leading-relaxed">{slide.description}</p>
            </div>
            <div className="mt-8">
              <div className="font-mono text-[9px] text-[#555555] tracking-widest uppercase mb-4">Telemetry Data</div>
              <div className="grid grid-cols-2 gap-0 border border-[#262626]">
                {slide.specs.map(({ label, value }, i) => (
                  <div
                    key={label}
                    className={`px-4 py-3 ${i % 2 === 0 ? 'border-r border-[#262626]' : ''} ${i < slide.specs.length - 2 ? 'border-b border-[#262626]' : ''}`}
                  >
                    <div className="font-mono text-[8px] text-[#555555] tracking-widest uppercase">{label}</div>
                    <div className="font-mono text-xs text-white font-bold mt-0.5">{value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function GalleryGrid() {
  const [activeSlide, setActiveSlide] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hidden text refs */}
      <span id="slide-1-title" className="sr-only">Plasma turbulence burning core heat distribution thermal gradient</span>
      <span id="slide-1-cat" className="sr-only">plasma diagnostics fusion reactor</span>
      <span id="slide-2-title" className="sr-only">Superconducting magnet niobium-tin coil UV diagnostic</span>
      <span id="slide-2-cat" className="sr-only">cryogenic engineering fusion reactor coils</span>
      <span id="slide-3-title" className="sr-only">D-T burn wave front thermonuclear ignition simulation</span>
      <span id="slide-3-cat" className="sr-only">ignition physics fusion plasma simulation</span>
      <span id="slide-4-title" className="sr-only">Tungsten divertor heat exhaust incandescent orange thermal</span>
      <span id="slide-4-cat" className="sr-only">plasma-facing components fusion reactor heat</span>

      {/* Gallery grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-l border-t border-[#262626]">
        {SLIDES.map((slide) => (
          <div key={slide.id} className="border-r border-b border-[#262626]">
            <GallerySlide slide={slide} onOpen={setActiveSlide} />
          </div>
        ))}
      </div>

      {/* Status bar */}
      <div className="border-t border-[#262626] px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Activity className="w-3 h-3 text-[#555555]" />
          <span className="font-mono text-[10px] text-[#555555] tracking-widest uppercase">
            {SLIDES.length} Assets — High-Resolution Diagnostic Archive
          </span>
        </div>
        <span className="font-mono text-[10px] text-[#555555] tracking-widest uppercase">
          Hover to Inspect · Click to Expand
        </span>
      </div>

      {/* Modal */}
      {activeSlide && (
        <SlideModal slide={activeSlide} onClose={() => setActiveSlide(null)} />
      )}
    </div>
  );
}
