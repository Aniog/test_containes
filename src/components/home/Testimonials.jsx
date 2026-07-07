import React from 'react'
import { Star } from 'lucide-react'
import { testimonials } from '../../data/products'

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-velmora-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-velmora-gold text-xs tracking-super-wide uppercase mb-3">What They Say</p>
          <h2 className="font-serif text-4xl md:text-5xl text-velmora-base">Loved by Thousands</h2>
          <div className="w-12 h-px bg-velmora-gold mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="text-center">
              {/* Stars */}
              <div className="flex items-center justify-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-velmora-gold text-velmora-gold" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-serif text-lg md:text-xl text-velmora-base leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </blockquote>

              {/* Author */}
              <p className="text-xs tracking-super-wide uppercase text-velmora-muted">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
