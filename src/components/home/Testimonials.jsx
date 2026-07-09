import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="max-w-7xl mx-auto px-5 md:px-10 py-20 md:py-28">
      <div className="text-center mb-12 md:mb-16">
        <p className="section-subtitle">Kind Words</p>
        <h2 className="section-title mt-2">From Our Community</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 max-w-4xl mx-auto">
        {testimonials.map((t) => (
          <div key={t.id} className="text-center">
            <div className="flex items-center justify-center gap-0.5 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-velmora-gold text-velmora-gold" />
              ))}
            </div>
            <p className="text-velmora-smoke font-sans text-sm leading-relaxed italic">
              &ldquo;{t.text}&rdquo;
            </p>
            <p className="mt-4 font-serif text-sm font-semibold tracking-wide text-velmora-charcoal">
              {t.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}