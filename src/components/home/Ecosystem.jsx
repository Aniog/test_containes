import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ecosystems = [
  {
    id: 'eco-1',
    titleId: 'eco-1-title',
    descId: 'eco-1-desc',
    imgId: 'eco-img-mc040',
    title: 'Ocean Microbiome',
    desc: 'The ocean\'s microscopic life produces over 50% of Earth\'s oxygen and forms the base of the entire marine food web.',
    tag: 'Marine',
  },
  {
    id: 'eco-2',
    titleId: 'eco-2-title',
    descId: 'eco-2-desc',
    imgId: 'eco-img-mc041',
    title: 'Soil Ecosystem',
    desc: 'A single teaspoon of healthy soil contains more microorganisms than there are people on Earth.',
    tag: 'Terrestrial',
  },
  {
    id: 'eco-3',
    titleId: 'eco-3-title',
    descId: 'eco-3-desc',
    imgId: 'eco-img-mc042',
    title: 'Human Gut Flora',
    desc: 'Trillions of bacteria in the human gut regulate immunity, mood, and metabolism — a true inner ecosystem.',
    tag: 'Human Body',
  },
];

const spotlightItems = [
  {
    id: 'spot-1',
    titleId: 'spot-1-title',
    descId: 'spot-1-desc',
    imgId: 'spot-img-mc043',
    title: 'Fungal Networks',
    desc: 'Underground mycelium networks connect trees and plants, transferring nutrients across entire forests.',
  },
  {
    id: 'spot-2',
    titleId: 'spot-2-title',
    descId: 'spot-2-desc',
    imgId: 'spot-img-mc044',
    title: 'Bioluminescent Plankton',
    desc: 'Dinoflagellates light up ocean waves at night with their natural bioluminescence.',
  },
];

export default function Ecosystem() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="ecosystem" ref={containerRef} className="py-24 md:py-32 bg-[#050a0f]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#00d4c8] text-sm font-medium tracking-widest uppercase mb-3 block">
            Micro Ecosystems
          </span>
          <h2
            id="eco-title"
            className="text-4xl md:text-5xl font-bold text-[#e2f0f9] mb-5"
          >
            Where Microbes Thrive
          </h2>
          <p
            id="eco-desc"
            className="text-[#7fa8c4] text-lg max-w-2xl mx-auto"
          >
            Microscopic life flourishes in every environment on Earth — from the deepest ocean
            trenches to the human body, forming complex and vital ecosystems.
          </p>
        </div>

        {/* Main ecosystem cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {ecosystems.map((eco) => (
            <div
              key={eco.id}
              className="relative rounded-2xl overflow-hidden group h-80 border border-[#00d4c8]/10 hover:border-[#00d4c8]/30 transition-all duration-300"
            >
              <img
                alt={eco.title}
                data-strk-img-id={eco.imgId}
                data-strk-img={`[${eco.descId}] [${eco.titleId}] [eco-desc] [eco-title]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050a0f] via-[#050a0f]/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <span className="inline-block text-[#00d4c8] text-xs font-medium tracking-widest uppercase mb-2 bg-[#00d4c8]/10 border border-[#00d4c8]/20 px-2.5 py-1 rounded-full">
                  {eco.tag}
                </span>
                <h3 id={eco.titleId} className="text-[#e2f0f9] font-bold text-xl mb-1">
                  {eco.title}
                </h3>
                <p id={eco.descId} className="text-[#7fa8c4] text-sm leading-relaxed">
                  {eco.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Spotlight row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {spotlightItems.map((spot) => (
            <div
              key={spot.id}
              className="relative rounded-2xl overflow-hidden group h-56 border border-[#00d4c8]/10 hover:border-[#00d4c8]/30 transition-all duration-300"
            >
              <img
                alt={spot.title}
                data-strk-img-id={spot.imgId}
                data-strk-img={`[${spot.descId}] [${spot.titleId}] [eco-desc] [eco-title]`}
                data-strk-img-ratio="16x9"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050a0f]/90 via-[#050a0f]/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 id={spot.titleId} className="text-[#e2f0f9] font-bold text-lg mb-1">
                  {spot.title}
                </h3>
                <p id={spot.descId} className="text-[#7fa8c4] text-sm">
                  {spot.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
