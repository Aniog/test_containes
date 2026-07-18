import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="container-max section-padding py-16 md:py-24">
      <div className="text-center mb-12">
        <p className="font-sans text-xs tracking-widest uppercase text-stone mb-3">Testimonials</p>
        <h2 className="font-serif text-3xl md:text-4xl text-espresso tracking-wide">From Our Community</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {testimonials.map((t) => (
          <div key={t.name} className="text-center">
            <div className="flex items-center justify-center gap-0.5 mb-4">
              {[...Array(t.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-gold fill-gold" />
              ))}
            </div>
            <p className="text-espresso-light leading-relaxed italic mb-4 text-sm md:text-base">
              "{t.text}"
            </p>
            <p className="font-sans text-xs tracking-widest uppercase text-espresso font-medium">{t.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
