import { useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ugcPosts = [
  { id: 'ugc-1', caption: 'Everyday elegance ✨', query: 'gold earrings worn by woman closeup' },
  { id: 'ugc-2', caption: 'Layered perfection', query: 'gold necklace layered jewelry woman' },
  { id: 'ugc-3', caption: 'Huggie season 💛', query: 'gold huggie earrings ear closeup' },
  { id: 'ugc-4', caption: 'Stacked & styled', query: 'gold jewelry stack rings earrings' },
  { id: 'ugc-5', caption: 'Golden hour glow', query: 'gold jewelry woman sunlight warm' },
  { id: 'ugc-6', caption: 'Minimal but mighty', query: 'minimal gold jewelry elegant woman' },
];

export function UGCReels() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mb-10">
        <h2 className="serif-heading text-3xl md:text-4xl text-center mb-2">As Worn By You</h2>
        <p className="text-sm text-muted-foreground text-center tracking-wide">Tag @velmora to be featured</p>
      </div>

      <div className="flex gap-4 overflow-x-auto scrollbar-hide px-6 md:px-12 lg:px-20 pb-4">
        {ugcPosts.map((post) => (
          <div
            key={post.id}
            className="relative flex-shrink-0 w-48 md:w-56 aspect-[9/16] rounded-sm overflow-hidden group cursor-pointer"
          >
            <img
              data-strk-img-id={post.id}
              data-strk-img={post.query}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              alt={post.caption}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p className="serif-heading text-white text-sm md:text-base">{post.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
