import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Zap, Droplets, Wind, Leaf } from 'lucide-react';

const creatures = [
  {
    id: 'cr-1',
    titleId: 'cr-1-title',
    descId: 'cr-1-desc',
    imgId: 'creature-img-mc030',
    name: 'Tardigrade',
    nickname: 'Water Bear',
    desc: 'Nearly indestructible microscopic animals that can survive in outer space, extreme radiation, and complete dehydration.',
    icon: Zap,
    fact: 'Can survive 30 years without water',
    color: 'text-amber-400',
    borderColor: 'border-amber-400/20',
    bgColor: 'bg-amber-400/5',
  },
  {
    id: 'cr-2',
    titleId: 'cr-2-title',
    descId: 'cr-2-desc',
    imgId: 'creature-img-mc031',
    name: 'Vorticella',
    nickname: 'Bell Animalcule',
    desc: 'A stalked, bell-shaped protozoan that contracts rapidly when disturbed, creating a spring-like motion in pond water.',
    icon: Droplets,
    fact: 'Contracts 1000x per second',
    color: 'text-[#00d4c8]',
    borderColor: 'border-[#00d4c8]/20',
    bgColor: 'bg-[#00d4c8]/5',
  },
  {
    id: 'cr-3',
    titleId: 'cr-3-title',
    descId: 'cr-3-desc',
    imgId: 'creature-img-mc032',
    name: 'Rotifer',
    nickname: 'Wheel Animal',
    desc: 'Microscopic aquatic animals with a crown of cilia that spin like a wheel, drawing food particles into their mouths.',
    icon: Wind,
    fact: 'Reproduces without males',
    color: 'text-violet-400',
    borderColor: 'border-violet-400/20',
    bgColor: 'bg-violet-400/5',
  },
  {
    id: 'cr-4',
    titleId: 'cr-4-title',
    descId: 'cr-4-desc',
    imgId: 'creature-img-mc033',
    name: 'Euglena',
    nickname: 'Green Swimmer',
    desc: 'A single-celled organism that is both plant and animal — it photosynthesizes in light and hunts in darkness.',
    icon: Leaf,
    fact: 'Both plant and animal',
    color: 'text-emerald-400',
    borderColor: 'border-emerald-400/20',
    bgColor: 'bg-emerald-400/5',
  },
];

export default function FeaturedCreatures() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="creatures" ref={containerRef} className="py-24 md:py-32 bg-[#0d1a24]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#00d4c8] text-sm font-medium tracking-widest uppercase mb-3 block">
            Meet the Inhabitants
          </span>
          <h2
            id="creatures-title"
            className="text-4xl md:text-5xl font-bold text-[#e2f0f9] mb-5"
          >
            Featured Micro-Creatures
          </h2>
          <p
            id="creatures-desc"
            className="text-[#7fa8c4] text-lg max-w-2xl mx-auto"
          >
            From indestructible water bears to spinning wheel animals, the microcosmos
            is home to some of the most extraordinary life forms on Earth.
          </p>
        </div>

        {/* Creature cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {creatures.map((creature) => {
            const Icon = creature.icon;
            return (
              <div
                key={creature.id}
                className={`bg-[#050a0f] border ${creature.borderColor} rounded-2xl overflow-hidden hover:border-opacity-60 transition-all duration-300 group flex flex-col md:flex-row`}
              >
                <div className="relative md:w-56 h-52 md:h-auto flex-shrink-0 overflow-hidden">
                  <img
                    alt={creature.name}
                    data-strk-img-id={creature.imgId}
                    data-strk-img={`[${creature.descId}] [${creature.titleId}] [creatures-desc] [creatures-title]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#050a0f]/60 md:block hidden" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050a0f]/60 to-transparent md:hidden" />
                </div>

                <div className="p-6 flex flex-col justify-center">
                  <div className={`inline-flex items-center gap-2 ${creature.bgColor} ${creature.borderColor} border rounded-full px-3 py-1 w-fit mb-3`}>
                    <Icon className={`w-3.5 h-3.5 ${creature.color}`} />
                    <span className={`text-xs font-medium ${creature.color}`}>{creature.fact}</span>
                  </div>

                  <h3 id={creature.titleId} className="text-[#e2f0f9] font-bold text-xl mb-0.5">
                    {creature.name}
                  </h3>
                  <p className={`text-sm font-medium mb-3 ${creature.color}`}>
                    "{creature.nickname}"
                  </p>
                  <p id={creature.descId} className="text-[#7fa8c4] text-sm leading-relaxed">
                    {creature.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
