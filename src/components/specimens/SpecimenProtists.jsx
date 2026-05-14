import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const protistData = [
  {
    organism: 'Paramecium',
    classification: 'Ciliophora',
    locomotion: 'Cilia — thousands of hair-like organelles beat in coordinated metachronal waves',
    survival: 'Contractile vacuoles expel excess water; trichocysts discharge for defense',
    color: 'text-slate-300',
    bg: 'bg-white/8',
    border: 'border-white/12',
  },
  {
    organism: 'Amoeba',
    classification: 'Tubulinea',
    locomotion: 'Pseudopodia — cytoplasmic extensions formed by actin polymerization and sol-gel transitions',
    survival: 'Phagocytosis engulfs prey; encystment protects against desiccation',
    color: 'text-bio-green',
    bg: 'bg-bio-green/10',
    border: 'border-bio-green/20',
  },
  {
    organism: 'Tardigrade',
    classification: 'Tardigrada',
    locomotion: 'Eight stubby legs with claws; slow, bear-like gait (hence "Water Bear")',
    survival: 'Cryptobiosis — enters tun state, surviving vacuum, radiation, and temperatures from −272°C to +150°C',
    color: 'text-phosphor',
    bg: 'bg-phosphor/10',
    border: 'border-phosphor/20',
  },
];

export default function SpecimenProtists() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section id="protists" ref={containerRef} className="py-28 px-6 lg:px-8 bg-charcoal border-y border-subtle">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-px bg-white/8" />
          <span className="font-mono text-xs tracking-widest uppercase text-slate-300">
            Section B — Protists & Micro-Invertebrates
          </span>
        </div>
        <h2 className="font-grotesk font-bold text-4xl md:text-5xl text-slate-100 leading-tight mb-16">
          The Micro-Zoo
        </h2>

        {/* Reversed split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          {/* Text — 2 cols (left on desktop) */}
          <div className="lg:col-span-2 space-y-6 lg:order-1 order-2">
            <div>
              <h3 className="font-grotesk font-semibold text-2xl text-slate-100 mb-4">
                Locomotion, Survival & Microscopic Ecosystems
              </h3>
              <p className="font-inter text-slate-400 text-sm leading-relaxed">
                Single-celled organisms and micro-invertebrates represent some of the most evolutionarily successful life forms on Earth. Under phase-contrast or darkfield illumination, their internal machinery becomes visible — organelles in motion, pseudopodia extending, cilia beating in rhythmic waves.
              </p>
            </div>

            {/* Organism cards */}
            {protistData.map((org) => (
              <div
                key={org.organism}
                className={`p-5 rounded-xl bg-surface border ${org.border} hover:border-opacity-60 transition-colors duration-200`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className={`font-grotesk font-semibold text-base ${org.color}`}>
                      {org.organism}
                    </div>
                    <div className="font-mono text-xs text-slate-600 mt-0.5">{org.classification}</div>
                  </div>
                  <span className={`font-mono text-xs ${org.color} ${org.bg} px-2 py-0.5 rounded border border-current/20`}>
                    Micro-organism
                  </span>
                </div>
                <div className="space-y-2">
                  <div>
                    <span className="font-mono text-xs text-slate-500 uppercase tracking-wider">Locomotion: </span>
                    <span className="font-inter text-xs text-slate-400">{org.locomotion}</span>
                  </div>
                  <div>
                    <span className="font-mono text-xs text-slate-500 uppercase tracking-wider">Survival: </span>
                    <span className="font-inter text-xs text-slate-400">{org.survival}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Image — 3 cols (right on desktop) */}
          <div className="lg:col-span-3 lg:order-2 order-1">
            <div className="relative rounded-2xl overflow-hidden border border-subtle">
              <img
                alt="Paramecium darkfield micrograph"
                className="w-full h-80 lg:h-[520px] object-cover"
                data-strk-img-id="protist-param-mc011"
                data-strk-img="[protist-img-title] [protist-section-label] paramecium cilia darkfield phase contrast microscope live specimen"
                data-strk-img-ratio="3x4"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal/95 to-transparent p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <div
                      id="protist-img-title"
                      className="font-grotesk font-semibold text-slate-100 text-sm"
                    >
                      Paramecium caudatum
                    </div>
                    <div
                      id="protist-section-label"
                      className="font-mono text-xs text-slate-500 mt-0.5"
                    >
                      Live specimen — pond water culture
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-phosphor bg-phosphor/10 px-2 py-1 rounded border border-phosphor/20">
                      400×
                    </span>
                    <span className="font-mono text-xs text-slate-300 bg-white/8 px-2 py-1 rounded border border-white/12">
                      Phase Contrast
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Vacuole function note */}
            <div className="mt-4 p-5 rounded-xl bg-surface border border-white/12">
              <div className="font-mono text-xs text-slate-300 tracking-widest uppercase mb-2">
                Vacuole Functions
              </div>
              <p className="font-inter text-slate-400 text-xs leading-relaxed">
                <strong className="text-slate-300">Food vacuoles</strong> form via phagocytosis, fusing with lysosomes for intracellular digestion. <strong className="text-slate-300">Contractile vacuoles</strong> maintain osmotic balance by rhythmically expelling excess water — essential in hypotonic freshwater environments where water constantly diffuses inward.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
