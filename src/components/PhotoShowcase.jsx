import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const photos = [
  {
    id: 'ph-01', imgId: 'photo-img-mc-01',
    titleId: 'photo-title-01', descId: 'photo-desc-01',
    title: 'Electron Microscopy', desc: 'Scanning electron microscope image of cell surface',
    ratio: '1x1', width: '500', height: 'h-64',
  },
  {
    id: 'ph-02', imgId: 'photo-img-mc-02',
    titleId: 'photo-title-02', descId: 'photo-desc-02',
    title: 'Fluorescence Imaging', desc: 'Fluorescent stained neurons brain cells microscopy',
    ratio: '3x4', width: '400', height: 'h-80',
  },
  {
    id: 'ph-03', imgId: 'photo-img-mc-03',
    titleId: 'photo-title-03', descId: 'photo-desc-03',
    title: 'Crystal Formation', desc: 'Vitamin C ascorbic acid crystal polarized light microscopy',
    ratio: '1x1', width: '500', height: 'h-56',
  },
  {
    id: 'ph-04', imgId: 'photo-img-mc-04',
    titleId: 'photo-title-04', descId: 'photo-desc-04',
    title: 'Butterfly Wing Scale', desc: 'Butterfly wing scales iridescent microscope close-up',
    ratio: '3x2', width: '600', height: 'h-48',
  },
  {
    id: 'ph-05', imgId: 'photo-img-mc-05',
    titleId: 'photo-title-05', descId: 'photo-desc-05',
    title: 'Red Blood Cells', desc: 'Human red blood cells erythrocytes electron microscope',
    ratio: '1x1', width: '500', height: 'h-72',
  },
  {
    id: 'ph-06', imgId: 'photo-img-mc-06',
    titleId: 'photo-title-06', descId: 'photo-desc-06',
    title: 'Moss Spores', desc: 'Moss spore capsule macro photography nature',
    ratio: '3x4', width: '400', height: 'h-64',
  },
  {
    id: 'ph-07', imgId: 'photo-img-mc-07',
    titleId: 'photo-title-07', descId: 'photo-desc-07',
    title: 'Insect Eye', desc: 'Compound eye of fly insect macro extreme close-up',
    ratio: '1x1', width: '500', height: 'h-56',
  },
  {
    id: 'ph-08', imgId: 'photo-img-mc-08',
    titleId: 'photo-title-08', descId: 'photo-desc-08',
    title: 'Salt Crystal', desc: 'Salt sodium chloride crystal cubic structure macro',
    ratio: '3x2', width: '600', height: 'h-48',
  },
  {
    id: 'ph-09', imgId: 'photo-img-mc-09',
    titleId: 'photo-title-09', descId: 'photo-desc-09',
    title: 'Algae Bloom', desc: 'Microscopic algae bloom green water pond',
    ratio: '1x1', width: '500', height: 'h-64',
  },
  {
    id: 'ph-10', imgId: 'photo-img-mc-10',
    titleId: 'photo-title-10', descId: 'photo-desc-10',
    title: 'Dust Mite', desc: 'House dust mite arachnid scanning electron microscope',
    ratio: '3x2', width: '600', height: 'h-52',
  },
];

export default function PhotoShowcase() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="showcase" ref={containerRef} className="bg-cosmos-dark py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.3em] font-semibold text-cosmos-teal mb-4">
            Photo Showcase
          </p>
          <h2
            id="showcase-section-title"
            className="text-4xl md:text-5xl font-bold text-cosmos-light mb-4"
          >
            Through the Lens
          </h2>
          <p id="showcase-section-desc" className="text-cosmos-muted text-lg max-w-2xl mx-auto">
            Modern microscopy techniques reveal a world of breathtaking color, texture, and form — transforming science into art.
          </p>
        </div>

        {/* Masonry-style columns */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="break-inside-avoid group relative overflow-hidden rounded-xl border border-cosmos-border hover:border-cosmos-teal/40 transition-all duration-300 mb-4"
            >
              <img
                alt={photo.title}
                data-strk-img-id={photo.imgId}
                data-strk-img={`[${photo.descId}] [${photo.titleId}] [showcase-section-desc] [showcase-section-title]`}
                data-strk-img-ratio={photo.ratio}
                data-strk-img-width={photo.width}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className={`w-full ${photo.height} object-cover transition-transform duration-500 group-hover:scale-105`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cosmos-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h4 id={photo.titleId} className="text-cosmos-light text-xs font-bold">{photo.title}</h4>
                <p id={photo.descId} className="text-cosmos-muted text-xs mt-0.5 leading-tight hidden">{photo.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
