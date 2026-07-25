import React from 'react';
import { Star } from 'lucide-react';
import { TESTIMONIALS } from '../../data/products';

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="section-subtitle">Real Reviews</span>
          <h2 className="section-title mt-3">Loved by Thousands</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="p-6 md:p-8 border border-ink-100 rounded-sm bg-cream"
            >
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-gold-400 text-gold-400"
                  />
                ))}
              </div>
              <p className="text-sm text-ink-700 font-sans leading-relaxed">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="mt-4 text-xs font-sans font-medium tracking-wider uppercase text-ink-500">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}