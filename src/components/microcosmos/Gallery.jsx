import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const galleryItems = [
  { id: 'gal-1', imgId: 'gallery-img-a1b2c3', title: 'Diatom Colony', desc: 'Silica-shelled algae forming intricate geometric patterns' },
  { id: 'gal-2', imgId: 'gallery-img-b2c3d4', title: 'E. coli Bacteria', desc: 'Rod-shaped bacteria magnified 10,000x under electron microscope' },
  { id: 'gal-3', imgId: 'gallery-img-c3d4e5', title: 'Tardigrade', desc: 'The near-indestructible water bear surviving extreme conditions' },
  { id: 'gal-4', imgId: 'gallery-img-d4e5f6', title: 'Pollen Grain', desc: 'Intricate surface texture of a flowering plant pollen grain' },
  { id: 'gal-5', imgId: 'gallery-img-e5f6g7', title: 'Radiolarian', desc: 'Single-celled organism with stunning mineral skeleton' },
  { id: 'gal-6', imgId: 'gallery-img-f6g7h8', title: 'Paramecium', desc: 'Ciliated protozoan swimming through freshwater' },
  { id: 'gal-7', imgId: 'gallery-img-g7h8i9', title: 'Fungal Spores', desc: 'Reproductive spores of Aspergillus under SEM imaging' },
  { id: 'gal-8', imgId: 'gallery-img-h8i9j0', title: 'Red Blood Cells', desc: 'Human erythrocytes flowing through a capillary vessel' },
  { id: 'gal-9', imgId: 'gallery-img-i9j0k1', title: 'Snowflake Crystal', desc: 'Ice crystal microstructure revealing hexagonal symmetry' },
];

const Gallery = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section id="gallery" ref={containerRef} className="py-20 md:py-28 bg-[#0a1628]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-teal-400 text-xs tracking-widest uppercase font-semibold mb-4">
            Visual Collection
          </p>
          <h2
            id="gallery-title"
            className="text-3xl md:text-4xl font-bold text-slate-50 mb-4"
          >
            Microscopy Gallery
          </h2>
          <p
            id="gallery-subtitle"
            className="text-slate-400 text-lg max-w-2xl mx-auto"
          >
            Stunning images captured through electron microscopes, confocal microscopes, and fluorescence imaging techniques.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl overflow-hidden border border-teal-400/20 bg-[#0f1f35] hover:border-teal-400/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,212,200,0.15)]"
            >
              <div className="relative overflow-hidden">
                <img
                  id={item.id}
                  alt={item.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[${item.id}-desc] [${item.id}-title] [gallery-subtitle] [gallery-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1f35] via-transparent to-transparent" />
              </div>
              <div className="p-5">
                <h3 id={`${item.id}-title`} className="text-slate-50 font-semibold text-lg mb-1">
                  {item.title}
                </h3>
                <p id={`${item.id}-desc`} className="text-slate-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
