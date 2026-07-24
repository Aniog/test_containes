import React from 'react'
import { Star } from 'lucide-react'
import { testimonials } from '../../data/products'

export default function TestimonialsSection() {
  return (
    <section className="section-padding bg-[var(--color-cream)]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--color-warm-gray)] mb-3">Reviews</p>
          <h2 className="serif-heading text-3xl md:text-4xl lg:text-5xl tracking-wide">What They Say</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="text-center">
              <div className="flex items-center justify-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[var(--color-gold)] text-[var(--color-gold)]" />
                ))}
              </div>
              <blockquote className="serif-heading text-xl md:text-2xl italic leading-relaxed mb-6 text-[var(--color-dark)]">
                "{testimonial.text}"
              </blockquote>
              <p className="text-xs tracking-widest uppercase text-[var(--color-warm-gray)]">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
