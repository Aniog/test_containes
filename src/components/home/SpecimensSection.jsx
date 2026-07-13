import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const specimens = [
  {
    id: 'vorticella',
    titleId: 'spec-vorticella-title',
    descId: 'spec-vorticella-desc',
    imgId: 'spec-img-vorticella-mc015',
    title: 'Vorticella',
    desc: 'A bell-shaped ciliate that attaches to surfaces via a contractile stalk, creating vortices to draw in food particles.',
    habitat: 'Freshwater',
    size: '30–150 µm',
    kingdom: 'Chromista',
  },
  {
    id: 'volvox',
    titleId: 'spec-volvox-title',
    descId: 'spec-volvox-desc',
    imgId: 'spec-img-volvox-mc016',
    title: 'Volvox',
    desc: 'A spherical green algae colony containing thousands of cells, representing one of the earliest forms of multicellular life.',
    habitat: 'Freshwater ponds',
    size: '100–500 µm',
    kingdom: 'Plantae',
  },
  {
    id: 'stentor',
    titleId: 'spec-stentor-title',
    descId: 'spec-stentor-desc',
    imgId: 'spec-img-stentor-mc017',
    title: 'Stentor',
    desc: 'One of the largest single-celled organisms, trumpet-shaped and capable of regenerating from tiny fragments.',
    habitat: 'Stagnant water',
    size: '1–2 mm',
    kingdom: 'Chromista',
  },
  {
    id: 'foraminifera',
    titleId: 'spec-foraminifera-title',
    descId: 'spec-foraminifera-desc',
    imgId: 'spec-img-foraminifera-mc018',
    title: 'Foraminifera',
    desc: 'Marine amoeboid protists with intricate calcium carbonate shells that form the basis of ocean sediment records.',
    habitat: 'Ocean floor',
    size: '0.1–20 cm',
    kingdom: 'Rhizaria',
  },
  {
    id: 'euglena',
    titleId: 'spec-euglena-title',
    descId: 'spec-euglena-desc',
    imgId: 'spec-img-euglena-mc019',
    title: 'Euglena',
    desc: 'A flagellated protist that can photosynthesize like a plant or consume food like an animal — a true evolutionary bridge.',
    habitat: 'Freshwater',
    size: '15–500 µm',
    kingdom: 'Excavata',
  },
  {
    id: 'amoeba',
    titleId: 'spec-amoeba-title',
    descId: 'spec-amoeba-desc',
    imgId: 'spec-img-amoeba-mc020',
    title: 'Amoeba Proteus',
    desc: 'The iconic shape-shifting cell that moves and feeds using pseudopods, a model organism for cell biology research.',
    habitat: 'Freshwater & soil',
    size: '250–750 µm',
    kingdom: 'Amoebozoa',
  },
];

const SpecimensSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="specimens" ref={containerRef} className="bg-cosmos-deep py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-cosmos-cyan text-sm font-semibold tracking-widest uppercase">
            Featured Organisms
          </span>
          <h2
            id="spec-section-title"
            className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4"
          >
            Notable Specimens
          </h2>
          <p
            id="spec-section-subtitle"
            className="text-slate-400 text-lg max-w-2xl mx-auto"
          >
            Meet the remarkable microorganisms that have fascinated scientists for centuries —
            each one a masterpiece of evolutionary design.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specimens.map((spec) => (
            <div
              key={spec.id}
              className="group bg-cosmos-card border border-cosmos-border rounded-2xl overflow-hidden hover:border-cosmos-teal/50 hover:shadow-glow-teal transition-all duration-300"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  alt={spec.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-strk-img-id={spec.imgId}
                  data-strk-img={`[${spec.descId}] [${spec.titleId}] [spec-section-subtitle] [spec-section-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cosmos-card/80 to-transparent" />
                <div className="absolute bottom-3 left-3 flex gap-2">
                  <span className="bg-cosmos-teal/20 border border-cosmos-teal/40 text-cosmos-teal text-xs font-medium px-2 py-0.5 rounded-full">
                    {spec.kingdom}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3
                  id={spec.titleId}
                  className="text-xl font-bold text-white mb-2 group-hover:text-cosmos-teal transition-colors duration-300"
                >
                  {spec.title}
                </h3>
                <p
                  id={spec.descId}
                  className="text-slate-400 text-sm leading-relaxed mb-4"
                >
                  {spec.desc}
                </p>

                {/* Meta */}
                <div className="flex gap-4 pt-4 border-t border-cosmos-border">
                  <div>
                    <div className="text-xs text-slate-500 uppercase tracking-wide mb-0.5">Habitat</div>
                    <div className="text-sm text-slate-300 font-medium">{spec.habitat}</div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 uppercase tracking-wide mb-0.5">Size</div>
                    <div className="text-sm text-slate-300 font-medium">{spec.size}</div>
                  </div>
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
