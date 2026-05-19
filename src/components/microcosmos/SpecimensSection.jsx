import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const specimens = [
  {
    imgId: 'spec-mc009',
    titleId: 'spec-title-1',
    searchText: 'Vorticella bell-shaped ciliate microscopy colorful',
    title: 'Vorticella',
    classification: 'Ciliophora · Peritrichia',
    description: 'A bell-shaped ciliate that attaches to surfaces via a contractile stalk. When disturbed, the stalk coils like a spring in milliseconds.',
    scale: '50–150 μm',
  },
  {
    imgId: 'spec-mc010',
    titleId: 'spec-title-2',
    searchText: 'Foraminifera calcium carbonate shell ocean microscopy',
    title: 'Foraminifera',
    classification: 'Rhizaria · Foraminifera',
    description: 'Ancient ocean-dwelling protists that build elaborate calcium carbonate shells. Their fossils form the white cliffs of Dover.',
    scale: '0.1–20 cm',
  },
  {
    imgId: 'spec-mc011',
    titleId: 'spec-title-3',
    searchText: 'Rotifer microscopic animal cilia wheel microscopy colorful',
    title: 'Rotifer',
    classification: 'Animalia · Rotifera',
    description: 'Microscopic animals with a crown of cilia that creates a spinning wheel illusion. They can survive complete desiccation for decades.',
    scale: '100–500 μm',
  },
  {
    imgId: 'spec-mc012',
    titleId: 'spec-title-4',
    searchText: 'Euglena single-celled organism photosynthesis microscopy green',
    title: 'Euglena',
    classification: 'Excavata · Euglenozoa',
    description: 'A single-celled organism that blurs the line between plant and animal — it can photosynthesize in light and hunt in darkness.',
    scale: '15–500 μm',
  },
];

const SpecimensSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="specimens" ref={containerRef} className="bg-black py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">

        <p className="font-body text-xs tracking-[0.3em] uppercase text-white/40 mb-16">
          03 — Specimens
        </p>

        <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-20 max-w-2xl">
          Meet the Inhabitants of the<br />
          <span className="italic font-normal">Hidden World</span>
        </h2>

        <div className="space-y-0">
          {specimens.map((spec, i) => (
            <div
              key={spec.imgId}
              className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-white/10 group"
            >
              {/* Image — alternates left/right */}
              <div className={`overflow-hidden ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                <span id={spec.titleId} className="sr-only">{spec.searchText}</span>
                <img
                  alt={spec.title}
                  className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
                  data-strk-img-id={spec.imgId}
                  data-strk-img={`[${spec.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>

              {/* Text */}
              <div className={`flex flex-col justify-center p-10 md:p-16 bg-[#0a0a0a] ${i % 2 === 1 ? 'md:order-1' : ''}`}>
                <p className="font-body text-xs tracking-widest uppercase text-white/30 mb-4">
                  {spec.classification}
                </p>
                <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
                  {spec.title}
                </h3>
                <p className="font-body text-white/60 leading-relaxed mb-8">
                  {spec.description}
                </p>
                <div className="flex items-center gap-3">
                  <span className="font-body text-xs tracking-widest uppercase text-white/30">Scale</span>
                  <span className="w-8 h-px bg-white/20" />
                  <span className="font-body text-sm text-white/60">{spec.scale}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecimensSection;
