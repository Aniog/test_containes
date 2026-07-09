import React from 'react';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '../../data/products';

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-velmora-50">
      <div className="container-wide">
        <div className="text-center mb-12">
          <span className="text-overline uppercase tracking-overline text-gold block mb-3">
            Reviews
          </span>
          <h2 className="font-serif text-3xl md:text-heading-2 text-velmora-900">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.id}
              className="bg-white p-6 md:p-8 rounded-sm border border-velmora-100 animate-fade-up"
              style={{ animationDelay: `${i * 0.15}s`, opacity: 0 }}
            >
              <Quote size={24} className="text-gold/30 mb-4" />
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={14} className="fill-gold text-gold" />
                ))}
              </div>
              <p className="text-velmora-600 text-sm leading-relaxed mb-6">
                "{t.text}"
              </p>
              <div className="flex items-center justify-between border-t border-velmora-100 pt-4">
                <div>
                  <p className="text-sm font-medium text-velmora-900">{t.name}</p>
                  <p className="text-xs text-velmora-400 mt-0.5">Verified Buyer</p>
                </div>
                <p className="text-xs text-velmora-400 italic">Re: {t.product}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
