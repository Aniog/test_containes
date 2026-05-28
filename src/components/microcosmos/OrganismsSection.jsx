import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const organisms = [
  {
    id: 'org-1',
    titleId: 'otitle-1',
    subtitleId: 'osub-1',
    name: 'Tardigrade',
    subtitle: 'Tardigrade water bear microscopic extremophile animal',
    category: 'Extremophile',
    fact: 'Can survive in outer space and extreme radiation.',
    color: 'text-cyan-400',
    border: 'border-cyan-500/30',
    bg: 'bg-cyan-500/10',
  },
  {
    id: 'org-2',
    titleId: 'otitle-2',
    subtitleId: 'osub-2',
    name: 'Vorticella',
    subtitle: 'Vorticella ciliate protozoa bell-shaped microscopic organism pond water',
    category: 'Protozoa',
    fact: 'Contracts its stalk at 8 cm/s — one of the fastest movements in nature.',
    color: 'text-violet-400',
    border: 'border-violet-500/30',
    bg: 'bg-violet-500/10',
  },
  {
    id: 'org-3',
    titleId: 'otitle-3',
    subtitleId: 'osub-3',
    name: 'Diatom',
    subtitle: 'Diatom algae silica glass shell geometric symmetry ocean',
    category: 'Algae',
    fact: 'Produces 20% of all oxygen on Earth.',
    color: 'text-emerald-400',
    border: 'border-emerald-500/30',
    bg: 'bg-emerald-500/10',
  },
  {
    id: 'org-4',
    titleId: 'otitle-4',
    subtitleId: 'osub-4',
    name: 'Rotifer',
    subtitle: 'Rotifer microscopic aquatic animal wheel organ cilia feeding',
    category: 'Invertebrate',
    fact: 'Uses a spinning crown of cilia to create a feeding vortex.',
    color: 'text-amber-400',
    border: 'border-amber-500/30',
    bg: 'bg-amber-500/10',
  },
  {
    id: 'org-5',
    titleId: 'otitle-5',
    subtitleId: 'osub-5',
    name: 'Radiolaria',
    subtitle: 'Radiolaria protozoa intricate mineral skeleton ocean plankton',
    category: 'Plankton',
    fact: 'Their glass skeletons form intricate geometric shapes over millions of years.',
    color: 'text-pink-400',
    border: 'border-pink-500/30',
    bg: 'bg-pink-500/10',
  },
  {
    id: 'org-6',
    titleId: 'otitle-6',
    subtitleId: 'osub-6',
    name: 'Paramecium',
    subtitle: 'Paramecium ciliate single cell organism pond water microscope',
    category: 'Ciliate',
    fact: 'Navigates using thousands of tiny hair-like cilia covering its body.',
    color: 'text-sky-400',
    border: 'border-sky-500/30',
    bg: 'bg-sky-500/10',
  },
];

const OrganismsSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="organisms" ref={containerRef} className="bg-gray-950 py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest text-emerald-400 font-medium">Micro Life</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-4">
            Meet the Organisms
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-base md:text-lg">
            Six extraordinary creatures that thrive in the world you cannot see.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {organisms.map((org) => (
            <div
              key={org.id}
              className={`group bg-gray-900 border ${org.border} rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300`}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  alt={org.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-strk-img-id={`org-img-${org.id}`}
                  data-strk-img={`[${org.subtitleId}] [${org.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
                <span className={`absolute top-3 left-3 ${org.bg} ${org.color} border ${org.border} rounded-full px-3 py-1 text-xs uppercase tracking-widest font-medium`}>
                  {org.category}
                </span>
              </div>
              <div className="p-5">
                <h3 id={org.titleId} className={`text-xl font-bold ${org.color} mb-1`}>{org.name}</h3>
                <p id={org.subtitleId} className="text-gray-400 text-sm leading-relaxed mb-3">{org.subtitle}</p>
                <div className={`${org.bg} border ${org.border} rounded-xl p-3`}>
                  <p className="text-gray-300 text-xs leading-relaxed">
                    <span className={`font-semibold ${org.color}`}>Fact: </span>
                    {org.fact}
                  </p>
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
