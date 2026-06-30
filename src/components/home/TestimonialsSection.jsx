import React from 'react'
import { Star } from 'lucide-react'
import { testimonials } from '../../data/products'

function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-[var(--velmora-card)] p-6 md:p-8 border border-[var(--velmora-border-light)]">
      <div className="flex gap-1 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-[var(--velmora-star)] text-[var(--velmora-star)]" />
        ))}
      </div>
      <p className="velmora-body text-[var(--velmora-text-muted)] mb-6 italic leading-relaxed">
        "{testimonial.text}"
      </p>
      <p className="velmora-body-xs text-[var(--velmora-text)] font-medium tracking-wider">
        {testimonial.name}
      </p>
    </div>
  )
}

export default function TestimonialsSection() {
  return (
    <section className="velmora-section">
      <div className="velmora-container mx-auto">
        <div className="text-center mb-12">
          <p className="velmora-body-xs text-[var(--velmora-text-light)] tracking-[0.2em] mb-3">
            Kind Words
          </p>
          <h2 className="velmora-heading velmora-heading-md">What Our Customers Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}
