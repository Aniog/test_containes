import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';
import useScrollReveal from '@/hooks/useScrollReveal';

export default function Testimonials() {
  const [revealRef, revealed] = useScrollReveal();

  return (
    <section ref={revealRef} className={`py-20 md:py-28 reveal-hidden ${revealed ? 'reveal-visible' : ''}`}>
      <div className="max-w-7xl mx-auto section-padding">
        <h2 className="font-serif text-display-sm md:text-display text-brand-charcoal tracking-wide text-center mb-12 md:mb-16">
          What Our Customers Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((t) => (
            <div key={t.id} className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-brand-gold fill-brand-gold" />
                ))}
              </div>
              <p className="font-sans text-sm text-brand-charcoal leading-relaxed italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="mt-4 font-sans text-xs tracking-[0.1em] uppercase text-brand-muted">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
