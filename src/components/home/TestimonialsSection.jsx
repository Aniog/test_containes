import React from 'react'
import { Star } from 'lucide-react'
import { testimonials } from '@/data/products'

export default function TestimonialsSection() {
  return (
    <section className="velmora-section bg-[var(--velmora-cream)]">
      <div className="velmora-container">
        <div className="text-center mb-12">
          <span className="velmora-label text-[var(--velmora-accent)]">Reviews</span>
          <h2 className="velmora-heading-md text-[var(--velmora-text)] mt-2">What Our Customers Say</h2>
          <div className="velmora-divider-thin w-16 mx-auto mt-4" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-[var(--velmora-white)] p-6 md:p-8 rounded-sm border border-[var(--velmora-border-light)]"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-[var(--velmora-star)] text-[var(--velmora-star)]"
                  />
                ))}
              </div>
              <p className="velmora-body text-[var(--velmora-text)] mb-6 italic">
                "{testimonial.text}"
              </p>
              <p className="velmora-label text-[var(--velmora-text-muted)]">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
