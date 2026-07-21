import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-content mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-2xl md:text-3xl uppercase tracking-wider text-foreground">
            Loved by You
          </h2>
          <p className="text-foreground-muted text-sm mt-3">
            Real words from real customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="p-8 bg-surface border border-border text-center"
            >
              {/* Stars */}
              <div className="flex items-center justify-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground-muted text-sm leading-relaxed italic font-serif">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Name */}
              <p className="text-foreground text-xs tracking-wider uppercase mt-6 font-medium">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}