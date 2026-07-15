import React from 'react';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="section-subheading mb-3">What They Say</p>
          <h2 className="section-heading">Customer Love</h2>
          <div className="w-16 h-px bg-gold mx-auto mt-5" />
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white p-8 md:p-10 text-center group hover:shadow-lg transition-shadow duration-500"
            >
              <Quote className="w-8 h-8 text-gold/30 mx-auto mb-4" />

              {/* Stars */}
              <div className="flex items-center justify-center gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>

              {/* Text */}
              <p className="font-sans text-charcoal-500 leading-relaxed mb-6 text-sm md:text-base">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="border-t border-charcoal-100 pt-4">
                <p className="font-serif text-lg text-charcoal">{t.name}</p>
                <p className="font-sans text-xs text-charcoal-400 mt-1">Verified Buyer · {t.product}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
