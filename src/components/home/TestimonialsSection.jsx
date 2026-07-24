import React from 'react'
import { Star } from 'lucide-react'
import { testimonials } from '../../data/products'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

export default function TestimonialsSection() {
  const [ref, isVisible] = useScrollAnimation(0.1)

  return (
    <section ref={ref} className={`py-16 md:py-24 bg-velmora-warm/20 animate-on-scroll ${isVisible ? 'is-visible' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="section-subtitle">What They Say</p>
          <h2 className="section-title mt-2">Loved by Thousands</h2>
          <div className="w-12 h-px bg-velmora-gold mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-velmora-cream p-6 md:p-8 text-center"
            >
              {/* Stars */}
              <div className="flex items-center justify-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-velmora-gold text-velmora-gold"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="font-serif text-base md:text-lg lg:text-xl text-velmora-base leading-relaxed italic mb-6">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <p className="font-sans text-xs tracking-widest uppercase text-velmora-muted">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
