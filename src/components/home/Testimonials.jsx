import React from 'react';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-surface/50 border-y border-divider">
      <div className="section-padding max-w-[1440px] mx-auto">
        <div className="text-center mb-14">
          <p className="section-subtitle mb-3">What They Say</p>
          <h2 className="section-title">Loved by Thousands</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((review) => (
            <div
              key={review.id}
              className="relative bg-surface border border-divider rounded-sm p-8 group hover:border-gold/20 transition-colors duration-400"
            >
              {/* Quote icon */}
              <Quote size={24} className="text-gold/20 mb-4" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" className="text-gold" />
                ))}
              </div>

              {/* Review text */}
              <p className="text-cream-muted text-sm leading-relaxed mb-6 italic">
                "{review.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center">
                  <span className="text-xs text-gold font-medium">
                    {review.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-sm text-cream font-medium">{review.name}</p>
                  <p className="text-xs text-cream-dim">on {review.product}</p>
                </div>
              </div>

              {/* Decorative accent */}
              <div className="absolute top-0 left-8 w-12 h-px bg-gold/30 -translate-y-px" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
