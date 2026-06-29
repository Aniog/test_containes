import React from 'react'
import { Star } from 'lucide-react'
import { testimonials } from '@/data/products'

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl tracking-wide text-charcoal">
            What Our Customers Say
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="text-center">
              <div className="flex items-center justify-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-charcoal leading-relaxed italic font-serif text-lg">
                "{testimonial.text}"
              </p>
              <p className="mt-4 text-warm-gray text-sm tracking-wide">
                — {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
