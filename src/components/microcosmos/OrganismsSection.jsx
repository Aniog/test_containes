import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const organisms = [
  {
    id: 'org-tardigrade',
    imgId: 'org-img-tardigrade-o001',
    titleId: 'org-tardigrade-title',
    descId: 'org-tardigrade-desc',
    name: 'Tardigrade',
    latin: 'Ramazzottius oberhaeuseri',
    size: '0.1 – 1.5 mm',
    habitat: 'Everywhere',
    superpower: 'Cryptobiosis — survives vacuum of space',
    desc: 'Known as "water bears," tardigrades are the toughest animals on Earth. They can survive extreme radiation, boiling water, and even the vacuum of outer space by entering a state of suspended animation.',
    color: 'border-cosmos-emerald/40',
    badge: 'bg-cosmos-emerald/20 text-cosmos-emerald border-cosmos-emerald/40',
  },
  {
    id: 'org-diatom',
    imgId: 'org-img-diatom-o002',
    titleId: 'org-diatom-title',
    descId: 'org-diatom-desc',
    name: 'Diatom',
    latin: 'Bacillariophyta',
    size: '2 – 500 µm',
    habitat: 'Aquatic',
    superpower: 'Produces 20% of Earth\'s oxygen',
    desc: 'Diatoms are single-celled algae encased in intricate glass shells called frustules. Their geometric precision rivals the finest human engineering, and they are responsible for a fifth of all oxygen on Earth.',
    color: 'border-cosmos-cyan/40',
    badge: 'bg-cosmos-cyan/20 text-cosmos-cyan border-cosmos-cyan/40',
  },
  {
    id: 'org-bdelloid',
    imgId: 'org-img-bdelloid-o003',
    titleId: 'org-bdelloid-title',
    descId: 'org-bdelloid-desc',
    name: 'Bdelloid Rotifer',
    latin: 'Bdelloidea',
    size: '100 – 500 µm',
    habitat: 'Freshwater',
    superpower: 'Absorbs foreign DNA to evolve',
    desc: 'These microscopic animals have survived for 80 million years without sexual reproduction, instead stealing genes from bacteria, fungi, and plants to fuel their evolution — a strategy unique in the animal kingdom.',
    color: 'border-cosmos-purple/40',
    badge: 'bg-cosmos-purple/20 text-cosmos-purple border-cosmos-purple/40',
  },
  {
    id: 'org-magnetotactic',
    imgId: 'org-img-magneto-o004',
    titleId: 'org-magneto-title',
    descId: 'org-magneto-desc',
    name: 'Magnetotactic Bacteria',
    latin: 'Magnetospirillum magneticum',
    size: '1 – 10 µm',
    habitat: 'Sediments',
    superpower: 'Built-in biological compass',
    desc: 'These remarkable bacteria synthesize chains of magnetic crystals inside their cells, acting as a biological compass that allows them to navigate along Earth\'s magnetic field lines to find optimal oxygen levels.',
    color: 'border-cosmos-gold/40',
    badge: 'bg-cosmos-gold/20 text-cosmos-gold border-cosmos-gold/40',
  },
  {
    id: 'org-myxobacteria',
    imgId: 'org-img-myxo-o005',
    titleId: 'org-myxo-title',
    descId: 'org-myxo-desc',
    name: 'Myxobacteria',
    latin: 'Myxococcus xanthus',
    size: '5 – 10 µm',
    habitat: 'Soil',
    superpower: 'Hunts in coordinated wolf packs',
    desc: 'Myxobacteria are social predators that hunt in coordinated swarms of millions, secreting enzymes to dissolve prey. When starving, they form elaborate multicellular fruiting bodies to disperse spores.',
    color: 'border-cosmos-teal/40',
    badge: 'bg-cosmos-teal/20 text-cosmos-teal border-cosmos-teal/40',
  },
  {
    id: 'org-nematode',
    imgId: 'org-img-nematode-o006',
    titleId: 'org-nematode-title',
    descId: 'org-nematode-desc',
    name: 'C. elegans',
    latin: 'Caenorhabditis elegans',
    size: '1 mm',
    habitat: 'Soil',
    superpower: 'Entire nervous system mapped',
    desc: 'This tiny roundworm has exactly 959 cells and 302 neurons — every single one mapped. It was the first multicellular organism to have its genome fully sequenced and has been to space multiple times.',
    color: 'border-pink-500/40',
    badge: 'bg-pink-500/20 text-pink-400 border-pink-500/40',
  },
];

const OrganismsSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-[#050d1a] py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-cosmos-teal text-sm font-semibold uppercase tracking-widest mb-4 block">
            Featured Species
          </span>
          <h2
            id="organisms-title"
            className="font-display text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Remarkable Micro-Organisms
          </h2>
          <p
            id="organisms-subtitle"
            className="text-slate-400 text-lg max-w-2xl mx-auto"
          >
            Meet the extraordinary inhabitants of the microbial world — each one
            a masterpiece of evolution with abilities that defy imagination.
          </p>
        </div>

        {/* Organisms grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {organisms.map((org) => (
            <div
              key={org.id}
              className={`rounded-2xl overflow-hidden bg-[#0a1628] border ${org.color} hover:shadow-lg hover:shadow-cosmos-teal/5 transition-all duration-300 group flex flex-col`}
            >
              {/* Image */}
              <div className="relative aspect-[3x2] overflow-hidden">
                <img
                  alt={org.name}
                  data-strk-img-id={org.imgId}
                  data-strk-img={`[${org.descId}] [${org.titleId}] [organisms-subtitle] [organisms-title]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent" />
                <div className="absolute top-3 right-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium border backdrop-blur-sm ${org.badge}`}>
                    {org.size}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="mb-3">
                  <h3 id={org.titleId} className="font-display text-xl font-bold text-white">
                    {org.name}
                  </h3>
                  <p className="text-slate-500 text-xs italic mt-0.5">{org.latin}</p>
                </div>

                <p id={org.descId} className="text-slate-300 text-sm leading-relaxed mb-4 flex-1">
                  {org.desc}
                </p>

                {/* Meta */}
                <div className="space-y-2 pt-4 border-t border-white/10">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-500">Habitat</span>
                    <span className="text-slate-300 font-medium">{org.habitat}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-500">Superpower</span>
                    <span className={`font-medium text-right max-w-[60%] ${org.badge.split(' ')[2]}`}>
                      {org.superpower}
                    </span>
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

export default OrganismsSection;
