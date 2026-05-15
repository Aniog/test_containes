import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const galleryItems = [
  { id: 'gal-title-1', title: 'Diatom Algae', desc: 'Silica shells under electron microscope', imgId: 'gal-img-mc010' },
  { id: 'gal-title-2', title: 'Pollen Grain', desc: 'Intricate surface patterns of flower pollen', imgId: 'gal-img-mc011' },
  { id: 'gal-title-3', title: 'Tardigrade', desc: 'The indestructible water bear', imgId: 'gal-img-mc012' },
  { id: 'gal-title-4', title: 'Snowflake Crystal', desc: 'Hexagonal symmetry of ice', imgId: 'gal-img-mc013' },
  { id: 'gal-title-5', title: 'Red Blood Cells', desc: 'Biconcave discs carrying oxygen', imgId: 'gal-img-mc014' },
  { id: 'gal-title-6', title: 'Butterfly Wing Scale', desc: 'Nanostructures creating iridescent color', imgId: 'gal-img-mc015' },
  { id: 'gal-title-7', title: 'Radiolarian', desc: 'Geometric ocean microorganism', imgId: 'gal-img-mc016' },
  { id: 'gal-title-8', title: 'Salt Crystal', desc: 'Cubic lattice of sodium chloride', imgId: 'gal-img-mc017' },
];

const Gallery = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-[#050a14] py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p id="gallery-label" className="text-cyan-400 text-sm font-semibold tracking-[0.3em] uppercase mb-4">
            Visual Exploration
          </p>
          <h2 id="gallery-title" className="text-4xl md:text-5xl font-bold text-white mb-6">
            Gallery of the Invisible
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Stunning imagery from the microscopic realm — each photograph reveals a universe
            invisible to the naked eye.
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer ${
                index === 0 ? 'col-span-2 row-span-2' : ''
              }`}
            >
              <div className={`relative overflow-hidden ${index === 0 ? 'aspect-square' : 'aspect-square'}`}>
                <img
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[${item.id}] [gallery-title] [gallery-label]`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width={index === 0 ? '800' : '400'}
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050a14]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span id={item.id} className="block text-white font-semibold text-sm mb-1">{item.title}</span>
                  <span className="block text-slate-400 text-xs">{item.desc}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
