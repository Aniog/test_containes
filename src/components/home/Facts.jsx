import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const stats = [
  { value: '0.001mm', label: 'Size of a bacterium', color: 'text-cosmos-cyan' },
  { value: '37T', label: 'Cells in the human body', color: 'text-cosmos-violet' },
  { value: '1M+', label: 'Microbes per cm² of skin', color: 'text-cosmos-emerald' },
  { value: '10×', label: 'Microbes outnumber human cells', color: 'text-cosmos-cyan' },
];

const facts = [
  {
    id: 'fact-1', imgId: 'fact-img-mc501', titleId: 'fact-title-1', descId: 'fact-desc-1',
    title: 'Tardigrades Can Survive in Space',
    desc: 'These microscopic "water bears" can withstand extreme radiation, vacuum, and temperatures from -272°C to 150°C.',
    tag: 'Extremophiles',
  },
  {
    id: 'fact-2', imgId: 'fact-img-mc502', titleId: 'fact-title-2', descId: 'fact-desc-2',
    title: 'Diatoms Build Glass Shells',
    desc: 'Single-celled algae called diatoms construct intricate shells from silica — the same material as glass.',
    tag: 'Algae',
  },
  {
    id: 'fact-3', imgId: 'fact-img-mc503', titleId: 'fact-title-3', descId: 'fact-desc-3',
    title: 'Viruses Are Not Alive',
    desc: 'Viruses lack the cellular machinery to reproduce on their own — they must hijack a living host cell to replicate.',
    tag: 'Virology',
  },
];

export default function Facts() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-cosmos-bg py-20 md:py-28 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="text-center p-6 rounded-2xl border border-cosmos-border bg-cosmos-card"
            >
              <div className={`text-3xl md:text-4xl font-black mb-2 ${stat.color}`}>
                {stat.value}
              </div>
              <div className="text-cosmos-muted text-sm leading-snug">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Facts header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-cosmos-emerald mb-4">
            Did You Know?
          </p>
          <h2 id="facts-section-title" className="text-3xl md:text-5xl font-bold text-cosmos-text mb-6">
            Fascinating Micro Facts
          </h2>
          <p className="text-cosmos-muted text-lg max-w-2xl mx-auto">
            The microscopic world is full of surprises that challenge our understanding of life, physics, and chemistry.
          </p>
        </div>

        {/* Fact cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {facts.map((fact) => (
            <div
              key={fact.id}
              className="group overflow-hidden rounded-2xl border border-cosmos-border bg-cosmos-card hover:border-cosmos-emerald/50 transition-colors duration-300"
            >
              {/* Hidden text for image query */}
              <span id={fact.titleId} className="sr-only">{fact.title}</span>
              <span id={fact.descId} className="sr-only">{fact.desc}</span>

              <div className="aspect-[16/9] overflow-hidden">
                <img
                  alt={fact.title}
                  data-strk-img-id={fact.imgId}
                  data-strk-img={`[${fact.descId}] [${fact.titleId}] [facts-section-title]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold uppercase tracking-widest text-cosmos-emerald bg-cosmos-emerald/10 px-3 py-1 rounded-full">
                  {fact.tag}
                </span>
                <h3 className="text-cosmos-text font-bold text-lg mt-4 mb-3">{fact.title}</h3>
                <p className="text-cosmos-muted text-sm leading-relaxed">{fact.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="mt-20 text-center max-w-3xl mx-auto">
          <div className="text-5xl text-cosmos-cyan/30 font-serif leading-none mb-4">"</div>
          <blockquote className="text-xl md:text-2xl text-cosmos-text font-light italic leading-relaxed">
            The world is full of magical things patiently waiting for our wits to grow sharper.
          </blockquote>
          <p className="text-cosmos-muted text-sm mt-4 uppercase tracking-widest">— Bertrand Russell</p>
        </div>
      </div>
    </section>
  );
}
