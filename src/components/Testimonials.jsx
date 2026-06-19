import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '../data/products';

export default function Testimonials() {
  return (
    <section className="py-section lg:py-section-lg bg-warm-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.25em] text-gold font-sans mb-3">Kind Words</p>
          <h2 className="section-heading">What Our Customers Say</h2>
          <div className="w-12 h-[1px] bg-gold mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-white p-8 border border-divider">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                ))}
              </div>

              <p className="font-sans text-sm text-warm-gray leading-relaxed mb-6 italic">
                &ldquo;{t.text}&rdquo;
              </p>

              <p className="font-serif text-sm text-charcoal font-medium">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}