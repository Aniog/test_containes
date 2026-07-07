import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';
import RevealSection from '@/components/RevealSection';

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealSection className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-brand-charcoal tracking-wide">
            What Our Customers Say
          </h2>
          <div className="w-12 h-px bg-brand-gold mx-auto mt-4" />
        </RevealSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((t, i) => (
            <RevealSection key={t.id} delay={i + 1}>
              <div className="text-center px-4">
                {/* Stars */}
                <div className="flex items-center justify-center gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star
                      key={j}
                      className="w-4 h-4 fill-brand-gold text-brand-gold"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="font-serif text-base md:text-lg text-brand-charcoal italic leading-relaxed">
                  &ldquo;{t.text}&rdquo;
                </p>

                {/* Name */}
                <p className="font-sans text-xs tracking-extra-wide uppercase text-brand-muted mt-4">
                  {t.name}
                </p>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}
