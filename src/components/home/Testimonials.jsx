import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-charcoal-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-gold-400 text-xs tracking-widest uppercase">What They Say</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-velmora-50 mt-2 tracking-wide">
            Loved by Thousands
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="text-center px-4">
              <div className="flex items-center justify-center gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-gold-400 fill-gold-400" />
                ))}
              </div>
              <p className="font-serif text-lg md:text-xl text-velmora-100 italic leading-relaxed mb-6">
                "{t.text}"
              </p>
              <p className="text-xs tracking-widest uppercase text-velmora-300">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
