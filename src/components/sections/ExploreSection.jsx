import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const EXPLORE_ITEMS = [
  {
    id: 'explore-item-1',
    imgId: 'explore-img-g7h8i9',
    titleId: 'explore-title-1',
    descId: 'explore-desc-1',
    title: 'Cell Biology',
    description: 'Witness the intricate machinery of living cells — organelles, membranes, and the dance of mitosis.',
    tag: 'Biology',
  },
  {
    id: 'explore-item-2',
    imgId: 'explore-img-j1k2l3',
    titleId: 'explore-title-2',
    descId: 'explore-desc-2',
    title: 'Crystal Structures',
    description: 'Minerals and salts form breathtaking geometric patterns when viewed under polarized light.',
    tag: 'Mineralogy',
  },
  {
    id: 'explore-item-3',
    imgId: 'explore-img-m4n5o6',
    titleId: 'explore-title-3',
    descId: 'explore-desc-3',
    title: 'Microorganisms',
    description: 'Bacteria, protozoa, and algae — the ancient architects of life on Earth.',
    tag: 'Microbiology',
  },
];

export default function ExploreSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="explore" ref={containerRef} className="bg-black py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="text-neutral-500 text-xs font-medium tracking-widest uppercase mb-3">What We Study</p>
            <h2 id="explore-heading" className="text-white font-black text-4xl md:text-6xl tracking-tighter leading-none">
              Explore the<br />Invisible
            </h2>
          </div>
          <p id="explore-subheading" className="text-neutral-400 text-base leading-relaxed max-w-sm">
            Three realms of the microscopic world, each more astonishing than the last.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {EXPLORE_ITEMS.map((item) => (
            <div key={item.id} className="group bg-neutral-900 rounded-2xl overflow-hidden border border-white/5 hover:border-white/20 transition-all">
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[${item.descId}] [${item.titleId}] [explore-subheading] [explore-heading]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-black/60 text-white text-xs font-medium tracking-widest uppercase px-3 py-1 rounded-full border border-white/20">
                    {item.tag}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 id={item.titleId} className="text-white font-bold text-xl mb-2">{item.title}</h3>
                <p id={item.descId} className="text-neutral-400 text-sm leading-relaxed">{item.description}</p>
                <button className="mt-4 text-white text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn more <span>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
