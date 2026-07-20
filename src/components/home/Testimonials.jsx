import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="section-padding py-20 md:py-28 bg-cream">
      <div className="text-center mb-14">
        <p className="font-sans text-xs tracking-[0.25em] uppercase text-gold mb-4">Loved by You</p>
        <h2 className="font-serif text-3xl md:text-4xl text-charcoal">What Our Customers Say</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {testimonials.map((t) => (
          <div key={t.id} className="text-center px-4">
            <div className="flex justify-center gap-0.5 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-gold text-gold" />
              ))}
            </div>
            <p className="text-sm text-taupe italic leading-relaxed mb-4">
              &ldquo;{t.text}&rdquo;
            </p>
            <p className="font-serif text-sm text-charcoal tracking-wide">— {t.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
