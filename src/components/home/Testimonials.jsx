import React from 'react'
import { Star } from 'lucide-react'
import { testimonials } from '@/data/products'

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs tracking-widest-xl uppercase text-gold-600 mb-3 font-sans">Love Letters</p>
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal-900 font-light">What Our Customers Say</h2>
          <div className="w-12 h-px bg-gold-400 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="text-center p-8 border border-charcoal-100 hover:border-gold-200 transition-colors duration-300"
            >
              <div className="flex items-center justify-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />
                ))}
              </div>
              <p className="font-serif text-lg text-charcoal-700 italic leading-relaxed mb-6">
                "{testimonial.text}"
              </p>
              <p className="text-xs tracking-widest uppercase text-charcoal-500 font-sans">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
