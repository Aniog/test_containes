import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ugcPosts } from '../../data/products';

export default function UGCReel() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-white" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <p className="text-taupe text-xs tracking-[0.25em] uppercase font-sans text-center mb-2">
          As Seen On You
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-dark-forest text-center">
          Real Stories, Real Sparkle
        </h2>
        <div className="w-12 h-[1px] bg-warm-gold mx-auto mt-4" />
      </div>

      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 px-4 sm:px-6 lg:px-8 pb-4" style={{ minWidth: 'max-content' }}>
          {ugcPosts.map((post) => (
            <div
              key={post.id}
              className="flex-shrink-0 w-[180px] md:w-[220px] group cursor-pointer"
            >
              <div className="aspect-[9/16] bg-warm-beige/30 rounded-sm overflow-hidden relative">
                <img
                  data-strk-img-id={`ugc-${post.id}`}
                  data-strk-img={`[ugc-caption-${post.id}] jewelry editorial gold`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'/%3E"
                  alt={post.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <p
                  id={`ugc-caption-${post.id}`}
                  className="absolute bottom-3 left-3 right-3 text-white text-xs font-serif italic"
                >
                  @{post.caption.replace(/\s+/g, '').toLowerCase()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}