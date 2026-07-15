import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="section-padding py-20 md:py-28 bg-velmora-sand">
      <div className="text-center mb-14">
        <h2 className="font-serif text-3xl md:text-4xl tracking-wide text-velmora-charcoal">
          Loved by You
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {testimonials.map((t) => (
          <div key={t.name} className="text-center">
            <div className="flex justify-center gap-0.5 mb-4">
              {[...Array(t.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-velmora-gold text-velmora-gold" />
              ))}
            </div>
            <p className="font-serif text-lg italic text-velmora-charcoal leading-relaxed">
              &ldquo;{t.text}&rdquo;
            </p>
            <p className="font-sans text-xs tracking-wider uppercase text-velmora-stone mt-4">
              {t.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}