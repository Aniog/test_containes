import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ugcPosts } from '@/data/products';

export default function UGCRow() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir * 280, behavior: 'smooth' });
  };

  return (
    <section className="py-16 md:py-24 bg-velmora-beige/50">
      <div className="text-center mb-10 md:mb-14">
        <p className="font-sans text-xs tracking-[0.2em] uppercase text-velmora-taupe mb-3">
          As Seen On You
        </p>
        <h2 className="heading-lg text-velmora-base">Styled by Our Community</h2>
      </div>

      <div className="relative">
        {/* Scroll buttons */}
        <button
          onClick={() => scroll(-1)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 shadow-md flex items-center justify-center hover:bg-white transition-colors"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-5 h-5 text-velmora-base" />
        </button>
        <button
          onClick={() => scroll(1)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 shadow-md flex items-center justify-center hover:bg-white transition-colors"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-5 h-5 text-velmora-base" />
        </button>

        {/* Scrollable row */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide px-6 md:px-12 lg:px-20 pb-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {ugcPosts.map((post) => (
            <div
              key={post.id}
              className="flex-shrink-0 w-[180px] md:w-[220px] snap-start group cursor-pointer"
            >
              <div className="aspect-[9/16] bg-velmora-beige overflow-hidden relative">
                <img
                  src={post.image}
                  alt={post.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-velmora-base/60 via-transparent to-transparent" />
                <p className="absolute bottom-4 left-4 right-4 font-serif text-white text-sm italic">
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