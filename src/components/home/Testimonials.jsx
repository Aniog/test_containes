import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-12 lg:px-20 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-3">What They Say</h2>
          <p className="font-sans text-sm text-warm-gray">Loved by thousands of women worldwide</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="p-6 md:p-8 border border-hairline bg-cream/50">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              {/* Quote */}
              <p className="font-sans text-sm text-charcoal/80 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>
              {/* Author */}
              <p className="font-sans text-xs uppercase tracking-widest text-warm-gray">
                — {testimonial.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
