import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const galleryItems = [
  {
    id: 'g1',
    imgId: 'gallery-img-mc001',
    titleId: 'gallery-title-mc001',
    subtitleId: 'gallery-sub-mc001',
    title: 'Diatoms',
    subtitle: 'Microscopic algae with glass-like silica shells',
    ratio: '1x1',
    width: 600,
    span: 'col-span-1 row-span-1',
  },
  {
    id: 'g2',
    imgId: 'gallery-img-mc002',
    titleId: 'gallery-title-mc002',
    subtitleId: 'gallery-sub-mc002',
    title: 'Tardigrade',
    subtitle: 'Water bear — the most resilient creature on Earth',
    ratio: '3x2',
    width: 900,
    span: 'col-span-1 md:col-span-2 row-span-1',
  },
  {
    id: 'g3',
    imgId: 'gallery-img-mc003',
    titleId: 'gallery-title-mc003',
    subtitleId: 'gallery-sub-mc003',
    title: 'Pollen Grain',
    subtitle: 'Intricate surface patterns of flowering plants',
    ratio: '1x1',
    width: 600,
    span: 'col-span-1 row-span-1',
  },
  {
    id: 'g4',
    imgId: 'gallery-img-mc004',
    titleId: 'gallery-title-mc004',
    subtitleId: 'gallery-sub-mc004',
    title: 'Radiolaria',
    subtitle: 'Ancient ocean protozoa with geometric skeletons',
    ratio: '1x1',
    width: 600,
    span: 'col-span-1 row-span-1',
  },
  {
    id: 'g5',
    imgId: 'gallery-img-mc005',
    titleId: 'gallery-title-mc005',
    subtitleId: 'gallery-sub-mc005',
    title: 'Snowflake Crystal',
    subtitle: 'Hexagonal symmetry of frozen water molecules',
    ratio: '3x2',
    width: 900,
    span: 'col-span-1 md:col-span-2 row-span-1',
  },
  {
    id: 'g6',
    imgId: 'gallery-img-mc006',
    titleId: 'gallery-title-mc006',
    subtitleId: 'gallery-sub-mc006',
    title: 'Paramecium',
    subtitle: 'Single-celled organism covered in cilia',
    ratio: '1x1',
    width: 600,
    span: 'col-span-1 row-span-1',
  },
];

export default function Gallery() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="gallery" ref={containerRef} className="bg-black py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16">
          <p className="text-neutral-500 text-sm uppercase tracking-widest mb-4">Visual Archive</p>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white">Gallery</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          {galleryItems.map((item) => (
            <div key={item.id} className={`relative overflow-hidden group ${item.span}`}>
              <img
                alt={item.title}
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.subtitleId}] [${item.titleId}] microscopy electron scanning`}
                data-strk-img-ratio={item.ratio}
                data-strk-img-width={item.width}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-64 md:h-80 object-cover grayscale group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 id={item.titleId} className="text-white font-bold text-lg tracking-tight">{item.title}</h3>
                <p id={item.subtitleId} className="text-neutral-400 text-sm mt-1">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
