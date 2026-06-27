import React from 'react'
import { Star } from 'lucide-react'
import { testimonials } from '../../data/products'

export default function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Kind Words</p>
          <h2 className="font-serif text-3xl md:text-4xl mb-4">What Our Customers Say</h2>
          <div className="w-12 h-px bg-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="text-center">
              <div className="flex justify-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={16} className="text-gold fill-gold" />
                ))}
              </div>
              <blockquote className="font-serif text-lg md:text-xl italic leading-relaxed mb-6 text-charcoal/80">
                "{testimonial.text}"
              </blockquote>
              <p className="text-xs uppercase tracking-widest text-warm-gray">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
