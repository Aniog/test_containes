import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const spotlightItems = [
  {
    id: 'sp1',
    title: 'Tardigrade',
    subtitle: 'The Indestructible',
    desc: 'Tardigrades can survive the vacuum of space, extreme radiation, and temperatures from -272°C to 150°C. They enter cryptobiosis — a state of suspended animation — to endure the impossible.',
    fact: 'Can survive 30 years without water',
    titleId: 'spot-sp1-title',
    descId: 'spot-sp1-desc',
    imgId: 'spot-img-sp1-mc024',
  },
  {
    id: 'sp2',
    title: 'Myxobacteria',
    subtitle: 'The Hunters',
    desc: 'These bacteria hunt in coordinated swarms, secreting enzymes to dissolve prey. When starving, thousands aggregate into a fruiting body — a multicellular structure that releases spores.',
    fact: 'Exhibit complex social behavior',
    titleId: 'spot-sp2-title',
    descId: 'spot-sp2-desc',
    imgId: 'spot-img-sp2-mc025',
  },
  {
    id: 'sp3',
    title: 'Vorticella',
    subtitle: 'The Dancer',
    desc: 'This bell-shaped ciliate attaches to surfaces via a coiled stalk that can contract 1000 times per second — one of the fastest movements in the biological world.',
    fact: 'Stalk contracts at 8cm/sec',
    titleId: 'spot-sp3-title',
    descId: 'spot-sp3-desc',
    imgId: 'spot-img-sp3-mc026',
  },
];

const SpotlightSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-cosmos-surface py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p id="spot-section-label" className="text-cosmos-cyan text-sm uppercase tracking-[0.3em] font-inter font-medium mb-4">
            Creature Features
          </p>
          <h2 id="spot-section-title" className="font-grotesk text-4xl md:text-5xl font-bold text-cosmos-text">
            Microscopic Marvels
          </h2>
        </div>

        <div className="space-y-8">
          {spotlightItems.map((item, idx) => (
            <div
              key={item.id}
              className={`grid md:grid-cols-5 gap-0 rounded-2xl overflow-hidden border border-cosmos-border hover:border-cosmos-cyan/20 transition-colors duration-300 ${idx % 2 === 1 ? '' : ''}`}
            >
              {/* Image */}
              <div className={`md:col-span-2 aspect-[4/3] md:aspect-auto overflow-hidden ${idx % 2 === 1 ? 'md:order-2' : ''}`}>
                <img
                  alt={item.title}
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[${item.descId}] [${item.titleId}] [spot-section-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className={`md:col-span-3 bg-cosmos-card p-8 md:p-10 flex flex-col justify-center ${idx % 2 === 1 ? 'md:order-1' : ''}`}>
                <p className="font-inter text-cosmos-cyan text-xs uppercase tracking-widest mb-2">{item.subtitle}</p>
                <h3 id={item.titleId} className="font-grotesk text-3xl font-bold text-cosmos-text mb-4">
                  {item.title}
                </h3>
                <p id={item.descId} className="font-inter text-cosmos-muted text-base leading-relaxed mb-6">
                  {item.desc}
                </p>
                <div className="inline-flex items-center gap-3 bg-cosmos-surface border border-cosmos-border rounded-full px-5 py-2 self-start">
                  <div className="w-2 h-2 rounded-full bg-cosmos-cyan animate-pulse" />
                  <span className="font-inter text-cosmos-text text-sm">{item.fact}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpotlightSection;
