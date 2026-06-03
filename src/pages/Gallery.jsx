import { useState, useEffect, useRef } from 'react';
import { X, Maximize2, Activity, Cpu, Radio, Zap } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const SLIDES = [
  {
    id: 'slide-plasma-turbulence',
    code: 'PLT-001',
    title: 'Plasma Turbulence Strobe',
    category: 'Plasma Diagnostics',
    desc: 'High-speed schlieren photography of a burning plasma core cross-section, revealing heat distribution gradients from 150 million °C core to 10,000 °C edge. Turbulent eddies at the ion gyroradius scale (ρi ≈ 3 mm) are resolved at 10 GHz frame rate.',
    specs: [
      ['Capture Rate', '10 GHz'],
      ['Core Temp', '150M °C'],
      ['Edge Temp', '10,000 °C'],
      ['Gradient Scale', '3 mm'],
    ],
    icon: Activity,
    imgId: 'slide-plasma-turbulence-img-a1b2c3',
    titleId: 'slide-plasma-turbulence-title',
    descId: 'slide-plasma-turbulence-desc',
    imgQuery: 'plasma turbulence heat distribution gradient colorful cross section burning fusion core red violet thermal',
  },
  {
    id: 'slide-superconducting-magnet',
    code: 'SCM-002',
    title: 'Superconducting Magnet Core',
    category: 'Cryogenic Systems',
    desc: 'UV diagnostic fluorescence imaging of niobium-tin (Nb₃Sn) superconducting coil windings at 4.5 K. The characteristic blue-violet glow reveals current distribution uniformity across 10,000 turns of 0.8 mm wire, critical for achieving 8.2 Tesla field homogeneity.',
    specs: [
      ['Wire Diameter', '0.8 mm'],
      ['Turn Count', '10,000'],
      ['Operating Temp', '4.5 K'],
      ['Field Strength', '8.2 T'],
    ],
    icon: Cpu,
    imgId: 'slide-superconducting-magnet-img-d4e5f6',
    titleId: 'slide-superconducting-magnet-title',
    descId: 'slide-superconducting-magnet-desc',
    imgQuery: 'superconducting magnet coil niobium UV diagnostic light glowing blue violet close up scientific laboratory',
  },
  {
    id: 'slide-dt-burn-wave',
    code: 'DTB-003',
    title: 'D-T Burn Wave Front',
    category: 'Ignition Physics',
    desc: 'Computational fluid dynamics simulation of a deuterium-tritium fusion burn wave propagating through compressed fuel at 10²⁶ m⁻³ density. Multi-color thermal mapping shows the ignition front (white-hot, 100 keV) propagating outward through unburned fuel (blue-cold, 1 keV) at 1,000 km/s.',
    specs: [
      ['Propagation Vel.', '1,000 km/s'],
      ['Hot Spot Temp', '100 keV'],
      ['Fuel Density', '10²⁶ m⁻³'],
      ['Burn Fraction', '34%'],
    ],
    icon: Zap,
    imgId: 'slide-dt-burn-wave-img-g7h8i9',
    titleId: 'slide-dt-burn-wave-title',
    descId: 'slide-dt-burn-wave-desc',
    imgQuery: 'nuclear fusion burn wave simulation computational thermal mapping colorful ignition front plasma physics visualization',
  },
  {
    id: 'slide-divertor-heat',
    code: 'DVT-004',
    title: 'Divertor Heat Exhaust',
    category: 'Plasma-Facing Components',
    desc: 'Infrared thermography of a tungsten monoblock divertor target under 20 MW/m² steady-state heat flux — equivalent to twice the surface of the Sun. The incandescent orange-yellow glow at 2,500°C marks the strike point where exhaust plasma deposits its energy before recycling.',
    specs: [
      ['Heat Flux', '20 MW/m²'],
      ['Surface Temp', '2,500 °C'],
      ['Material', 'W Monoblock'],
      ['Coolant', 'He @ 10 MPa'],
    ],
    icon: Radio,
    imgId: 'slide-divertor-heat-img-j1k2l3',
    titleId: 'slide-divertor-heat-title',
    descId: 'slide-divertor-heat-desc',
    imgQuery: 'tungsten divertor glowing incandescent orange yellow thermal energy heat exhaust industrial high temperature',
  },
  {
    id: 'slide-nbi-system',
    code: 'NBI-005',
    title: 'Neutral Beam Injector',
    category: 'Auxiliary Heating',
    desc: 'Long-exposure photograph of a 1 MeV neutral beam injector firing into the tokamak vessel. The brilliant cyan-white beam of energetic deuterium atoms delivers 33 MW of heating power, driving the plasma past the ignition threshold and sustaining the fusion burn.',
    specs: [
      ['Beam Energy', '1 MeV'],
      ['Heating Power', '33 MW'],
      ['Beam Current', '40 A'],
      ['Pulse Length', '3,600 s'],
    ],
    icon: Activity,
    imgId: 'slide-nbi-system-img-m4n5o6',
    titleId: 'slide-nbi-system-title',
    descId: 'slide-nbi-system-desc',
    imgQuery: 'particle accelerator beam injector cyan white glowing high energy physics laboratory neon light beam',
  },
  {
    id: 'slide-tritium-breeding',
    code: 'TBB-006',
    title: 'Tritium Breeding Blanket',
    category: 'Fuel Cycle',
    desc: 'Neutron activation autoradiography of a lithium-6 ceramic pebble bed blanket module after 1,000 hours of neutron irradiation. The green tritium luminescence reveals breeding distribution across 2 million Li₂TiO₃ pebbles, confirming TBR ≥ 1.15 across the full blanket volume.',
    specs: [
      ['TBR', '≥ 1.15'],
      ['Pebble Count', '2M'],
      ['Material', 'Li₂TiO₃'],
      ['Tritium Yield', '1.1 kg/yr'],
    ],
    icon: Cpu,
    imgId: 'slide-tritium-breeding-img-p7q8r9',
    titleId: 'slide-tritium-breeding-title',
    descId: 'slide-tritium-breeding-desc',
    imgQuery: 'tritium breeding blanket lithium ceramic pebble green luminescence nuclear radiation scientific laboratory glowing',
  },
];

