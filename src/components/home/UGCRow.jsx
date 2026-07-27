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
    <section ref={containerRef} className="py-16 lg:py-20 bg-[#f5f0eb] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <h2 className="velmora-heading text-3xl sm:text-4xl text-[#1a1a1a] text-center">
          As Worn By You
        </h2>
        <p className="text-[#6b6560] text-center mt-3 text-sm">
          Tag @velmorajewelry to be featured
        </p>
      </div>

      <div className="flex gap-4 px-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {ugcPosts.map((post) => (
          <div
            key={post.id}
            className="flex-shrink-0 w-48 sm:w-56 snap-start"
          >
            <div className="relative aspect-[9/16] bg-[#e8e4df] overflow-hidden group">
              <img
                data-strk-img-id={post.imgId}
                data-strk-img={`[${post.imgId}-caption] gold jewelry worn by woman`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={post.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="velmora-heading text-white text-lg italic">
                  {post.caption}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
