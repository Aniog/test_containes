import React from 'react'
import { Star } from 'lucide-react'
import { testimonials } from '../../data/products'

export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs tracking-widest uppercase text-velmora-gold mb-3">
            Kind Words
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-base">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-8 text-center"
            >
              <div className="flex justify-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-velmora-gold text-velmora-gold"
                  />
                ))}
              </div>
              <p className="font-serif text-lg text-velmora-base italic leading-relaxed mb-6">
                "{testimonial.text}"
              </p>
              <p className="text-xs tracking-wider uppercase text-velmora-text-light">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
