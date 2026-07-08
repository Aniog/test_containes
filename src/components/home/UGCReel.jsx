import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ugcItems } from '@/data/products';

export default function UGCReel() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const amount = direction === 'left' ? -300 : 300;
    scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
  };

  return (
    <section className="py-16 md:py-24 bg-cream-50">
      <div className="section-padding mb-8 flex items-end justify-between">
        <div>
          <h2 className="heading-lg text-dark-900 mb-2">#VelmoraMoments</h2>
          <p className="body-md text-dark-600">Real women, real jewelry, real stories.</p>
        </div>
        <div className="hidden md:flex gap-2">
          <button
            onClick={() => scroll('left')}
            className="w-10 h-10 border border-stone-300 flex items-center justify-center text-dark-600 hover:border-gold-500 hover:text-gold-500 transition-colors"
            aria-label="Scroll left"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => scroll('right')}
            className="w-10 h-10 border border-stone-300 flex items-center justify-center text-dark-600 hover:border-gold-500 hover:text-gold-500 transition-colors"
            aria-label="Scroll right"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide section-padding pb-4"
      >
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-[200px] md:w-[240px] aspect-[9/16] relative group overflow-hidden bg-stone-200"
          >
            <img
              data-strk-img-id={`ugc-${item.id}`}
              data-strk-img={`[${`ugc-caption-${item.id}`}] woman wearing gold jewelry portrait warm light`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={item.caption}
              className="w-full h-full object-cover"
            />
            {/* Caption overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 via-transparent to-transparent" />
            <p
              id={`ugc-caption-${item.id}`}
              className="absolute bottom-4 left-4 right-4 font-serif text-lg text-cream-100 italic"
            >
              {item.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
