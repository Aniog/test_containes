import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const specimens = [
  {
    id: 'spec-mc020',
    titleId: 'spec-title-mc020',
    descId: 'spec-desc-mc020',
    name: 'Tardigrade',
    latin: 'Ramazzottius oberhaeuseri',
    desc: 'Tardigrade water bear microscopic animal extreme environment survival',
    fact: 'Can survive in outer space, extreme radiation, and temperatures from -272°C to 150°C.',
    tag: 'Micro-animal',
  },
  {
    id: 'spec-mc021',
    titleId: 'spec-title-mc021',
    descId: 'spec-desc-mc021',
    name: 'Diatom',
    latin: 'Coscinodiscus radiatus',
    desc: 'Diatom algae silica shell geometric pattern microscope',
    fact: 'Produces about 20% of the oxygen we breathe and forms intricate glass-like shells.',
    tag: 'Algae',
  },
  {
    id: 'spec-mc022',
    titleId: 'spec-title-mc022',
    descId: 'spec-desc-mc022',
    name: 'Vorticella',
    latin: 'Vorticella campanula',
    desc: 'Vorticella bell-shaped protozoa stalk microscope pond water',
    fact: 'Uses a coiled stalk to anchor itself and creates water currents to capture food.',
    tag: 'Protozoa',
  },
  {
    id: 'spec-mc023',
    titleId: 'spec-title-mc023',
    descId: 'spec-desc-mc023',
    name: 'Radiolarian',
    latin: 'Aulacantha scolymantha',
    desc: 'Radiolarian marine protozoa silica skeleton microscope ocean',
    fact: 'Creates elaborate mineral skeletons that sink to the ocean floor, forming geological layers.',
    tag: 'Marine Protozoa',
  },
];

const SpecimenCard = ({ specimen }) => (
  <div className="group bg-[#0d1f3c] rounded-2xl overflow-hidden border border-slate-800 hover:border-[#00d4c8]/40 transition-all duration-300 hover:shadow-xl hover:shadow-[#00d4c8]/10">
    <div className="relative overflow-hidden aspect-[3/2]">
      <img
        alt={specimen.name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        data-strk-img-id={specimen.id}
        data-strk-img={`[${specimen.descId}] [${specimen.titleId}]`}
        data-strk-img-ratio="3x2"
        data-strk-img-width="600"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
      />
      <div className="absolute top-3 left-3">
        <span className="px-3 py-1 rounded-full bg-[#00d4c8]/20 border border-[#00d4c8]/40 text-[#00d4c8] text-xs font-semibold">
          {specimen.tag}
        </span>
      </div>
    </div>
    <div className="p-6">
      <h3 id={specimen.titleId} className="text-xl font-bold text-slate-50 mb-1">
        {specimen.name}
      </h3>
      <p className="text-sm italic text-slate-500 mb-3">{specimen.latin}</p>
      <p id={specimen.descId} className="text-slate-400 text-sm leading-relaxed mb-4">
        {specimen.desc}
      </p>
      <div className="border-t border-slate-700 pt-4">
        <p className="text-xs font-semibold tracking-widest uppercase text-[#00d4c8] mb-1">
          Fascinating Fact
        </p>
        <p className="text-slate-300 text-sm leading-relaxed">{specimen.fact}</p>
      </div>
    </div>
  </div>
);

const SpecimensSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="specimens" ref={containerRef} className="bg-[#050d1a] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm font-semibold tracking-widest uppercase text-[#00d4c8] mb-4 text-center">
          Featured Organisms
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-slate-50 text-center mb-4">
          Meet the Specimens
        </h2>
        <p className="text-slate-400 text-lg text-center max-w-2xl mx-auto mb-14 leading-relaxed">
          Each organism is a masterpiece of evolution — perfectly adapted to thrive in environments invisible to the human eye.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specimens.map((specimen) => (
            <SpecimenCard key={specimen.id} specimen={specimen} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecimensSection;
