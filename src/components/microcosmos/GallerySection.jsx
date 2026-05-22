import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const galleryItems = [
  { id: 'gal1', title: 'Diatom Colony', tag: 'Algae', imgId: 'gal-img-mc010', ratio: '1x1', width: 500 },
  { id: 'gal2', title: 'Pollen Grain', tag: 'Plant', imgId: 'gal-img-mc011', ratio: '1x1', width: 500 },
  { id: 'gal3', title: 'Nematode Worm', tag: 'Animal', imgId: 'gal-img-mc012', ratio: '1x1', width: 500 },
  { id: 'gal4', title: 'Amoeba', tag: 'Protozoa', imgId: 'gal-img-mc013', ratio: '1x1', width: 500 },
  { id: 'gal5', title: 'Rotifer', tag: 'Animal', imgId: 'gal-img-mc014', ratio: '1x1', width: 500 },
  { id: 'gal6', title: 'Cyanobacteria', tag: 'Bacteria', imgId: 'gal-img-mc015', ratio: '1x1', width: 500 },
  { id: 'gal7', title: 'Foraminifera', tag: 'Marine', imgId: 'gal-img-mc016', ratio: '1x1', width: 500 },
  { id: 'gal8', title: 'Mold Spores', tag: 'Fungi', imgId: 'gal-img-mc017', ratio: '1x1', width: 500 },
  { id: 'gal9', title: 'Euglena', tag: 'Protozoa', imgId: 'gal-img-mc018', ratio: '1x1', width: 500 },
];

const GallerySection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="gallery" ref={containerRef} className="py-24 px-6 md:px-12 bg-[#0a1628]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p id="gal-label" className="text-sm font-medium tracking-widest uppercase text-[#00d4aa] mb-4">
            Visual Archive
          </p>
          <h2 id="gal-title" className="text-4xl md:text-5xl font-bold text-[#e8f4f8] mb-4">
            Microscopy Gallery
          </h2>
          <p className="text-[#94b8c8] text-lg max-w-xl mx-auto">
            Stunning electron and light microscopy images from our collection of microscopic life.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl overflow-hidden border border-[#1a3a4a] hover:border-[#00d4aa]/60 transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,212,170,0.25)] cursor-pointer aspect-square"
            >
              <img
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.id}-title] [gal-label]`}
                data-strk-img-ratio={item.ratio}
                data-strk-img-width={item.width}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050d1a]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="inline-block px-2 py-0.5 bg-[#00d4aa]/20 text-[#00d4aa] text-xs rounded-full mb-1 tracking-wider uppercase">
                  {item.tag}
                </span>
                <h3 id={`${item.id}-title`} className="text-sm font-bold text-[#e8f4f8]">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
