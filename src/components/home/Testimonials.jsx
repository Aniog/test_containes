import React from 'react';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '../../data/products';

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="font-sans text-xs tracking-mega-wide uppercase text-velmora-gold mb-3">
            Real Reviews
          </p>
          <h2 className="font-serif text-heading-lg md:text-heading-xl text-velmora-deep">
            What Our Customers Say
          </h2>
          <div className="w-16 h-px bg-velmora-gold mx-auto mt-4" />
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white p-8 md:p-10 border border-velmora-border-light"
            >
              <Quote className="w-8 h-8 text-velmora-gold-light mb-4" strokeWidth={1} />
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-velmora-gold text-velmora-gold" />
                ))}
              </div>
              <p className="font-sans text-sm text-velmora-warm leading-relaxed mb-6">
                "{t.text}"
              </p>
              <div className="border-t border-velmora-border-light pt-4">
                <p className="font-sans text-sm font-medium text-velmora-charcoal">
                  {t.name}
                </p>
                <p className="font-sans text-xs text-velmora-muted mt-0.5">
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
