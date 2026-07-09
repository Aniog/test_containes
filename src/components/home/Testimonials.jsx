import React from 'react'
import { testimonials } from '@/data/products'
import { Star } from 'lucide-react'

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-velmora-warm/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs tracking-widest-xl uppercase text-velmora-muted mb-3">What They Say</p>
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-base">Loved by Thousands</h2>
          <div className="w-12 h-px bg-velmora-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-velmora-cream p-8 text-center"
            >
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-velmora-gold text-velmora-gold" />
                ))}
              </div>
              <p className="font-serif text-lg text-velmora-base italic leading-relaxed mb-6">
                "{testimonial.text}"
              </p>
              <p className="text-xs tracking-widest uppercase text-velmora-muted">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
