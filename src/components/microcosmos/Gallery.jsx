import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const galleryItems = [
  {
    id: 'gallery-1',
    imgId: 'gallery-img-mc001',
    titleId: 'gallery-title-mc001',
    descId: 'gallery-desc-mc001',
    title: 'Diatom Silica Shell',
    desc: 'Microscopic algae with intricate glass-like silica cell walls',
    tag: 'Algae',
    span: 'col-span-2 row-span-2',
    ratio: '1x1',
    width: '800',
  },
  {
    id: 'gallery-2',
    imgId: 'gallery-img-mc002',
    titleId: 'gallery-title-mc002',
    descId: 'gallery-desc-mc002',
    title: 'Pollen Grain',
    desc: 'Colorized scanning electron microscope image of flower pollen',
    tag: 'Botany',
    span: 'col-span-1 row-span-1',
    ratio: '1x1',
    width: '400',
  },
  {
    id: 'gallery-3',
    imgId: 'gallery-img-mc003',
    titleId: 'gallery-title-mc003',
    descId: 'gallery-desc-mc003',
    title: 'Tardigrade',
    desc: 'Water bear, the most resilient microscopic animal on Earth',
    tag: 'Micro-animal',
    span: 'col-span-1 row-span-1',
    ratio: '1x1',
    width: '400',
  },
  {
    id: 'gallery-4',
    imgId: 'gallery-img-mc004',
    titleId: 'gallery-title-mc004',
    descId: 'gallery-desc-mc004',
    title: 'Snowflake Crystal',
    desc: 'Hexagonal ice crystal structure under polarized light microscopy',
    tag: 'Crystal',
    span: 'col-span-1 row-span-2',
    ratio: '2x3',
    width: '400',
  },
  {
    id: 'gallery-5',
    imgId: 'gallery-img-mc005',
    titleId: 'gallery-title-mc005',
    descId: 'gallery-desc-mc005',
    title: 'Red Blood Cells',
    desc: 'Human erythrocytes flowing through a capillary vessel',
    tag: 'Biology',
    span: 'col-span-1 row-span-1',
    ratio: '1x1',
    width: '400',
  },
  {
    id: 'gallery-6',
    imgId: 'gallery-img-mc006',
    titleId: 'gallery-title-mc006',
    descId: 'gallery-desc-mc006',
    title: 'Butterfly Wing Scale',
    desc: 'Nanostructured scales creating iridescent color in butterfly wings',
    tag: 'Entomology',
    span: 'col-span-1 row-span-1',
    ratio: '1x1',
    width: '400',
  },
];

const tagColors = {
  'Algae': 'bg-teal-glow/20 text-teal-glow',
  'Botany': 'bg-biolume/20 text-biolume',
  'Micro-animal': 'bg-amber-glow/20 text-amber-glow',
  'Crystal': 'bg-violet-pulse/20 text-violet-500',
  'Biology': 'bg-red-500/20 text-red-400',
  'Entomology': 'bg-blue-500/20 text-blue-400',
};

const GalleryCard = ({ item }) => (
  <div className={`relative group overflow-hidden rounded-2xl bg-midnight border border-white/10 ${item.span}`}>
    <img
      alt={item.title}
      data-strk-img-id={item.imgId}
      data-strk-img={`[${item.descId}] [${item.titleId}]`}
      data-strk-img-ratio={item.ratio}
      data-strk-img-width={item.width}
      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-deep-space/90 via-deep-space/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
      <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-medium mb-2 ${tagColors[item.tag] || 'bg-white/10 text-soft-white'}`}>
        {item.tag}
      </span>
      <h3 id={item.titleId} className="text-soft-white font-semibold text-base leading-tight">{item.title}</h3>
      <p id={item.descId} className="text-muted-blue text-xs mt-1 leading-relaxed">{item.desc}</p>
    </div>
  </div>
);

const Gallery = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="gallery" className="py-20 md:py-28 bg-deep-space">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <span className="text-xs font-medium tracking-widest uppercase text-teal-glow mb-3 block">Visual Collection</span>
          <h2 className="text-3xl md:text-4xl font-bold text-soft-white mb-4">Microscopic Gallery</h2>
          <p className="text-muted-blue max-w-xl mx-auto leading-relaxed">
            Stunning imagery captured through electron microscopes, confocal lenses, and polarized light — revealing the hidden architecture of life.
          </p>
        </div>

        <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-3 auto-rows-[220px] md:auto-rows-[260px] gap-4">
          {galleryItems.map((item) => (
            <GalleryCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
