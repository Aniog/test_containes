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
    <section className="py-16 bg-secondary/30">
      <div className="container-padding mb-8">
        <h2 className="serif-heading text-2xl md:text-3xl font-light text-center">
          As Worn By You
        </h2>
        <p className="text-center text-muted-foreground text-sm mt-2">
          Tag @velmora to be featured
        </p>
      </div>

      <div ref={containerRef} className="flex gap-4 overflow-x-auto scrollbar-hide px-4 md:px-16 pb-4">
        {ugcPosts.map(post => (
          <div
            key={post.id}
            className="flex-shrink-0 w-[180px] md:w-[220px] relative group cursor-pointer"
          >
            <div className="aspect-[9/16] bg-secondary overflow-hidden relative">
              <img
                data-strk-img-id={`ugc-img-${post.imageId}`}
                data-strk-img="[ugc-caption] [ugc-section-title]"
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={post.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Caption overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent">
              <p id={`ugc-caption-${post.id}`} className="serif-heading text-white text-sm italic">
                {post.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UGCRow;
