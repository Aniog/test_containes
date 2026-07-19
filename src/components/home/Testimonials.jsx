import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs tracking-widest uppercase text-velmora-gold mb-3">Reviews</p>
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-espresso">What Our Customers Say</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-velmora-ivory rounded-sm p-8 border border-velmora-sand/30 flex flex-col"
            >
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-velmora-gold text-velmora-gold" />
                ))}
              </div>
              <p className="text-velmora-espresso leading-relaxed flex-1 mb-6 italic font-serif text-lg">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="text-xs tracking-widest uppercase text-velmora-taupe font-medium">
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
