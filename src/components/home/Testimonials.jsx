import React from 'react';
import { Star } from 'lucide-react';
import { reviews } from '../../data/products';

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-surface-warm">
      <div className="section-padding">
        <div className="text-center mb-14">
          <p className="font-sans text-overline uppercase tracking-mega-wide text-gold mb-3">
            Reviews
          </p>
          <h2 className="font-serif text-heading-1 md:text-display text-charcoal">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-surface-cream p-8 text-center border border-brand-200/50 hover:border-gold/30 transition-all duration-500 ease-luxury"
            >
              {/* Stars */}
              <div className="flex items-center justify-center gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} size={14} className="text-gold fill-gold" />
                ))}
              </div>

              {/* Quote */}
              <p className="font-sans text-body text-charcoal leading-relaxed mb-6 italic">
                "{review.text}"
              </p>

              {/* Author */}
              <div>
                <p className="font-serif text-base text-charcoal font-medium">
                  {review.name}
                </p>
                <p className="text-caption text-charcoal-muted mt-0.5">
                  {review.product}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
