import React from 'react'
import { Star } from 'lucide-react'
import { testimonials } from '../../data/products'

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-velmora-surface">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="font-sans text-xs tracking-mega-wide uppercase text-velmora-gold mb-3">
            Reviews
          </p>
          <h2 className="section-title">What Our Customers Say</h2>
          <div className="w-12 h-[1px] bg-velmora-gold mx-auto mt-4" />
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-velmora-cream p-8 rounded-sm text-center"
            >
              {/* Stars */}
              <div className="flex items-center justify-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    fill={i < testimonial.rating ? '#b8860b' : 'none'}
                    className={i < testimonial.rating ? 'text-velmora-gold' : 'text-velmora-light-gray'}
                    strokeWidth={1.5}
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="font-sans text-sm leading-relaxed text-velmora-dark-gray mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <p className="font-serif text-lg text-velmora-charcoal">
                {testimonial.name}
              </p>
              <p className="font-sans text-xs text-velmora-light-gray mt-1 tracking-wider">
                on {testimonial.product}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
