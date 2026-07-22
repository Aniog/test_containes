import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ugcPosts } from '@/data/products';

export default function UGCRow() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-20 bg-[var(--velmora-cream)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <h2 className="velmora-heading text-3xl md:text-4xl text-center mb-3">As Worn By You</h2>
        <div className="velmora-divider-thin w-16 mx-auto mb-4" />
        <p className="text-sm text-[var(--velmora-text-muted)] text-center max-w-md mx-auto">
          Real women, real moments. Tag @velmorajewelry to be featured.
        </p>
      </div>

      <div className="flex gap-4 overflow-x-auto scrollbar-hide px-4 sm:px-6 lg:px-8 pb-4">
        {ugcPosts.map((post) => (
          <div
            key={post.id}
            className="flex-shrink-0 w-[200px] md:w-[240px] relative group cursor-pointer"
          >
            <div className="aspect-[9/16] bg-[var(--velmora-border)] overflow-hidden">
              <img
                data-strk-img-id={`ugc-${post.id}`}
                data-strk-img={`[ugc-caption-${post.id}] [ugc-handle-${post.id}] jewelry worn gold` }
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={post.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
              <p id={`ugc-caption-${post.id}`} className="text-white text-sm velmora-heading italic">
                {post.caption}
              </p>
              <p id={`ugc-handle-${post.id}`} className="text-white/70 text-xs mt-1">{post.handle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
