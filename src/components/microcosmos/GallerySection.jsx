import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const galleryItems = [
  { id: 'g1', titleId: 'gtitle-1', subtitleId: 'gsub-1', title: 'Diatom Shells', subtitle: 'Diatom algae silica shells geometric patterns electron microscope', ratio: '1x1', width: 500, span: '' },
  { id: 'g2', titleId: 'gtitle-2', subtitleId: 'gsub-2', title: 'Tardigrade', subtitle: 'Tardigrade water bear microscopic animal extreme survival', ratio: '1x1', width: 500, span: '' },
  { id: 'g3', titleId: 'gtitle-3', subtitleId: 'gsub-3', title: 'Pollen Grains', subtitle: 'Colorful pollen grains flower microscope scanning electron', ratio: '16x9', width: 900, span: 'md:col-span-2' },
  { id: 'g4', titleId: 'gtitle-4', subtitleId: 'gsub-4', title: 'Radiolaria', subtitle: 'Radiolaria protozoa intricate glass skeleton ocean plankton', ratio: '16x9', width: 900, span: 'md:col-span-2' },
  { id: 'g5', titleId: 'gtitle-5', subtitleId: 'gsub-5', title: 'Nerve Cells', subtitle: 'Neuron nerve cells brain fluorescent microscopy glowing', ratio: '1x1', width: 500, span: '' },
  { id: 'g6', titleId: 'gtitle-6', subtitleId: 'gsub-6', title: 'Snowflake Crystal', subtitle: 'Snowflake ice crystal macro photography symmetry', ratio: '1x1', width: 500, span: '' },
];

const GallerySection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="gallery" ref={containerRef} className="bg-gray-900 py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest text-violet-400 font-medium">Visual Archive</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-4">
            Microscopy Gallery
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-base md:text-lg">
            Stunning imagery captured through electron and fluorescent microscopes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden rounded-2xl bg-gray-800 cursor-pointer ${item.span}`}
            >
              <div className={`relative ${item.ratio === '16x9' ? 'aspect-video' : 'aspect-square'} overflow-hidden`}>
                <img
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  data-strk-img-id={`gallery-img-${item.id}`}
                  data-strk-img={`[${item.subtitleId}] [${item.titleId}]`}
                  data-strk-img-ratio={item.ratio}
                  data-strk-img-width={item.width}
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 id={item.titleId} className="text-white font-bold text-base">{item.title}</h3>
                  <p id={item.subtitleId} className="text-gray-300 text-xs mt-1 line-clamp-2">{item.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
