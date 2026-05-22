import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const worlds = [
  {
    id: 'world-bacteria',
    title: 'Bacteria & Archaea',
    subtitle: 'The First Life Forms',
    desc: 'Prokaryotes have inhabited Earth for over 3.5 billion years. They colonize every habitat — from boiling hot springs to frozen tundra — and are essential to all biogeochemical cycles.',
    images: [
      { id: 'bact-img-1', imgId: 'bact-img-b1001', label: 'E. coli colony', ratio: '4x3', width: 500 },
      { id: 'bact-img-2', imgId: 'bact-img-b1002', label: 'Cyanobacteria bloom', ratio: '4x3', width: 500 },
      { id: 'bact-img-3', imgId: 'bact-img-b1003', label: 'Biofilm formation', ratio: '4x3', width: 500 },
    ],
    accent: 'cyan',
  },
  {
    id: 'world-fungi',
    title: 'Fungi & Spores',
    subtitle: 'The Decomposers',
    desc: 'Fungi are nature\'s recyclers. Their mycelial networks span entire forests, connecting trees in a vast underground communication system known as the "Wood Wide Web".',
    images: [
      { id: 'fungi-img-1', imgId: 'fungi-img-f1001', label: 'Mycelium threads', ratio: '4x3', width: 500 },
      { id: 'fungi-img-2', imgId: 'fungi-img-f1002', label: 'Spore release macro', ratio: '4x3', width: 500 },
      { id: 'fungi-img-3', imgId: 'fungi-img-f1003', label: 'Bioluminescent fungi', ratio: '4x3', width: 500 },
    ],
    accent: 'emerald',
  },
  {
    id: 'world-water',
    title: 'Water Worlds',
    subtitle: 'Life in Every Drop',
    desc: 'A single milliliter of ocean water contains millions of microorganisms. Phytoplankton produce half of Earth\'s oxygen, while zooplankton form the base of marine food webs.',
    images: [
      { id: 'water-img-1', imgId: 'water-img-w1001', label: 'Phytoplankton bloom', ratio: '4x3', width: 500 },
      { id: 'water-img-2', imgId: 'water-img-w1002', label: 'Copepod crustacean', ratio: '4x3', width: 500 },
      { id: 'water-img-3', imgId: 'water-img-w1003', label: 'Diatom under microscope', ratio: '4x3', width: 500 },
    ],
    accent: 'cyan',
  },
  {
    id: 'world-insects',
    title: 'Insects & Arthropods',
    subtitle: 'The Tiny Giants',
    desc: 'Insects make up over 80% of all animal species. Seen up close, their compound eyes, intricate wings, and specialized mouthparts reveal an engineering marvel of evolution.',
    images: [
      { id: 'insect-img-1', imgId: 'insect-img-i1001', label: 'Compound eye macro', ratio: '4x3', width: 500 },
      { id: 'insect-img-2', imgId: 'insect-img-i1002', label: 'Dragonfly wing detail', ratio: '4x3', width: 500 },
      { id: 'insect-img-3', imgId: 'insect-img-i1003', label: 'Ant carrying food', ratio: '4x3', width: 500 },
    ],
    accent: 'emerald',
  },
];

const WorldSection = ({ world }) => {
  const accentText = world.accent === 'cyan' ? 'text-cyan-400' : 'text-emerald-400';
  const accentBorder = world.accent === 'cyan' ? 'border-cyan-400/30' : 'border-emerald-400/30';
  const accentBg = world.accent === 'cyan' ? 'bg-cyan-400/10' : 'bg-emerald-400/10';

  return (
    <div id={world.id} className="mb-24 last:mb-0">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
        <div>
          <p className={`text-sm uppercase tracking-widest font-semibold mb-2 ${accentText}`}>
            {world.subtitle}
          </p>
          <h3
            id={`${world.id}-title`}
            className="text-2xl md:text-3xl font-bold text-white"
          >
            {world.title}
          </h3>
        </div>
        <p
          id={`${world.id}-desc`}
          className="text-gray-400 leading-relaxed max-w-lg text-sm md:text-base"
        >
          {world.desc}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {world.images.map((img, idx) => (
          <div
            key={img.id}
            className={`group relative rounded-2xl overflow-hidden bg-gray-800 border ${accentBorder} hover:-translate-y-1 transition-transform duration-300 ${idx === 0 ? 'md:col-span-1 aspect-[4/3]' : 'aspect-[4/3]'}`}
          >
            <img
              id={img.id}
              alt={img.label}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              data-strk-img-id={img.imgId}
              data-strk-img={`[${img.id}] [${world.id}-desc] [${world.id}-title]`}
              data-strk-img-ratio={img.ratio}
              data-strk-img-width={img.width}
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className={`absolute bottom-3 left-3 px-3 py-1 rounded-full text-xs font-medium text-white ${accentBg} border ${accentBorder}`}>
              {img.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Worlds = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="worlds" ref={containerRef} className="bg-gray-950 py-20 md:py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm uppercase tracking-widest font-semibold mb-3">
            Explore the Realms
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-5">
            Worlds Within Worlds
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Each microscopic kingdom has its own rules, beauty, and vital role in the web of life
          </p>
        </div>

        {worlds.map((world) => (
          <WorldSection key={world.id} world={world} />
        ))}
      </div>
    </section>
  );
};

export default Worlds;
