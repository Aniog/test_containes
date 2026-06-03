import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  {
    id: 'bacteria',
    title: 'Bacteria & Microbes',
    desc: 'Single-celled organisms that shaped life on Earth for billions of years.',
    count: '120+ specimens',
    titleId: 'cat-bacteria-title',
    descId: 'cat-bacteria-desc',
    imgId: 'cat-img-bacteria-3a1b2c',
    color: '#00d4c8',
  },
  {
    id: 'cells',
    title: 'Human Cells',
    desc: 'The fundamental building blocks of the human body, revealed in stunning detail.',
    count: '85+ specimens',
    titleId: 'cat-cells-title',
    descId: 'cat-cells-desc',
    imgId: 'cat-img-cells-9f4e5d',
    color: '#7c3aed',
  },
  {
    id: 'crystals',
    title: 'Crystals & Minerals',
    desc: 'Nature\'s geometric perfection — minerals and crystals at the atomic scale.',
    count: '95+ specimens',
    titleId: 'cat-crystals-title',
    descId: 'cat-crystals-desc',
    imgId: 'cat-img-crystals-6c8d2e',
    color: '#f59e0b',
  },
  {
    id: 'insects',
    title: 'Insects & Arthropods',
    desc: 'The alien beauty of compound eyes, wing scales, and exoskeleton textures.',
    count: '110+ specimens',
    titleId: 'cat-insects-title',
    descId: 'cat-insects-desc',
    imgId: 'cat-img-insects-1e7f3a',
    color: '#10b981',
  },
  {
    id: 'pollen',
    title: 'Pollen & Spores',
    desc: 'Intricate microscopic sculptures that carry the seeds of plant reproduction.',
    count: '70+ specimens',
    titleId: 'cat-pollen-title',
    descId: 'cat-pollen-desc',
    imgId: 'cat-img-pollen-5b9c4d',
    color: '#f43f5e',
  },
  {
    id: 'diatoms',
    title: 'Diatoms & Algae',
    desc: 'Microscopic glass houses — the most beautiful organisms in the ocean.',
    count: '60+ specimens',
    titleId: 'cat-diatoms-title',
    descId: 'cat-diatoms-desc',
    imgId: 'cat-img-diatoms-8a2e6f',
    color: '#06b6d4',
  },
];

export default function CategoriesSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="categories" ref={containerRef} className="bg-[#0d1526] py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[#00d4c8] text-xs font-bold tracking-[0.3em] uppercase mb-4">
            Browse by Type
          </p>
          <h2 id="categories-title" className="text-4xl md:text-5xl font-black text-[#f0f4ff] mb-4">
            Explore Categories
          </h2>
          <p id="categories-desc" className="text-[#8ba3c7] text-lg max-w-xl mx-auto">
            Dive into six distinct worlds of microscopic life and matter, each more astonishing than the last.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="group relative rounded-2xl overflow-hidden border border-[#1e3050] hover:border-[#00d4c8]/40 transition-all duration-300 cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  alt={cat.title}
                  data-strk-img-id={cat.imgId}
                  data-strk-img={`[${cat.descId}] [${cat.titleId}] [categories-desc] [categories-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#050a14] via-[#050a14]/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <span
                  className="text-xs font-bold tracking-widest uppercase px-2 py-1 rounded-full mb-3 inline-block"
                  style={{ color: cat.color, backgroundColor: `${cat.color}20` }}
                >
                  {cat.count}
                </span>
                <h3 id={cat.titleId} className="text-[#f0f4ff] font-bold text-xl mb-1">
                  {cat.title}
                </h3>
                <p id={cat.descId} className="text-[#8ba3c7] text-sm leading-relaxed">
                  {cat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
