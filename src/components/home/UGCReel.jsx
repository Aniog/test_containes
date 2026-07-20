import { useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ugcPosts } from '@/lib/data';

export default function UGCReel() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-sand">
      <div className="text-center mb-12">
        <h2 className="serif-heading text-3xl md:text-4xl text-espresso mb-4">
          As Seen On You
        </h2>
        <p className="text-umber text-sm max-w-md mx-auto">
          Tag <span className="text-gold font-medium">@velmora</span> to be featured
        </p>
      </div>

      {/* Horizontal scroll */}
      <div className="flex gap-4 overflow-x-auto px-6 lg:px-10 pb-4 snap-x snap-mandatory scrollbar-hide">
        {ugcPosts.map((post) => (
          <div
            key={post.id}
            className="flex-shrink-0 w-[180px] md:w-[220px] snap-start group cursor-pointer"
          >
            <div className="relative aspect-[9/16] bg-clay overflow-hidden rounded-sm">
              <img
                alt={post.caption}
                data-strk-img-id={`ugc-${post.id}`}
                data-strk-img={`[ugc-caption-${post.id}]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="500"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="sr-only" id={`ugc-caption-${post.id}`}>
                {post.caption} {post.username} gold jewelry
              </span>
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 via-transparent to-transparent" />
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-cream font-serif text-sm italic leading-snug">
                  {post.caption}
                </p>
                <p className="text-cream/70 text-xs mt-1">{post.username}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}
