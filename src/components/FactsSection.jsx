import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const facts = [
  {
    id: 'fact-dna',
    titleId: 'fact-dna-title',
    descId: 'fact-dna-desc',
    imgId: 'fact-img-mc018',
    title: 'DNA: The Blueprint of Life',
    desc: 'If you unraveled all the DNA in a single human cell and stretched it out, it would be about 2 meters long — yet it fits inside a nucleus just 6 micrometers wide.',
    detail: 'The human genome contains approximately 3 billion base pairs, encoding around 20,000 genes.',
  },
  {
    id: 'fact-mitochondria',
    titleId: 'fact-mitochondria-title',
    descId: 'fact-mitochondria-desc',
    imgId: 'fact-img-mc019',
    title: 'Mitochondria: Ancient Invaders',
    desc: 'Mitochondria — the powerhouses of the cell — were once free-living bacteria that were engulfed by larger cells over 1.5 billion years ago.',
    detail: 'They still retain their own DNA, separate from the cell\'s nucleus, as evidence of their ancient independent origin.',
  },
  {
    id: 'fact-extremophile',
    titleId: 'fact-extremophile-title',
    descId: 'fact-extremophile-desc',
    imgId: 'fact-img-mc020',
    title: 'Extremophiles: Life at the Edge',
    desc: 'Microscopic organisms called extremophiles thrive in conditions that would kill most life — boiling hot springs, acidic lakes, and even inside nuclear reactors.',
    detail: 'Deinococcus radiodurans can survive radiation doses 1,000 times lethal to humans, earning it the nickname "Conan the Bacterium."',
  },
];

const FactsSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="facts" ref={containerRef} className="bg-cosmos-navy py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-cosmos-teal text-xs uppercase tracking-widest font-sans font-semibold mb-4">
            Fascinating Facts
          </p>
          <h2
            id="facts-title"
            className="font-display text-4xl md:text-5xl font-bold text-cosmos-text"
          >
            Stranger Than Fiction
          </h2>
          <p className="text-cosmos-muted mt-4 max-w-xl mx-auto font-sans text-base leading-relaxed">
            The microscopic world operates by rules that seem impossible — yet every fact here is scientifically verified.
          </p>
        </div>

        <div className="space-y-16">
          {facts.map((fact, index) => (
            <div
              key={fact.id}
              className={`grid md:grid-cols-2 gap-10 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Image — alternates left/right */}
              <div className={`relative rounded-2xl overflow-hidden border border-cosmos-border shadow-cosmos-glow ${index % 2 === 1 ? 'md:order-2' : ''}`} style={{ height: '360px' }}>
                <img
                  alt={fact.title}
                  data-strk-img-id={fact.imgId}
                  data-strk-img={`[${fact.descId}] [${fact.titleId}] [facts-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cosmos-dark/50 to-transparent" />
              </div>

              {/* Text */}
              <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                <div className="w-10 h-px bg-cosmos-teal mb-6" />
                <h3 id={fact.titleId} className="font-display text-cosmos-text text-2xl md:text-3xl font-bold mb-4">
                  {fact.title}
                </h3>
                <p id={fact.descId} className="text-cosmos-muted text-base font-sans leading-relaxed mb-4">
                  {fact.desc}
                </p>
                <div className="bg-cosmos-card border border-cosmos-border rounded-xl p-4">
                  <p className="text-cosmos-cyan text-sm font-sans leading-relaxed italic">
                    "{fact.detail}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quote banner */}
        <div className="mt-24 relative rounded-2xl overflow-hidden border border-cosmos-border">
          <div
            className="absolute inset-0"
            data-strk-bg-id="quote-bg-mc021"
            data-strk-bg="[quote-text] microscopic world nature beauty"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1400"
            style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
          />
          <div className="absolute inset-0 bg-cosmos-dark/80" />
          <div className="relative z-10 py-16 px-8 md:px-16 text-center">
            <div className="text-cosmos-teal text-4xl font-display mb-4">"</div>
            <p
              id="quote-text"
              className="font-display text-cosmos-text text-2xl md:text-3xl font-semibold leading-relaxed max-w-3xl mx-auto mb-6"
            >
              The most beautiful thing we can experience is the mysterious. It is the source of all true art and science.
            </p>
            <p className="text-cosmos-muted text-sm font-sans tracking-widest uppercase">— Albert Einstein</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FactsSection;
