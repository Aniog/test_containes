import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const stats = [
  { value: '10⁻⁹', label: 'Nanometers', sub: 'Resolution of electron microscopes' },
  { value: '37T', label: 'Human Cells', sub: 'In the average adult body' },
  { value: '1M+', label: 'Insect Species', sub: 'Described by science so far' },
  { value: '99%', label: 'Invisible Life', sub: 'Of Earth\'s biodiversity is microbial' },
];

const facts = [
  {
    id: 'fact-1',
    imgId: 'fact-img-mc401',
    titleId: 'fact-1-title',
    descId: 'fact-1-desc',
    title: 'A Single Drop of Seawater',
    desc: 'One milliliter of ocean water contains up to one million bacteria and ten million viruses, forming a complex invisible ecosystem.',
    quote: 'In a single drop of seawater, there are more living organisms than there are people on Earth.',
  },
  {
    id: 'fact-2',
    imgId: 'fact-img-mc402',
    titleId: 'fact-2-title',
    descId: 'fact-2-desc',
    title: 'The Tardigrade Survivor',
    desc: 'Tardigrades — microscopic animals just 0.5mm long — can survive in outer space, withstand radiation 1,000 times lethal to humans, and revive after 30 years frozen.',
    quote: 'The toughest animal on Earth is invisible to the naked eye.',
  },
  {
    id: 'fact-3',
    imgId: 'fact-img-mc403',
    titleId: 'fact-3-title',
    descId: 'fact-3-desc',
    title: 'Crystal Symmetry',
    desc: 'Every snowflake has a unique hexagonal structure determined by temperature and humidity during its formation. No two are ever identical.',
    quote: 'Nature\'s most perfect geometry is written in ice.',
  },
];

export default function Facts() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-cosmos-dark py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 bg-cosmos-mid/40 rounded-2xl border border-white/10"
            >
              <div className="text-4xl md:text-5xl font-black text-cyan-400 mb-2">{stat.value}</div>
              <div className="text-white font-semibold mb-1">{stat.label}</div>
              <div className="text-slate-500 text-xs">{stat.sub}</div>
            </div>
          ))}
        </div>

        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-4 block">
            Did You Know
          </span>
          <h2 id="facts-title" className="text-4xl md:text-5xl font-bold text-white mb-4">
            Astonishing Micro Facts
          </h2>
          <p id="facts-subtitle" className="text-slate-400 text-lg max-w-2xl mx-auto">
            The microscopic world is full of surprises that challenge our understanding of life, matter, and the universe.
          </p>
        </div>

        {/* Fact cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {facts.map((fact) => (
            <div
              key={fact.id}
              className="bg-cosmos-mid/30 border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-400/30 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  alt={fact.title}
                  data-strk-img-id={fact.imgId}
                  data-strk-img={`[${fact.descId}] [${fact.titleId}] [facts-subtitle] [facts-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cosmos-deep/80 to-transparent" />
              </div>
              <div className="p-6">
                <h3 id={fact.titleId} className="text-white font-bold text-xl mb-3">{fact.title}</h3>
                <p id={fact.descId} className="text-slate-400 text-sm leading-relaxed mb-4">{fact.desc}</p>
                <blockquote className="border-l-2 border-cyan-400/50 pl-4 text-cyan-300/80 text-sm italic">
                  "{fact.quote}"
                </blockquote>
              </div>
            </div>
          ))}
        </div>

        {/* Full-width banner image */}
        <div className="mt-20 relative rounded-2xl overflow-hidden h-64 md:h-96 border border-white/10">
          <div
            className="absolute inset-0"
            data-strk-bg-id="facts-banner-bg-mc501"
            data-strk-bg="[facts-banner-desc] [facts-banner-title]"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1600"
            style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-cosmos-deep via-cosmos-deep/60 to-transparent" />
          <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16 max-w-2xl">
            <h3 id="facts-banner-title" className="text-3xl md:text-4xl font-bold text-white mb-4">
              Life at the Nanoscale
            </h3>
            <p id="facts-banner-desc" className="text-slate-300 text-lg leading-relaxed">
              Nanoscale biology reveals molecular machines, protein folding, and DNA replication — the fundamental processes that make life possible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
