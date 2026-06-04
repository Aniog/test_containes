import { useState, useEffect, useRef } from 'react';
import { X, ZoomIn, Camera } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const galleryItems = [
  {
    id: 'gallery-diatom',
    title: 'Diatom Colony',
    subtitle: 'Bacillariophyta',
    technique: 'Polarized Light Microscopy',
    magnification: '200x',
    description: 'Diatoms are single-celled algae with intricate silica cell walls called frustules. Their geometric precision rivals the finest human engineering.',
    titleId: 'gallery-diatom-title',
    descId: 'gallery-diatom-desc',
    imgId: 'gallery-diatom-img-a1b2',
    size: 'large',
  },
  {
    id: 'gallery-pollen',
    title: 'Sunflower Pollen',
    subtitle: 'Helianthus annuus',
    technique: 'Scanning Electron Microscopy',
    magnification: '1000x',
    description: 'The spiky surface of sunflower pollen grains helps them adhere to pollinators. Each grain is a marvel of evolutionary design.',
    titleId: 'gallery-pollen-title',
    descId: 'gallery-pollen-desc',
    imgId: 'gallery-pollen-img-c3d4',
    size: 'small',
  },
  {
    id: 'gallery-neuron',
    title: 'Neural Network',
    subtitle: 'Hippocampal neurons',
    technique: 'Fluorescence Microscopy',
    magnification: '400x',
    description: 'Fluorescently labeled neurons in the hippocampus reveal the intricate web of connections that form the basis of memory and learning.',
    titleId: 'gallery-neuron-title',
    descId: 'gallery-neuron-desc',
    imgId: 'gallery-neuron-img-e5f6',
    size: 'small',
  },
  {
    id: 'gallery-snowflake',
    title: 'Ice Crystal',
    subtitle: 'Water crystallization',
    technique: 'Dark Field Microscopy',
    magnification: '50x',
    description: 'The hexagonal symmetry of ice crystals emerges from the molecular structure of water. No two snowflakes are identical.',
    titleId: 'gallery-snowflake-title',
    descId: 'gallery-snowflake-desc',
    imgId: 'gallery-snowflake-img-g7h8',
    size: 'medium',
  },
  {
    id: 'gallery-tardigrade',
    title: 'Water Bear',
    subtitle: 'Ramazzottius oberhaeuseri',
    technique: 'Phase Contrast Microscopy',
    magnification: '500x',
    description: 'The tardigrade, or water bear, is one of the most resilient animals on Earth. It can survive in space, extreme temperatures, and intense radiation.',
    titleId: 'gallery-tardigrade-title',
    descId: 'gallery-tardigrade-desc',
    imgId: 'gallery-tardigrade-img-i9j0',
    size: 'medium',
  },
  {
    id: 'gallery-butterfly-wing',
    title: 'Butterfly Wing Scale',
    subtitle: 'Morpho butterfly',
    technique: 'Transmission Electron Microscopy',
    magnification: '5000x',
    description: 'The iridescent blue of Morpho butterfly wings comes not from pigment but from nanostructures that diffract light — a phenomenon called structural coloration.',
    titleId: 'gallery-butterfly-title',
    descId: 'gallery-butterfly-desc',
    imgId: 'gallery-butterfly-img-k1l2',
    size: 'large',
  },
  {
    id: 'gallery-blood',
    title: 'Blood Cells',
    subtitle: 'Human erythrocytes',
    technique: 'Scanning Electron Microscopy',
    magnification: '3000x',
    description: 'Red blood cells, white blood cells, and platelets flow through our veins. The biconcave shape of erythrocytes maximizes oxygen-carrying capacity.',
    titleId: 'gallery-blood-title',
    descId: 'gallery-blood-desc',
    imgId: 'gallery-blood-img-m3n4',
    size: 'small',
  },
  {
    id: 'gallery-mold',
    title: 'Penicillium Mold',
    subtitle: 'Penicillium chrysogenum',
    technique: 'Bright Field Microscopy',
    magnification: '400x',
    description: 'The mold that changed medicine. Penicillium chrysogenum produces penicillin, the first antibiotic, discovered by Alexander Fleming in 1928.',
    titleId: 'gallery-mold-title',
    descId: 'gallery-mold-desc',
    imgId: 'gallery-mold-img-o5p6',
    size: 'small',
  },
];

const techniques = ['All', 'Fluorescence', 'Electron', 'Phase Contrast', 'Polarized Light'];