function SlideCard({ slide, onClick }) {
  const Icon = slide.icon;
  return (
    <div
      className="group relative bg-[#050505] border border-[#262626] cursor-pointer hover:border-[#5a5a5a] transition-all duration-300 flex flex-col"
      onClick={() => onClick(slide)}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden img-zoom scan-overlay">
        <img
          data-strk-img-id={slide.imgId}
          data-strk-img={`[${slide.descId}] [${slide.titleId}]`}
          data-strk-img-ratio="4x3"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={slide.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-[#050505]/0 group-hover:bg-[#050505]/20 transition-all duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-[#262626] bg-[#050505]/90 p-3">
            <Maximize2 className="w-4 h-4 text-white" />
          </div>
        </div>

        {/* Code badge */}
        <div className="absolute top-3 left-3 bg-[#050505]/90 border border-[#262626] px-2 py-1">
          <span className="text-[9px] font-mono tracking-widest uppercase text-[#5a5a5a]">{slide.code}</span>
        </div>
      </div>

      {/* Info */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-2">
          <Icon className="w-3 h-3 text-[#5a5a5a]" />
          <span className="text-[9px] font-mono tracking-widest uppercase text-[#5a5a5a]">{slide.category}</span>
        </div>
        <h3 id={slide.titleId} className="text-sm font-grotesk font-semibold text-white mb-2 leading-snug">
          {slide.title}
        </h3>
        <p id={slide.descId} className="text-[10px] text-[#5a5a5a] leading-relaxed line-clamp-2 flex-1">
          {slide.imgQuery}
        </p>
        <div className="mt-4 pt-3 border-t border-[#262626] grid grid-cols-2 gap-2">
          {slide.specs.slice(0, 2).map(([k, v]) => (
            <div key={k}>
              <div className="text-[9px] font-mono text-[#5a5a5a]">{k}</div>
              <div className="text-[10px] font-mono text-white">{v}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SlideModal({ slide, onClose }) {
  const Icon = slide.icon;
  return (
    <div
      className="fixed inset-0 z-50 bg-[#050505]/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl bg-[#050505] border border-[#262626] max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#262626]">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 border border-[#262626] flex items-center justify-center">
              <Icon className="w-3.5 h-3.5 text-[#5a5a5a]" />
            </div>
            <div>
              <div className="text-[9px] font-mono tracking-widest uppercase text-[#5a5a5a]">{slide.code} / {slide.category}</div>
              <div className="text-sm font-grotesk font-semibold text-white">{slide.title}</div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 border border-[#262626] flex items-center justify-center hover:border-[#5a5a5a] transition-colors"
          >
            <X className="w-4 h-4 text-[#5a5a5a]" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-[4/3] scan-overlay">
            <img
              src={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E`}
              data-strk-img-id={`${slide.imgId}-modal`}
              data-strk-img={`[${slide.descId}] [${slide.titleId}]`}
              data-strk-img-ratio="4x3"
              data-strk-img-width="900"
              alt={slide.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Telemetry */}
          <div className="p-8 border-l border-[#262626]">
            <div className="text-[9px] font-mono tracking-widest uppercase text-[#5a5a5a] mb-4">Technical Analysis</div>
            <p className="text-xs text-[#A0A0A0] leading-relaxed mb-8">{slide.desc}</p>

            <div className="text-[9px] font-mono tracking-widest uppercase text-[#5a5a5a] mb-3">Telemetry Data</div>
            <div className="border border-[#262626] divide-y divide-[#262626]">
              {slide.specs.map(([k, v]) => (
                <div key={k} className="flex items-center justify-between px-4 py-3">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-[#5a5a5a]">{k}</span>
                  <span className="text-xs font-mono text-white">{v}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 blink" />
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#5a5a5a]">
                Asset Verified — IGN/GAL/2026
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Gallery() {
  const [selected, setSelected] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  useEffect(() => {
    if (selected) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [selected]);

  return (
    <div ref={containerRef} className="bg-[#050505]">
      {/* Page Header */}
      <div className="border-b border-[#262626]">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <div className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#5a5a5a] mb-4">
                IGN-DYN / TELEMETRY GALLERY / 2026
              </div>
              <h1 className="text-5xl md:text-6xl font-grotesk font-semibold text-white leading-tight mb-4">
                Telemetry &<br />
                <span className="text-[#5a5a5a]">Industrial Gallery</span>
              </h1>
              <p className="text-sm text-[#A0A0A0] max-w-xl leading-relaxed">
                High-resolution diagnostic assets from active fusion experiments. Each slide represents a captured moment of plasma physics at the frontier of human knowledge.
              </p>
            </div>
            <div className="border border-[#262626] p-6 shrink-0">
              <div className="text-[9px] font-mono tracking-widest uppercase text-[#5a5a5a] mb-3">Archive Status</div>
              <div className="space-y-2">
                <div className="flex justify-between gap-12">
                  <span className="text-[10px] font-mono text-[#5a5a5a]">Total Assets</span>
                  <span className="text-[10px] font-mono text-white">6 / 2,847</span>
                </div>
                <div className="flex justify-between gap-12">
                  <span className="text-[10px] font-mono text-[#5a5a5a]">Classification</span>
                  <span className="text-[10px] font-mono text-white">Public Release</span>
                </div>
                <div className="flex justify-between gap-12">
                  <span className="text-[10px] font-mono text-[#5a5a5a]">Last Updated</span>
                  <span className="text-[10px] font-mono text-white">2026-06-03</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-12">
        {/* Category Filter Bar */}
        <div className="flex items-center gap-px bg-[#262626] border border-[#262626] mb-8 overflow-x-auto">
          {['All Assets', 'Plasma Diagnostics', 'Cryogenic Systems', 'Ignition Physics', 'Plasma-Facing Components', 'Auxiliary Heating', 'Fuel Cycle'].map((cat, i) => (
            <button
              key={cat}
              className={`px-5 py-3 text-[10px] font-mono tracking-widest uppercase whitespace-nowrap transition-colors ${
                i === 0 ? 'bg-white text-black' : 'bg-[#050505] text-[#5a5a5a] hover:text-white hover:bg-[#0a0a0a]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#262626] border border-[#262626]">
          {SLIDES.map((slide) => (
            <div key={slide.id} className="bg-[#050505]">
              <SlideCard slide={slide} onClick={setSelected} />
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-8 flex items-center justify-between">
          <span className="text-[10px] font-mono text-[#5a5a5a]">
            Showing 6 of 2,847 classified assets — Public Release Tier
          </span>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 blink" />
            <span className="text-[10px] font-mono text-[#5a5a5a]">Archive Online</span>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <SlideModal slide={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}
