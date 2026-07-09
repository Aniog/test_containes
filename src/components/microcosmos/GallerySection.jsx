import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const galleryItems = [
  {
    id: 'gal-diatom',
    title: 'Diatom Colony',
    category: 'Algae',
    size: 'large',
    imgId: 'gal-img-diatom-aa1bb2',
    titleId: 'gal-diatom-title',
    descId: 'gal-diatom-desc',
    desc: 'Microscopic algae with intricate silica shells forming geometric patterns',
  },
  {
    id: 'gal-pollen',
    title: 'Pollen Grain',
    category: 'Botany',
    size: 'small',
    imgId: 'gal-img-pollen-cc3dd4',
    titleId: 'gal-pollen-title',
    descId: 'gal-pollen-desc',
    desc: 'Colorized scanning electron microscope image of flower pollen',
  },
  {
    id: 'gal-neuron',
    title: 'Neuron Network',
    category: 'Neuroscience',
    size: 'small',
    imgId: 'gal-img-neuron-ee5ff6',
    titleId: 'gal-neuron-title',
    descId: 'gal-neuron-desc',
    desc: 'Fluorescent microscopy of interconnected brain neurons',
  },
  {
    id: 'gal-snowflake',
    title: 'Ice Crystal',
    category: 'Crystallography',
    size: 'small',
    imgId: 'gal-img-snowflake-gg7hh8',
    titleId: 'gal-snowflake-title',
    descId: 'gal-snowflake-desc',
    desc: 'Macro photograph of a perfect hexagonal snowflake crystal',
  },
  {
    id: 'gal-bacteria',
    title: 'Bacteria Biofilm',
    category: 'Microbiology',
    size: 'small',
    imgId: 'gal-img-bacteria-ii9jj0',
    titleId: 'gal-bacteria-title',
    descId: 'gal-bacteria-desc',
    desc: 'Colorized electron microscope image of bacterial colony',
  },
  {
    id: 'gal-tardigrade',
    title: 'Tardigrade',
    category: 'Micro-fauna',
    size: 'large',
    imgId: 'gal-img-tardigrade-kk1ll2',
    titleId: 'gal-tardigrade-title',
    descId: 'gal-tardigrade-desc',
    desc: 'Water bear tardigrade, the most resilient animal on Earth',
  },
  {
    id: 'gal-mitosis',
    title: 'Cell Division',
    category: 'Cell Biology',
    size: 'small',
    imgId: 'gal-img-mitosis-mm3nn4',
    titleId: 'gal-mitosis-title',
    descId: 'gal-mitosis-desc',
    desc: 'Fluorescent microscopy capturing mitosis in progress',
  },
  {
    id: 'gal-mineral',
    title: 'Mineral Crystal',
    category: 'Mineralogy',
    size: 'small',
    imgId: 'gal-img-mineral-oo5pp6',
    titleId: 'gal-mineral-title',
    descId: 'gal-mineral-desc',
    desc: 'Polarized light microscopy of mineral thin section',
  },
];

const categories = ['All', 'Algae', 'Botany', 'Neuroscience', 'Crystallography', 'Microbiology', 'Micro-fauna', 'Cell Biology', 'Mineralogy'];

const GallerySection = () => {
  const containerRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeCategory]);

  return (
    <section id="gallery" ref={containerRef} className="py-20 md:py-28 bg-[#0d1a26]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#00d4ff] mb-3">
            Visual Archive
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#e8f4f8] mb-4">
            Gallery of the Invisible
          </h2>
          <p className="text-[#7fb3c8] max-w-xl mx-auto leading-relaxed">
            A curated collection of microscopic imagery — from electron microscopes to fluorescent confocal photography.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-[#00d4ff] text-[#050a0f]'
                  : 'border border-[#1a3a4a] text-[#7fb3c8] hover:border-[#00d4ff]/50 hover:text-[#00d4ff]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {filtered.map((item) => (
            <div
              key={item.id}
              className={`relative group overflow-hidden rounded-xl border border-[#1a3a4a] hover:border-[#00d4ff]/40 hover:shadow-[0_0_20px_rgba(0,212,255,0.15)] transition-all duration-300 ${
                item.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              <img
                alt={item.title}
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.descId}] [${item.titleId}]`}
                data-strk-img-ratio={item.size === 'large' ? '1x1' : '4x3'}
                data-strk-img-width={item.size === 'large' ? '800' : '500'}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                style={{ minHeight: item.size === 'large' ? '320px' : '160px' }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#00d4ff] mb-1">
                  {item.category}
                </span>
                <h3 id={item.titleId} className="text-[#e8f4f8] font-semibold text-sm md:text-base">
                  {item.title}
                </h3>
                <p id={item.descId} className="text-[#7fb3c8] text-xs mt-1 leading-snug hidden md:block">
                  {item.desc}
                </p>
              </div>

              {/* Always-visible category badge */}
              <div className="absolute top-3 left-3">
                <span className="bg-[#050a0f]/70 backdrop-blur-sm text-[#00d4ff] text-xs font-semibold px-2 py-0.5 rounded-full border border-[#00d4ff]/30">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
