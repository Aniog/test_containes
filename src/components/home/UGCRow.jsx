import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ugcPosts } from '@/data/products';

export default function UGCRow() {
  const ref = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <section className="py-20 md:py-28 bg-white">
      <h2 className="font-serif text-2xl md:text-3xl text-center text-espresso tracking-wide">
        As Seen On You
      </h2>
      <div className="w-12 h-px bg-gold mx-auto mt-4 mb-12" />

      <div ref={ref} className="flex gap-4 overflow-x-auto px-6 lg:px-10 pb-4 snap-x snap-mandatory scrollbar-hide max-w-7xl mx-auto">
        {ugcPosts.map(post => (
          <div key={post.id} className="flex-shrink-0 w-[180px] md:w-[220px] snap-start">
            <div className="relative aspect-[9/16] bg-cream overflow-hidden">
              <img
                alt={post.caption}
                data-strk-img-id={post.imgId}
                data-strk-img={`[ugc-caption-${post.id}] [ugc-user-${post.id}] gold jewelry woman wearing`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'/%3E"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/50 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p id={`ugc-user-${post.id}`} className="text-white text-xs font-medium">{post.user}</p>
                <p id={`ugc-caption-${post.id}`} className="text-white/80 text-[11px] mt-0.5">{post.caption}</p>
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