export default function Gallery() {
  const [lightboxItem, setLightboxItem] = useState(null);
  const [filter, setFilter] = useState('All');
  const containerRef = useRef(null);

  const filtered = galleryItems.filter((item) => {
    if (filter === 'All') return true;
    return item.technique.toLowerCase().includes(filter.toLowerCase());
  });

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [filter, lightboxItem]);

  return (
    <div ref={containerRef} className="bg-cosmos-black min-h-screen pt-20">
      {/* Header */}
      <section className="relative py-20 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 dots-bg opacity-20" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
        <div className="max-w-7xl mx-auto relative z-10">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-4 block">
            Visual Collection
          </span>
          <h1 className="font-heading font-bold text-4xl md:text-6xl text-slate-50 mb-4">
            Microscopy <span className="gradient-text">Gallery</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl">
            A curated collection of stunning microscopy images revealing the hidden beauty of the microscopic world. Each image is a window into a universe most never see.
          </p>
        </div>
      </section>

      {/* Technique Filter */}
      <section className="px-4 md:px-8 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 flex-wrap">
            <Camera className="w-4 h-4 text-slate-500" />
            <span className="text-xs text-slate-500 font-mono uppercase tracking-widest mr-2">Technique:</span>
            {techniques.map((tech) => (
              <button
                key={tech}
                onClick={() => setFilter(tech)}
                className={`text-sm px-4 py-1.5 rounded-full border font-medium transition-all duration-200 ${
                  filter === tech
                    ? 'bg-cyan-400 text-cosmos-black border-cyan-400'
                    : 'border-cyan-900/40 text-slate-400 hover:border-cyan-400/40 hover:text-slate-200'
                }`}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry-style Grid */}
      <section className="px-4 md:px-8 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((item) => (
              <div
                key={item.id}
                onClick={() => setLightboxItem(item)}
                className={`group relative overflow-hidden rounded-xl border border-cyan-900/40 hover:border-cyan-400/40 cursor-pointer transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 ${
                  item.size === 'large' ? 'md:col-span-2' : ''
                }`}
              >
                <div className={`relative overflow-hidden bg-cosmos-dark ${
                  item.size === 'large' ? 'aspect-[16/9]' : 'aspect-[4/3]'
                }`}>
                  <img
                    data-strk-img-id={item.imgId}
                    data-strk-img={`[${item.descId}] [${item.titleId}]`}
                    data-strk-img-ratio={item.size === 'large' ? '16x9' : '4x3'}
                    data-strk-img-width={item.size === 'large' ? '1200' : '600'}
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cosmos-black/90 via-cosmos-black/20 to-transparent" />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-cosmos-black/60 rounded-full p-3">
                      <ZoomIn className="w-6 h-6 text-cyan-400" />
                    </div>
                  </div>

                  {/* Info overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex items-end justify-between">
                      <div>
                        <h3
                          id={item.titleId}
                          className="font-heading font-semibold text-slate-50 text-base mb-0.5"
                        >
                          {item.title}
                        </h3>
                        <p
                          id={item.descId}
                          className="text-slate-400 text-xs italic hidden"
                        >
                          {item.description}
                        </p>
                        <p className="text-slate-400 text-xs italic">{item.subtitle}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-mono text-cyan-400 block">{item.magnification}</span>
                        <span className="text-xs text-slate-500 font-mono">{item.technique.split(' ')[0]}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxItem && (
        <div
          className="fixed inset-0 z-50 bg-cosmos-black/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setLightboxItem(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-cosmos-navy border border-cyan-900/40 rounded-2xl overflow-hidden shadow-2xl shadow-cyan-500/10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightboxItem(null)}
              className="absolute top-4 right-4 z-10 bg-cosmos-black/60 text-slate-400 hover:text-slate-200 rounded-full p-2 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-[16/9] relative">
              <img
                data-strk-img-id={`lightbox-${lightboxItem.imgId}`}
                data-strk-img={`[lightbox-desc-${lightboxItem.id}] [lightbox-title-${lightboxItem.id}]`}
                data-strk-img-ratio="16x9"
                data-strk-img-width="1200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={lightboxItem.title}
                className="w-full h-full object-cover"
              />
              <span id={`lightbox-title-${lightboxItem.id}`} className="hidden">{lightboxItem.title} {lightboxItem.subtitle}</span>
              <span id={`lightbox-desc-${lightboxItem.id}`} className="hidden">{lightboxItem.description}</span>
            </div>

            <div className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="font-heading font-bold text-xl text-slate-50 mb-1">
                    {lightboxItem.title}
                  </h2>
                  <p className="text-slate-400 text-sm italic mb-3">{lightboxItem.subtitle}</p>
                  <p className="text-slate-300 text-sm leading-relaxed">{lightboxItem.description}</p>
                </div>
                <div className="text-right shrink-0">
                  <div className="text-cyan-400 font-mono text-sm font-semibold">{lightboxItem.magnification}</div>
                  <div className="text-slate-500 font-mono text-xs mt-1">{lightboxItem.technique}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
