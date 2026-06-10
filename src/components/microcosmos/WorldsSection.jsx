import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const worlds = [
  {
    id: 'world-ocean',
    imgId: 'world-img-ocean-k1l2m3',
    titleId: 'world-title-ocean',
    descId: 'world-desc-ocean',
    title: 'Ocean Microbiome',
    desc: 'The ocean teems with trillions of microorganisms — phytoplankton, zooplankton, and marine bacteria that form the base of all aquatic food chains and produce half of Earth\'s oxygen.',
    stat: '10²⁸',
    statLabel: 'microbes in the ocean',
    color: '#be185d',
  },
  {
    id: 'world-soil',
    imgId: 'world-img-soil-n4o5p6',
    titleId: 'world-title-soil',
    descId: 'world-desc-soil',
    title: 'Soil Ecosystem',
    desc: 'A single teaspoon of healthy soil contains more microorganisms than there are people on Earth. Fungi, bacteria, and nematodes form complex underground networks that sustain all plant life.',
    stat: '1 billion',
    statLabel: 'bacteria per teaspoon',
    color: '#9d174d',
  },
  {
    id: 'world-human',
    imgId: 'world-img-human-q7r8s9',
    titleId: 'world-title-human',
    descId: 'world-desc-human',
    title: 'Human Microbiome',
    desc: 'Your body hosts 38 trillion microbial cells — outnumbering your own cells. These microscopic residents in your gut, skin, and mouth are essential for immunity, digestion, and even mood.',
    stat: '38 trillion',
    statLabel: 'microbes in your body',
    color: '#db2777',
  },
];

export default function WorldsSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="worlds" ref={containerRef} className="py-20 md:py-28 bg-[#fdf2f8]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <span className="text-[#be185d] text-sm font-semibold tracking-widest uppercase">Ecosystems</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold text-[#1e1b2e]">Microscopic Worlds</h2>
          <p className="mt-4 text-[#7c4d6a] max-w-2xl mx-auto text-lg">
            From ocean depths to the human body, microscopic life shapes every ecosystem on our planet.
          </p>
        </div>

        <div className="flex flex-col gap-16">
          {worlds.map((w, i) => (
            <div
              key={w.id}
              className={`flex flex-col ${i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-12 items-center`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2 rounded-2xl overflow-hidden border border-[#f9a8d4] shadow-[0_0_40px_rgba(0,212,255,0.08)] aspect-video">
                <img
                  alt={w.title}
                  data-strk-img-id={w.imgId}
                  data-strk-img={`[${w.descId}] [${w.titleId}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text */}
              <div className="w-full md:w-1/2">
                <div
                  className="inline-block mb-4 px-4 py-2 rounded-xl border text-sm font-bold"
                  style={{ borderColor: `${w.color}40`, color: w.color, backgroundColor: `${w.color}10` }}
                >
                  {w.stat} <span className="font-normal text-[#7c4d6a]">{w.statLabel}</span>
                </div>
                <h3 id={w.titleId} className="text-2xl md:text-3xl font-bold text-[#1e1b2e] mb-4">{w.title}</h3>
                <p id={w.descId} className="text-[#7c4d6a] leading-relaxed text-base md:text-lg">{w.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
