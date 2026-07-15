import React from 'react';
import { testimonials } from '@/data/products';
import StarRating from '@/components/StarRating';

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-velmora-sand">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-xs tracking-[0.25em] uppercase text-velmora-gold mb-2">Reviews</p>
          <h2 className="font-serif text-3xl md:text-4xl font-light tracking-wide">Loved by Thousands</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-velmora-cream p-6 md:p-8 rounded-sm border border-velmora-taupe/20 flex flex-col"
            >
              <StarRating rating={t.rating} size={14} />
              <p className="mt-4 text-sm md:text-base text-velmora-charcoal leading-relaxed flex-1">
                "{t.text}"
              </p>
              <p className="mt-5 text-xs font-medium tracking-wider uppercase text-velmora-warmgray">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
