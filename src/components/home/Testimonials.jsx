import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center mb-14">
          <p className="font-sans text-xs tracking-widest uppercase text-warm-600 mb-4">Reviews</p>
          <h2 className="font-serif text-4xl md:text-5xl text-velvet-900">What Our Customers Say</h2>
          <hr className="hairline w-16 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((t) => (
            <div key={t.id} className="text-center px-4">
              <div className="flex justify-center gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-warm-600 fill-warm-600" />
                ))}
              </div>
              <p className="font-serif text-lg text-velvet-800 italic leading-relaxed mb-5">
                "{t.text}"
              </p>
              <p className="font-sans text-sm text-velvet-900 font-medium">{t.name}</p>
              <p className="font-sans text-xs text-velvet-500 mt-1">{t.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
