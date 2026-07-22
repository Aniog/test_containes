import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-velmora-off-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="font-serif text-3xl md:text-4xl font-medium text-velmora-charcoal text-center mb-12">
          What Our Customers Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map(review => (
            <div key={review.id} className="bg-velmora-white p-6 md:p-8 shadow-sm">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-velmora-gold text-velmora-gold" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm md:text-base text-velmora-charcoal font-sans leading-relaxed italic">
                "{review.text}"
              </p>

              {/* Name */}
              <p className="mt-4 text-xs uppercase tracking-nav font-sans font-medium text-velmora-muted">
                {review.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
