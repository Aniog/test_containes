import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

export default function Testimonials() {
  return (
    <section className="max-w-4xl mx-auto px-6 md:px-10 py-20 md:py-28">
      <div className="text-center mb-14">
        <p className="text-velmora-gold text-xs tracking-super uppercase mb-4">Testimonials</p>
        <h2 className="font-serif text-3xl md:text-4xl text-velmora-dark">Words of Love</h2>
        <div className="w-12 h-px bg-velmora-gold/30 mx-auto mt-6" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {testimonials.map((t) => (
          <div key={t.id} className="text-center">
            {/* Stars */}
            <div className="flex items-center justify-center gap-1 mb-5">
              {[...Array(t.rating)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-velmora-gold text-velmora-gold" />
              ))}
            </div>

            {/* Quote */}
            <p className="text-sm text-velmora-taupe leading-relaxed italic mb-5">
              &ldquo;{t.text}&rdquo;
            </p>

            {/* Name */}
            <p className="font-serif text-sm text-velmora-dark">{t.name}</p>
            <p className="text-[10px] text-velmora-taupe mt-1 tracking-wider uppercase">Verified Buyer</p>
          </div>
        ))}
      </div>
    </section>
  );
}
