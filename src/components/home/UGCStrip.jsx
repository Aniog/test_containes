import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ugcPosts } from '@/data/products';
import products from '@/data/products';

export default function UGCStrip() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir * 280, behavior: 'smooth' });
  };

  return (
    <section className="py-20 md:py-28 bg-warm-50">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-20">
        <div className="flex items-end justify-between mb-10 md:mb-14">
          <div>
            <p className="font-sans text-xs tracking-[0.28em] uppercase text-ink-400 mb-3">
              As Seen On You
            </p>
            <h2 className="font-serif text-3xl md:text-5xl font-light tracking-wide">
              Styled by Our Community
            </h2>
          </div>
          <div className="hidden md:flex gap-2">
            <button
              onClick={() => scroll(-1)}
              className="w-9 h-9 border border-ink-200 flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll(1)}
              className="w-9 h-9 border border-ink-200 flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide pb-4 -mx-6 px-6 snap-x snap-mandatory"
        >
          {ugcPosts.map((post) => {
            const product = products.find((p) => p.id === post.productId);
            return (
              <div
                key={post.id}
                className="flex-shrink-0 w-[180px] md:w-[220px] snap-start"
              >
                <div className="relative aspect-[9/16] bg-warm-100 overflow-hidden group cursor-pointer">
                  <img
                    data-strk-img-id={`ugc-${post.id}`}
                    data-strk-img={`[ugc-name-${post.id}] worn on model`}
                    data-strk-img-ratio="9x16"
                    data-strk-img-width="440"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={post.caption}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="font-serif text-white text-sm italic mb-1">
                      <span id={`ugc-name-${post.id}`} className="sr-only">{product?.name}</span>
                      {post.caption}
                    </p>
                    <p className="text-white/60 text-xs">{post.username}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}