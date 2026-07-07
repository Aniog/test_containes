import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';
import useScrollReveal from '@/hooks/useScrollReveal';

export default function Testimonials() {
  const [revealRef, revealed] = useScrollReveal();

  return (
    <section className="py-16 md:py-24">
      <div
        ref={revealRef}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-brand-charcoal tracking-wide">
            What Our Customers Say
          </h2>
          <div className="w-12 h-px bg-brand-gold mx-auto mt-4" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="text-center px-6 py-8 bg-white/60 border border-brand-sand/50"
            >
              <div className="flex items-center justify-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="text-brand-gold fill-brand-gold"
                  />
                ))}
              </div>
              <p className="text-sm md:text-base text-brand-charcoal font-sans leading-relaxed italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="mt-4 text-xs font-sans font-semibold tracking-super-wide uppercase text-brand-muted">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
