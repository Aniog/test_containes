import React from 'react'
import { Star } from 'lucide-react'
import { testimonials } from '@/data/products'

const Testimonials = () => {
  return (
    <section className="py-20 md:py-28 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-display-sm md:text-display text-brand-charcoal mb-3">
            What They Say
          </h2>
          <p className="font-sans text-sm text-brand-cool-gray">
            Real words from real customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((t) => (
            <div key={t.id} className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand-gold text-brand-gold" />
                ))}
              </div>
              <p className="font-serif text-base md:text-lg text-brand-charcoal leading-relaxed italic mb-4">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="font-sans text-xs uppercase tracking-wide text-brand-warm-gray font-medium">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
