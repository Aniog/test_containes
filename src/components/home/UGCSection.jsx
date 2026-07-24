import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';

const ugcPosts = [
  {
    id: 'ugc-1',
    caption: 'Everyday elegance',
    query: 'gold jewelry worn on ear closeup',
  },
  {
    id: 'ugc-2',
    caption: 'Layered perfection',
    query: 'gold necklace layered on model',
  },
  {
    id: 'ugc-3',
    caption: 'Golden hour glow',
    query: 'gold huggie earrings on ear',
  },
  {
    id: 'ugc-4',
    caption: 'Stacked & styled',
    query: 'gold jewelry stack on woman',
  },
  {
    id: 'ugc-5',
    caption: 'Minimal luxury',
    query: 'minimal gold jewelry portrait',
  },
  {
    id: 'ugc-6',
    caption: 'Weekend vibes',
    query: 'gold earrings woman natural light',
  },
];

export default function UGCSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-16 md:py-20 bg-[var(--velmora-bg-alt)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <h2 className="serif-heading text-3xl md:text-4xl text-center">
          As Worn By You
        </h2>
        <p className="text-center text-[var(--velmora-text-muted)] mt-3 text-sm">
          Tag @velmorajewelry to be featured
        </p>
      </div>

      <div ref={containerRef} className="flex gap-4 overflow-x-auto scrollbar-hide px-4 sm:px-6 lg:px-8 pb-4">
        {ugcPosts.map((post) => (
          <div
            key={post.id}
            className="relative flex-shrink-0 w-[180px] sm:w-[220px] aspect-[9/16] rounded-lg overflow-hidden group"
          >
            <img
              data-strk-img-id={`${post.id}-img`}
              data-strk-img={`[${post.id}-caption] [ugc-section-title]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={post.caption}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p id={`${post.id}-caption`} className="serif-heading text-white text-lg italic">
                {post.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
