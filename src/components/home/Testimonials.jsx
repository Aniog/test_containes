import React from 'react'
import { Star } from 'lucide-react'
import { testimonials } from '@/data/products'

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="font-sans text-xs tracking-superwide uppercase text-gold mb-2">What They Say</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white">Loved by Thousands</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map(testimonial => (
            <div
              key={testimonial.id}
              className="bg-charcoal-700/50 border border-white/10 rounded-lg p-6 md:p-8"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>

              {/* Quote */}
              <p className="font-sans text-sm text-white/70 leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-gold/20 rounded-full flex items-center justify-center">
                  <span className="font-serif text-sm text-gold">{testimonial.name[0]}</span>
                </div>
                <div>
                  <p className="font-sans text-xs font-medium text-white">{testimonial.name}</p>
                  <p className="font-sans text-[11px] text-white/40">on {testimonial.product}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
