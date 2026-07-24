import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ugcPosts } from '@/data/products';

export default function UgcReel() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 300, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-sand py-20 lg:py-28">
      <div className="text-center mb-12">
        <p className="text-gold-600 text-[11px] tracking-[0.25em] uppercase font-medium mb-3">
          As Seen On You
        </p>
        <h2 className="font-serif text-3xl lg:text-4xl text-velvet-900 font-light">
          The Velmora Community
        </h2>
      </div>

      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Scroll buttons — desktop */}
        <button
          onClick={() => scroll(-1)}
          className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 shadow-md items-center justify-center text-velvet-700 hover:text-gold-600 transition-colors"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => scroll(1)}
          className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 shadow-md items-center justify-center text-velvet-700 hover:text-gold-600 transition-colors"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Reel strip */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth px-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {ugcPosts.map((post, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[160px] sm:w-[200px] aspect-[9/16] rounded-sm overflow-hidden relative group cursor-pointer"
            >
              {/* Placeholder gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-velvet-200 via-gold-100/40 to-velvet-300" />
              <div
                className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:opacity-40 transition-opacity"
                data-strk-bg-id={`ugc-${i}-bg`}
                data-strk-bg={`[ugc-caption-${i}]`}
                data-strk-bg-ratio="9x16"
                data-strk-bg-width="400"
              />

              {/* Gradient overlay at bottom */}
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-velvet-950/70 to-transparent" />

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p
                  id={`ugc-caption-${i}`}
                  className="font-serif text-white text-sm italic leading-snug"
                >
                  {post.caption}
                </p>
                <p className="text-gold-300 text-[10px] tracking-wider uppercase mt-1 font-medium">
                  {post.product}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
