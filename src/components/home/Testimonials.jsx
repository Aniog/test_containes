import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="container-wide section-padding py-16 md:py-24">
      <div className="text-center mb-12 md:mb-16">
        <p className="font-sans text-[10px] tracking-superwide uppercase text-velmora-taupe mb-3">
          Kind Words
        </p>
        <h2 className="font-serif text-3xl md:text-4xl tracking-wider text-velmora-charcoal">
          From Our Clients
        </h2>
        <hr className="hairline-divider w-12 mx-auto mt-6" />
      </div>

      <div className="grid md:grid-cols-3 gap-8 md:gap-12 max-w-4xl mx-auto">
        {testimonials.map((t, i) => (
          <div key={i} className="text-center">
            <div className="flex items-center justify-center gap-1 mb-4">
              {[...Array(t.rating)].map((_, j) => (
                <Star key={j} className="w-3.5 h-3.5 fill-velmora-gold text-velmora-gold" />
              ))}
            </div>
            <p className="text-sm text-velmora-warmgray leading-relaxed italic mb-4">
              "{t.text}"
            </p>
            <p className="text-xs tracking-wider uppercase text-velmora-charcoal font-medium">
              {t.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
