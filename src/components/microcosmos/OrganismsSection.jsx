import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const organisms = [
  {
    id: 'org-amoeba',
    name: 'Amoeba',
    latin: 'Amoeba proteus',
    habitat: 'Freshwater',
    size: '250–750 µm',
    desc: 'A shapeshifting single-celled organism that moves by extending pseudopods, engulfing food particles in its path.',
    imgId: 'org-img-amoeba-rr1ss2',
    titleId: 'org-amoeba-title',
    descId: 'org-amoeba-desc',
  },
  {
    id: 'org-paramecium',
    name: 'Paramecium',
    latin: 'Paramecium caudatum',
    habitat: 'Stagnant water',
    size: '50–330 µm',
    desc: 'Covered in thousands of tiny cilia, paramecia are among the most complex single-celled organisms, with two nuclei.',
    imgId: 'org-img-paramecium-tt3uu4',
    titleId: 'org-paramecium-title',
    descId: 'org-paramecium-desc',
  },
  {
    id: 'org-volvox',
    name: 'Volvox',
    latin: 'Volvox globator',
    habitat: 'Ponds & lakes',
    size: '100–500 µm',
    desc: 'A colonial green alga that forms hollow spheres of thousands of cells, representing an early step toward multicellular life.',
    imgId: 'org-img-volvox-vv5ww6',
    titleId: 'org-volvox-title',
    descId: 'org-volvox-desc',
  },
  {
    id: 'org-rotifer',
    name: 'Rotifer',
    latin: 'Bdelloidea',
    habitat: 'Aquatic & moist soil',
    size: '100–500 µm',
    desc: 'Microscopic animals with a crown of cilia that creates a spinning wheel effect, used for locomotion and feeding.',
    imgId: 'org-img-rotifer-xx7yy8',
    titleId: 'org-rotifer-title',
    descId: 'org-rotifer-desc',
  },
];

const OrganismsSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="organisms" ref={containerRef} className="py-20 md:py-28 bg-[#050a0f]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#00d4ff] mb-3">
            Micro-fauna & Flora
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#e8f4f8] mb-4">
            Meet the Inhabitants
          </h2>
          <p className="text-[#7fb3c8] max-w-xl mx-auto leading-relaxed">
            These microscopic creatures have thrived on Earth for billions of years, invisible to the naked eye yet essential to all life.
          </p>
        </div>

        {/* Organism Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {organisms.map((org) => (
            <div
              key={org.id}
              className="bg-[#0f2030] border border-[#1a3a4a] rounded-2xl overflow-hidden flex flex-col md:flex-row group hover:border-[#00d4ff]/40 hover:shadow-[0_0_24px_rgba(0,212,255,0.12)] transition-all duration-300"
            >
              {/* Image */}
              <div className="relative w-full md:w-48 flex-shrink-0 overflow-hidden" style={{ minHeight: '180px' }}>
                <img
                  alt={org.name}
                  data-strk-img-id={org.imgId}
                  data-strk-img={`[${org.descId}] [${org.titleId}]`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0f2030] hidden md:block" />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col justify-center">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#00d4ff] mb-1">
                  {org.habitat}
                </p>
                <h3 id={org.titleId} className="text-xl font-bold text-[#e8f4f8] mb-0.5">
                  {org.name}
                </h3>
                <p className="text-[#3d6070] text-xs italic mb-3">{org.latin}</p>
                <p id={org.descId} className="text-[#7fb3c8] text-sm leading-relaxed mb-4">
                  {org.desc}
                </p>
                <div className="flex items-center gap-2">
                  <span className="bg-[#00d4ff]/10 border border-[#00d4ff]/20 text-[#00d4ff] text-xs font-semibold px-3 py-1 rounded-full">
                    Size: {org.size}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OrganismsSection;
