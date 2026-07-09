import React from 'react'
import { Star } from 'lucide-react'
import { testimonials } from '../../data/products'

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-[var(--velmora-bg-alt)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="serif-heading text-2xl md:text-3xl tracking-[0.05em] text-center mb-12 md:mb-16">
          What Our Customers Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-[var(--velmora-surface)] p-6 md:p-8"
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-[var(--velmora-star)] text-[var(--velmora-star)]"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-[var(--velmora-text-secondary)] leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <p className="text-sm font-medium text-[var(--velmora-text)]">
                {testimonial.name}
              </p>
              <p className="text-xs text-[var(--velmora-text-muted)] mt-1">
                Verified Customer
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
