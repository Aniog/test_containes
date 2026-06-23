import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const worlds = [
  {
    id: 'world-ocean',
    imgId: 'world-img-ocean-a1b2c3',
    titleId: 'world-ocean-title',
    descId: 'world-ocean-desc',
    title: 'Ocean Microbiome',
    desc: 'The ocean teems with microscopic life — phytoplankton, zooplankton, and marine bacteria that form the base of all oceanic food webs and produce half of Earth\'s oxygen.',
    stat: '10²⁸',
    statLabel: 'Marine microbes on Earth',
  },
  {
    id: 'world-soil',
    imgId: 'world-img-soil-d4e5f6',
    titleId: 'world-soil-title',
    descId: 'world-soil-desc',
    title: 'Soil Ecosystem',
    desc: 'A single teaspoon of healthy soil contains more microorganisms than there are people on Earth. Fungi, bacteria, and nematodes weave an invisible web of life.',
    stat: '1 Billion',
    statLabel: 'Bacteria per teaspoon of soil',
  },
  {
    id: 'world-human',
    imgId: 'world-img-human-g7h8i9',
    titleId: 'world-human-title',
    descId: 'world-human-desc',
    title: 'Human Microbiome',
    desc: 'Your body hosts trillions of microorganisms — bacteria, viruses, and fungi that outnumber your own cells and are essential to your health, immunity, and even mood.',
    stat: '38 Trillion',
    statLabel: 'Microbes in the human body',
  },
];

export default function WorldsSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="worlds" ref={containerRef} className="py-24 px-6 md:px-12 lg:px-24 bg-[#050a0f]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#00d4ff] mb-3">
            Ecosystems
          </p>
          <h2 id="worlds-title" className="text-4xl md:text-5xl font-bold text-[#e8f4f8] mb-4">
            Invisible Worlds
          </h2>
          <p id="worlds-subtitle" className="text-[#8ab4c8] text-lg max-w-2xl mx-auto">
            Microscopic ecosystems exist everywhere — in the ocean, in the soil, and even inside your own body.
          </p>
        </div>

        <div className="flex flex-col gap-16">
          {worlds.map((world, i) => (
            <div
              key={world.id}
              className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
            >
              <div className="w-full md:w-1/2 relative rounded-2xl overflow-hidden border border-[#1a3a50] group">
                <img
                  alt={world.title}
                  data-strk-img-id={world.imgId}
                  data-strk-img={`[${world.descId}] [${world.titleId}] [worlds-subtitle] [worlds-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="900"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050a0f]/60 to-transparent" />
              </div>

              <div className="w-full md:w-1/2 flex flex-col gap-6">
                <div className="inline-flex items-center gap-2">
                  <div className="w-8 h-px bg-[#00d4ff]" />
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#00d4ff]">
                    Ecosystem
                  </span>
                </div>
                <h3 id={world.titleId} className="text-3xl md:text-4xl font-bold text-[#e8f4f8]">
                  {world.title}
                </h3>
                <p id={world.descId} className="text-[#8ab4c8] text-lg leading-relaxed">
                  {world.desc}
                </p>
                <div className="bg-[#0d1a26] rounded-2xl border border-[#1a3a50] p-6 inline-block">
                  <p className="text-4xl font-black text-[#00d4ff]">{world.stat}</p>
                  <p className="text-[#8ab4c8] text-sm mt-1">{world.statLabel}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
