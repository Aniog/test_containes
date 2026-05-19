import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const galleryItems = [
  {
    id: 'gal-mc010',
    titleId: 'gal-title-1',
    title: 'Tardigrade',
    subtitle: 'Water Bear',
    desc: 'The most resilient creature on Earth, surviving in the vacuum of space.',
    ratio: '3x4',
    width: 600,
    span: 'row-span-2',
  },
  {
    id: 'gal-mc011',
    titleId: 'gal-title-2',
    title: 'Diatom',
    subtitle: 'Silica Shell',
    desc: 'Geometric perfection sculpted by evolution over millions of years.',
    ratio: '4x3',
    width: 700,
    span: '',
  },
  {
    id: 'gal-mc012',
    titleId: 'gal-title-3',
    title: 'Pollen Grain',
    subtitle: 'Botanical Armor',
    desc: 'Each species carries a unique fingerprint in its pollen architecture.',
    ratio: '1x1',
    width: 500,
    span: '',
  },
  {
    id: 'gal-mc013',
    titleId: 'gal-title-4',
    title: 'Radiolarian',
    subtitle: 'Ocean Phantom',
    desc: 'Single-celled organisms that build intricate mineral skeletons.',
    ratio: '4x3',
    width: 700,
    span: '',
  },
  {
    id: 'gal-mc014',
    titleId: 'gal-title-5',
    title: 'Butterfly Scale',
    subtitle: 'Nanostructure',
    desc: 'Iridescent color produced not by pigment, but by light interference.',
    ratio: '3x2',
    width: 800,
    span: 'col-span-2',
  },
];

const GalleryCard = ({ item }) => (
  <div className={`group relative overflow-hidden rounded-lg border border-neutral-800 bg-[#111] ${item.span}`}>
    <div className="overflow-hidden">
      <img
        id={item.titleId}
        alt={item.title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        data-strk-img-id={item.id}
        data-strk-img={`[${item.titleId}] microscopic photography`}
        data-strk-img-ratio={item.ratio}
        data-strk-img-width={item.width}
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        style={{ minHeight: '200px' }}
      />
    </div>
    {/* Overlay on hover */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-5">
      <p className="text-xs text-neutral-400 uppercase tracking-widest mb-1">{item.subtitle}</p>
      <h3 className="text-white font-bold text-lg">{item.title}</h3>
      <p className="text-neutral-300 text-sm mt-1 leading-snug">{item.desc}</p>
    </div>
    {/* Always-visible label */}
    <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm px-2 py-1 rounded">
      <span className="text-xs text-neutral-400 uppercase tracking-widest">{item.subtitle}</span>
    </div>
  </div>
);

const Gallery = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="gallery" ref={containerRef} className="bg-[#0a0a0a] py-20 md:py-32 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-3">
              Visual Archive
            </p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white">
              The Gallery
            </h2>
          </div>
          <p className="text-neutral-400 max-w-sm leading-relaxed">
            A curated collection of microscopic subjects captured at extraordinary magnification.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 auto-rows-[280px]">
          {galleryItems.map((item) => (
            <GalleryCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
