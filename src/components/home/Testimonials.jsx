import React from 'react';
import { Star, Quote } from 'lucide-react';
import { reviews } from '../../data/products';

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="font-sans text-xs tracking-wide-custom uppercase text-gold mb-3">
            Reviews
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal">
            What Our Customers Say
          </h2>
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white p-6 md:p-8 rounded-xl border border-warm-border-light hover:shadow-md transition-shadow duration-300"
            >
              <Quote className="w-8 h-8 text-gold/20 mb-4" />
              <p className="font-sans text-sm text-charcoal-light leading-relaxed mb-6">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${
                      i < review.rating ? 'fill-gold text-gold' : 'text-warm-border'
                    }`}
                  />
                ))}
              </div>
              <div>
                <p className="font-sans text-sm font-medium text-charcoal">
                  {review.name}
                </p>
                <p className="font-sans text-xs text-charcoal-muted">
                  Purchased {review.product}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
