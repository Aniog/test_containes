import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const galleryItems = [
  { id: 'gal-mc001', label: 'gal-label-mc001', title: 'Tardigrade', desc: 'Water bear under electron microscope', ratio: '4x3', width: 600, span: 'col-span-1 row-span-2' },
  { id: 'gal-mc002', label: 'gal-label-mc002', title: 'Diatom', desc: 'Silica shell algae microscope', ratio: '16x9', width: 800, span: 'col-span-2' },
  { id: 'gal-mc003', label: 'gal-label-mc003', title: 'Paramecium', desc: 'Paramecium cilia protozoa microscope', ratio: '1x1', width: 400, span: 'col-span-1' },
  { id: 'gal-mc004', label: 'gal-label-mc004', title: 'Pollen Grain', desc: 'Pollen grain electron microscope colorful', ratio: '1x1', width: 400, span: 'col-span-1' },
  { id: 'gal-mc005', label: 'gal-label-mc005', title: 'Radiolaria', desc: 'Radiolaria skeleton microscope ocean', ratio: '4x3', width: 600, span: 'col-span-2' },
  { id: 'gal-mc006', label: 'gal-label-mc006', title: 'Amoeba', desc: 'Amoeba pseudopod single cell microscope', ratio: '1x1', width: 400, span: 'col-span-1' },
  { id: 'gal-mc007', label: 'gal-label-mc007', title: 'Spirogyra', desc: 'Spirogyra green algae filament microscope', ratio: '1x1', width: 400, span: 'col-span-1' },
  { id: 'gal-mc008', label: 'gal-label-mc008', title: 'Rotifer', desc: 'Rotifer wheel animalcule microscope water', ratio: '16x9', width: 800, span: 'col-span-2' },
  { id: 'gal-mc009', label: 'gal-label-mc009', title: 'Nematode', desc: 'Nematode roundworm microscope soil', ratio: '4x3', width: 600, span: 'col-span-1 row-span-2' },
  { id: 'gal-mc010', label: 'gal-label-mc010', title: 'Euglena', desc: 'Euglena flagellate green microscope', ratio: '1x1', width: 400, span: 'col-span-1' },
  { id: 'gal-mc011', label: 'gal-label-mc011', title: 'Vorticella', desc: 'Vorticella bell-shaped protozoa microscope', ratio: '1x1', width: 400, span: 'col-span-1' },
];

export default function GallerySection() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="gallery" ref={containerRef} className="py-24 px-4 md:px-8 bg-[#0a1628]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block bg-teal-900/50 text-teal-300 rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-widest mb-4 border border-teal-700/40">
            Visual Gallery
          </span>
          <h2 id="gallery-title" className="text-4xl md:text-5xl font-black text-white mb-4">
            The <span className="text-teal-400">Microscopic</span> World
          </h2>
          <p id="gallery-subtitle" className="text-slate-400 text-lg max-w-xl mx-auto">
            Stunning imagery from electron microscopes and light microscopes revealing the beauty of tiny life.
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px]">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className={`${item.span} relative rounded-2xl overflow-hidden group cursor-pointer border border-teal-900/30 hover:border-teal-500/50 transition-all duration-300`}
            >
              <img
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                data-strk-img-id={item.id}
                data-strk-img={`[${item.label}] [gallery-subtitle] [gallery-title]`}
                data-strk-img-ratio={item.ratio}
                data-strk-img-width={item.width}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              {/* Hidden label for image query interpolation */}
              <span id={item.label} className="hidden">{item.desc}</span>
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050d1a]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-white font-semibold text-sm">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
