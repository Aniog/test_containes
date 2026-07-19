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
    <section className="py-12 md:py-16 bg-muted/30 overflow-hidden">
      <div className="container-padding mb-8">
        <h2 className="serif-heading text-2xl md:text-3xl text-center">
          As Worn By You
        </h2>
        <p className="text-muted-foreground text-center text-sm mt-2">
          Tag @velmorajewelry to be featured
        </p>
      </div>

      <div ref={containerRef} className="flex gap-4 overflow-x-auto scrollbar-hide px-4 md:px-8 pb-4">
        {ugcPosts.map((post) => (
          <div
            key={post.id}
            className="flex-shrink-0 w-40 md:w-48 relative group"
          >
            <div className="aspect-[9/16] overflow-hidden bg-muted">
              <img
                alt={post.caption}
                data-strk-img-id={`ugc-${post.imgId}`}
                data-strk-img={`[ugc-caption-${post.id}] [ugc-section-title]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-foreground/60 to-transparent">
              <p id={`ugc-caption-${post.id}`} className="text-white text-xs serif-heading italic">
                {post.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
