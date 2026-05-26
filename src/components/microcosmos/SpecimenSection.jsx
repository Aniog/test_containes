import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const SPECIMENS = [
  { id: 'spec-title-1', imgId: 'spec-img-mc030', name: 'Vorticella', type: 'Ciliate', habitat: 'Freshwater', size: '50–200 µm' },
  { id: 'spec-title-2', imgId: 'spec-img-mc031', name: 'Euglena', type: 'Flagellate', habitat: 'Ponds & Lakes', size: '15–500 µm' },
  { id: 'spec-title-3', imgId: 'spec-img-mc032', name: 'Amoeba Proteus', type: 'Amoebozoa', habitat: 'Soil & Water', size: '250–750 µm' },
  { id: 'spec-title-4', imgId: 'spec-img-mc033', name: 'Stentor', type: 'Ciliate', habitat: 'Freshwater', size: '1–2 mm' },
  { id: 'spec-title-5', imgId: 'spec-img-mc034', name: 'Volvox', type: 'Green Algae', habitat: 'Ponds', size: '100–500 µm' },
  { id: 'spec-title-6', imgId: 'spec-img-mc035', name: 'Rotifer', type: 'Bdelloidea', habitat: 'Freshwater', size: '100–500 µm' },
];

export default function SpecimenSection() {
  const containerRef = useRef(null);
  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-4 inline-block">
            Specimen Collection
          </span>
          <h2 id="spec-section-title" className="text-3xl md:text-5xl font-bold text-white mb-4">
            Meet the Inhabitants
          </h2>
          <p id="spec-section-subtitle" className="text-slate-400 max-w-xl mx-auto text-lg">
            Six remarkable microorganisms found in a single drop of pond water, each with a unique story.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SPECIMENS.map((s) => (
            <div
              key={s.id}
              className="group rounded-2xl border border-slate-700/50 bg-slate-800/40 overflow-hidden hover:border-emerald-400/40 hover:shadow-[0_0_25px_rgba(52,211,153,0.08)] transition-all duration-300"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-square">
                <img
                  alt={s.name}
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  data-strk-img-id={s.imgId}
                  data-strk-img={`[${s.id}] [spec-section-subtitle] [spec-section-title]`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                <span className="absolute top-3 right-3 bg-slate-900/80 text-emerald-400 text-xs font-semibold px-2.5 py-1 rounded-full border border-emerald-400/30">
                  {s.type}
                </span>
              </div>
              {/* Info */}
              <div className="p-5">
                <h3 id={s.id} className="text-white font-bold text-lg mb-3">{s.name}</h3>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <p className="text-slate-500 text-xs uppercase tracking-widest mb-0.5">Habitat</p>
                    <p className="text-slate-300 text-sm">{s.habitat}</p>
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs uppercase tracking-widest mb-0.5">Size</p>
                    <p className="text-slate-300 text-sm">{s.size}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
