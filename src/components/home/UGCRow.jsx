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
    <section ref={containerRef} className="py-16 lg:py-20 overflow-hidden">
      <div className="text-center mb-10 px-4">
        <h2 id="ugc-row-title" className="serif-heading text-3xl sm:text-4xl mb-2">As Worn By You</h2>
        <p className="text-sm text-muted-foreground tracking-wide">Tag @velmora to be featured</p>
      </div>

      {/* Hidden text elements for stock image queries */}
      <div className="sr-only">
        <p id="ugc-context">Velmora Fine Jewelry gold earrings necklaces huggies demi-fine jewelry worn by women</p>
        {ugcPosts.map((post) => (
          <p key={`ugc-hidden-${post.id}`} id={`ugc-caption-${post.id}`}>{post.caption}</p>
        ))}
      </div>

      <div className="flex gap-4 overflow-x-auto scrollbar-hide px-4 sm:px-6 lg:px-12 pb-4">
        {ugcPosts.map((post) => (
          <div
            key={post.id}
            className="relative flex-shrink-0 w-[180px] sm:w-[220px] aspect-[9/16] overflow-hidden group"
          >
            <img
              alt={`UGC post ${post.id}`}
              data-strk-img-id={post.imgId}
              data-strk-img={`[ugc-caption-${post.id}] [ugc-context] [ugc-row-title]`}
              data-strk-img-ratio={post.ratio}
              data-strk-img-width={post.width}
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Caption Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
              <p id={`ugc-caption-${post.id}`} className="text-white text-sm serif-heading italic">
                {post.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
