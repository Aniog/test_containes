import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ORGANISMS = [
  {
    id: 'tardigrade',
    name: 'Tardigrade',
    latin: 'Ramazzottius oberhaeuseri',
    category: 'Micro-animal',
    size: '0.1 – 1.5 mm',
    habitat: 'Everywhere on Earth',
    description:
      'Known as "water bears," tardigrades are the most resilient animals known. They survive extreme radiation, the vacuum of space, and temperatures from −272°C to 150°C.',
    color: '#00d4ff',
    titleId: 'organism-tardigrade-title',
    descId: 'organism-tardigrade-desc',
    imgId: 'organism-img-tardigrade-a1b2c3',
  },
  {
    id: 'diatom',
    name: 'Diatom',
    latin: 'Bacillariophyta',
    category: 'Microalgae',
    size: '2 – 500 µm',
    habitat: 'Oceans & freshwater',
    description:
      'Diatoms are single-celled algae encased in intricate glass-like shells called frustules. They produce roughly 20% of all oxygen on Earth and form the base of aquatic food chains.',
    color: '#00ffcc',
    titleId: 'organism-diatom-title',
    descId: 'organism-diatom-desc',
    imgId: 'organism-img-diatom-d4e5f6',
  },
  {
    id: 'paramecium',
    name: 'Paramecium',
    latin: 'Paramecium caudatum',
    category: 'Protozoa',
    size: '50 – 330 µm',
    habitat: 'Freshwater ponds',
    description:
      'Paramecia are single-celled organisms covered in thousands of tiny hair-like cilia that propel them through water. They are among the most studied organisms in biology.',
    color: '#a78bfa',
    titleId: 'organism-paramecium-title',
    descId: 'organism-paramecium-desc',
    imgId: 'organism-img-paramecium-g7h8i9',
  },
  {
    id: 'radiolarian',
    name: 'Radiolarian',
    latin: 'Acantharia',
    category: 'Protozoa',
    size: '0.1 – 2 mm',
    habitat: 'Open ocean',
    description:
      'Radiolarians produce elaborate mineral skeletons of stunning geometric complexity. Their fossilized remains form thick sediment layers on the ocean floor.',
    color: '#f472b6',
    titleId: 'organism-radiolarian-title',
    descId: 'organism-radiolarian-desc',
    imgId: 'organism-img-radiolarian-j1k2l3',
  },
];

const OrganismsSection = () => {
  const containerRef = useRef(null);
  const [active, setActive] = useState(ORGANISMS[0].id);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [active]);

  const activeOrganism = ORGANISMS.find((o) => o.id === active);

  return (
    <section id="organisms" className="py-28 px-6 bg-[#050d1a] relative" ref={containerRef}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#00d4ff] text-sm font-medium tracking-widest uppercase mb-4">
            Featured Organisms
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Meet the inhabitants
          </h2>
          <p className="text-[#8ab4c8] text-lg max-w-xl mx-auto">
            Extraordinary life forms that have shaped our planet for billions of years.
          </p>
        </div>

        {/* Tab selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {ORGANISMS.map((o) => (
            <button
              key={o.id}
              onClick={() => setActive(o.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer border ${
                active === o.id
                  ? 'bg-[#00d4ff] text-[#050d1a] border-[#00d4ff]'
                  : 'bg-transparent text-[#8ab4c8] border-[#1a2d4a] hover:border-[#00d4ff]/40 hover:text-[#e8f4f8]'
              }`}
            >
              {o.name}
            </button>
          ))}
        </div>

        {/* Active organism detail */}
        {activeOrganism && (
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#0d1a2e] border border-[#1a2d4a]">
              <img
                alt={activeOrganism.name}
                data-strk-img-id={activeOrganism.imgId}
                data-strk-img={`[${activeOrganism.descId}] [${activeOrganism.titleId}] microscope microorganism`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
              {/* Overlay badge */}
              <div className="absolute top-4 left-4">
                <span
                  className="text-xs font-medium px-3 py-1 rounded-full border"
                  style={{
                    backgroundColor: `${activeOrganism.color}15`,
                    color: activeOrganism.color,
                    borderColor: `${activeOrganism.color}30`,
                  }}
                >
                  {activeOrganism.category}
                </span>
              </div>
            </div>

            {/* Info */}
            <div>
              <h3
                id={activeOrganism.titleId}
                className="text-4xl font-bold text-white mb-1"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {activeOrganism.name}
              </h3>
              <p className="text-[#4a6a7a] italic mb-6">{activeOrganism.latin}</p>

              <p id={activeOrganism.descId} className="text-[#8ab4c8] text-lg leading-relaxed mb-8">
                {activeOrganism.description}
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-[#0d1a2e] border border-[#1a2d4a] rounded-xl">
                  <p className="text-[#4a6a7a] text-xs uppercase tracking-wider mb-1">Size</p>
                  <p className="text-[#e8f4f8] font-semibold">{activeOrganism.size}</p>
                </div>
                <div className="p-4 bg-[#0d1a2e] border border-[#1a2d4a] rounded-xl">
                  <p className="text-[#4a6a7a] text-xs uppercase tracking-wider mb-1">Habitat</p>
                  <p className="text-[#e8f4f8] font-semibold">{activeOrganism.habitat}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default OrganismsSection;
