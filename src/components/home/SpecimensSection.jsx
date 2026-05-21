import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const specimens = [
  {
    id: 'spec-img-c1',
    titleId: 'spec-title-c1',
    descId: 'spec-desc-c1',
    name: 'Tardigrade',
    latin: 'Ramazzottius oberhaeuseri',
    habitat: 'Moss & Lichen',
    size: '0.1 – 1.5 mm',
    description: 'Known as "water bears," tardigrades are the most resilient animals on Earth. They can survive in outer space, extreme radiation, and temperatures from -272°C to 150°C by entering a state called cryptobiosis.',
    tags: ['Extremophile', 'Eutardigrada', 'Cryptobiosis'],
    color: '#00d4ff',
  },
  {
    id: 'spec-img-c2',
    titleId: 'spec-title-c2',
    descId: 'spec-desc-c2',
    name: 'Vorticella',
    latin: 'Vorticella convallaria',
    habitat: 'Freshwater',
    size: '30 – 150 μm',
    description: 'A bell-shaped ciliate that attaches to surfaces via a long, coiling stalk. When disturbed, the stalk contracts in milliseconds — one of the fastest movements in the biological world.',
    tags: ['Ciliate', 'Sessile', 'Filter Feeder'],
    color: '#7c3aed',
  },
  {
    id: 'spec-img-c3',
    titleId: 'spec-title-c3',
    descId: 'spec-desc-c3',
    name: 'Diatom',
    latin: 'Coscinodiscus radiatus',
    habitat: 'Ocean & Freshwater',
    size: '2 – 500 μm',
    description: 'Diatoms are single-celled algae encased in intricate glass-like shells called frustules. Their geometric precision rivals the finest human engineering, and their fossilized remains form diatomaceous earth.',
    tags: ['Algae', 'Silica Shell', 'Photosynthetic'],
    color: '#10b981',
  },
  {
    id: 'spec-img-c4',
    titleId: 'spec-title-c4',
    descId: 'spec-desc-c4',
    name: 'Rotifer',
    latin: 'Brachionus calyciflorus',
    habitat: 'Freshwater Ponds',
    size: '100 – 500 μm',
    description: 'Rotifers are microscopic animals with a crown of cilia that creates a spinning wheel effect, drawing food particles into their mouths. They are among the smallest animals with a complete digestive system.',
    tags: ['Zooplankton', 'Filter Feeder', 'Bdelloidea'],
    color: '#f59e0b',
  },
  {
    id: 'spec-img-c5',
    titleId: 'spec-title-c5',
    descId: 'spec-desc-c5',
    name: 'Radiolarian',
    latin: 'Aulacantha scolymantha',
    habitat: 'Open Ocean',
    size: '0.1 – 2 mm',
    description: 'Radiolarians produce intricate mineral skeletons of silica or strontium sulfate. Their geometric beauty has inspired architects and artists for centuries, and their fossils help date geological strata.',
    tags: ['Rhizaria', 'Silica Skeleton', 'Marine'],
    color: '#ef4444',
  },
];

export default function SpecimensSection() {
  const containerRef = useRef(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const prev = () => setActive((a) => (a - 1 + specimens.length) % specimens.length);
  const next = () => setActive((a) => (a + 1) % specimens.length);
  const spec = specimens[active];

  return (
    <section id="specimens" ref={containerRef} className="py-20 md:py-28 px-4 md:px-8 bg-[#0a1628]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-[#00d4ff] text-xs font-semibold tracking-widest uppercase mb-4">
            Up Close
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#f0f9ff] mb-5">
            Featured Specimens
          </h2>
          <p className="text-[#94a3b8] text-lg max-w-2xl mx-auto">
            Meet the remarkable organisms that define the microcosmos — each one a masterpiece of evolution.
          </p>
        </div>

        {/* Specimen viewer */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[3/4] border border-[#1e3a5f] shadow-xl shadow-black/50">
              {specimens.map((s, i) => (
                <div
                  key={s.id}
                  className={`absolute inset-0 transition-opacity duration-500 ${i === active ? 'opacity-100' : 'opacity-0'}`}
                >
                  <img
                    alt={s.name}
                    className="w-full h-full object-cover"
                    data-strk-img-id={s.id}
                    data-strk-img={`[${s.descId}] [${s.titleId}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width={600}
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                  <span id={s.titleId} className="sr-only">{s.name} {s.latin} microscopy</span>
                  <span id={s.descId} className="sr-only">{s.description}</span>
                </div>
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/80 to-transparent" />

              {/* Nav arrows */}
              <button
                onClick={prev}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#050d1a]/70 border border-[#1e3a5f] flex items-center justify-center text-[#94a3b8] hover:text-[#00d4ff] hover:border-[#00d4ff]/40 transition-colors backdrop-blur-sm"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#050d1a]/70 border border-[#1e3a5f] flex items-center justify-center text-[#94a3b8] hover:text-[#00d4ff] hover:border-[#00d4ff]/40 transition-colors backdrop-blur-sm"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {specimens.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`w-2 h-2 rounded-full transition-all ${i === active ? 'bg-[#00d4ff] w-6' : 'bg-[#475569]'}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Info side */}
          <div key={active} className="flex flex-col gap-5">
            <div>
              <span
                className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4"
                style={{ backgroundColor: `${spec.color}15`, color: spec.color, border: `1px solid ${spec.color}30` }}
              >
                {spec.habitat}
              </span>
              <h3 className="text-3xl md:text-4xl font-black text-[#f0f9ff] mb-1">{spec.name}</h3>
              <p className="text-[#94a3b8] italic text-base mb-5">{spec.latin}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#0f1f35] border border-[#1e3a5f] rounded-xl p-4">
                <p className="text-[#475569] text-xs uppercase tracking-widest mb-1">Size</p>
                <p className="text-[#f0f9ff] font-semibold">{spec.size}</p>
              </div>
              <div className="bg-[#0f1f35] border border-[#1e3a5f] rounded-xl p-4">
                <p className="text-[#475569] text-xs uppercase tracking-widest mb-1">Habitat</p>
                <p className="text-[#f0f9ff] font-semibold">{spec.habitat}</p>
              </div>
            </div>

            <p className="text-[#94a3b8] leading-relaxed text-base">{spec.description}</p>

            <div className="flex flex-wrap gap-2">
              {spec.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium px-3 py-1 rounded-full bg-[#0f1f35] border border-[#1e3a5f] text-[#94a3b8]"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Specimen thumbnails */}
            <div className="flex gap-3 mt-2">
              {specimens.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => setActive(i)}
                  className={`w-14 h-14 rounded-xl overflow-hidden border-2 transition-all ${
                    i === active ? 'border-[#00d4ff]' : 'border-[#1e3a5f] opacity-50 hover:opacity-80'
                  }`}
                >
                  <img
                    alt={s.name}
                    className="w-full h-full object-cover"
                    data-strk-img-id={`${s.id}-thumb`}
                    data-strk-img={`[${s.titleId}]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width={100}
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
