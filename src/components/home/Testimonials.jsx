import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="font-serif text-3xl md:text-4xl text-center mb-4 tracking-wide">Loved by You</h2>
        <p className="text-velmora-text-muted text-center text-sm mb-12">
          What our customers are saying.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 max-w-4xl mx-auto">
          {testimonials.map((t) => (
            <div key={t.name} className="text-center">
              <div className="flex justify-center gap-0.5 mb-3">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-velmora-gold text-velmora-gold" />
                ))}
              </div>
              <p className="text-sm text-velmora-text-secondary leading-relaxed italic mb-4">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="text-xs tracking-widest uppercase text-velmora-text font-medium">
                {t.name} {t.initial}.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
