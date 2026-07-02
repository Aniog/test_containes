import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const organisms = [
  {
    id: 'org-01',
    imgId: 'org-img-01-qq7rr8',
    titleId: 'org-title-01',
    descId: 'org-desc-01',
    name: 'Paramecium',
    classification: 'Protozoa',
    size: '50–330 µm',
    habitat: 'Freshwater ponds',
    desc: 'A single-celled ciliate protozoan that moves using thousands of tiny hair-like cilia. One of the most studied microorganisms in biology.',
  },
  {
    id: 'org-02',
    imgId: 'org-img-02-ss9tt0',
    titleId: 'org-title-02',
    descId: 'org-desc-02',
    name: 'Vorticella',
    classification: 'Ciliophora',
    size: '30–150 µm',
    habitat: 'Aquatic environments',
    desc: 'A bell-shaped ciliate attached to surfaces by a contractile stalk. When disturbed, it coils like a spring in a fraction of a second.',
  },
  {
    id: 'org-03',
    imgId: 'org-img-03-uu1vv2',
    titleId: 'org-title-03',
    descId: 'org-desc-03',
    name: 'Rotifer',
    classification: 'Rotifera',
    size: '100–500 µm',
    habitat: 'Freshwater & soil',
    desc: 'Microscopic animals with a crown of cilia that creates a spinning wheel effect. They are among the smallest animals on Earth.',
  },
  {
    id: 'org-04',
    imgId: 'org-img-04-ww3xx4',
    titleId: 'org-title-04',
    descId: 'org-desc-04',
    name: 'Euglena',
    classification: 'Euglenozoa',
    size: '15–500 µm',
    habitat: 'Stagnant water',
    desc: 'A fascinating organism that blurs the line between plant and animal — it can photosynthesize in light and consume food in darkness.',
  },
  {
    id: 'org-05',
    imgId: 'org-img-05-yy5zz6',
    titleId: 'org-title-05',
    descId: 'org-desc-05',
    name: 'Radiolaria',
    classification: 'Rhizaria',
    size: '0.1–2 mm',
    habitat: 'Marine plankton',
    desc: 'Marine protozoa with intricate mineral skeletons of silica. Their geometric shells are among the most beautiful structures in nature.',
  },
  {
    id: 'org-06',
    imgId: 'org-img-06-ab7cd8',
    titleId: 'org-title-06',
    descId: 'org-desc-06',
    name: 'Tardigrade',
    classification: 'Tardigrada',
    size: '0.1–1.5 mm',
    habitat: 'Everywhere on Earth',
    desc: 'Known as "water bears," tardigrades can survive extreme radiation, vacuum of space, and temperatures from -272°C to 150°C.',
  },
];

export default function OrganismsSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="organisms" ref={containerRef} className="py-24 md:py-36 bg-[#050a0f]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-violet-400 mb-4">
            Microscopic Life
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
            Meet the Organisms
          </h2>
          <p className="text-[#7fb3c8] text-lg max-w-2xl mx-auto leading-relaxed">
            Billions of microscopic creatures share our world, each with unique adaptations and behaviors that have evolved over millions of years.
          </p>
        </div>

        {/* Organism cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {organisms.map((org) => (
            <div
              key={org.id}
              className="group rounded-2xl overflow-hidden border border-violet-900/40 bg-[#0d1a24] hover:border-violet-400/40 hover:shadow-[0_0_50px_rgba(124,58,237,0.2)] transition-all duration-500"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[3/2]">
                <img
                  alt={org.name}
                  data-strk-img-id={org.imgId}
                  data-strk-img={`[${org.descId}] [${org.titleId}]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1a24] via-transparent to-transparent" />
                <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-violet-500/20 border border-violet-400/40 text-violet-300 text-xs font-semibold uppercase tracking-widest">
                  {org.classification}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 id={org.titleId} className="text-xl font-bold text-white mb-2 italic">
                  {org.name}
                </h3>
                <p id={org.descId} className="text-[#7fb3c8] text-sm leading-relaxed mb-4">
                  {org.desc}
                </p>
                <div className="flex gap-4 pt-4 border-t border-cyan-900/30">
                  <div>
                    <p className="text-[#4a7a8a] text-xs uppercase tracking-widest mb-1">Size</p>
                    <p className="text-cyan-300 text-sm font-semibold">{org.size}</p>
                  </div>
                  <div>
                    <p className="text-[#4a7a8a] text-xs uppercase tracking-widest mb-1">Habitat</p>
                    <p className="text-cyan-300 text-sm font-semibold">{org.habitat}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
