import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const Testimonials = () => {
  const [headingRef, headingVisible] = useScrollReveal();
  const [gridRef, gridVisible] = useScrollReveal({ threshold: 0.05 });

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={headingRef}
          className={`reveal ${headingVisible ? 'visible' : ''} text-center mb-12`}
        >
          <h2 className="font-serif text-3xl md:text-4xl tracking-wide text-velmora-text">
            What Our Customers Say
          </h2>
          <div className="w-12 h-px bg-velmora-gold mx-auto mt-4" />
        </div>

        <div
          ref={gridRef}
          className={`reveal ${gridVisible ? 'visible' : ''} grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10`}
        >
          {testimonials.map((t, i) => (
            <div key={t.id} className={`text-center px-4 reveal-delay-${i + 1}`}>
              <div className="flex items-center justify-center gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-velmora-gold fill-velmora-gold" />
                ))}
              </div>
              <p className="text-sm md:text-base text-velmora-text leading-relaxed italic font-light">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="mt-4 text-xs tracking-[0.15em] uppercase text-velmora-muted font-medium">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
