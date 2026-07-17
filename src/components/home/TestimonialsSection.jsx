import React from 'react'
import { Star } from 'lucide-react'
import { testimonials } from '../../data/products'

export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-[var(--velmora-bg)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="velmora-label text-[var(--velmora-accent)] mb-3">What They Say</p>
          <h2 className="velmora-heading text-3xl md:text-4xl">Loved by Thousands</h2>
          <div className="velmora-divider-thin w-24 mx-auto mt-6" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-[var(--velmora-surface)] p-8 border border-[var(--velmora-border-light)]"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[var(--velmora-accent)] text-[var(--velmora-accent)]" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-[var(--velmora-text-muted)] leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[var(--velmora-bg-alt)] flex items-center justify-center">
                  <span className="velmora-label text-[var(--velmora-accent)]">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-medium">{testimonial.name}</p>
                  <p className="text-xs text-[var(--velmora-text-light)]">Verified Customer</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
