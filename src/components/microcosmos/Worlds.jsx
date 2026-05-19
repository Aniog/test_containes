import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const worlds = [
  {
    id: 'world-mc020',
    titleId: 'world-title-1',
    number: '01',
    title: 'The Water World',
    subtitle: 'Aquatic Microbiome',
    body: 'A single milliliter of pond water contains thousands of organisms — rotifers, copepods, algae, and bacteria — all locked in an intricate web of predation and symbiosis.',
    tags: ['Protozoa', 'Algae', 'Rotifers', 'Bacteria'],
  },
  {
    id: 'world-mc021',
    titleId: 'world-title-2',
    number: '02',
    title: 'The Soil Kingdom',
    subtitle: 'Terrestrial Microbiome',
    body: 'Beneath every footstep lies a civilization. A teaspoon of healthy soil harbors more microorganisms than there are people on Earth — fungi, nematodes, and archaea shaping the very ground we walk on.',
    tags: ['Fungi', 'Nematodes', 'Archaea', 'Actinomycetes'],
  },
  {
    id: 'world-mc022',
    titleId: 'world-title-3',
    number: '03',
    title: 'The Crystal Realm',
    subtitle: 'Mineral Microstructures',
    body: 'Snowflakes, salt crystals, and mineral formations reveal nature\'s obsession with geometric perfection — each structure a testament to the mathematical laws governing matter at its smallest scale.',
    tags: ['Snowflakes', 'Minerals', 'Crystals', 'Salts'],
  },
  {
    id: 'world-mc023',
    titleId: 'world-title-4',
    number: '04',
    title: 'The Living Surface',
    subtitle: 'Biological Textures',
    body: 'The surface of a leaf, the skin of an insect, the petal of a flower — at microscopic scale, every biological surface transforms into an alien landscape of extraordinary complexity and beauty.',
    tags: ['Pollen', 'Scales', 'Trichomes', 'Cuticles'],
  },
];

const WorldCard = ({ world }) => (
  <div className="group grid grid-cols-1 md:grid-cols-2 gap-0 border border-neutral-800 rounded-xl overflow-hidden bg-[#111] hover:border-neutral-600 transition-colors duration-300">
    {/* Image */}
    <div className="overflow-hidden aspect-[4/3] md:aspect-auto">
      <img
        id={world.titleId}
        alt={world.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        data-strk-img-id={world.id}
        data-strk-img={`[${world.titleId}] microscopic ${world.subtitle}`}
        data-strk-img-ratio="4x3"
        data-strk-img-width={700}
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        style={{ minHeight: '240px' }}
      />
    </div>
    {/* Text */}
    <div className="p-8 flex flex-col justify-center">
      <span className="text-xs font-black text-neutral-600 tracking-widest mb-3">{world.number}</span>
      <p className="text-xs text-neutral-500 uppercase tracking-widest mb-2">{world.subtitle}</p>
      <h3 className="text-2xl font-black text-white tracking-tight mb-4">{world.title}</h3>
      <p className="text-neutral-400 leading-relaxed text-sm mb-6">{world.body}</p>
      <div className="flex flex-wrap gap-2">
        {world.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs text-neutral-500 border border-neutral-700 px-3 py-1 rounded-full uppercase tracking-wider"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const Worlds = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="worlds" ref={containerRef} className="bg-black py-20 md:py-32 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-3">
            Realms of the Small
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white">
            Worlds to Explore
          </h2>
        </div>
        <div className="flex flex-col gap-6">
          {worlds.map((world) => (
            <WorldCard key={world.id} world={world} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Worlds;
