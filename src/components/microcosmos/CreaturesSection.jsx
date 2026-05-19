import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const creatures = [
  { id: 'c1', titleId: 'creature-title-1', descId: 'creature-desc-1', name: 'Tardigrade', latin: 'Ramazzottius oberhaeuseri', fact: 'Survives in outer space', ratio: '1x1', width: 400 },
  { id: 'c2', titleId: 'creature-title-2', descId: 'creature-desc-2', name: 'Vorticella', latin: 'Vorticella convallaria', fact: 'Fastest contraction in nature', ratio: '1x1', width: 400 },
  { id: 'c3', titleId: 'creature-title-3', descId: 'creature-desc-3', name: 'Diatom', latin: 'Coscinodiscus radiatus', fact: 'Produces 20% of Earth\'s oxygen', ratio: '1x1', width: 400 },
  { id: 'c4', titleId: 'creature-title-4', descId: 'creature-desc-4', name: 'Rotifer', latin: 'Brachionus calyciflorus', fact: 'Reproduces without males', ratio: '1x1', width: 400 },
  { id: 'c5', titleId: 'creature-title-5', descId: 'creature-desc-5', name: 'Paramecium', latin: 'Paramecium caudatum', fact: 'Has two nuclei', ratio: '1x1', width: 400 },
  { id: 'c6', titleId: 'creature-title-6', descId: 'creature-desc-6', name: 'Radiolarian', latin: 'Acantharia species', fact: 'Skeleton made of strontium sulfate', ratio: '1x1', width: 400 },
];

const CreaturesSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="creatures" ref={containerRef} className="bg-black py-24 px-6 md:px-12">
      <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-4">05 — Creatures</p>
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
        Meet the Inhabitants
      </h2>
      <p className="text-neutral-400 text-lg mb-14 max-w-2xl">
        These are the architects of our world — ancient, resilient, and endlessly fascinating.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {creatures.map((creature) => (
          <div key={creature.id} className="group relative overflow-hidden rounded-xl bg-neutral-900 border border-neutral-800 hover:border-neutral-600 transition-all duration-300">
            <span id={creature.titleId} className="sr-only">{creature.name} microscopic organism</span>
            <span id={creature.descId} className="sr-only">{creature.fact} microscopy image of {creature.latin}</span>
            <div className="overflow-hidden">
              <img
                alt={creature.name}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
                style={{ aspectRatio: '1/1' }}
                data-strk-img-id={`creature-img-${creature.id}`}
                data-strk-img={`[${creature.descId}] [${creature.titleId}]`}
                data-strk-img-ratio="1x1"
                data-strk-img-width={creature.width}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
            <div className="p-4">
              <h3 className="text-white font-bold text-base">{creature.name}</h3>
              <p className="text-neutral-500 text-xs italic mb-2">{creature.latin}</p>
              <p className="text-neutral-400 text-xs">{creature.fact}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CreaturesSection;
