import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const organisms = [
  {
    id: 'org1',
    name: 'Tardigrade',
    nickname: 'Water Bear',
    description: 'Nearly indestructible microscopic animals that can survive extreme radiation, vacuum of space, and temperatures from -272°C to 150°C.',
    fact: 'Can survive for 30 years without food or water',
    color: 'cyan',
    ratio: '4x3',
    width: 500,
  },
  {
    id: 'org2',
    name: 'Vorticella',
    nickname: 'Bell Animalcule',
    description: 'A stalked, bell-shaped protozoan that uses cilia to create water currents, drawing bacteria and algae into its mouth.',
    fact: 'Can contract its stalk 1000x per second',
    color: 'violet',
    ratio: '4x3',
    width: 500,
  },
  {
    id: 'org3',
    name: 'Radiolaria',
    nickname: 'Glass Skeleton',
    description: 'Ocean-dwelling protozoa with intricate mineral skeletons of silica, forming geometric patterns of extraordinary beauty.',
    fact: 'Skeletons form deep-sea sediment layers',
    color: 'emerald',
    ratio: '4x3',
    width: 500,
  },
  {
    id: 'org4',
    name: 'Naegleria Fowleri',
    nickname: 'Brain-Eating Amoeba',
    description: 'A free-living amoeba found in warm freshwater, capable of transforming between amoeba, flagellate, and cyst forms.',
    fact: 'Can transform into 3 different body forms',
    color: 'cyan',
    ratio: '4x3',
    width: 500,
  },
  {
    id: 'org5',
    name: 'Deinococcus Radiodurans',
    nickname: 'Conan the Bacterium',
    description: 'The world\'s most radiation-resistant organism, capable of reassembling its shattered DNA after doses that would kill any other life form.',
    fact: 'Survives 1.5 million rads of radiation',
    color: 'violet',
    ratio: '4x3',
    width: 500,
  },
  {
    id: 'org6',
    name: 'Stentor Coeruleus',
    nickname: 'Blue Trumpet',
    description: 'A giant among single-celled organisms, visible to the naked eye, shaped like a trumpet and colored vivid blue by the pigment stentorin.',
    fact: 'One of the largest single-celled organisms',
    color: 'emerald',
    ratio: '4x3',
    width: 500,
  },
];

const colorMap = {
  cyan: {
    border: 'border-cyan-500/30 hover:border-cyan-400/60',
    badge: 'bg-cyan-500/10 text-cyan-400',
    fact: 'text-cyan-400',
    glow: 'hover:shadow-[0_0_30px_rgba(34,211,238,0.12)]',
  },
  violet: {
    border: 'border-violet-500/30 hover:border-violet-400/60',
    badge: 'bg-violet-500/10 text-violet-400',
    fact: 'text-violet-400',
    glow: 'hover:shadow-[0_0_30px_rgba(167,139,250,0.12)]',
  },
  emerald: {
    border: 'border-emerald-500/30 hover:border-emerald-400/60',
    badge: 'bg-emerald-500/10 text-emerald-400',
    fact: 'text-emerald-400',
    glow: 'hover:shadow-[0_0_30px_rgba(52,211,153,0.12)]',
  },
};

const Organisms = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="organisms" ref={containerRef} className="py-24 px-4 md:px-8 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-emerald-400 text-sm font-semibold tracking-widest uppercase mb-3">Organisms</p>
          <h2 id="organisms-title" className="text-4xl md:text-5xl font-black text-white mb-4">
            Remarkable Microorganisms
          </h2>
          <p id="organisms-subtitle" className="text-gray-400 text-lg max-w-2xl mx-auto">
            Meet the extraordinary inhabitants of the microscopic world — each one a marvel of evolution and survival.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {organisms.map((org) => {
            const c = colorMap[org.color];
            return (
              <div
                key={org.id}
                className={`group bg-gray-950 rounded-2xl border ${c.border} overflow-hidden transition-all duration-300 ${c.glow}`}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    alt={org.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    data-strk-img-id={`org-${org.id}-img`}
                    data-strk-img={`[org-${org.id}-desc] [org-${org.id}-name] [organisms-subtitle] [organisms-title]`}
                    data-strk-img-ratio={org.ratio}
                    data-strk-img-width={org.width}
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
                <div className="p-6">
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full ${c.badge}`}>
                    {org.nickname}
                  </span>
                  <h3 id={`org-${org.id}-name`} className="text-white text-xl font-bold mt-3 mb-2">
                    {org.name}
                  </h3>
                  <p id={`org-${org.id}-desc`} className="text-gray-400 text-sm leading-relaxed mb-4">
                    {org.description}
                  </p>
                  <div className={`flex items-start gap-2 text-sm font-medium ${c.fact}`}>
                    <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    {org.fact}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Organisms;
