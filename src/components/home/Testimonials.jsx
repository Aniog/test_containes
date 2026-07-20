import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

function Stars({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }, (_, i) => (
        <Star key={i} size={14} className="fill-gold text-gold" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-3">
            What Our Customers Say
          </h2>
          <div className="w-12 h-px bg-gold mx-auto" />
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white p-8 rounded-sm shadow-sm border border-stone-100 text-center"
            >
              <Stars count={t.rating} />
              <blockquote className="font-serif text-base md:text-lg text-stone-700 mt-4 leading-relaxed italic">
                "{t.text}"
              </blockquote>
              <div className="mt-6 pt-4 border-t border-stone-100">
                <p className="text-sm font-sans font-semibold text-stone-900">{t.name}</p>
                <p className="text-xs text-stone-400 mt-0.5">Purchased: {t.product}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
