import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const galleryItems = [
  { id: 'gal-1', imgId: 'gal-img-mc010', label: 'E. coli Bacteria', query: '[gal-1-label] electron microscope', ratio: '3x4', width: 400, tall: true },
  { id: 'gal-2', imgId: 'gal-img-mc011', label: 'Pollen Grain', query: '[gal-2-label] scanning electron microscope', ratio: '1x1', width: 400, tall: false },
  { id: 'gal-3', imgId: 'gal-img-mc012', label: 'Snowflake Crystal', query: '[gal-3-label] macro photography ice crystal', ratio: '1x1', width: 400, tall: false },
  { id: 'gal-4', imgId: 'gal-img-mc013', label: 'Paramecium', query: '[gal-4-label] protozoa microscope', ratio: '3x4', width: 400, tall: true },
  { id: 'gal-5', imgId: 'gal-img-mc014', label: 'Diatom Frustule', query: '[gal-5-label] silica shell microscope', ratio: '1x1', width: 400, tall: false },
  { id: 'gal-6', imgId: 'gal-img-mc015', label: 'Mold Spores', query: '[gal-6-label] fungi spores microscope', ratio: '3x2', width: 600, tall: false },
  { id: 'gal-7', imgId: 'gal-img-mc016', label: 'Red Blood Cells', query: '[gal-7-label] erythrocytes electron microscope', ratio: '3x2', width: 600, tall: false },
  { id: 'gal-8', imgId: 'gal-img-mc017', label: 'Tardigrade', query: '[gal-8-label] water bear microscope', ratio: '3x4', width: 400, tall: true },
  { id: 'gal-9', imgId: 'gal-img-mc018', label: 'Amoeba', query: '[gal-9-label] single cell organism microscope', ratio: '1x1', width: 400, tall: false },
  { id: 'gal-10', imgId: 'gal-img-mc019', label: 'Butterfly Wing Scale', query: '[gal-10-label] lepidoptera scale electron microscope', ratio: '3x2', width: 600, tall: false },
  { id: 'gal-11', imgId: 'gal-img-mc020', label: 'Radiolaria Skeleton', query: '[gal-11-label] marine protozoa silica skeleton', ratio: '1x1', width: 400, tall: false },
  { id: 'gal-12', imgId: 'gal-img-mc021', label: 'Neuron Network', query: '[gal-12-label] brain cell fluorescence microscope', ratio: '3x4', width: 400, tall: true },
];

const GallerySection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="gallery" ref={containerRef} className="py-24 md:py-32 bg-[#050d1a]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#00d4ff] text-xs font-semibold tracking-widest uppercase">Visual Archive</span>
          <h2 id="gallery-title" className="text-4xl md:text-5xl font-black text-[#f0f8ff] mt-3 mb-5">
            Microscopic <span className="text-[#00d4ff]">Gallery</span>
          </h2>
          <p id="gallery-subtitle" className="text-slate-400 text-lg max-w-2xl mx-auto">
            Stunning imagery captured through electron microscopes, fluorescence imaging, and advanced optical techniques.
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group relative break-inside-avoid rounded-xl overflow-hidden border border-[#00d4ff]/15 hover:border-[#00d4ff]/50 hover:shadow-[0_0_30px_rgba(0,212,255,0.2)] transition-all duration-300 cursor-pointer"
            >
              <img
                alt={item.label}
                className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                data-strk-img-id={item.imgId}
                data-strk-img={item.query}
                data-strk-img-ratio={item.ratio}
                data-strk-img-width={item.width}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                style={{ aspectRatio: item.tall ? '3/4' : item.ratio === '3x2' ? '3/2' : '1/1' }}
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050d1a]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span id={item.id} className="text-[#f0f8ff] text-sm font-semibold">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
