import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const allPhotos = [
  { id: 'g01', imgId: 'gallery-img-g01-aa1bb2', titleId: 'gallery-g01-title', descId: 'gallery-g01-desc', title: 'Neuron Network', desc: 'Fluorescent neurons forming complex neural network connections', ratio: '4x3', width: '700' },
  { id: 'g02', imgId: 'gallery-img-g02-cc3dd4', titleId: 'gallery-g02-title', descId: 'gallery-g02-desc', title: 'Water Bear', desc: 'Tardigrade water bear microscopic animal extreme survival', ratio: '4x3', width: '700' },
  { id: 'g03', imgId: 'gallery-img-g03-ee5ff6', titleId: 'gallery-g03-title', descId: 'gallery-g03-desc', title: 'Vitamin C Crystal', desc: 'Vitamin C ascorbic acid crystals polarized light microscopy colorful', ratio: '4x3', width: '700' },
  { id: 'g04', imgId: 'gallery-img-g04-gg7hh8', titleId: 'gallery-g04-title', descId: 'gallery-g04-desc', title: 'Mosquito Eye', desc: 'Compound eye of mosquito insect macro photography detail', ratio: '4x3', width: '700' },
  { id: 'g05', imgId: 'gallery-img-g05-ii9jj0', titleId: 'gallery-g05-title', descId: 'gallery-g05-desc', title: 'Red Blood Cells', desc: 'Red blood cells erythrocytes flowing in blood vessel', ratio: '4x3', width: '700' },
  { id: 'g06', imgId: 'gallery-img-g06-kk1ll2', titleId: 'gallery-g06-title', descId: 'gallery-g06-desc', title: 'Mold Spores', desc: 'Colorful mold fungal spores under scanning electron microscope', ratio: '4x3', width: '700' },
  { id: 'g07', imgId: 'gallery-img-g07-mm3nn4', titleId: 'gallery-g07-title', descId: 'gallery-g07-desc', title: 'Butterfly Proboscis', desc: 'Butterfly proboscis coiled spiral macro close-up photography', ratio: '4x3', width: '700' },
  { id: 'g08', imgId: 'gallery-img-g08-oo5pp6', titleId: 'gallery-g08-title', descId: 'gallery-g08-desc', title: 'Quartz Crystal', desc: 'Quartz mineral crystal formation geology macro photography', ratio: '4x3', width: '700' },
  { id: 'g09', imgId: 'gallery-img-g09-qq7rr8', titleId: 'gallery-g09-title', descId: 'gallery-g09-desc', title: 'Paramecium', desc: 'Paramecium single-celled organism swimming in water drop', ratio: '4x3', width: '700' },
  { id: 'g10', imgId: 'gallery-img-g10-ss9tt0', titleId: 'gallery-g10-title', descId: 'gallery-g10-desc', title: 'Ant Head', desc: 'Ant head mandibles close-up scanning electron microscope', ratio: '4x3', width: '700' },
  { id: 'g11', imgId: 'gallery-img-g11-uu1vv2', titleId: 'gallery-g11-title', descId: 'gallery-g11-desc', title: 'Soap Bubble Film', desc: 'Soap bubble thin film interference colors iridescent macro', ratio: '4x3', width: '700' },
  { id: 'g12', imgId: 'gallery-img-g12-ww3xx4', titleId: 'gallery-g12-title', descId: 'gallery-g12-desc', title: 'Mitosis', desc: 'Cell division mitosis chromosomes fluorescent microscopy', ratio: '4x3', width: '700' },
];

const GallerySection = () => {
  const containerRef = useRef(null);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [selected]);

  return (
    <section id="gallery" ref={containerRef} className="py-24 md:py-32 bg-[#050a0f]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-medium px-4 py-2 rounded-full mb-6 uppercase tracking-widest">
            Photo Gallery
          </div>
          <h2 id="gallery-section-title" className="text-4xl md:text-5xl font-bold text-white mb-4">
            Microscopic Wonders
          </h2>
          <p id="gallery-section-desc" className="text-slate-400 text-lg max-w-2xl mx-auto">
            A curated collection of the most stunning microscopic imagery from around the world.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {allPhotos.map((photo) => (
            <div
              key={photo.id}
              className="relative overflow-hidden rounded-xl group cursor-pointer border border-cyan-900/20 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]"
              onClick={() => setSelected(photo)}
            >
              <div className="aspect-square overflow-hidden bg-[#0d1f35]">
                <img
                  alt={photo.title}
                  data-strk-img-id={photo.imgId}
                  data-strk-img={`[${photo.descId}] [${photo.titleId}] [gallery-section-desc] [gallery-section-title]`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#050a0f]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 id={photo.titleId} className="text-white text-sm font-semibold">{photo.title}</h3>
                <p id={photo.descId} className="text-slate-400 text-xs mt-0.5 line-clamp-2">{photo.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selected && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelected(null)}
          >
            <div
              className="relative max-w-4xl w-full bg-[#0d1f35] rounded-2xl overflow-hidden border border-cyan-900/40"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 z-10 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/80 transition-colors"
                onClick={() => setSelected(null)}
              >
                ✕
              </button>
              <div className="aspect-video overflow-hidden">
                <img
                  alt={selected.title}
                  data-strk-img-id={`lightbox-${selected.imgId}`}
                  data-strk-img={`[lightbox-desc-${selected.id}] [lightbox-title-${selected.id}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="1200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 id={`lightbox-title-${selected.id}`} className="text-white text-xl font-semibold mb-2">
                  {selected.title}
                </h3>
                <p id={`lightbox-desc-${selected.id}`} className="text-slate-400">
                  {selected.desc}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
