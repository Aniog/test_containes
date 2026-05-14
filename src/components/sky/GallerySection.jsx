import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const galleryItems = [
  { id: 'gal-img-h7i8j9', titleId: 'gal-title-1', subtitleId: 'gal-sub-1', title: 'Pastel Dawn', subtitle: 'Soft pink and lavender morning sky over calm water', ratio: '3x4', width: 400, tall: true },
  { id: 'gal-img-k1l2m3', titleId: 'gal-title-2', subtitleId: 'gal-sub-2', title: 'Cumulus Clouds', subtitle: 'Towering white clouds against vivid blue sky', ratio: '3x2', width: 600, tall: false },
  { id: 'gal-img-n4o5p6', titleId: 'gal-title-3', subtitleId: 'gal-sub-3', title: 'Sunset Silhouette', subtitle: 'Tree silhouettes against a fiery orange sunset sky', ratio: '3x2', width: 600, tall: false },
  { id: 'gal-img-q7r8s9', titleId: 'gal-title-4', subtitleId: 'gal-sub-4', title: 'Misty Morning', subtitle: 'Fog rolling through mountain valleys at sunrise', ratio: '3x4', width: 400, tall: true },
  { id: 'gal-img-t1u2v3', titleId: 'gal-title-5', subtitleId: 'gal-sub-5', title: 'Dramatic Clouds', subtitle: 'Dark storm clouds with silver lining at dusk', ratio: '3x2', width: 600, tall: false },
  { id: 'gal-img-w4x5y6', titleId: 'gal-title-6', subtitleId: 'gal-sub-6', title: 'Ocean Horizon', subtitle: 'Endless sky meeting the sea at golden hour', ratio: '3x2', width: 600, tall: false },
  { id: 'gal-img-z7a8b9', titleId: 'gal-title-7', subtitleId: 'gal-sub-7', title: 'Cirrus Wisps', subtitle: 'Delicate high-altitude cirrus clouds in blue sky', ratio: '3x2', width: 600, tall: false },
  { id: 'gal-img-c1d2e3', titleId: 'gal-title-8', subtitleId: 'gal-sub-8', title: 'Purple Dusk', subtitle: 'Deep violet and indigo twilight sky after sunset', ratio: '3x4', width: 400, tall: true },
];

const GallerySection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section id="gallery" className="bg-[#0a1628] py-20 md:py-28 px-4 md:px-8" ref={containerRef}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p id="gallery-label" className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Sky in Focus
          </p>
          <h2 id="gallery-heading" className="text-4xl md:text-5xl font-bold text-white mb-4">
            Photo Gallery
          </h2>
          <p className="text-sky-300 text-lg max-w-2xl mx-auto">
            A curated collection of sky photography from around the world — every frame a moment frozen in time.
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group relative break-inside-avoid rounded-xl overflow-hidden shadow-lg cursor-pointer"
            >
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.title}
                className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${item.tall ? 'h-80' : 'h-52'}`}
                data-strk-img-id={item.id}
                data-strk-img={`[${item.subtitleId}] [${item.titleId}] [gallery-heading]`}
                data-strk-img-ratio={item.ratio}
                data-strk-img-width={item.width}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c1a2e]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h4 id={item.titleId} className="text-white font-semibold text-sm">{item.title}</h4>
                <p id={item.subtitleId} className="text-sky-300 text-xs mt-0.5">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
