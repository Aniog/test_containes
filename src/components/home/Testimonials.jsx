import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="font-sans text-xs uppercase tracking-[0.3em] text-gold mb-3">
            Love Letters
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal">
            What Our Customers Say
          </h2>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-linen rounded-lg p-8 md:p-10 text-center hover:shadow-lg transition-shadow duration-500"
            >
              {/* Stars */}
              <div className="flex items-center justify-center gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-amber text-amber"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-sans text-sm text-ink/80 leading-relaxed mb-6 italic">
                "{t.text}"
              </blockquote>

              {/* Author */}
              <div>
                <p className="font-sans text-xs uppercase tracking-widest text-charcoal font-medium">
                  {t.name}
                </p>
                <p className="font-sans text-[11px] text-muted mt-1">
                  Purchased: {t.product}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
