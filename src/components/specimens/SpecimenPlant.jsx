import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const plantStructures = [
  {
    name: 'Epidermis',
    color: 'text-bio-green',
    bg: 'bg-bio-green/10',
    border: 'border-bio-green/30',
    desc: 'Single-layered protective outer boundary. Cells are tightly packed with a waxy cuticle to prevent water loss.',
  },
  {
    name: 'Xylem',
    color: 'text-slate-300',
    bg: 'bg-white/8',
    border: 'border-white/15',
    desc: 'Dead, hollow vessel elements forming rigid tubes. Transports water and dissolved minerals upward via cohesion-tension.',
  },
  {
    name: 'Phloem',
    color: 'text-phosphor',
    bg: 'bg-phosphor/10',
    border: 'border-phosphor/30',
    desc: 'Living sieve tube elements with companion cells. Bidirectional transport of photosynthetic sugars (sucrose) via pressure flow.',
  },
  {
    name: 'Cortex',
    color: 'text-slate-300',
    bg: 'bg-white/8',
    border: 'border-white/15',
    desc: 'Parenchyma cells between epidermis and vascular bundle. Functions in storage, gas exchange, and structural support.',
  },
];

export default function SpecimenPlant() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section id="plant" ref={containerRef} className="py-28 px-6 lg:px-8 bg-obsidian">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-px bg-bio-green" />
          <span className="font-mono text-xs tracking-widest uppercase text-bio-green">
            Section A — Plant Histology
          </span>
        </div>
        <h2 className="font-grotesk font-bold text-4xl md:text-5xl text-slate-100 leading-tight mb-16">
          The Architecture of Flora
        </h2>

        {/* Split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          {/* Image — 3 cols */}
          <div className="lg:col-span-3 relative">
            <div className="relative rounded-2xl overflow-hidden border border-subtle group">
              <img
                alt="Plant stem cross-section micrograph"
                className="w-full h-80 lg:h-[480px] object-cover"
                data-strk-img-id="plant-stem-mc010"
                data-strk-img="[plant-stem-title] [plant-section-label] plant stem cross section xylem phloem epidermis microscope stained"
                data-strk-img-ratio="4x3"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              {/* Overlay info bar */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal/95 to-transparent p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <div
                      id="plant-stem-title"
                      className="font-grotesk font-semibold text-slate-100 text-sm"
                    >
                      Tilia Stem — Cross Section
                    </div>
                    <div
                      id="plant-section-label"
                      className="font-mono text-xs text-slate-500 mt-0.5"
                    >
                      Safranin-Fast Green Stain
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-phosphor bg-phosphor/10 px-2 py-1 rounded border border-phosphor/20">
                      100×
                    </span>
                    <span className="font-mono text-xs text-slate-300 bg-white/8 px-2 py-1 rounded border border-white/12">
                      Brightfield
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Annotation callouts */}
            <div className="mt-4 grid grid-cols-2 gap-3">
              {plantStructures.map((s) => (
                <div
                  key={s.name}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg border ${s.border} ${s.bg}`}
                >
                  <div className={`w-2 h-2 rounded-full bg-current ${s.color} flex-shrink-0`} />
                  <span className={`font-mono text-xs font-medium ${s.color}`}>{s.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Text — 2 cols */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="font-grotesk font-semibold text-2xl text-slate-100 mb-4">
                Vascular Architecture & Fluid Transport
              </h3>
              <p className="font-inter text-slate-400 text-sm leading-relaxed">
                The cross-section of a Tilia (Linden) stem reveals the elegant organization of plant vascular tissue. Under Safranin-Fast Green staining, lignified cell walls appear red while cellulosic walls stain green — creating a vivid map of structural differentiation.
              </p>
            </div>

            {/* Structure breakdown */}
            <div className="space-y-4">
              {plantStructures.map((s) => (
                <div
                  key={s.name}
                  className="p-4 rounded-xl bg-charcoal border border-subtle hover:border-bio-green/20 transition-colors duration-200"
                >
                  <div className={`font-mono text-xs font-medium ${s.color} mb-1.5 tracking-wider uppercase`}>
                    {s.name}
                  </div>
                  <p className="font-inter text-slate-400 text-xs leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>

            {/* Physics note */}
            <div className="p-5 rounded-xl bg-surface border border-bio-green/20">
              <div className="font-mono text-xs text-bio-green tracking-widest uppercase mb-2">
                Transport Physics
              </div>
              <p className="font-inter text-slate-400 text-xs leading-relaxed">
                Water ascent through xylem is driven by transpiration-cohesion-tension: evaporation at leaf stomata creates negative pressure that pulls a continuous water column upward against gravity — a purely physical phenomenon requiring no metabolic energy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
