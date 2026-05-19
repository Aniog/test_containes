import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ecosystems = [
  {
    imgId: 'eco-mc013',
    titleId: 'eco-title-1',
    searchText: 'Ocean plankton phytoplankton microscopy colorful marine',
    title: 'Ocean Plankton',
    subtitle: 'Marine Microcosmos',
    desc: 'Phytoplankton produce over half of Earth\'s oxygen. These microscopic drifters form the base of the entire marine food web.',
    tag: 'Marine',
  },
  {
    imgId: 'eco-mc014',
    titleId: 'eco-title-2',
    searchText: 'Soil microbiome bacteria fungi microscopy earth',
    title: 'Soil Microbiome',
    subtitle: 'Terrestrial Microcosmos',
    desc: 'A single teaspoon of healthy soil contains more microorganisms than there are people on Earth. They drive all nutrient cycles.',
    tag: 'Terrestrial',
  },
  {
    imgId: 'eco-mc015',
    titleId: 'eco-title-3',
    searchText: 'Human microbiome gut bacteria microscopy colorful',
    title: 'Human Microbiome',
    subtitle: 'Internal Microcosmos',
    desc: 'Your body hosts trillions of microorganisms — outnumbering your own cells. They regulate immunity, digestion, and even mood.',
    tag: 'Human',
  },
];

const EcosystemSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="ecosystem" ref={containerRef} className="bg-[#0a0a0a] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">

        <p className="font-body text-xs tracking-[0.3em] uppercase text-white/40 mb-16">
          04 — Ecosystem
        </p>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white max-w-lg">
            Worlds Within<br />
            <span className="italic font-normal">Every World</span>
          </h2>
          <p className="font-body text-sm text-white/40 max-w-sm leading-relaxed">
            Microbial ecosystems exist in every environment on Earth — from the deepest ocean trenches to the highest mountain peaks.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ecosystems.map((eco) => (
            <div key={eco.imgId} className="group bg-[#111] overflow-hidden">
              <div className="overflow-hidden">
                <span id={eco.titleId} className="sr-only">{eco.searchText}</span>
                <img
                  alt={eco.title}
                  className="w-full aspect-[3/2] object-cover group-hover:scale-105 transition-transform duration-700"
                  data-strk-img-id={eco.imgId}
                  data-strk-img={`[${eco.titleId}]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <div className="p-8">
                <span className="inline-block font-body text-xs tracking-widest uppercase text-white/30 border border-white/20 px-3 py-1 mb-5">
                  {eco.tag}
                </span>
                <h3 className="font-display text-2xl font-bold text-white mb-2">{eco.title}</h3>
                <p className="font-body text-xs tracking-widest uppercase text-white/40 mb-5">{eco.subtitle}</p>
                <p className="font-body text-sm text-white/50 leading-relaxed">{eco.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Full-width feature image */}
        <div className="mt-6 overflow-hidden relative">
          <img
            alt="Microscopic ecosystem panorama"
            id="eco-panorama-title"
            className="w-full aspect-[21/9] object-cover"
            data-strk-img-id="eco-mc016"
            data-strk-img="[eco-panorama-title]"
            data-strk-img-ratio="16x9"
            data-strk-img-width="1600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
          <span id="eco-panorama-title" className="sr-only">Microscopic ecosystem panorama colorful microorganisms</span>
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60 flex items-center justify-center">
            <p className="font-display text-3xl md:text-5xl font-bold text-white text-center italic">
              "Life finds a way — even where we cannot see."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;
