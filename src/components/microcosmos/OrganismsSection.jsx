import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const organisms = [
  {
    id: 'tardigrade',
    name: 'Tardigrade',
    nickname: 'Water Bear',
    description: 'Nearly indestructible microscopic animals that can survive in outer space, extreme radiation, and complete dehydration.',
    tag: 'Extremophile',
    imgId: 'org-tardi-m4n5o6',
    imgQuery: 'tardigrade water bear microscope extreme survival',
  },
  {
    id: 'diatom',
    name: 'Diatom',
    nickname: 'Glass Algae',
    description: 'Single-celled algae encased in intricate silica shells of extraordinary geometric beauty, forming the base of aquatic food chains.',
    tag: 'Algae',
    imgId: 'org-diatom-p7q8r9',
    imgQuery: 'diatom silica shell geometric algae microscope',
  },
  {
    id: 'paramecium',
    name: 'Paramecium',
    nickname: 'Slipper Animalcule',
    description: 'Ciliated protists that propel themselves through water using thousands of tiny hair-like cilia, hunting bacteria for food.',
    tag: 'Protist',
    imgId: 'org-param-s1t2u3',
    imgQuery: 'paramecium cilia protist microscope pond water',
  },
  {
    id: 'rotifer',
    name: 'Rotifer',
    nickname: 'Wheel Animal',
    description: 'Microscopic animals with a crown of cilia that spin like a wheel, creating currents to draw food particles into their mouths.',
    tag: 'Microanimal',
    imgId: 'org-rotif-v4w5x6',
    imgQuery: 'rotifer wheel animal microscope aquatic',
  },
  {
    id: 'vorticella',
    name: 'Vorticella',
    nickname: 'Bell Animalcule',
    description: 'Bell-shaped protists that attach to surfaces via a coiled stalk, contracting rapidly when disturbed in a remarkable display.',
    tag: 'Protist',
    imgId: 'org-vorti-y7z8a9',
    imgQuery: 'vorticella bell shaped protist microscope stalk',
  },
  {
    id: 'euglena',
    name: 'Euglena',
    nickname: 'Green Swimmer',
    description: 'Fascinating single-celled organisms that can photosynthesize like plants or consume food like animals, defying easy classification.',
    tag: 'Protist',
    imgId: 'org-eugle-b1c2d3',
    imgQuery: 'euglena green flagellate microscope photosynthesis',
  },
];

const OrganismsSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="organisms" ref={containerRef} className="bg-cosmos-surface py-20 md:py-28 border-t border-cosmos-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <p id="org-label" className="text-xs font-semibold uppercase tracking-widest text-cosmos-magenta mb-3">
            Meet the Inhabitants
          </p>
          <h2 id="org-title" className="text-3xl md:text-5xl font-extrabold text-cosmos-text mb-4">
            Microscopic Organisms
          </h2>
          <p id="org-subtitle" className="text-cosmos-muted text-lg max-w-2xl mx-auto">
            Discover the extraordinary creatures that populate every drop of water, every handful of soil, and every breath of air.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {organisms.map((org) => (
            <div
              key={org.id}
              className="bg-cosmos-bg border border-cosmos-border rounded-2xl overflow-hidden hover:border-cosmos-cyan transition-colors duration-300 group"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  id={org.id}
                  alt={org.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-strk-img-id={org.imgId}
                  data-strk-img={`${org.imgQuery} [org-subtitle] [org-title]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold uppercase tracking-widest text-cosmos-magenta">
                    {org.tag}
                  </span>
                  <span className="text-xs text-cosmos-muted italic">{org.nickname}</span>
                </div>
                <h3 className="text-xl font-bold text-cosmos-cyan mb-2">{org.name}</h3>
                <p className="text-cosmos-muted text-sm leading-relaxed">{org.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OrganismsSection;
