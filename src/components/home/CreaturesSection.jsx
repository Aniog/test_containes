import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Zap, Droplets, Wind, Flame } from 'lucide-react';

const creatures = [
  {
    id: 'cr-mc001',
    labelId: 'cr-label-mc001',
    name: 'Tardigrade',
    nickname: 'Water Bear',
    habitat: 'Everywhere',
    superpower: 'Near-indestructible — survives space vacuum, radiation, and extreme temperatures.',
    imgDesc: 'tardigrade water bear electron microscope close up',
    icon: Zap,
    ratio: '4x3',
    width: 600,
  },
  {
    id: 'cr-mc002',
    labelId: 'cr-label-mc002',
    name: 'Deinococcus radiodurans',
    nickname: 'Conan the Bacterium',
    habitat: 'Radioactive sites',
    superpower: 'Withstands radiation 1,000× the lethal dose for humans.',
    imgDesc: 'Deinococcus radiodurans bacteria radiation resistant microscope',
    icon: Flame,
    ratio: '4x3',
    width: 600,
  },
  {
    id: 'cr-mc003',
    labelId: 'cr-label-mc003',
    name: 'Naegleria fowleri',
    nickname: 'Brain-Eating Amoeba',
    habitat: 'Warm freshwater',
    superpower: 'Can transform between amoeba, flagellate, and cyst forms.',
    imgDesc: 'Naegleria fowleri amoeba microscope freshwater',
    icon: Droplets,
    ratio: '4x3',
    width: 600,
  },
  {
    id: 'cr-mc004',
    labelId: 'cr-label-mc004',
    name: 'Pyrococcus furiosus',
    nickname: 'Furious Fireball',
    habitat: 'Hydrothermal vents',
    superpower: 'Thrives at 100°C — boiling water is its comfort zone.',
    imgDesc: 'Pyrococcus archaea hydrothermal vent microscope extreme heat',
    icon: Flame,
    ratio: '4x3',
    width: 600,
  },
  {
    id: 'cr-mc005',
    labelId: 'cr-label-mc005',
    name: 'Vorticella',
    nickname: 'Bell Animalcule',
    habitat: 'Freshwater ponds',
    superpower: 'Contracts its stalk at 8 cm/s — one of the fastest movements in biology.',
    imgDesc: 'Vorticella bell shaped protozoa stalk microscope pond water',
    icon: Wind,
    ratio: '4x3',
    width: 600,
  },
  {
    id: 'cr-mc006',
    labelId: 'cr-label-mc006',
    name: 'Thiomargarita namibiensis',
    nickname: 'Sulfur Pearl',
    habitat: 'Ocean sediments',
    superpower: 'The largest known bacterium — visible to the naked eye at 0.75 mm.',
    imgDesc: 'Thiomargarita namibiensis giant bacteria sulfur pearl ocean',
    icon: Zap,
    ratio: '4x3',
    width: 600,
  },
];

export default function CreaturesSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="creatures" ref={containerRef} className="py-24 px-4 md:px-8 bg-[#0a1628]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block bg-teal-900/50 text-teal-300 rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-widest mb-4 border border-teal-700/40">
            Featured Organisms
          </span>
          <h2 id="cr-title" className="text-4xl md:text-5xl font-black text-white mb-4">
            Remarkable <span className="text-teal-400">Creatures</span>
          </h2>
          <p id="cr-subtitle" className="text-slate-400 text-lg max-w-xl mx-auto">
            Meet the most extraordinary microorganisms on Earth — each with a superpower that defies imagination.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {creatures.map((c) => {
            const Icon = c.icon;
            return (
              <div
                key={c.id}
                className="group bg-[#0f1f35] rounded-2xl overflow-hidden border border-teal-900/40 hover:border-teal-500/50 transition-all duration-300 shadow-[0_0_20px_rgba(45,212,191,0.05)] hover:shadow-[0_0_30px_rgba(45,212,191,0.15)]"
              >
                {/* Image */}
                <div className="h-48 relative overflow-hidden">
                  <img
                    alt={c.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    data-strk-img-id={c.id}
                    data-strk-img={`[${c.labelId}] [cr-subtitle] [cr-title]`}
                    data-strk-img-ratio={c.ratio}
                    data-strk-img-width={c.width}
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                  <span id={c.labelId} className="hidden">{c.imgDesc}</span>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f1f35] to-transparent" />
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-teal-900/70 border border-teal-700/50 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-teal-400" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="mb-1">
                    <span className="text-xs text-teal-400 font-semibold uppercase tracking-wider">{c.nickname}</span>
                  </div>
                  <h3 className="text-white font-bold text-lg mb-1 italic">{c.name}</h3>
                  <div className="flex items-center gap-1 mb-3">
                    <span className="text-xs text-slate-500">Habitat:</span>
                    <span className="text-xs text-slate-400">{c.habitat}</span>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed border-t border-teal-900/40 pt-3">
                    <span className="text-teal-400 font-semibold">Superpower: </span>
                    {c.superpower}
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
