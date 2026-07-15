import { useRef } from 'react';
import { ugcItems } from '@/data/products';

export default function UGCRow() {
  const scrollRef = useRef(null);

  return (
    <section className="py-20 md:py-28 bg-velmora-sand overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="font-serif text-3xl md:text-4xl tracking-wide text-velmora-charcoal">
          As Seen On You
        </h2>
        <p className="font-sans text-sm text-velmora-stone mt-3 tracking-wider uppercase">
          Tag @velmora to be featured
        </p>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto px-6 pb-4 snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-[180px] md:w-[220px] aspect-[9/16] relative rounded-sm overflow-hidden snap-start group"
          >
            <img
              data-strk-img-id={`ugc-${item.id}`}
              data-strk-img={`${item.query}`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'/%3E"
              alt={item.caption}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <p className="absolute bottom-4 left-4 right-4 font-serif text-white text-lg italic tracking-wide">
              {item.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}