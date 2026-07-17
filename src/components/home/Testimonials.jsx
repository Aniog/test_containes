import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

export default function Testimonials() {
  return (
    <section className="section-padding py-20 md:py-28 bg-brand-pearl">
      <div className="text-center mb-14">
        <p className="font-sans text-xs tracking-[0.25em] uppercase text-brand-smoke mb-3">Kind Words</p>
        <h2 className="font-serif text-3xl md:text-4xl tracking-hero text-brand-ink">From Our Community</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {testimonials.map((t) => (
          <div key={t.name} className="text-center px-4">
            <div className="flex justify-center gap-0.5 mb-4">
              {[...Array(t.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-brand-gold text-brand-gold" />
              ))}
            </div>
            <p className="font-serif text-base italic text-brand-ink/80 leading-relaxed mb-4">
              &ldquo;{t.text}&rdquo;
            </p>
            <p className="font-sans text-xs tracking-wider uppercase text-brand-smoke">{t.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}