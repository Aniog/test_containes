import React from 'react'
import { Star } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { testimonials } from '@/data/products'

export default function Testimonials() {
  const [revealRef, isVisible] = useScrollReveal()

  return (
    <section ref={revealRef} className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto section-padding">
        <div className={`text-center mb-14 reveal ${isVisible ? 'revealed' : ''}`}>
          <h2 className="font-serif text-display-sm md:text-display text-brand-charcoal">What Our Customers Say</h2>
          <div className="w-8 h-px bg-brand-gold mx-auto mt-5" />
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 stagger-children ${isVisible ? 'revealed' : ''}`}>
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="text-center px-4 py-6">
              {/* Decorative quote mark */}
              <span className="block font-serif text-7xl md:text-8xl text-brand-gold/20 leading-none mb-0 -mt-2">&ldquo;</span>

              {/* Stars */}
              <div className="flex items-center justify-center gap-1 mb-5 -mt-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-brand-gold text-brand-gold" />
                ))}
              </div>

              <p className="text-sm md:text-base text-brand-warm-gray leading-relaxed italic font-serif">
                {testimonial.text}
              </p>

              <div className="mt-6 pt-4 inline-block">
                <div className="w-6 h-px bg-brand-gold/40 mx-auto mb-3" />
                <p className="text-[11px] tracking-[0.15em] uppercase font-sans text-brand-charcoal font-medium">
                  {testimonial.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
