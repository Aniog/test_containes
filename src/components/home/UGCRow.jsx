import { useRef } from 'react';
import { ugcItems } from '@/data/products';

export default function UGCRow() {
  const scrollRef = useRef(null);

  return (
    <section className="py-16 md:py-24 bg-brand-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-10 md:mb-14">
          <p className="font-sans text-xs font-semibold uppercase tracking-mega-wide text-brand-500 mb-3">
            As Seen On
          </p>
          <h2 className="heading-section">Style Stories</h2>
        </div>
      </div>

      {/* Horizontal scroll strip */}
      <div
        ref={scrollRef}
        className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide px-4 sm:px-6 lg:px-8 pb-4"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-[200px] md:w-[240px] relative rounded-lg overflow-hidden group cursor-pointer"
            style={{ scrollSnapAlign: 'start', aspectRatio: '9/16' }}
          >
            <img
              src={item.src}
              alt={item.caption}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/70 via-transparent to-transparent" />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
              <p className="font-serif text-base md:text-lg text-white leading-snug">
                {item.caption}
              </p>
              <p className="text-xs text-warm-300 mt-1 uppercase tracking-wider font-sans">
                {item.product}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
