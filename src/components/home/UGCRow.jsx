import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ugcPosts } from '@/data/products';
import useScrollReveal from '@/hooks/useScrollReveal';

export default function UGCRow() {
  const scrollRef = useRef(null);
  const [ref, revealed] = useScrollReveal({ threshold: 0.1 });

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 280, behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={ref}
      className={`bg-warm-100 py-20 md:py-28 transition-all duration-700 ease-out ${
        revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-12">
          <p className="section-subtitle">Styled by You</p>
          <h2 className="section-title mt-3">As Seen On</h2>
        </div>

        <div className="relative">
          {/* Scroll buttons */}
          <button
            onClick={() => scroll(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-cream/90 shadow-sm flex items-center justify-center text-deep-600 hover:text-deep-900 transition-colors"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-cream/90 shadow-sm flex items-center justify-center text-deep-600 hover:text-deep-900 transition-colors"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Scrollable row */}
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {ugcPosts.map((post) => (
              <div key={post.id} className="flex-shrink-0 w-[220px] md:w-[260px]">
                <div className="aspect-[9/16] bg-deep-100 overflow-hidden relative group">
                  <div className="w-full h-full bg-gradient-to-br from-warm-200 via-warm-300 to-warm-400" />
                  {/* Caption overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-5">
                    <p className="font-serif text-cream text-sm italic leading-snug">
                      &ldquo;{post.caption}&rdquo;
                    </p>
                  </div>
                </div>
                <p className="mt-3 font-sans text-xs text-deep-500 text-center tracking-wider uppercase">
                  {post.product}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}