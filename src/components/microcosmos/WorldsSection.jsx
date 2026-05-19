import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const worlds = [
  {
    id: 'w1',
    number: '01',
    titleId: 'world-title-1',
    descId: 'world-desc-1',
    title: 'The Water World',
    desc: 'A single drop of pond water contains thousands of organisms — algae, protozoa, rotifers, and bacteria — forming a complete ecosystem invisible to the naked eye.',
    tag: 'Aquatic Microbiome',
    ratio: '3x2',
    width: 700,
  },
  {
    id: 'w2',
    number: '02',
    titleId: 'world-title-2',
    descId: 'world-desc-2',
    title: 'The Soil Kingdom',
    desc: 'One teaspoon of healthy soil harbors more microorganisms than there are people on Earth. Fungi, nematodes, and bacteria weave an underground web of life.',
    tag: 'Soil Ecology',
    ratio: '3x2',
    width: 700,
  },
  {
    id: 'w3',
    number: '03',
    titleId: 'world-title-3',
    descId: 'world-desc-3',
    title: 'The Human Microbiome',
    desc: 'Your body is home to trillions of microorganisms — outnumbering your own cells. They digest food, train your immune system, and even influence your mood.',
    tag: 'Human Biology',
    ratio: '3x2',
    width: 700,
  },
  {
    id: 'w4',
    number: '04',
    titleId: 'world-title-4',
    descId: 'world-desc-4',
    title: 'The Deep Ocean',
    desc: 'In the crushing darkness of the deep sea, bioluminescent microbes and extremophile bacteria thrive in conditions once thought impossible for life.',
    tag: 'Deep Sea Life',
    ratio: '3x2',
    width: 700,
  },
];

const WorldsSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="worlds" ref={containerRef} className="bg-black py-24 px-6 md:px-12">
      <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-4">03 — Worlds</p>
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 max-w-2xl">
        Four Realms of the Microscopic Universe
      </h2>

      <div className="space-y-0">
        {worlds.map((world, index) => (
          <div key={world.id}>
            <div className={`grid md:grid-cols-2 gap-8 md:gap-16 items-center py-12 ${index % 2 === 1 ? 'md:[direction:rtl]' : ''}`}>
              {/* Image */}
              <div className="relative [direction:ltr]">
                <span id={world.titleId} className="sr-only">{world.title}</span>
                <span id={world.descId} className="sr-only">{world.desc}</span>
                <img
                  alt={world.title}
                  className="w-full rounded-xl ring-1 ring-white/10 object-cover"
                  style={{ aspectRatio: '3/2' }}
                  data-strk-img-id={`world-img-${world.id}`}
                  data-strk-img={`[${world.descId}] [${world.titleId}]`}
                  data-strk-img-ratio={world.ratio}
                  data-strk-img-width={world.width}
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1">
                  <span className="text-xs font-semibold text-neutral-300 uppercase tracking-widest">{world.tag}</span>
                </div>
              </div>

              {/* Text */}
              <div className="[direction:ltr]">
                <p className="text-6xl font-black text-neutral-800 mb-4">{world.number}</p>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{world.title}</h3>
                <p className="text-neutral-400 text-base leading-relaxed">{world.desc}</p>
                <button className="mt-6 border border-neutral-700 text-neutral-300 text-sm font-medium px-5 py-2 rounded-full hover:border-white hover:text-white transition-colors">
                  Learn More →
                </button>
              </div>
            </div>
            {index < worlds.length - 1 && (
              <hr className="border-neutral-900" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorldsSection;
