import React from 'react'
import { Star } from 'lucide-react'
import { testimonials } from '@/data/products'

export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-velmora-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="section-subtitle">Reviews</p>
          <h2 className="section-title mt-2">What Our Customers Say</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-8 shadow-sm"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold-500 text-gold-500" />
                ))}
              </div>
              <p className="text-charcoal-700 leading-relaxed text-sm italic">
                "{testimonial.text}"
              </p>
              <p className="mt-6 text-xs tracking-wider uppercase text-charcoal-500">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
