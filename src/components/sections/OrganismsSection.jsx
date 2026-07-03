import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const organisms = [
  {
    id: 'bacteria',
    name: 'Bacteria',
    desc: 'Single-celled prokaryotes found in every habitat on Earth. They are the most abundant life forms, playing crucial roles in nutrient cycling and decomposition.',
    tag: 'Prokaryote',
    imgId: 'org-bacteria-mc020',
    titleId: 'org-bacteria-name',
    descId: 'org-bacteria-desc',
  },
  {
    id: 'virus',
    name: 'Viruses',
    desc: 'Nanoscale infectious agents that replicate only inside living cells. Their geometric protein shells are among the most elegant structures in nature.',
    tag: 'Nanoscale',
    imgId: 'org-virus-mc021',
    titleId: 'org-virus-name',
    descId: 'org-virus-desc',
  },
  {
    id: 'fungi',
    name: 'Fungi & Mold',
    desc: 'Microscopic fungi form vast underground networks and produce spores of extraordinary beauty. They are nature\'s primary decomposers.',
    tag: 'Eukaryote',
    imgId: 'org-fungi-mc022',
    titleId: 'org-fungi-name',
    descId: 'org-fungi-desc',
  },
  {
    id: 'protozoa',
    name: 'Protozoa',
    desc: 'Single-celled eukaryotes with complex internal structures. Amoebas, paramecia, and ciliates are masters of microscopic locomotion.',
    tag: 'Protist',
    imgId: 'org-protozoa-mc023',
    titleId: 'org-protozoa-name',
    descId: 'org-protozoa-desc',
  },
  {
    id: 'algae',
    name: 'Microalgae',
    desc: 'Photosynthetic microorganisms that produce over half of Earth\'s oxygen. Their intricate silica shells are natural works of art.',
    tag: 'Photosynthetic',
    imgId: 'org-algae-mc024',
    titleId: 'org-algae-name',
    descId: 'org-algae-desc',
  },
  {
    id: 'archaea',
    name: 'Archaea',
    desc: 'Ancient single-celled organisms that thrive in extreme environments — boiling hot springs, acidic lakes, and deep ocean vents.',
    tag: 'Extremophile',
    imgId: 'org-archaea-mc025',
    titleId: 'org-archaea-name',
    descId: 'org-archaea-desc',
  },
];

const OrganismsSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} id="organisms" className="bg-cosmos-bg py-20 md:py-28 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-cosmos-teal text-xs font-semibold uppercase tracking-widest">
            Microscopic Life
          </span>
          <h2
            id="organisms-section-title"
            className="text-3xl md:text-5xl font-bold text-cosmos-text mt-3 mb-4"
          >
            Meet the Inhabitants
          </h2>
          <p
            id="organisms-section-desc"
            className="text-cosmos-muted text-lg max-w-2xl mx-auto"
          >
            Six kingdoms of microscopic life, each with unique biology, behaviors, and roles in the web of life.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {organisms.map((org) => (
            <div
              key={org.id}
              className="bg-cosmos-surface border border-cosmos-teal/20 rounded-2xl overflow-hidden group hover:border-cosmos-teal/50 hover:shadow-glow-teal transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  alt={org.name}
                  data-strk-img-id={org.imgId}
                  data-strk-img={`[${org.descId}] [${org.titleId}] [organisms-section-desc] [organisms-section-title]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cosmos-surface/80 to-transparent" />
                <span className="absolute top-3 right-3 bg-cosmos-teal/20 border border-cosmos-teal/40 text-cosmos-teal text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                  {org.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 id={org.titleId} className="text-cosmos-text text-xl font-bold mb-3">{org.name}</h3>
                <p id={org.descId} className="text-cosmos-muted text-sm leading-relaxed">{org.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OrganismsSection;
