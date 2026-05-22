import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const galleryItems = [
  { id: 'gal-1', imgId: 'gallery-img-aa1001', label: 'Diatom Colony', desc: 'Silica-shelled algae under polarized light', ratio: '1x1', width: 600 },
  { id: 'gal-2', imgId: 'gallery-img-aa1002', label: 'Tardigrade', desc: 'Water bear in moss', ratio: '1x1', width: 600 },
  { id: 'gal-3', imgId: 'gallery-img-aa1003', label: 'Pollen Grain', desc: 'Scanning electron microscopy', ratio: '1x1', width: 600 },
  { id: 'gal-4', imgId: 'gallery-img-aa1004', label: 'Radiolarian', desc: 'Marine protozoa skeleton', ratio: '1x1', width: 600 },
  { id: 'gal-5', imgId: 'gallery-img-aa1005', label: 'Snowflake Crystal', desc: 'Ice crystal macro photography', ratio: '1x1', width: 600 },
  { id: 'gal-6', imgId: 'gallery-img-aa1006', label: 'Butterfly Wing Scale', desc: 'Nanostructure iridescence', ratio: '1x1', width: 600 },
  { id: 'gal-7', imgId: 'gallery-img-aa1007', label: 'Neuron Network', desc: 'Fluorescent brain cells', ratio: '1x1', width: 600 },
  { id: 'gal-8', imgId: 'gallery-img-aa1008', label: 'Coral Polyp', desc: 'Reef-building organism', ratio: '1x1', width: 600 },
  { id: 'gal-9', imgId: 'gallery-img-aa1009', label: 'Spore Release', desc: 'Fern spore dispersal', ratio: '1x1', width: 600 },
  { id: 'gal-10', imgId: 'gallery-img-aa1010', label: 'Mite on Leaf', desc: 'Arachnid macro photography', ratio: '1x1', width: 600 },
  { id: 'gal-11', imgId: 'gallery-img-aa1011', label: 'Blood Cells', desc: 'Red and white blood cells', ratio: '1x1', width: 600 },
  { id: 'gal-12', imgId: 'gallery-img-aa1012', label: 'Mycelium Web', desc: 'Fungal network threads', ratio: '1x1', width: 600 },
];

const GalleryCard = ({ item }) => (
  <div className="group relative rounded-xl overflow-hidden aspect-square bg-gray-800 hover:-translate-y-1 transition-transform duration-300 cursor-pointer">
    <img
      id={item.id}
      alt={item.label}
      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      data-strk-img-id={item.imgId}
      data-strk-img={`[${item.id}-desc] [${item.id}]`}
      data-strk-img-ratio={item.ratio}
      data-strk-img-width={item.width}
      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
      <p className="text-white font-semibold text-sm">{item.label}</p>
      <p id={`${item.id}-desc`} className="text-gray-300 text-xs mt-0.5">{item.desc}</p>
    </div>
  </div>
);

const Gallery = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="gallery" ref={containerRef} className="bg-gray-900 py-20 md:py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-cyan-400 text-sm uppercase tracking-widest font-semibold mb-3">
            Visual Collection
          </p>
          <h2
            id="gallery-title"
            className="text-3xl md:text-5xl font-bold text-white mb-5"
          >
            Gallery of the Invisible
          </h2>
          <p
            id="gallery-subtitle"
            className="text-gray-400 text-lg max-w-xl mx-auto"
          >
            Stunning imagery captured through electron microscopes, macro lenses, and fluorescence imaging
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryItems.map((item) => (
            <GalleryCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
