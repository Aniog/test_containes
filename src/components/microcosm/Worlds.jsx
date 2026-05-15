import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const worlds = [
  {
    id: 'cellular',
    tag: 'Cellular Biology',
    title: 'The Cellular World',
    description:
      'Every living organism is built from cells — the fundamental unit of life. Inside each cell lies a bustling metropolis: organelles that generate energy, ribosomes that build proteins, and DNA that encodes the blueprint of existence.',
    facts: ['Cells divide every 24 hours', 'Mitochondria have their own DNA', 'A single cell contains 2 meters of DNA'],
    imgId: 'world-img-mc020',
    reverse: false,
  },
  {
    id: 'aquatic',
    tag: 'Aquatic Microcosm',
    title: 'Life in a Drop of Water',
    description:
      'A single drop of pond water contains thousands of organisms — algae, protozoa, rotifers, and bacteria — all competing, cooperating, and evolving in a microscopic ocean. This aquatic microcosm mirrors the dynamics of entire ecosystems.',
    facts: ['1 ml of seawater holds 1 million bacteria', 'Phytoplankton produce 50% of Earth\'s oxygen', 'Rotifers can survive complete desiccation'],
    imgId: 'world-img-mc021',
    reverse: true,
  },
  {
    id: 'soil',
    tag: 'Soil Ecosystem',
    title: 'The Underground Network',
    description:
      'Beneath our feet lies one of the most complex ecosystems on Earth. A teaspoon of healthy soil contains more microorganisms than there are people on the planet. Fungi, bacteria, and nematodes form intricate webs that sustain all terrestrial life.',
    facts: ['1 gram of soil has 1 billion bacteria', 'Mycorrhizal networks span entire forests', 'Soil microbes cycle all nutrients on Earth'],
    imgId: 'world-img-mc022',
    reverse: false,
  },
  {
    id: 'crystal',
    tag: 'Crystal Structures',
    title: 'Geometry of Matter',
    description:
      'At the atomic scale, matter organizes itself into breathtaking geometric patterns. Crystals reveal the mathematical precision underlying all physical reality — from the hexagonal symmetry of snowflakes to the cubic lattice of salt.',
    facts: ['Snowflakes have 6-fold symmetry', 'Quartz crystals oscillate at 32,768 Hz', 'Diamond is the hardest natural substance'],
    imgId: 'world-img-mc023',
    reverse: true,
  },
];

const WorldCard = ({ world, containerRef }) => (
  <div className={`grid md:grid-cols-2 gap-12 items-center ${world.reverse ? 'md:[&>*:first-child]:order-2' : ''}`}>
    {/* Image */}
    <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-[0_0_60px_rgba(34,211,238,0.08)]">
      <img
        alt={world.title}
        className="w-full h-full object-cover"
        data-strk-img-id={world.imgId}
        data-strk-img={`[world-title-${world.id}] [world-tag-${world.id}]`}
        data-strk-img-ratio="4x3"
        data-strk-img-width="800"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 to-transparent" />
    </div>

    {/* Text */}
    <div>
      <p id={`world-tag-${world.id}`} className="text-cyan-400 text-sm font-semibold tracking-[0.3em] uppercase mb-4">
        {world.tag}
      </p>
      <h3 id={`world-title-${world.id}`} className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
        {world.title}
      </h3>
      <p className="text-slate-300 leading-relaxed mb-8">{world.description}</p>
      <ul className="space-y-3">
        {world.facts.map((fact) => (
          <li key={fact} className="flex items-start gap-3 text-slate-400 text-sm">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
            {fact}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const Worlds = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-[#0d1a2e] py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-cyan-400 text-sm font-semibold tracking-[0.3em] uppercase mb-4">
            Four Realms
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Worlds Within Worlds
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Each domain of the microcosm has its own rules, inhabitants, and wonders.
          </p>
        </div>

        {/* World cards */}
        <div className="space-y-24">
          {worlds.map((world) => (
            <WorldCard key={world.id} world={world} containerRef={containerRef} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Worlds;
