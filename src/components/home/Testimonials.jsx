import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="reveal font-serif text-3xl md:text-4xl text-brand-charcoal tracking-wide">
            What Our Clients Say
          </h2>
          <div className="reveal reveal-delay-1 w-12 h-px bg-brand-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={t.id} className={`reveal reveal-delay-${i + 1} text-center px-4`}>
              <div className="flex items-center justify-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-brand-gold text-brand-gold" />
                ))}
              </div>
              <p className="font-sans text-sm md:text-base text-brand-charcoal leading-relaxed italic mb-4">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="font-serif text-sm tracking-extra-wide uppercase text-brand-muted">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
