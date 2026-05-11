import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const animals = [
  {
    id: 'g1',
    titleId: 'gallery-title-1',
    subtitleId: 'gallery-sub-1',
    name: 'African Elephant',
    region: 'Sub-Saharan Africa',
    span: 'lg:col-span-2 lg:row-span-2',
    ratio: '1x1',
    width: 800,
  },
  {
    id: 'g2',
    titleId: 'gallery-title-2',
    subtitleId: 'gallery-sub-2',
    name: 'Humpback Whale',
    region: 'World Oceans',
    span: '',
    ratio: '4x3',
    width: 500,
  },
  {
    id: 'g3',
    titleId: 'gallery-title-3',
    subtitleId: 'gallery-sub-3',
    name: 'Scarlet Macaw',
    region: 'Central & South America',
    span: '',
    ratio: '4x3',
    width: 500,
  },
  {
    id: 'g4',
    titleId: 'gallery-title-4',
    subtitleId: 'gallery-sub-4',
    name: 'Bengal Tiger',
    region: 'South & Southeast Asia',
    span: '',
    ratio: '4x3',
    width: 500,
  },
  {
    id: 'g5',
    titleId: 'gallery-title-5',
    subtitleId: 'gallery-sub-5',
    name: 'Polar Bear',
    region: 'Arctic Circle',
    span: '',
    ratio: '4x3',
    width: 500,
  },
];

export default function GallerySection() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="gallery" ref={containerRef} className="py-24 bg-faf7f2" style={{ backgroundColor: '#faf7f2' }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-amber-600 uppercase tracking-[0.3em] text-xs font-semibold mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>
            Wildlife Photography
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Animal Gallery
          </h2>
          <p className="text-stone-500 max-w-xl mx-auto text-base leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
            A visual journey through the animal kingdom — from the smallest insects to the largest mammals.
          </p>
        </div>

        {/* Mosaic grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[280px]">
          {animals.map((animal) => (
            <div
              key={animal.id}
              className={`group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 ${animal.span}`}
            >
              <img
                alt={animal.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                data-strk-img-id={`gallery-img-${animal.id}-7g8h9i`}
                data-strk-img={`[${animal.subtitleId}] [${animal.titleId}]`}
                data-strk-img-ratio={animal.ratio}
                data-strk-img-width={animal.width}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h3
                  id={animal.titleId}
                  className="text-white font-bold text-lg"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {animal.name}
                </h3>
                <p
                  id={animal.subtitleId}
                  className="text-white/70 text-xs uppercase tracking-wider"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {animal.region}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
