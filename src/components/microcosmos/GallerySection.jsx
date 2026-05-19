import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const galleryItems = [
  {
    id: 'g1',
    titleId: 'gallery-title-1',
    descId: 'gallery-desc-1',
    title: 'Diatom Symmetry',
    desc: 'Silica shells of diatoms under polarized light microscopy',
    ratio: '1x1',
    width: 600,
    span: 'md:col-span-1',
  },
  {
    id: 'g2',
    titleId: 'gallery-title-2',
    descId: 'gallery-desc-2',
    title: 'Pollen Grains',
    desc: 'Colorized scanning electron microscope image of pollen grains',
    ratio: '4x3',
    width: 900,
    span: 'md:col-span-2',
  },
  {
    id: 'g3',
    titleId: 'gallery-title-3',
    descId: 'gallery-desc-3',
    title: 'Bacteria Colony',
    desc: 'Fluorescent microscopy of bacteria forming biofilm colony',
    ratio: '4x3',
    width: 900,
    span: 'md:col-span-2',
  },
  {
    id: 'g4',
    titleId: 'gallery-title-4',
    descId: 'gallery-desc-4',
    title: 'Radiolarian',
    desc: 'Intricate skeleton of a radiolarian protozoan',
    ratio: '1x1',
    width: 600,
    span: 'md:col-span-1',
  },
  {
    id: 'g5',
    titleId: 'gallery-title-5',
    descId: 'gallery-desc-5',
    title: 'Snowflake Crystal',
    desc: 'Macro photography of snowflake ice crystal formation',
    ratio: '1x1',
    width: 600,
    span: 'md:col-span-1',
  },
  {
    id: 'g6',
    titleId: 'gallery-title-6',
    descId: 'gallery-desc-6',
    title: 'Neuron Network',
    desc: 'Fluorescent staining of neural network brain cells',
    ratio: '1x1',
    width: 600,
    span: 'md:col-span-1',
  },
  {
    id: 'g7',
    titleId: 'gallery-title-7',
    descId: 'gallery-desc-7',
    title: 'Butterfly Wing Scale',
    desc: 'Electron microscope image of butterfly wing scale nanostructure',
    ratio: '1x1',
    width: 600,
    span: 'md:col-span-1',
  },
];

const GallerySection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="gallery" ref={containerRef} className="bg-neutral-950 py-24 px-6 md:px-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-3">02 — Gallery</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            The Art of the<br />Invisible
          </h2>
        </div>
        <p className="text-neutral-400 max-w-sm text-base">
          Every image is a portal — a glimpse into structures and organisms that exist beyond the reach of the naked eye.
        </p>
      </div>

      {/* Gallery grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {galleryItems.map((item) => (
          <div key={item.id} className={`group relative overflow-hidden rounded-xl ring-1 ring-white/10 ${item.span}`}>
            {/* Hidden text for image query */}
            <span id={item.titleId} className="sr-only">{item.title}</span>
            <span id={item.descId} className="sr-only">{item.desc}</span>

            <img
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              style={{ aspectRatio: item.ratio === '1x1' ? '1/1' : '4/3' }}
              data-strk-img-id={`gallery-img-${item.id}`}
              data-strk-img={`[${item.descId}] [${item.titleId}]`}
              data-strk-img-ratio={item.ratio}
              data-strk-img-width={item.width}
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-end p-4 opacity-0 group-hover:opacity-100">
              <div>
                <p className="text-white font-semibold text-sm">{item.title}</p>
                <p className="text-neutral-300 text-xs mt-1">{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
