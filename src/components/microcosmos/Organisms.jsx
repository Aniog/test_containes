import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const organisms = [
  {
    id: 'org1',
    name: 'Tardigrade',
    scientific: 'Ramazzottius oberhaeuseri',
    category: 'Micro-animal',
    description: 'Known as "water bears," tardigrades are the most resilient animals on Earth. They can survive extreme radiation, vacuum of space, and temperatures from -272°C to 150°C.',
    fact: 'Can survive in outer space',
    color: 'from-teal-500/20 to-cyan-500/10',
    accent: 'text-teal-400',
    border: 'border-teal-500/30',
  },
  {
    id: 'org2',
    name: 'Diatom',
    scientific: 'Bacillariophyta',
    category: 'Microalgae',
    description: 'Single-celled algae encased in intricate glass-like shells called frustules. Their geometric patterns are so precise they are used to test the quality of microscope lenses.',
    fact: 'Produce 20% of Earth\'s oxygen',
    color: 'from-cyan-500/20 to-blue-500/10',
    accent: 'text-cyan-400',
    border: 'border-cyan-500/30',
  },
  {
    id: 'org3',
    name: 'Vorticella',
    scientific: 'Vorticella convallaria',
    category: 'Protozoa',
    description: 'Bell-shaped protozoa that attach to surfaces via a long stalk. They create water currents with their cilia to draw in food particles, contracting rapidly when disturbed.',
    fact: 'Fastest contraction in biology',
    color: 'from-purple-500/20 to-pink-500/10',
    accent: 'text-purple-400',
    border: 'border-purple-500/30',
  },
  {
    id: 'org4',
    name: 'Radiolarian',
    scientific: 'Polycystinea',
    category: 'Marine Protozoa',
    description: 'Marine protozoa with intricate mineral skeletons of silica. Their geometric lattice structures inspired architects and engineers with their perfect mathematical forms.',
    fact: 'Inspired geodesic dome design',
    color: 'from-amber-500/20 to-orange-500/10',
    accent: 'text-amber-400',
    border: 'border-amber-500/30',
  },
  {
    id: 'org5',
    name: 'Rotifer',
    scientific: 'Bdelloidea',
    category: 'Micro-animal',
    description: 'Microscopic animals with a crown of cilia that resembles a spinning wheel. Some species have survived without sexual reproduction for 80 million years.',
    fact: 'Survived 24,000 years frozen',
    color: 'from-green-500/20 to-teal-500/10',
    accent: 'text-green-400',
    border: 'border-green-500/30',
  },
  {
    id: 'org6',
    name: 'Paramecium',
    scientific: 'Paramecium caudatum',
    category: 'Ciliate',
    description: 'Slipper-shaped single-celled organisms covered in thousands of tiny hair-like cilia. They are one of the most studied organisms in biology classrooms worldwide.',
    fact: 'Has two nuclei simultaneously',
    color: 'from-blue-500/20 to-indigo-500/10',
    accent: 'text-blue-400',
    border: 'border-blue-500/30',
  },
];

const OrganismCard = ({ org }) => (
  <div
    className={`bg-gradient-to-br ${org.color} border ${org.border} rounded-2xl overflow-hidden group hover:shadow-lg transition-all duration-300`}
  >
    <div className="relative overflow-hidden h-52">
      <img
        alt={org.name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        data-strk-img-id={`org-${org.id}-2c3d4e`}
        data-strk-img={`[org-desc-${org.id}] [org-name-${org.id}] microscopy`}
        data-strk-img-ratio="4x3"
        data-strk-img-width="500"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050d1a]/80 to-transparent" />
      <span className={`absolute top-3 right-3 text-xs font-semibold tracking-widest uppercase ${org.accent} bg-[#050d1a]/70 px-2.5 py-1 rounded-full`}>
        {org.category}
      </span>
    </div>
    <div className="p-5">
      <h3 id={`org-name-${org.id}`} className="text-sky-50 font-bold text-xl mb-0.5">
        {org.name}
      </h3>
      <p className="text-slate-500 text-xs italic mb-3">{org.scientific}</p>
      <p id={`org-desc-${org.id}`} className="text-slate-300 text-sm leading-relaxed mb-4">
        {org.description}
      </p>
      <div className={`flex items-center gap-2 text-xs font-semibold ${org.accent}`}>
        <span>⚡</span>
        <span>{org.fact}</span>
      </div>
    </div>
  </div>
);

const Organisms = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="organisms" ref={containerRef} className="py-24 md:py-32 bg-[#050d1a]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase text-cyan-400 mb-3">
            Microscopic Life
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-sky-50 mb-4">
            Meet the Inhabitants
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-lg">
            Discover the remarkable creatures that populate the microcosmos — each with unique adaptations and extraordinary abilities.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {organisms.map((org) => (
            <OrganismCard key={org.id} org={org} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Organisms;
