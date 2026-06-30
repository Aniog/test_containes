import React from 'react'
import { Star } from 'lucide-react'
import { testimonials } from '../../data/products'

export default function TestimonialsSection() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--velmora-text-muted)] mb-3">What They Say</p>
          <h2 className="font-serif-display text-4xl md:text-5xl">Customer Love</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="text-center animate-slide-up"
              style={{ animationDelay: `${index * 0.15}s`, opacity: 0 }}
            >
              {/* Stars */}
              <div className="star-rating justify-center mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-serif-display text-xl md:text-2xl italic leading-relaxed mb-6 text-[var(--velmora-text)]">
                "{testimonial.text}"
              </blockquote>

              {/* Author */}
              <p className="text-xs uppercase tracking-widest text-[var(--velmora-text-muted)]">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
