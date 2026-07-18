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
    <section ref={containerRef} className="py-16 md:py-20 bg-velmora-dark/5">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-10">
        <p className="section-subtitle text-center">@velmora on Instagram</p>
        <h2 className="section-title mt-3 text-center">Worn & Loved</h2>
      </div>

      <div className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide px-4 md:px-8 pb-4">
        {ugcPosts.map((post) => (
          <div
            key={post.id}
            className="flex-shrink-0 w-40 md:w-52 relative group overflow-hidden rounded-sm"
          >
            <div className="aspect-[9/16] bg-velmora-dark/10">
              <img
                data-strk-img-id={post.image.id}
                data-strk-img={post.image.query}
                data-strk-img-ratio={post.image.ratio}
                data-strk-img-width={post.image.width}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={post.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <p className="text-white font-serif text-sm italic px-4 pb-4">{post.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
