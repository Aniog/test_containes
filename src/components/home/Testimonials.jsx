import React from 'react'
import { Star } from 'lucide-react'
import { testimonials } from '../../data/products'

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="section-subtitle mb-3">What Our Customers Say</p>
          <h2 className="section-title">Loved by Thousands</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((review) => (
            <div
              key={review.id}
              className="bg-white p-8 shadow-soft border border-brand-linen/50"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-brand-gold text-brand-gold"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="font-sans text-brand-taupe text-sm leading-relaxed mb-6">
                "{review.text}"
              </p>

              {/* Author */}
              <p className="font-sans text-xs tracking-wider uppercase text-brand-warm">
                — {review.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
