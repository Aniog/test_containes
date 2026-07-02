import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="section-padding">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-ink">What They're Saying</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(t => (
            <div key={t.id} className="text-center px-4">
              {/* Stars */}
              <div className="flex items-center justify-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-gold" fill="#B8860B" strokeWidth={1} />
                ))}
              </div>
              <p className="text-stone leading-relaxed text-sm italic">"{t.text}"</p>
              <p className="mt-4 font-serif text-ink font-medium">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
