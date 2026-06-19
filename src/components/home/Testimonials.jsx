import React from 'react';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '../../data/products';

export default function Testimonials() {
  return (
    <section className="section-padding py-20 md:py-28">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <p className="font-sans text-caption uppercase tracking-widest-2xl text-gold mb-3">
            Loved by Thousands
          </p>
          <h2 className="font-serif text-heading-xl text-velmora-dark">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((item, i) => (
            <div
              key={i}
              className="bg-velmora-cream/60 p-8 md:p-10 relative"
            >
              <Quote className="w-6 h-6 text-gold/30 mb-4" />
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: item.rating }).map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 fill-gold text-gold" />
                ))}
              </div>
              <p className="font-sans text-body text-velmora-charcoal mb-6 leading-relaxed italic">
                "{item.text}"
              </p>
              <div className="border-t border-velmora-sand/30 pt-4">
                <p className="font-sans text-sm font-medium text-velmora-dark">
                  {item.name}
                </p>
                <p className="font-sans text-xs text-velmora-stone mt-0.5">
                  Verified Buyer · {item.product}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
