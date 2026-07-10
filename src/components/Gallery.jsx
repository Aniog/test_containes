import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ZoomIn } from 'lucide-react';

const galleryItems = [
  {
    id: 'pollen-grain',
    imgId: 'gallery-img-mc101',
    titleId: 'gallery-pollen-grain-title',
    descId: 'gallery-pollen-grain-desc',
    title: 'Pollen Grain',
    desc: 'Scanning electron microscope image of a flower pollen grain surface',
    tag: 'Botany',
    ratio: '1x1',
    width: '600',
  },
  {
    id: 'tardigrade',
    imgId: 'gallery-img-mc102',
    titleId: 'gallery-tardigrade-title',
    descId: 'gallery-tardigrade-desc',
    title: 'Tardigrade',
    desc: 'Water bear microscopic animal extremophile survival',
    tag: 'Zoology',
    ratio: '4x3',
    width: '800',
  },
  {
    id: 'snowflake-crystal',
    imgId: 'gallery-img-mc103',
    titleId: 'gallery-snowflake-crystal-title',
    descId: 'gallery-snowflake-crystal-desc',
    title: 'Snowflake Crystal',
    desc: 'Ice crystal snowflake hexagonal symmetry macro photography',
    tag: 'Crystallography',
    ratio: '1x1',
    width: '600',
  },
  {
    id: 'red-blood-cells',
    imgId: 'gallery-img-mc104',
    titleId: 'gallery-red-blood-cells-title',
    descId: 'gallery-red-blood-cells-desc',
    title: 'Red Blood Cells',
    desc: 'Human red blood cells erythrocytes flowing in bloodstream microscopy',
    tag: 'Biology',
    ratio: '4x3',
    width: '800',
  },
  {
    id: 'butterfly-wing',
    imgId: 'gallery-img-mc105',
    titleId: 'gallery-butterfly-wing-title',
    descId: 'gallery-butterfly-wing-desc',
    title: 'Butterfly Wing Scales',
    desc: 'Butterfly wing iridescent scales microscopic structure color',
    tag: 'Entomology',
    ratio: '3x2',
    width: '900',
  },
  {
    id: 'diatom',
    imgId: 'gallery-img-mc106',
    titleId: 'gallery-diatom-title',
    descId: 'gallery-diatom-desc',
    title: 'Diatom',
    desc: 'Diatom algae silica shell intricate geometric pattern microscope',
    tag: 'Algae',
    ratio: '1x1',
    width: '600',
  },
  {
    id: 'neuron',
    imgId: 'gallery-img-mc107',
    titleId: 'gallery-neuron-title',
    descId: 'gallery-neuron-desc',
    title: 'Neuron Network',
    desc: 'Brain neuron nerve cell fluorescence microscopy glowing network',
    tag: 'Neuroscience',
    ratio: '4x3',
    width: '800',
  },
  {
    id: 'salt-crystal',
    imgId: 'gallery-img-mc108',
    titleId: 'gallery-salt-crystal-title',
    descId: 'gallery-salt-crystal-desc',
    title: 'Salt Crystal',
    desc: 'Sodium chloride salt crystal cubic structure polarized light microscopy',
    tag: 'Mineralogy',
    ratio: '1x1',
    width: '600',
  },
  {
    id: 'spider-eye',
    imgId: 'gallery-img-mc109',
    titleId: 'gallery-spider-eye-title',
    descId: 'gallery-spider-eye-desc',
    title: 'Spider Eye',
    desc: 'Jumping spider compound eye macro close-up detail',
    tag: 'Arachnology',
    ratio: '3x2',
    width: '900',
  },
  {
    id: 'mitosis',
    imgId: 'gallery-img-mc110',
    titleId: 'gallery-mitosis-title',
    descId: 'gallery-mitosis-desc',
    title: 'Cell Division',
    desc: 'Cell mitosis division chromosomes fluorescence confocal microscopy',
    tag: 'Cell Biology',
    ratio: '4x3',
    width: '800',
  },
  {
    id: 'vitamin-c',
    imgId: 'gallery-img-mc111',
    titleId: 'gallery-vitamin-c-title',
    descId: 'gallery-vitamin-c-desc',
    title: 'Vitamin C Crystal',
    desc: 'Ascorbic acid vitamin C crystal polarized light colorful microscopy',
    tag: 'Chemistry',
    ratio: '1x1',
    width: '600',
  },
  {
    id: 'mosquito-head',
    imgId: 'gallery-img-mc112',
    titleId: 'gallery-mosquito-head-title',
    descId: 'gallery-mosquito-head-desc',
    title: 'Mosquito Head',
    desc: 'Mosquito head compound eyes proboscis scanning electron microscope',
    tag: 'Entomology',
    ratio: '3x2',
    width: '900',
  },
];

const tags = ['All', ...Array.from(new Set(galleryItems.map((i) => i.tag)))];

export default function Gallery() {
  const containerRef = useRef(null);
  const [activeTag, setActiveTag] = useState('All');
  const [lightbox, setLightbox] = useState(null);

  const filtered = activeTag === 'All' ? galleryItems : galleryItems.filter((i) => i.tag === activeTag);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeTag]);

  return (
    <section id="gallery" ref={containerRef} className="bg-cosmos-deep py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-4 block">
            Visual Collection
          </span>
          <h2 id="gallery-title" className="text-4xl md:text-5xl font-bold text-white mb-4">
            The Microscopic Gallery
          </h2>
          <p id="gallery-subtitle" className="text-slate-400 text-lg max-w-2xl mx-auto">
            Stunning images captured through electron microscopes, fluorescence imaging, and polarized light photography.
          </p>
        </div>

        {/* Filter tags */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTag === tag
                  ? 'bg-cyan-400 text-cosmos-deep shadow-[0_0_20px_rgba(0,212,255,0.4)]'
                  : 'bg-white/5 text-slate-300 border border-white/10 hover:border-cyan-400/40 hover:text-cyan-400'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-400/40 transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(0,212,255,0.15)]"
              onClick={() => setLightbox(item)}
            >
              <div className="aspect-square">
                <img
                  alt={item.title}
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[${item.descId}] [${item.titleId}] [gallery-subtitle] [gallery-title]`}
                  data-strk-img-ratio={item.ratio}
                  data-strk-img-width={item.width}
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-cosmos-deep via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-xs text-cyan-400 font-medium uppercase tracking-wider">{item.tag}</span>
                <h3 id={item.titleId} className="text-white font-semibold text-sm mt-1">{item.title}</h3>
                <p id={item.descId} className="sr-only">{item.desc}</p>
              </div>
              <div className="absolute top-3 right-3 w-8 h-8 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ZoomIn className="w-4 h-4 text-white" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-w-3xl w-full rounded-2xl overflow-hidden border border-white/20 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              alt={lightbox.title}
              data-strk-img-id={`lightbox-${lightbox.imgId}`}
              data-strk-img={`[lightbox-desc-${lightbox.id}] [lightbox-title-${lightbox.id}]`}
              data-strk-img-ratio="4x3"
              data-strk-img-width="1200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-cosmos-deep to-transparent p-6">
              <span className="text-xs text-cyan-400 font-medium uppercase tracking-wider">{lightbox.tag}</span>
              <h3 id={`lightbox-title-${lightbox.id}`} className="text-white font-bold text-xl mt-1">{lightbox.title}</h3>
              <p id={`lightbox-desc-${lightbox.id}`} className="text-slate-400 text-sm mt-1">{lightbox.desc}</p>
            </div>
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
