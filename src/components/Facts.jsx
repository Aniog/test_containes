import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const facts = [
  {
    id: 'fact-virus',
    number: '100nm',
    label: 'Typical virus size',
    title: 'Viruses',
    desc: 'Viruses are so small that 500 million could fit on the head of a pin. They are not technically alive — they need a host cell to replicate.',
    imgId: 'fact-img-virus-mc030',
    titleId: 'fact-title-virus',
    descId: 'fact-desc-virus',
    accent: 'text-cosmos-cyan',
  },
  {
    id: 'fact-dna',
    number: '2m',
    label: 'DNA in every cell',
    title: 'DNA Strands',
    desc: 'If you unraveled all the DNA in a single human cell, it would stretch to about 2 meters. The human genome contains over 3 billion base pairs.',
    imgId: 'fact-img-dna-mc031',
    titleId: 'fact-title-dna',
    descId: 'fact-desc-dna',
    accent: 'text-cosmos-violet',
  },
  {
    id: 'fact-mitochondria',
    number: '2000',
    label: 'Mitochondria per cell',
    title: 'Mitochondria',
    desc: 'Known as the powerhouse of the cell, mitochondria generate ATP energy. They have their own DNA, evidence of their ancient bacterial origins.',
    imgId: 'fact-img-mito-mc032',
    titleId: 'fact-title-mito',
    descId: 'fact-desc-mito',
    accent: 'text-cosmos-emerald',
  },
];

const Facts = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-cosmos-card py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-cosmos-cyan text-sm font-medium tracking-widest uppercase mb-3">
            Did You Know?
          </p>
          <h2 id="facts-title" className="text-4xl md:text-5xl font-bold text-white">
            Fascinating Micro Facts
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto text-lg">
            The microscopic world is full of mind-bending numbers and surprising truths.
          </p>
        </div>

        <div className="flex flex-col gap-16">
          {facts.map((fact, index) => (
            <div
              key={fact.id}
              className={`grid md:grid-cols-2 gap-10 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Image — alternates sides */}
              <div className={`relative ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="rounded-2xl overflow-hidden border border-cosmos-border shadow-xl">
                  <img
                    alt={fact.title}
                    data-strk-img-id={fact.imgId}
                    data-strk-img={`[${fact.descId}] [${fact.titleId}] [facts-title]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className={`absolute -inset-3 rounded-3xl blur-2xl -z-10 opacity-20 ${fact.accent.replace('text-', 'bg-')}`} />
              </div>

              {/* Text */}
              <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                <p className={`text-5xl font-black mb-2 ${fact.accent}`}>{fact.number}</p>
                <p className="text-slate-500 text-sm tracking-widest uppercase mb-4">{fact.label}</p>
                <h3 id={fact.titleId} className="text-white text-2xl font-bold mb-4">
                  {fact.title}
                </h3>
                <p id={fact.descId} className="text-slate-300 text-base leading-relaxed">
                  {fact.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facts;
