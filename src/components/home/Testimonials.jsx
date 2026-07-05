import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="py-20 px-4 bg-[#f5f0eb]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-[#b8860b] mb-3">Reviews</p>
          <h2 className="font-serif text-4xl md:text-5xl mb-4">What They Say</h2>
          <div className="w-16 h-px bg-[#b8860b] mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-white p-8 text-center">
              <div className="flex justify-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#b8860b] text-[#b8860b]" />
                ))}
              </div>
              <p className="text-[#6b6560] leading-relaxed mb-6 italic font-serif text-lg">
                "{t.text}"
              </p>
              <p className="text-sm font-medium tracking-wide">{t.name}</p>
              <p className="text-xs text-[#6b6560] mt-1">Verified Buyer</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
