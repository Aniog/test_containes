import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-taupe-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="text-center mb-14">
          <p className="text-gold text-xs uppercase tracking-[0.2em] font-sans font-semibold mb-3">
            Testimonials
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-charcoal-900">
            Loved by Our Customers
          </h2>
          <div className="w-12 h-0.5 bg-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((t, i) => (
            <div key={i} className="text-center p-8 bg-cream-50 border border-charcoal-100">
              {/* Stars */}
              <div className="flex items-center justify-center gap-1 mb-5">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-gold fill-gold" />
                ))}
              </div>

              {/* Quote */}
              <p className="font-serif text-lg text-charcoal-700 leading-relaxed italic mb-6">
                "{t.text}"
              </p>

              {/* Name */}
              <p className="text-sm text-charcoal-500 font-sans uppercase tracking-wider">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}