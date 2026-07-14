import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="section-title">What Our Customers Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-surface p-6 md:p-8 rounded border border-warm-border/50"
            >
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                ))}
              </div>
              <blockquote className="text-warm-black/80 text-sm md:text-base leading-relaxed font-sans">
                &ldquo;{t.text}&rdquo;
              </blockquote>
              <p className="mt-4 text-xs uppercase tracking-[0.1em] text-warm-gray font-medium">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}