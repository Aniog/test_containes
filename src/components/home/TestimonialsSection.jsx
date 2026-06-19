import React from 'react'
import { Star } from 'lucide-react'
import { testimonials } from '../../data/products'

export default function TestimonialsSection() {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <p className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[var(--velmora-text-muted)] mb-2 sm:mb-3">
            Kind Words
          </p>
          <h2 className="serif-heading text-2xl sm:text-3xl md:text-4xl text-[var(--velmora-text)]">
            What Our Customers Say
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map(testimonial => (
            <div
              key={testimonial.id}
              className="text-center p-6 sm:p-8 border border-[var(--velmora-border)] bg-[var(--velmora-white)]"
            >
              <div className="flex justify-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-[var(--velmora-gold)] text-[var(--velmora-gold)]"
                  />
                ))}
              </div>
              <p className="serif-heading text-base sm:text-lg md:text-xl text-[var(--velmora-text)] italic mb-4 sm:mb-6 text-balance leading-relaxed">
                "{testimonial.text}"
              </p>
              <p className="text-xs tracking-widest uppercase text-[var(--velmora-text-muted)]">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
