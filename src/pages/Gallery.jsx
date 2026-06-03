import { useState, useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const galleryItems = [
  {
    id: 'gal-01',
    titleId: 'gal-01-title',
    descId: 'gal-01-desc',
    imgId: 'gallery-img-01-a1b2c3',
    title: 'Radiolarian Skeleton',
    description: 'Intricate silica skeleton of a radiolarian protozoan, captured under scanning electron microscopy',
    tag: 'Protists',
    size: 'large',
  },
  {
    id: 'gal-02',
    titleId: 'gal-02-title',
    descId: 'gal-02-desc',
    imgId: 'gallery-img-02-b2c3d4',
    title: 'Pollen Grain Surface',
    description: 'Highly magnified surface texture of a flower pollen grain showing complex geometric patterns',
    tag: 'Botany',
    size: 'small',
  },
  {
    id: 'gal-03',
    titleId: 'gal-03-title',
    descId: 'gal-03-desc',
    imgId: 'gallery-img-03-c3d4e5',
    title: 'Bacterial Colony',
    description: 'Colorized scanning electron micrograph of a mixed bacterial colony on a surface',
    tag: 'Bacteria',
    size: 'small',
  },
  {
    id: 'gal-04',
    titleId: 'gal-04-title',
    descId: 'gal-04-desc',
    imgId: 'gallery-img-04-d4e5f6',
    title: 'Diatom Mosaic',
    description: 'Collection of diatom frustules arranged in a mosaic pattern, each with unique geometric symmetry',
    tag: 'Algae',
    size: 'large',
  },
  {
    id: 'gal-05',
    titleId: 'gal-05-title',
    descId: 'gal-05-desc',
    imgId: 'gallery-img-05-e5f6g7',
    title: 'Tardigrade Portrait',
    description: 'Close-up portrait of a tardigrade (water bear) showing its distinctive eight-legged body',
    tag: 'Micro-animals',
    size: 'small',
  },
  {
    id: 'gal-06',
    titleId: 'gal-06-title',
    descId: 'gal-06-desc',
    imgId: 'gallery-img-06-f6g7h8',
    title: 'Fungal Hyphae Network',
    description: 'Branching network of fungal hyphae forming the mycelium structure beneath the soil',
    tag: 'Fungi',
    size: 'small',
  },
  {
    id: 'gal-07',
    titleId: 'gal-07-title',
    descId: 'gal-07-desc',
    imgId: 'gallery-img-07-g7h8i9',
    title: 'Paramecium in Motion',
    description: 'Paramecium caudatum swimming through water, cilia visible along its entire body surface',
    tag: 'Protists',
    size: 'large',
  },
  {
    id: 'gal-08',
    titleId: 'gal-08-title',
    descId: 'gal-08-desc',
    imgId: 'gallery-img-08-h8i9j0',
    title: 'Virus Particle Array',
    description: 'Transmission electron micrograph showing an array of bacteriophage virus particles',
    tag: 'Viruses',
    size: 'small',
  },
  {
    id: 'gal-09',
    titleId: 'gal-09-title',
    descId: 'gal-09-desc',
    imgId: 'gallery-img-09-i9j0k1',
    title: 'Snowflake Crystal',
    description: 'Microscopic view of a snowflake crystal revealing its perfect hexagonal symmetry',
    tag: 'Crystals',
    size: 'small',
  },
];

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const containerRef = useRef(null);

  const selectedItem = lightboxIndex !== null ? galleryItems[lightboxIndex] : null;

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [lightboxIndex]);

  const handlePrev = (e) => {
    e.stopPropagation();
    setLightboxIndex((i) => (i > 0 ? i - 1 : galleryItems.length - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setLightboxIndex((i) => (i < galleryItems.length - 1 ? i + 1 : 0));
  };

  useEffect(() => {
    const onKey = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'ArrowLeft') setLightboxIndex((i) => (i > 0 ? i - 1 : galleryItems.length - 1));
      if (e.key === 'ArrowRight') setLightboxIndex((i) => (i < galleryItems.length - 1 ? i + 1 : 0));
      if (e.key === 'Escape') setLightboxIndex(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightboxIndex]);

  return (
    <div ref={containerRef} className="bg-cosmos-black min-h-screen pt-20">
      {/* Page Header */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/3 w-80 h-80 bg-cosmos-purple/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-cosmos-teal/5 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 bg-cosmos-purple/10 border border-cosmos-purple/30 rounded-full px-4 py-1.5 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-cosmos-purple animate-pulse" />
            <span className="text-cosmos-purple text-sm font-medium">Visual Collection</span>
          </div>
          <h1 className="font-grotesk font-bold text-4xl md:text-5xl text-cosmos-white mb-4">
            Microscopy Gallery
          </h1>
          <p className="text-cosmos-light text-lg max-w-2xl leading-relaxed">
            A curated collection of stunning microscopic imagery — where science meets art in the most extraordinary way.
          </p>
        </div>
      </section>

      {/* Masonry-style Grid */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
            {galleryItems.map((item, index) => (
              <div
                key={item.id}
                className="break-inside-avoid bg-cosmos-navy border border-cosmos-teal/20 rounded-2xl overflow-hidden hover:border-cosmos-teal/50 hover:shadow-[0_0_30px_rgba(0,201,177,0.12)] transition-all duration-300 cursor-pointer group"
                onClick={() => setLightboxIndex(index)}
              >
                <div className={`relative overflow-hidden ${item.size === 'large' ? 'aspect-[4/3]' : 'aspect-square'}`}>
                  <img
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    data-strk-img-id={item.imgId}
                    data-strk-img={`[${item.descId}] [${item.titleId}]`}
                    data-strk-img-ratio={item.size === 'large' ? '4x3' : '1x1'}
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cosmos-navy/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-cosmos-white text-xs font-medium">Click to expand</span>
                  </div>
                  <span className="absolute top-3 left-3 bg-cosmos-black/60 backdrop-blur-sm text-cosmos-teal text-xs px-2.5 py-1 rounded-full border border-cosmos-teal/30">
                    {item.tag}
                  </span>
                </div>
                <div className="p-4">
                  <h3
                    id={item.titleId}
                    className="font-grotesk font-semibold text-cosmos-white text-sm mb-1 group-hover:text-cosmos-teal transition-colors"
                  >
                    {item.title}
                  </h3>
                  <p id={item.descId} className="text-cosmos-muted text-xs leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-cosmos-black/95 backdrop-blur-sm p-4"
          onClick={() => setLightboxIndex(null)}
        >
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute -top-12 right-0 text-cosmos-light hover:text-cosmos-white text-sm flex items-center gap-2 transition-colors"
            >
              Close ✕
            </button>

            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden border border-cosmos-teal/20 shadow-[0_0_60px_rgba(0,201,177,0.15)]">
              <img
                alt={selectedItem.title}
                className="w-full object-cover max-h-[70vh]"
                data-strk-img-id={`lb-${selectedItem.imgId}`}
                data-strk-img={`[lb-${selectedItem.descId}] [lb-${selectedItem.titleId}]`}
                data-strk-img-ratio="16x9"
                data-strk-img-width="1200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />

              {/* Prev / Next */}
              <button
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-cosmos-black/60 backdrop-blur-sm rounded-full flex items-center justify-center text-cosmos-light hover:text-cosmos-teal border border-cosmos-teal/20 hover:border-cosmos-teal/50 transition-all"
              >
                ←
              </button>
              <button
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-cosmos-black/60 backdrop-blur-sm rounded-full flex items-center justify-center text-cosmos-light hover:text-cosmos-teal border border-cosmos-teal/20 hover:border-cosmos-teal/50 transition-all"
              >
                →
              </button>
            </div>

            {/* Caption */}
            <div className="mt-4 px-2">
              <div className="flex items-center justify-between">
                <div>
                  <h3
                    id={`lb-${selectedItem.titleId}`}
                    className="font-grotesk font-semibold text-cosmos-white text-lg"
                  >
                    {selectedItem.title}
                  </h3>
                  <p id={`lb-${selectedItem.descId}`} className="text-cosmos-muted text-sm mt-1">
                    {selectedItem.description}
                  </p>
                </div>
                <span className="text-cosmos-muted text-sm ml-4 shrink-0">
                  {lightboxIndex + 1} / {galleryItems.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
