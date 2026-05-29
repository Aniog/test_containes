import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const organisms = [
  {
    id: 'org-1',
    titleId: 'org-title-1',
    descId: 'org-desc-1',
    imgId: 'org-img-a1b2c3',
    name: 'Bacteria',
    latin: 'Prokaryota',
    description: 'The most abundant life form on Earth. Bacteria are single-celled organisms without a nucleus, found in every environment imaginable — from deep-sea vents to the human gut.',
    fact: 'Your body contains more bacterial cells than human cells.',
    color: 'cosmos-teal',
    ratio: '3x2',
    width: 700,
  },
  {
    id: 'org-2',
    titleId: 'org-title-2',
    descId: 'org-desc-2',
    imgId: 'org-img-d4e5f6',
    name: 'Fungi',
    latin: 'Mycota',
    description: 'Neither plant nor animal, fungi form their own kingdom. From microscopic yeasts to vast underground mycelial networks, they are the great decomposers and recyclers of nature.',
    fact: 'The largest organism on Earth is a fungal network in Oregon spanning 2,385 acres.',
    color: 'cosmos-purple',
    ratio: '3x2',
    width: 700,
  },
  {
    id: 'org-3',
    titleId: 'org-title-3',
    descId: 'org-desc-3',
    imgId: 'org-img-g7h8i9',
    name: 'Protozoa',
    latin: 'Protista',
    description: 'Single-celled eukaryotes that exhibit animal-like behaviors — hunting, moving, and consuming other microorganisms. They are the predators of the microbial world.',
    fact: 'Paramecium can swim at 1mm per second — equivalent to a human swimming at 500 mph.',
    color: 'cosmos-amber',
    ratio: '3x2',
    width: 700,
  },
  {
    id: 'org-4',
    titleId: 'org-title-4',
    descId: 'org-desc-4',
    imgId: 'org-img-j1k2l3',
    name: 'Viruses',
    latin: 'Viridae',
    description: 'The smallest biological entities, viruses exist at the boundary of life. They cannot reproduce independently but hijack host cells to replicate, shaping evolution for billions of years.',
    fact: 'There are 10 nonillion (10³¹) viruses on Earth — more than all stars in the universe.',
    color: 'cosmos-teal',
    ratio: '3x2',
    width: 700,
  },
  {
    id: 'org-5',
    titleId: 'org-title-5',
    descId: 'org-desc-5',
    imgId: 'org-img-m4n5o6',
    name: 'Algae',
    latin: 'Algae',
    description: 'Photosynthetic microorganisms that produce over half of Earth\'s oxygen. From microscopic phytoplankton to giant kelp, algae form the base of most aquatic food chains.',
    fact: 'Phytoplankton produce 50–80% of the oxygen in Earth\'s atmosphere.',
    color: 'cosmos-purple',
    ratio: '3x2',
    width: 700,
  },
  {
    id: 'org-6',
    titleId: 'org-title-6',
    descId: 'org-desc-6',
    imgId: 'org-img-p7q8r9',
    name: 'Archaea',
    latin: 'Archaea',
    description: 'Ancient single-celled organisms that thrive in the most extreme environments on Earth — boiling hot springs, acidic lakes, and deep-sea hydrothermal vents.',
    fact: 'Archaea were only recognized as a distinct domain of life in 1977.',
    color: 'cosmos-amber',
    ratio: '3x2',
    width: 700,
  },
];

const colorMap = {
  'cosmos-teal': { border: 'border-cosmos-teal/30', glow: 'hover:shadow-[0_0_25px_rgba(0,212,170,0.15)]', badge: 'bg-cosmos-teal/10 text-cosmos-teal', dot: 'bg-cosmos-teal' },
  'cosmos-purple': { border: 'border-cosmos-purple/30', glow: 'hover:shadow-[0_0_25px_rgba(124,58,237,0.15)]', badge: 'bg-cosmos-purple/10 text-cosmos-purple', dot: 'bg-cosmos-purple' },
  'cosmos-amber': { border: 'border-cosmos-amber/30', glow: 'hover:shadow-[0_0_25px_rgba(245,158,11,0.15)]', badge: 'bg-cosmos-amber/10 text-cosmos-amber', dot: 'bg-cosmos-amber' },
};

export default function OrganismsSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="organisms" ref={containerRef} className="bg-cosmos-surface py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-cosmos-teal font-grotesk text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            Kingdoms of the Micro World
          </p>
          <h2
            id="organisms-section-title"
            className="font-grotesk font-bold text-4xl md:text-5xl text-cosmos-text mb-4"
          >
            Meet the
            <span className="bg-gradient-to-r from-cosmos-purple to-cosmos-teal bg-clip-text text-transparent"> Inhabitants</span>
          </h2>
          <p
            id="organisms-section-desc"
            className="font-inter text-cosmos-muted text-lg max-w-2xl mx-auto"
          >
            Six major groups of microorganisms that shape life on Earth in ways we are only beginning to understand.
          </p>
        </div>

        {/* Grid of organism cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {organisms.map((org) => {
            const colors = colorMap[org.color];
            return (
              <div
                key={org.id}
                className={`bg-cosmos-bg border ${colors.border} rounded-2xl overflow-hidden group transition-all duration-300 ${colors.glow} hover:-translate-y-1`}
              >
                {/* Image */}
                <div className="relative aspect-[3/2] overflow-hidden">
                  <span id={org.titleId} className="sr-only">{org.name}</span>
                  <span id={org.descId} className="sr-only">{org.description}</span>
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={org.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    data-strk-img-id={org.imgId}
                    data-strk-img={`[${org.descId}] [${org.titleId}] [organisms-section-desc] [organisms-section-title]`}
                    data-strk-img-ratio={org.ratio}
                    data-strk-img-width={org.width}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cosmos-bg/80 to-transparent" />
                  <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-grotesk font-medium ${colors.badge}`}>
                    {org.latin}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className={`w-2 h-2 rounded-full ${colors.dot}`} />
                    <h3 className="font-grotesk font-bold text-xl text-cosmos-text">
                      {org.name}
                    </h3>
                  </div>
                  <p className="font-inter text-cosmos-muted text-sm leading-relaxed mb-4">
                    {org.description}
                  </p>
                  <div className="border-t border-cosmos-elevated pt-4">
                    <p className="font-inter text-cosmos-dim text-xs leading-relaxed italic">
                      💡 {org.fact}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
