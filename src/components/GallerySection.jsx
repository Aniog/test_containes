import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const galleryItems = [
  { id: 'gallery-img-a1b2c3', query: 'bacteria colony fluorescent microscope colorful', label: 'Bacterial Colony', size: 'large', ratio: '4x3', width: 900 },
  { id: 'gallery-img-d4e5f6', query: 'snowflake crystal macro photography', label: 'Ice Crystal', size: 'small', ratio: '1x1', width: 500 },
  { id: 'gallery-img-g7h8i9', query: 'neuron brain cell microscope glowing', label: 'Neuron Network', size: 'small', ratio: '1x1', width: 500 },
  { id: 'gallery-img-j1k2l3', query: 'butterfly wing scale electron microscope', label: 'Butterfly Wing Scale', size: 'medium', ratio: '4x3', width: 700 },
  { id: 'gallery-img-m4n5o6', query: 'red blood cells microscope flowing', label: 'Red Blood Cells', size: 'medium', ratio: '4x3', width: 700 },
  { id: 'gallery-img-p7q8r9', query: 'salt crystal macro close up cubic', label: 'Salt Crystal', size: 'small', ratio: '1x1', width: 500 },
  { id: 'gallery-img-s1t2u3', query: 'spider silk thread microscope close up', label: 'Spider Silk', size: 'small', ratio: '1x1', width: 500 },
  { id: 'gallery-img-v4w5x6', query: 'virus particle electron microscope colorized', label: 'Virus Particle', size: 'large', ratio: '16x9', width: 900 },
];

const GallerySection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="gallery" ref={containerRef} className="py-20 md:py-28 bg-[#0a0f18]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-teal-400 mb-3">Visual Archive</p>
          <h2 id="gallery-title" className="text-3xl md:text-5xl font-bold text-white mb-4">
            The Microscopy Gallery
          </h2>
          <p id="gallery-subtitle" className="text-slate-400 max-w-xl mx-auto text-lg">
            Stunning imagery captured through electron and light microscopes, revealing the hidden architecture of life.
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {/* Row 1: large + 2 small */}
          <div className="col-span-2 row-span-2 group relative rounded-2xl overflow-hidden border border-teal-900/30">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={galleryItems[0].label}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              data-strk-img-id={galleryItems[0].id}
              data-strk-img={`${galleryItems[0].query} [gallery-subtitle] [gallery-title]`}
              data-strk-img-ratio={galleryItems[0].ratio}
              data-strk-img-width={galleryItems[0].width}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050a0f]/80 via-transparent to-transparent" />
            <span className="absolute bottom-4 left-4 text-white font-semibold text-sm">{galleryItems[0].label}</span>
          </div>

          {[galleryItems[1], galleryItems[2]].map((item) => (
            <div key={item.id} className="col-span-1 row-span-1 group relative rounded-2xl overflow-hidden border border-teal-900/30">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.label}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                data-strk-img-id={item.id}
                data-strk-img={`${item.query} [gallery-subtitle] [gallery-title]`}
                data-strk-img-ratio={item.ratio}
                data-strk-img-width={item.width}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050a0f]/70 via-transparent to-transparent" />
              <span className="absolute bottom-3 left-3 text-white font-medium text-xs">{item.label}</span>
            </div>
          ))}

          {/* Row 2: 2 medium */}
          {[galleryItems[3], galleryItems[4]].map((item) => (
            <div key={item.id} className="col-span-2 row-span-1 group relative rounded-2xl overflow-hidden border border-teal-900/30">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.label}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                data-strk-img-id={item.id}
                data-strk-img={`${item.query} [gallery-subtitle] [gallery-title]`}
                data-strk-img-ratio={item.ratio}
                data-strk-img-width={item.width}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050a0f]/70 via-transparent to-transparent" />
              <span className="absolute bottom-3 left-3 text-white font-medium text-xs">{item.label}</span>
            </div>
          ))}

          {/* Row 3: 2 small + large */}
          {[galleryItems[5], galleryItems[6]].map((item) => (
            <div key={item.id} className="col-span-1 row-span-1 group relative rounded-2xl overflow-hidden border border-teal-900/30">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.label}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                data-strk-img-id={item.id}
                data-strk-img={`${item.query} [gallery-subtitle] [gallery-title]`}
                data-strk-img-ratio={item.ratio}
                data-strk-img-width={item.width}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050a0f]/70 via-transparent to-transparent" />
              <span className="absolute bottom-3 left-3 text-white font-medium text-xs">{item.label}</span>
            </div>
          ))}

          <div className="col-span-2 row-span-1 group relative rounded-2xl overflow-hidden border border-teal-900/30">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={galleryItems[7].label}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              data-strk-img-id={galleryItems[7].id}
              data-strk-img={`${galleryItems[7].query} [gallery-subtitle] [gallery-title]`}
              data-strk-img-ratio={galleryItems[7].ratio}
              data-strk-img-width={galleryItems[7].width}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050a0f]/70 via-transparent to-transparent" />
            <span className="absolute bottom-3 left-3 text-white font-medium text-xs">{galleryItems[7].label}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
