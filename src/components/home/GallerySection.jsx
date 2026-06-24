import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const GALLERY_ITEMS = [
  {
    id: 'gallery-pollen',
    titleId: 'gallery-pollen-title',
    descId: 'gallery-pollen-desc',
    imgId: 'gallery-img-pollen-m1n2o3',
    title: 'Pollen Grain',
    desc: 'Scanning electron microscope image of flower pollen grain surface texture',
    span: 'lg:col-span-2 lg:row-span-2',
    ratio: '1x1',
    width: '900',
  },
  {
    id: 'gallery-bacteria',
    titleId: 'gallery-bacteria-title',
    descId: 'gallery-bacteria-desc',
    imgId: 'gallery-img-bacteria-p4q5r6',
    title: 'Bacteria Colony',
    desc: 'Fluorescent microscopy bacteria colony glowing culture petri dish',
    span: '',
    ratio: '4x3',
    width: '500',
  },
  {
    id: 'gallery-snowflake',
    titleId: 'gallery-snowflake-title',
    descId: 'gallery-snowflake-desc',
    imgId: 'gallery-img-snowflake-s7t8u9',
    title: 'Ice Crystal',
    desc: 'Macro photography ice crystal snowflake geometric symmetry',
    span: '',
    ratio: '4x3',
    width: '500',
  },
  {
    id: 'gallery-neuron',
    titleId: 'gallery-neuron-title',
    descId: 'gallery-neuron-desc',
    imgId: 'gallery-img-neuron-v1w2x3',
    title: 'Neuron Network',
    desc: 'Fluorescent microscope neuron brain cell network connections',
    span: '',
    ratio: '4x3',
    width: '500',
  },
  {
    id: 'gallery-algae',
    titleId: 'gallery-algae-title',
    descId: 'gallery-algae-desc',
    imgId: 'gallery-img-algae-y4z5a6',
    title: 'Algae Bloom',
    desc: 'Microscope view green algae bloom freshwater pond microorganism',
    span: '',
    ratio: '4x3',
    width: '500',
  },
];

const GallerySection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="gallery" className="py-28 px-6 bg-[#080f1f]" ref={containerRef}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#00d4ff] text-sm font-medium tracking-widest uppercase mb-4">
            Visual Gallery
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Through the lens
          </h2>
          <p className="text-[#8ab4c8] text-lg max-w-xl mx-auto">
            Microscopy reveals a world of breathtaking geometry, color, and structure.
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:grid-rows-2">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              className={`relative overflow-hidden rounded-2xl bg-[#0d1a2e] border border-[#1a2d4a] group hover:border-[#00d4ff]/40 transition-all duration-300 ${item.span}`}
            >
              <img
                alt={item.title}
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.descId}] [${item.titleId}]`}
                data-strk-img-ratio={item.ratio}
                data-strk-img-width={item.width}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover min-h-48 group-hover:scale-105 transition-transform duration-500"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050d1a]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                <div>
                  <h4
                    id={item.titleId}
                    className="text-white font-semibold text-lg"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {item.title}
                  </h4>
                  <p id={item.descId} className="text-[#8ab4c8] text-sm mt-1">
                    {item.desc}
                  </p>
                </div>
              </div>
              {/* Always-visible title for non-hover */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#050d1a]/70 to-transparent group-hover:opacity-0 transition-opacity duration-300">
                <p className="text-white text-sm font-medium">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
