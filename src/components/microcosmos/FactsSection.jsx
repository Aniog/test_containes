import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const facts = [
  {
    id: 'fact-01',
    imgId: 'fact-img-01-mn1op2',
    titleId: 'fact-01-title',
    descId: 'fact-01-desc',
    title: 'Tardigrades',
    desc: 'Tardigrade water bear microscopic indestructible animal',
    fact: 'Tardigrades can survive in the vacuum of space, extreme radiation, and temperatures from -272°C to 150°C.',
    label: 'Most Resilient',
  },
  {
    id: 'fact-02',
    imgId: 'fact-img-02-qr3st4',
    titleId: 'fact-02-title',
    descId: 'fact-02-desc',
    title: 'Radiolaria',
    desc: 'Radiolaria microscopic ocean organism geometric shell silica',
    fact: 'Radiolaria build intricate glass-like shells from silica, creating some of the most geometrically perfect structures in nature.',
    label: 'Most Beautiful',
  },
  {
    id: 'fact-03',
    imgId: 'fact-img-03-uv5wx6',
    titleId: 'fact-03-title',
    descId: 'fact-03-desc',
    title: 'Bacteria Speed',
    desc: 'Bacteria flagella swimming fast microscopic organism',
    fact: 'Some bacteria can swim at speeds equivalent to a human running 60 km/h, relative to their body size.',
    label: 'Fastest Swimmer',
  },
];

const stats = [
  { value: '1,000+', label: 'Microscope Types', desc: 'From optical to electron' },
  { value: '0.001mm', label: 'Smallest Visible', desc: 'With light microscopy' },
  { value: '10 billion', label: 'Microbes per gram', desc: 'In healthy soil' },
  { value: '99%', label: 'Life is Microbial', desc: 'Of all life on Earth' },
];

const FactsSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-[#050a0f]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24 p-8 bg-[#0d1f35] rounded-2xl border border-cyan-900/30">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-1">
                {stat.value}
              </div>
              <div className="text-white font-semibold text-sm mb-0.5">{stat.label}</div>
              <div className="text-slate-500 text-xs">{stat.desc}</div>
            </div>
          ))}
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-medium px-4 py-2 rounded-full mb-6 uppercase tracking-widest">
            Amazing Facts
          </div>
          <h2 id="facts-section-title" className="text-4xl md:text-5xl font-bold text-white mb-4">
            Stranger Than Fiction
          </h2>
          <p id="facts-section-desc" className="text-slate-400 text-lg max-w-2xl mx-auto">
            The microcosmos is full of creatures and phenomena that defy imagination.
          </p>
        </div>

        {/* Fact cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {facts.map((fact) => (
            <div
              key={fact.id}
              className="bg-[#0d1f35] rounded-2xl overflow-hidden border border-cyan-900/30 hover:border-cyan-500/40 transition-all duration-300 group hover:shadow-[0_0_30px_rgba(6,182,212,0.1)]"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  alt={fact.title}
                  data-strk-img-id={fact.imgId}
                  data-strk-img={`[${fact.descId}] [${fact.titleId}] [facts-section-desc] [facts-section-title]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1f35] to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 text-xs font-medium px-3 py-1 rounded-full">
                    {fact.label}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 id={fact.titleId} className="text-white font-bold text-xl mb-3">{fact.title}</h3>
                <p id={fact.descId} className="sr-only">{fact.desc}</p>
                <p className="text-slate-400 leading-relaxed text-sm">{fact.fact}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Full-width banner */}
        <div className="mt-16 relative overflow-hidden rounded-2xl">
          <div
            className="absolute inset-0"
            data-strk-bg-id="facts-banner-bg-yz9ab0"
            data-strk-bg="[facts-banner-desc] [facts-banner-title]"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1400"
            style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050a0f]/90 via-[#050a0f]/60 to-transparent" />
          <div className="relative z-10 p-12 md:p-16 max-w-2xl">
            <h3 id="facts-banner-title" className="text-3xl md:text-4xl font-bold text-white mb-4">
              The Ocean of the Invisible
            </h3>
            <p id="facts-banner-desc" className="text-slate-300 text-lg leading-relaxed mb-6">
              A single teaspoon of seawater contains over a million bacteria, a million viruses,
              and thousands of microscopic algae — an entire ecosystem in the palm of your hand.
            </p>
            <div className="flex items-center gap-3">
              <div className="w-12 h-px bg-cyan-500" />
              <span className="text-cyan-400 text-sm font-medium uppercase tracking-wider">Ocean Microbiology</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FactsSection;
