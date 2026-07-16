import React from 'react'
import { Star } from 'lucide-react'
import { testimonials } from '@/data/products'

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-gold-600 text-xs tracking-wide-xl uppercase font-medium mb-3">
            Reviews
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal-800">
            What Our Customers Say
          </h2>
          <div className="w-12 h-px bg-gold-400 mx-auto mt-5" />
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-cream-50 border border-cream-200 p-8 text-center"
            >
              {/* Stars */}
              <div className="flex items-center justify-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < testimonial.rating ? 'fill-gold-500 text-gold-500' : 'text-charcoal-200'}
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-charcoal-600 text-sm leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div>
                <p className="text-xs font-semibold tracking-wide text-charcoal-800">
                  {testimonial.name}
                </p>
                <p className="text-[11px] text-charcoal-400 mt-0.5">
                  Verified Buyer · {testimonial.product}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
