import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const scienceCards = [
  {
    id: 's1',
    titleId: 'sci-title-1',
    descId: 'sci-desc-1',
    title: 'Electron Microscopy',
    desc: 'Scanning electron microscopes reveal nanoscale surface structures with stunning three-dimensional detail',
    category: 'Technology',
    ratio: '4x3',
    width: 600,
  },
  {
    id: 's2',
    titleId: 'sci-title-2',
    descId: 'sci-desc-2',
    title: 'Fluorescence Imaging',
    desc: 'Fluorescent dyes and proteins illuminate specific cellular structures in vivid color',
    category: 'Technique',
    ratio: '4x3',
    width: 600,
  },
  {
    id: 's3',
    titleId: 'sci-title-3',
    descId: 'sci-desc-3',
    title: 'Cryo-Electron Tomography',
    desc: 'Flash-frozen samples preserve life in its natural state for atomic-resolution 3D reconstruction',
    category: 'Innovation',
    ratio: '4x3',
    width: 600,
  },
];

const ScienceSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="science" ref={containerRef} className="bg-neutral-950 py-24 px-6 md:px-12">
      <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-4">04 — Science</p>

      <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white max-w-lg">
          The Tools That Reveal the Invisible
        </h2>
        <p className="text-neutral-400 max-w-sm text-base">
          Modern microscopy has transformed our understanding of life at the smallest scales, opening windows into worlds that were unimaginable just decades ago.
        </p>
      </div>

      {/* Science cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
        {scienceCards.map((card) => (
          <div key={card.id} className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden hover:border-neutral-600 transition-colors group">
            <div className="relative overflow-hidden">
              <span id={card.titleId} className="sr-only">{card.title}</span>
              <span id={card.descId} className="sr-only">{card.desc}</span>
              <img
                alt={card.title}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                style={{ aspectRatio: '4/3' }}
                data-strk-img-id={`sci-img-${card.id}`}
                data-strk-img={`[${card.descId}] [${card.titleId}]`}
                data-strk-img-ratio={card.ratio}
                data-strk-img-width={card.width}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
            <div className="p-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500">{card.category}</span>
              <h3 className="text-lg font-bold text-white mt-2 mb-2">{card.title}</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">{card.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Wide feature banner */}
      <div className="relative rounded-2xl overflow-hidden">
        <span id="banner-title" className="sr-only">Microscopic world scientific research laboratory</span>
        <span id="banner-subtitle" className="sr-only">Scientists exploring the microcosmos with advanced microscopy</span>
        <div
          className="w-full h-64 md:h-80"
          data-strk-bg-id="science-banner-4e8f2b"
          data-strk-bg="[banner-subtitle] [banner-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1400"
          style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <div className="text-center px-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-3">Research & Discovery</p>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Every Discovery Begins with a Single Lens
            </h3>
            <button className="bg-white text-black font-semibold px-7 py-3 rounded-full hover:bg-neutral-200 transition-colors">
              Explore Research
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScienceSection;
