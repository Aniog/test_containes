import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const galleryItems = [
  { id: 'gallop', label: 'Full Gallop', query: 'horse running full gallop action', ratio: '3x2', width: 600 },
  { id: 'portrait', label: 'Horse Portrait', query: 'beautiful horse portrait close up', ratio: '1x1', width: 500 },
  { id: 'sunset', label: 'Sunset Silhouette', query: 'horse silhouette sunset golden hour', ratio: '16x9', width: 800 },
  { id: 'foal', label: 'Mare & Foal', query: 'mare and foal together meadow', ratio: '4x3', width: 600 },
  { id: 'jump', label: 'Show Jumping', query: 'horse show jumping equestrian sport', ratio: '3x2', width: 600 },
  { id: 'wild', label: 'Wild & Free', query: 'wild horses running herd open plains', ratio: '16x9', width: 800 },
];

const GallerySection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="gallery" ref={containerRef} className="bg-cream py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-saddle font-semibold tracking-widest uppercase text-sm mb-3">
            Gallery
          </p>
          <h2 id="gallery-title" className="font-playfair text-4xl md:text-5xl font-bold text-bark mb-6">
            Captured in Motion
          </h2>
          <p className="text-stone-custom text-lg max-w-2xl mx-auto leading-relaxed">
            Every photograph tells a story of power, grace, and the unbreakable bond between horse and rider.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {/* Large featured image */}
          <div className="col-span-2 row-span-1 rounded-2xl overflow-hidden shadow-md aspect-video group">
            <img
              alt={galleryItems[2].label}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              data-strk-img-id="gallery-img-sunset-9i0j"
              data-strk-img={`[gallery-title] ${galleryItems[2].query}`}
              data-strk-img-ratio="16x9"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>

          {/* Portrait */}
          <div className="rounded-2xl overflow-hidden shadow-md aspect-square group">
            <img
              alt={galleryItems[1].label}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              data-strk-img-id="gallery-img-portrait-k1l2"
              data-strk-img={`[gallery-title] ${galleryItems[1].query}`}
              data-strk-img-ratio="1x1"
              data-strk-img-width="500"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>

          {/* Gallop */}
          <div className="rounded-2xl overflow-hidden shadow-md aspect-[3/2] group">
            <img
              alt={galleryItems[0].label}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              data-strk-img-id="gallery-img-gallop-m3n4"
              data-strk-img={`[gallery-title] ${galleryItems[0].query}`}
              data-strk-img-ratio="3x2"
              data-strk-img-width="600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>

          {/* Foal */}
          <div className="rounded-2xl overflow-hidden shadow-md aspect-[3/2] group">
            <img
              alt={galleryItems[3].label}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              data-strk-img-id="gallery-img-foal-o5p6"
              data-strk-img={`[gallery-title] ${galleryItems[3].query}`}
              data-strk-img-ratio="4x3"
              data-strk-img-width="600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>

          {/* Jump */}
          <div className="rounded-2xl overflow-hidden shadow-md aspect-[3/2] group">
            <img
              alt={galleryItems[4].label}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              data-strk-img-id="gallery-img-jump-q7r8"
              data-strk-img={`[gallery-title] ${galleryItems[4].query}`}
              data-strk-img-ratio="3x2"
              data-strk-img-width="600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
