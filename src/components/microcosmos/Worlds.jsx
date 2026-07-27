import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight } from 'lucide-react';

const worlds = [
  {
    id: 'world-bacteria',
    imgId: 'world-img-mc001',
    titleId: 'world-title-mc001',
    descId: 'world-desc-mc001',
    title: 'Bacterial Kingdom',
    desc: 'Single-celled prokaryotes that colonize every environment on Earth — from deep-sea vents to the human gut. They are the oldest and most abundant life forms.',
    tag: 'Prokaryotes',
    stat: '10³⁰',
    statLabel: 'Estimated on Earth',
    ratio: '3x2',
    width: '700',
  },
  {
    id: 'world-fungi',
    imgId: 'world-img-mc002',
    titleId: 'world-title-mc002',
    descId: 'world-desc-mc002',
    title: 'Fungal Networks',
    desc: 'Mycelium threads weave through soil forming vast underground networks — the "Wood Wide Web" connecting forests and recycling nutrients.',
    tag: 'Fungi',
    stat: '5.1M',
    statLabel: 'Estimated species',
    ratio: '3x2',
    width: '700',
  },
  {
    id: 'world-protozoa',
    imgId: 'world-img-mc003',
    titleId: 'world-title-mc003',
    descId: 'world-desc-mc003',
    title: 'Protozoa Realm',
    desc: 'Complex single-celled eukaryotes with remarkable behaviors — hunting prey, forming colonies, and even exhibiting primitive intelligence.',
    tag: 'Eukaryotes',
    stat: '50,000+',
    statLabel: 'Known species',
    ratio: '3x2',
    width: '700',
  },
  {
    id: 'world-viruses',
    imgId: 'world-img-mc004',
    titleId: 'world-title-mc004',
    descId: 'world-desc-mc004',
    title: 'Viral Structures',
    desc: 'Nanoscale entities on the boundary of life — geometric protein shells encasing genetic code, hijacking cells to replicate with astonishing precision.',
    tag: 'Viruses',
    stat: '10³¹',
    statLabel: 'In the oceans alone',
    ratio: '3x2',
    width: '700',
  },
];

const WorldCard = ({ world }) => (
  <div className="group bg-midnight border border-white/10 rounded-2xl overflow-hidden hover:border-teal-glow/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,212,200,0.1)]">
    <div className="relative overflow-hidden h-52">
      <img
        alt={world.title}
        data-strk-img-id={world.imgId}
        data-strk-img={`[${world.descId}] [${world.titleId}]`}
        data-strk-img-ratio={world.ratio}
        data-strk-img-width={world.width}
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 to-transparent" />
      <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-teal-glow/20 border border-teal-glow/30 text-teal-glow text-xs font-medium">
        {world.tag}
      </span>
    </div>
    <div className="p-6">
      <h3 id={world.titleId} className="text-soft-white font-bold text-xl mb-3">{world.title}</h3>
      <p id={world.descId} className="text-muted-blue text-sm leading-relaxed mb-5">{world.desc}</p>
      <div className="flex items-center justify-between">
        <div>
          <div className="text-teal-glow font-bold text-lg">{world.stat}</div>
          <div className="text-muted-blue text-xs">{world.statLabel}</div>
        </div>
        <button className="flex items-center gap-1.5 text-teal-glow text-sm font-medium hover:gap-3 transition-all">
          Learn more <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  </div>
);

const Worlds = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="worlds" className="py-20 md:py-28 bg-dark-navy">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <span className="text-xs font-medium tracking-widest uppercase text-teal-glow mb-3 block">Kingdoms of the Small</span>
          <h2 className="text-3xl md:text-4xl font-bold text-soft-white mb-4">Microscopic Worlds</h2>
          <p className="text-muted-blue max-w-xl mx-auto leading-relaxed">
            Each microscopic kingdom has its own rules, structures, and strategies for survival — forming the invisible foundation of all life on Earth.
          </p>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {worlds.map((world) => (
            <WorldCard key={world.id} world={world} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Worlds;
