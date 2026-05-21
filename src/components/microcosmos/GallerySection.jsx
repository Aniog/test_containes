import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const galleryItems = [
  {
    id: 'gal-mc003',
    titleId: 'gal-title-1',
    title: 'Diatom Silica Shell',
    category: 'Marine Biology',
    ratio: '1x1',
    width: 600,
    size: 'col-span-1 row-span-1',
  },
  {
    id: 'gal-mc004',
    titleId: 'gal-title-2',
    title: 'Neuron Network',
    category: 'Neuroscience',
    ratio: '3x2',
    width: 900,
    size: 'col-span-2 row-span-1',
  },
  {
    id: 'gal-mc005',
    titleId: 'gal-title-3',
    title: 'Pollen Grain Surface',
    category: 'Botany',
    ratio: '1x1',
    width: 600,
    size: 'col-span-1 row-span-1',
  },
  {
    id: 'gal-mc006',
    titleId: 'gal-title-4',
    title: 'Blood Cells Flow',
    category: 'Hematology',
    ratio: '1x1',
    width: 600,
    size: 'col-span-1 row-span-1',
  },
  {
    id: 'gal-mc007',
    titleId: 'gal-title-5',
    title: 'Crystal Formation',
    category: 'Mineralogy',
    ratio: '3x2',
    width: 900,
    size: 'col-span-2 row-span-1',
  },
  {
    id: 'gal-mc008',
    titleId: 'gal-title-6',
    title: 'Tardigrade Water Bear',
    category: 'Extremophiles',
    ratio: '1x1',
    width: 600,
    size: 'col-span-1 row-span-1',
  },
];

const GallerySection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section id="gallery" ref={containerRef} className="bg-[#0d1b2a] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p id="gallery-label" className="text-cyan-400 text-sm font-semibold tracking-[0.3em] uppercase mb-4">
            Visual Collection
          </p>
          <h2 id="gallery-title" className="text-4xl md:text-5xl font-bold text-white mb-4">
            The Gallery
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Stunning imagery captured through electron microscopes, confocal microscopes, and fluorescence imaging systems.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className={`${item.size} group relative rounded-2xl overflow-hidden border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-500 cursor-pointer shadow-[0_0_20px_rgba(6,182,212,0.08)] hover:shadow-[0_0_40px_rgba(6,182,212,0.25)]`}
            >
              <img
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                style={{ minHeight: '200px' }}
                data-strk-img-id={item.id}
                data-strk-img={`[${item.titleId}] [gallery-title] [gallery-label] microscopy`}
                data-strk-img-ratio={item.ratio}
                data-strk-img-width={item.width}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050a14]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <span className="text-cyan-400 text-xs font-semibold tracking-widest uppercase">{item.category}</span>
                <h3 id={item.titleId} className="text-white font-bold text-base mt-1">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
