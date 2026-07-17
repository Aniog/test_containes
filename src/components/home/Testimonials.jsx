import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="section-padding py-16 md:py-24 bg-velmora-base">
      <div className="text-center mb-12 md:mb-16">
        <p className="font-sans text-xs tracking-[0.2em] uppercase text-velmora-gold/70 mb-3">
          Loved by You
        </p>
        <h2 className="heading-lg text-velmora-cream">What Our Customers Say</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8 md:gap-10 max-w-5xl mx-auto">
        {testimonials.map((t) => (
          <div key={t.name} className="text-center">
            <div className="flex items-center justify-center gap-0.5 mb-4">
              {[...Array(t.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-velmora-gold text-velmora-gold" />
              ))}
            </div>
            <p className="text-velmora-cream/70 text-sm leading-relaxed italic mb-4">
              &ldquo;{t.text}&rdquo;
            </p>
            <p className="font-serif text-velmora-cream text-base tracking-wide">
              {t.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}