import { useRef } from 'react';
import { ugcPosts } from '@/data/products';

export default function UGCReel() {
  const scrollRef = useRef(null);

  return (
    <section className="py-14 md:py-20 bg-parchment overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-8">
        <p className="text-xs tracking-[0.25em] uppercase text-gold font-medium mb-2">@velmorajewelry</p>
        <h2 className="font-serif text-2xl md:text-3xl text-charcoal">Styled by You</h2>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide px-4 sm:px-6 lg:px-8 pb-4"
      >
        {ugcPosts.map((post) => (
          <div
            key={post.id}
            className="flex-shrink-0 w-[180px] md:w-[220px] aspect-[9/16] relative rounded-sm overflow-hidden bg-charcoal group cursor-pointer"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-warmgray-light/40 text-[10px] uppercase tracking-widest text-center px-4">
                UGC {post.id.replace('ugc-', '')}
              </span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <p className="font-serif text-white text-sm italic leading-snug">
                {post.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
