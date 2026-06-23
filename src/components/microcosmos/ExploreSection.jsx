import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const features = [
  {
    id: 'feat-cells',
    titleId: 'feat-cells-title',
    descId: 'feat-cells-desc',
    imgId: 'feat-img-cells-a1b2c3',
    title: 'Living Cells',
    desc: 'Witness the intricate machinery of life — organelles, membranes, and the constant dance of cellular processes.',
    tag: 'Biology',
  },
  {
    id: 'feat-crystals',
    titleId: 'feat-crystals-title',
    descId: 'feat-crystals-desc',
    imgId: 'feat-img-crystals-d4e5f6',
    title: 'Crystal Structures',
    desc: 'Minerals and salts form geometric masterpieces at the microscopic scale, revealing nature\'s mathematical precision.',
    tag: 'Mineralogy',
  },
  {
    id: 'feat-bacteria',
    titleId: 'feat-bacteria-title',
    descId: 'feat-bacteria-desc',
    imgId: 'feat-img-bacteria-g7h8i9',
    title: 'Microbial Life',
    desc: 'Bacteria, archaea, and protists — the oldest and most abundant life forms on Earth, thriving in every environment.',
    tag: 'Microbiology',
  },
  {
    id: 'feat-pollen',
    titleId: 'feat-pollen-title',
    descId: 'feat-pollen-desc',
    imgId: 'feat-img-pollen-j1k2l3',
    title: 'Pollen & Spores',
    desc: 'Each grain of pollen is a unique sculpture, evolved over millions of years to carry the seeds of plant reproduction.',
    tag: 'Botany',
  },
];

export default function ExploreSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="explore" ref={containerRef} className="py-24 px-6 md:px-12 lg:px-24 bg-[#050a0f]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#00d4ff] mb-3">
            What We Study
          </p>
          <h2 id="explore-title" className="text-4xl md:text-5xl font-bold text-[#e8f4f8] mb-4">
            Worlds Within Worlds
          </h2>
          <p id="explore-subtitle" className="text-[#8ab4c8] text-lg max-w-2xl mx-auto">
            Every drop of water, every grain of soil, every breath of air contains an entire universe of microscopic life and structure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feat) => (
            <div
              key={feat.id}
              className="group bg-[#0d1a26] rounded-2xl border border-[#1a3a50] overflow-hidden hover:border-[#00d4ff]/40 hover:shadow-[0_0_30px_rgba(0,212,255,0.1)] transition-all duration-300"
            >
              <div className="relative overflow-hidden h-56">
                <img
                  alt={feat.title}
                  data-strk-img-id={feat.imgId}
                  data-strk-img={`[${feat.descId}] [${feat.titleId}] [explore-subtitle] [explore-title]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1a26] via-transparent to-transparent" />
                <span className="absolute top-4 left-4 bg-[#00d4ff]/20 text-[#00d4ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full border border-[#00d4ff]/30">
                  {feat.tag}
                </span>
              </div>
              <div className="p-6">
                <h3 id={feat.titleId} className="text-xl font-semibold text-[#e8f4f8] mb-2">
                  {feat.title}
                </h3>
                <p id={feat.descId} className="text-[#8ab4c8] leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
