import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const facts = [
  {
    id: 'fact-weight',
    number: '2kg',
    title: 'Microbes in Your Body',
    desc: 'The human body carries about 2 kilograms of microorganisms — roughly the weight of your brain.',
    imgId: 'fact-body-mc050',
    titleId: 'fact-weight-title',
    descId: 'fact-weight-desc',
  },
  {
    id: 'fact-speed',
    number: '60×',
    title: 'Bacterial Speed',
    desc: 'Some bacteria can swim at speeds equivalent to a human running 60 times their body length per second.',
    imgId: 'fact-speed-mc051',
    titleId: 'fact-speed-title',
    descId: 'fact-speed-desc',
  },
  {
    id: 'fact-dna',
    number: '99%',
    title: 'Shared DNA',
    desc: 'Humans share 99% of their DNA with chimpanzees, but also share 31% with yeast — a microscopic fungus.',
    imgId: 'fact-dna-mc052',
    titleId: 'fact-dna-title',
    descId: 'fact-dna-desc',
  },
];

const FactsSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} id="facts" className="bg-cosmos-surface py-20 md:py-28 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-cosmos-teal text-xs font-semibold uppercase tracking-widest">
            Did You Know?
          </span>
          <h2
            id="facts-section-title"
            className="text-3xl md:text-5xl font-bold text-cosmos-text mt-3 mb-4"
          >
            Mind-Bending Microbial Facts
          </h2>
          <p
            id="facts-section-desc"
            className="text-cosmos-muted text-lg max-w-2xl mx-auto"
          >
            The microscopic world is full of surprises that challenge our understanding of life itself.
          </p>
        </div>

        {/* Facts */}
        <div className="grid md:grid-cols-3 gap-8">
          {facts.map((fact) => (
            <div
              key={fact.id}
              className="bg-cosmos-elevated border border-cosmos-teal/20 rounded-3xl overflow-hidden group hover:border-cosmos-teal/50 hover:shadow-glow-teal transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  alt={fact.title}
                  data-strk-img-id={fact.imgId}
                  data-strk-img={`[${fact.descId}] [${fact.titleId}] [facts-section-title]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cosmos-elevated/80 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-4xl font-black text-cosmos-teal">{fact.number}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 id={fact.titleId} className="text-cosmos-text font-bold text-xl mb-3">{fact.title}</h3>
                <p id={fact.descId} className="text-cosmos-muted text-sm leading-relaxed">{fact.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Wide banner image */}
        <div className="mt-12 relative rounded-3xl overflow-hidden border border-cosmos-teal/20 group">
          <div className="relative h-64 md:h-80">
            <img
              alt="Microscopic world panorama"
              data-strk-img-id="facts-banner-mc055"
              data-strk-img="[facts-section-desc] [facts-section-title]"
              data-strk-img-ratio="16x9"
              data-strk-img-width="1400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-cosmos-bg/90 via-cosmos-bg/50 to-transparent flex items-center">
              <div className="p-8 md:p-12 max-w-xl">
                <h3 className="text-cosmos-text text-2xl md:text-3xl font-bold mb-4">
                  Every Surface is a Universe
                </h3>
                <p className="text-cosmos-muted leading-relaxed">
                  A single square centimeter of human skin hosts over 1 million bacteria. Far from being harmful, most are essential guardians of our health.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FactsSection;
