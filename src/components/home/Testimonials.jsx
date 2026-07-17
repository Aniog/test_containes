import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
      <div className="text-center mb-14">
        <p className="text-xs tracking-widest3 uppercase text-accent mb-3">Kind Words</p>
        <h2 className="font-serif text-3xl lg:text-4xl text-deep-900 font-light">From Our Community</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        {testimonials.map((t, i) => (
          <div key={i} className="text-center">
            <div className="flex items-center justify-center gap-0.5 mb-4">
              {[...Array(t.rating)].map((_, j) => (
                <Star key={j} className="w-3.5 h-3.5 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-sm text-deep-600 leading-relaxed mb-4 italic font-light max-w-xs mx-auto">
              "{t.text}"
            </p>
            <p className="text-xs tracking-wider uppercase text-deep-900 font-medium">{t.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
