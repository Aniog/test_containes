import React from 'react'
import { Star } from 'lucide-react'
import { testimonials } from '@/data/products'

export default function TestimonialsSection() {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="serif-heading text-4xl md:text-5xl mb-4">What They Say</h2>
          <div className="w-16 h-px bg-[var(--color-gold)] mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(testimonial => (
            <div
              key={testimonial.id}
              className="bg-[var(--color-warm-white)] p-8 text-center"
            >
              <div className="flex justify-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={14} className="fill-[var(--color-gold)] text-[var(--color-gold)]" />
                ))}
              </div>
              <p className="serif-heading text-lg italic mb-6 leading-relaxed">"{testimonial.text}"</p>
              <p className="text-xs tracking-widest uppercase text-[var(--color-muted)]">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
