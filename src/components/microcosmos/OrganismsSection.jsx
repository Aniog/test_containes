import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const organisms = [
  {
    id: 'org-01',
    imgId: 'org-img-mc001',
    titleId: 'org-title-mc001',
    descId: 'org-desc-mc001',
    name: 'Tardigrade',
    latin: 'Ramazzottius oberhaeuseri',
    desc: 'Known as "water bears," tardigrades can survive in the vacuum of space, extreme radiation, and temperatures from -272°C to 150°C.',
    tag: 'Extremophile',
    color: 'teal',
  },
  {
    id: 'org-02',
    imgId: 'org-img-mc002',
    titleId: 'org-title-mc002',
    descId: 'org-desc-mc002',
    name: 'Paramecium',
    latin: 'Paramecium caudatum',
    desc: 'A single-celled ciliate protozoan that propels itself through water using thousands of tiny hair-like cilia in coordinated waves.',
    tag: 'Protozoa',
    color: 'violet',
  },
  {
    id: 'org-03',
    imgId: 'org-img-mc003',
    titleId: 'org-title-mc003',
    descId: 'org-desc-mc003',
    name: 'Radiolaria',
    latin: 'Acantharia sp.',
    desc: 'Ancient ocean-dwelling protists that build intricate mineral skeletons of stunning geometric complexity, forming natural fractals.',
    tag: 'Marine Protist',
    color: 'amber',
  },
  {
    id: 'org-04',
    imgId: 'org-img-mc004',
    titleId: 'org-title-mc004',
    descId: 'org-desc-mc004',
    name: 'Vorticella',
    latin: 'Vorticella convallaria',
    desc: 'Bell-shaped ciliates that attach to surfaces via a contractile stalk, creating a vortex to draw food particles into their mouths.',
    tag: 'Ciliate',
    color: 'teal',
  },
  {
    id: 'org-05',
    imgId: 'org-img-mc005',
    titleId: 'org-title-mc005',
    descId: 'org-desc-mc005',
    name: 'Diatom',
    latin: 'Coscinodiscus sp.',
    desc: 'Microscopic algae encased in ornate silica shells called frustules, responsible for producing 20% of Earth\'s oxygen.',
    tag: 'Algae',
    color: 'violet',
  },
  {
    id: 'org-06',
    imgId: 'org-img-mc006',
    titleId: 'org-title-mc006',
    descId: 'org-desc-mc006',
    name: 'Rotifer',
    latin: 'Bdelloidea sp.',
    desc: 'Microscopic animals with a crown of cilia that creates a spinning wheel effect, used for locomotion and feeding in freshwater.',
    tag: 'Microanimal',
    color: 'amber',
  },
];

const colorMap = {
  teal: {
    tag: 'bg-teal-500/20 border-teal-500/40 text-teal-300',
    border: 'hover:border-teal-500/50',
    glow: 'hover:shadow-[0_0_20px_rgba(45,212,191,0.1)]',
  },
  violet: {
    tag: 'bg-violet-500/20 border-violet-500/40 text-violet-300',
    border: 'hover:border-violet-500/50',
    glow: 'hover:shadow-[0_0_20px_rgba(167,139,250,0.1)]',
  },
  amber: {
    tag: 'bg-amber-500/20 border-amber-500/40 text-amber-300',
    border: 'hover:border-amber-500/50',
    glow: 'hover:shadow-[0_0_20px_rgba(251,191,36,0.1)]',
  },
};

const OrganismsSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="organisms" ref={containerRef} className="py-24 px-4 md:px-8 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Microscopic Life
          </p>
          <h2
            id="organisms-section-title"
            className="text-3xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Meet the Inhabitants
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Billions of organisms share our world, invisible yet vital. Each one a marvel of evolution, perfectly adapted to its microscopic niche.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {organisms.map((org) => {
            const colors = colorMap[org.color];
            return (
              <div
                key={org.id}
                className={`group bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 ${colors.border} ${colors.glow} transition-all duration-300`}
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    data-strk-img-id={org.imgId}
                    data-strk-img={`[${org.descId}] [${org.titleId}] [organisms-section-title]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={org.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
                  <span className={`absolute top-3 left-3 border text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm ${colors.tag}`}>
                    {org.tag}
                  </span>
                </div>
                <div className="p-6">
                  <h3
                    id={org.titleId}
                    className="text-xl font-bold text-white mb-1"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {org.name}
                  </h3>
                  <p className="text-gray-500 text-xs italic mb-3">{org.latin}</p>
                  <p id={org.descId} className="text-gray-400 text-sm leading-relaxed">
                    {org.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OrganismsSection;
