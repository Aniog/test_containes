import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '../data/products';

export default function Testimonials() {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="section-heading">Loved by Thousands</h2>
        <p className="section-subheading">Real reviews from real customers</p>

        <div className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-velvet-surface border border-velvet-border rounded p-6 md:p-8 hover:border-velvet-border-light transition-colors duration-300"
            >
              <div className="flex items-center gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-velvet-gold text-velvet-gold"
                  />
                ))}
              </div>
              <p className="text-velvet-cream text-sm leading-relaxed italic font-serif">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="mt-4 pt-4 border-t border-velvet-border">
                <p className="text-velvet-taupe text-xs font-medium tracking-wider uppercase">
                  {t.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}