import React from 'react';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '@/data/testimonials';

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="section-heading">What Our Customers Say</h2>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map(review => (
            <div
              key={review.id}
              className="bg-white p-8 text-center shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <Quote className="w-6 h-6 text-gold/30 mx-auto mb-4" />

              <div className="flex items-center justify-center gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${
                      i < review.rating ? 'text-gold fill-gold' : 'text-warm-gray-light'
                    }`}
                  />
                ))}
              </div>

              <p className="text-sm text-charcoal-light leading-relaxed mb-6 italic">
                "{review.text}"
              </p>

              <div>
                <p className="font-serif text-base text-charcoal">{review.name}</p>
                <p className="text-[10px] text-warm-gray uppercase tracking-widest font-sans mt-0.5">
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
