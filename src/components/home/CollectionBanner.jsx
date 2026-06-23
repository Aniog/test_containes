import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { collections } from '@/data/products';

const collectionImages = {
  'night-shift': { imgId: 'coll-night-shift-img-a1b2', titleId: 'coll-night-shift-title', descId: 'coll-night-shift-desc' },
  'dawn-light': { imgId: 'coll-dawn-light-img-c3d4', titleId: 'coll-dawn-light-title', descId: 'coll-dawn-light-desc' },
  'quiet-hours': { imgId: 'coll-quiet-hours-img-e5f6', titleId: 'coll-quiet-hours-title', descId: 'coll-quiet-hours-desc' },
};

export default function CollectionBanner() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-20 md:py-28 px-6 md:px-10 bg-cream" ref={containerRef}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <p className="label-caps text-gold mb-3">The Collections</p>
          <h2
            className="font-serif text-4xl md:text-5xl text-ink font-light"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
          >
            Three Hours
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {collections.map(collection => {
            const imgData = collectionImages[collection.id];
            return (
              <Link
                key={collection.id}
                to={`/collections/${collection.slug}`}
                className="group block relative overflow-hidden"
              >
                <div className="relative overflow-hidden bg-cream-dark aspect-[3/4]">
                  <img
                    data-strk-img-id={imgData.imgId}
                    data-strk-img={`[${imgData.descId}] [${imgData.titleId}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={collection.name}
                    className="w-full h-full object-cover img-hover"
                  />
                  <div className="absolute inset-0 bg-ink/20 group-hover:bg-ink/30 transition-colors duration-400" />
                  <div className="absolute inset-0 flex flex-col items-center justify-end pb-10 px-6 text-center">
                    <p
                      id={imgData.titleId}
                      className="font-serif text-2xl text-cream font-light"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      {collection.name}
                    </p>
                    <p
                      id={imgData.descId}
                      className="text-cream/70 text-xs font-light mt-2 leading-relaxed"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {collection.description}
                    </p>
                    <span className="label-caps text-cream/80 mt-4 group-hover:text-gold transition-colors duration-300" style={{ fontSize: '9px' }}>
                      Explore →
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
