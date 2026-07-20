import React from 'react';
import { testimonials } from '@/data/products';
import StarRating from '@/components/StarRating';

const Testimonials = () => {
  return (
    <section className="py-20 lg:py-28 bg-velmora-creamDark">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-velmora-gold mb-3">
            Reviews
          </p>
          <h2 className="font-serif text-3xl md:text-4xl tracking-wide text-velmora-charcoal">
            What Our Customers Say
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map((t) => (
            <div key={t.id} className="text-center">
              <StarRating rating={t.rating} size={16} />
              <p className="font-serif text-lg italic text-velmora-charcoal mt-5 mb-5 leading-relaxed">
                "{t.text}"
              </p>
              <p className="font-sans text-[11px] tracking-[0.15em] uppercase text-velmora-warmGray">
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
