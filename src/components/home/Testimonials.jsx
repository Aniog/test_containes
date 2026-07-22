import React from 'react';
import { Star, Quote } from 'lucide-react';
import { reviews } from '../../data/products';
import { useScrollReveal } from '../../lib/hooks';

export default function Testimonials() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-section-mobile md:py-section bg-sand">
      <div className="max-w-[1280px] mx-auto px-6">
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="text-caption uppercase tracking-[0.2em] text-gold font-sans font-medium mb-3">
            Loved By
          </p>
          <h2 className="font-serif text-h2 text-charcoal">What Our Customers Say</h2>
        </div>

        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white p-8 rounded-sm border border-linen relative"
            >
              <Quote className="w-8 h-8 text-gold/20 mb-4" />

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>

              <p className="text-stone font-sans text-sm leading-relaxed mb-6">
                "{review.text}"
              </p>

              <div className="border-t border-linen pt-4">
                <p className="text-charcoal font-sans text-sm font-medium">
                  {review.name}
                </p>
                <p className="text-stone font-sans text-xs mt-0.5">
                  Purchased: {review.product}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
