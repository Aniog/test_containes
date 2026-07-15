import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ugcPosts } from '@/data/products';

const UGCRow = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-velmora-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-velmora-accent text-sm tracking-widest uppercase mb-2">@velmorajewelry</p>
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-text mb-3">
            As Worn By You
          </h2>
          <p className="text-velmora-secondary text-sm md:text-base max-w-md mx-auto">
            Real women, real moments. Tag us to be featured.
          </p>
          <div className="w-12 h-px bg-velmora-border-thin mx-auto mt-6" />
        </div>

        {/* Horizontal Scroll Row */}
        <div className="flex gap-4 md:gap-6 overflow-x-auto no-scrollbar pb-4 -mx-4 px-4 md:mx-0 md:px-0">
          {ugcPosts.map(post => (
            <div
              key={post.id}
              className="flex-shrink-0 w-[200px] md:w-[240px] relative group"
            >
              <div className="aspect-[9/16] overflow-hidden relative">
                <img
                  data-strk-img-id={`ugc-${post.id}-d4e5f6`}
                  data-strk-img={`[ugc-caption-${post.id}] [ugc-section-title]`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={post.caption}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Caption Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-velmora-dark/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p id={`ugc-caption-${post.id}`} className="font-serif text-velmora-dark-text text-lg italic">
                    {post.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UGCRow;
