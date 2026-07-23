import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ugcPosts } from '../../data/products';

export default function UgcReels() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 280, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-warm-50">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-end justify-between mb-10 md:mb-14">
          <div>
            <h2 className="section-title">Styled by You</h2>
            <p className="mt-3 text-sm font-sans text-charcoal-500">Tag @velmora to be featured</p>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => scroll(-1)}
              className="w-10 h-10 rounded-full border border-charcoal-300 flex items-center justify-center text-charcoal-600 hover:bg-charcoal-900 hover:text-cream-50 hover:border-charcoal-900 transition-all duration-300"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll(1)}
              className="w-10 h-10 rounded-full border border-charcoal-300 flex items-center justify-center text-charcoal-600 hover:bg-charcoal-900 hover:text-cream-50 hover:border-charcoal-900 transition-all duration-300"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Horizontal scroll */}
        <div
          ref={scrollRef}
          className="flex gap-4 md:gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-none"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {ugcPosts.map((post) => (
            <div
              key={post.id}
              className="flex-shrink-0 w-[65vw] max-w-[220px] md:max-w-[260px] snap-start group cursor-pointer"
            >
              <div className="aspect-[9/16] bg-warm-200 overflow-hidden relative">
                <div className="w-full h-full bg-warm-300 transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/50 via-transparent to-transparent" />
                <p className="absolute bottom-4 left-4 right-4 font-serif text-cream-50 text-sm md:text-base italic leading-snug">
                  {post.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}