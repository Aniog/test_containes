import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const galleryItems = [
  { id: 'g1', title: 'Diatom Colony', caption: 'Silica-shelled algae', ratio: '1x1', width: 600, size: 'large' },
  { id: 'g2', title: 'Tardigrade', caption: 'Water bear micro-animal', ratio: '4x3', width: 500, size: 'small' },
  { id: 'g3', title: 'Pollen Grain', caption: 'Flowering plant pollen', ratio: '4x3', width: 500, size: 'small' },
  { id: 'g4', title: 'Neuron Network', caption: 'Brain cell connections', ratio: '16x9', width: 800, size: 'wide' },
  { id: 'g5', title: 'Radiolarian', caption: 'Marine protozoa skeleton', ratio: '1x1', width: 500, size: 'small' },
  { id: 'g6', title: 'Snowflake Crystal', caption: 'Ice crystal formation', ratio: '1x1', width: 500, size: 'small' },
  { id: 'g7', title: 'Butterfly Wing Scale', caption: 'Iridescent wing structure', ratio: '4x3', width: 600, size: 'medium' },
  { id: 'g8', title: 'Red Blood Cells', caption: 'Human erythrocytes', ratio: '4x3', width: 600, size: 'medium' },
  { id: 'g9', title: 'Moss Spores', caption: 'Bryophyte reproduction', ratio: '1x1', width: 500, size: 'small' },
];

const GalleryCard = ({ item }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative overflow-hidden rounded-2xl border border-cyan-500/20 cursor-pointer group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        id={`gallery-img-${item.id}`}
        alt={item.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        style={{ minHeight: '200px' }}
        data-strk-img-id={`gallery-${item.id}-7a8b9c`}
        data-strk-img={`[gallery-caption-${item.id}] [gallery-title-${item.id}]`}
        data-strk-img-ratio={item.ratio}
        data-strk-img-width={item.width}
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
      />
      <div
        className={`absolute inset-0 bg-gradient-to-t from-[#050d1a]/90 via-transparent to-transparent transition-opacity duration-300 ${
          hovered ? 'opacity-100' : 'opacity-60'
        }`}
      />
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3
          id={`gallery-title-${item.id}`}
          className="text-sky-50 font-bold text-base mb-0.5"
        >
          {item.title}
        </h3>
        <p
          id={`gallery-caption-${item.id}`}
          className="text-cyan-400 text-xs font-medium tracking-wide"
        >
          {item.caption}
        </p>
      </div>
    </div>
  );
};

const Gallery = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="gallery" ref={containerRef} className="py-24 md:py-32 bg-[#0a1628]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase text-cyan-400 mb-3">
            Visual Collection
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-sky-50 mb-4">
            Gallery of the Invisible
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-lg">
            Stunning microscopy images capturing the extraordinary beauty hidden at the smallest scales of nature.
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
          {/* Large featured item */}
          <div className="col-span-2 row-span-2">
            <GalleryCard item={galleryItems[0]} />
          </div>
          {/* Small items */}
          <div className="col-span-1 row-span-1">
            <GalleryCard item={galleryItems[1]} />
          </div>
          <div className="col-span-1 row-span-1">
            <GalleryCard item={galleryItems[2]} />
          </div>
          {/* Wide item */}
          <div className="col-span-2 row-span-1">
            <GalleryCard item={galleryItems[3]} />
          </div>
          {/* More items */}
          <div className="col-span-1 row-span-1">
            <GalleryCard item={galleryItems[4]} />
          </div>
          <div className="col-span-1 row-span-1">
            <GalleryCard item={galleryItems[5]} />
          </div>
          <div className="col-span-1 row-span-1 md:col-span-2">
            <GalleryCard item={galleryItems[6]} />
          </div>
          <div className="col-span-1 row-span-1">
            <GalleryCard item={galleryItems[7]} />
          </div>
          <div className="col-span-1 row-span-1">
            <GalleryCard item={galleryItems[8]} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
