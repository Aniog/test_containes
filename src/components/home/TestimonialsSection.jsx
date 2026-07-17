import React from 'react'
import { Star } from 'lucide-react'

export default function TestimonialsSection({ testimonials }) {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[var(--velmora-bg-alt)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--velmora-text-muted)] mb-3">What They Say</p>
          <h2 className="velmora-heading text-3xl sm:text-4xl lg:text-5xl">Loved by Thousands</h2>
          <div className="velmora-divider w-16 mx-auto mt-6" />
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map(testimonial => (
            <div
              key={testimonial.id}
              className="bg-[var(--velmora-white)] p-6 sm:p-8 text-center"
            >
              {/* Stars */}
              <div className="flex items-center justify-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={14} className="fill-[var(--velmora-star)] text-[var(--velmora-star)]" />
                ))}
              </div>

              {/* Quote */}
              <p className="velmora-heading text-lg sm:text-xl italic text-[var(--velmora-text)] mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
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
