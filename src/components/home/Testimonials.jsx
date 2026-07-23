import React from 'react'
import { Star, Quote } from 'lucide-react'
import { testimonials } from '@/data/products'

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="section-subheading mb-3">What They Say</p>
          <h2 className="section-heading">Loved by Thousands</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map(testimonial => (
            <div
              key={testimonial.id}
              className="bg-white rounded-sm p-8 shadow-sm border border-stone-100 hover:shadow-md transition-shadow duration-300"
            >
              <Quote className="w-8 h-8 text-gold-400/30 mb-4" />

              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-gold-400 text-gold-400"
                  />
                ))}
              </div>

              <p className="font-sans text-sm text-stone-600 leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              <div className="border-t border-stone-100 pt-4">
                <p className="font-sans text-sm font-medium text-stone-900">
                  {testimonial.name}
                </p>
                <p className="font-sans text-xs text-stone-400 mt-0.5">
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
