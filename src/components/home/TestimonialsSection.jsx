import React from 'react'
import { Star } from 'lucide-react'
import { testimonials } from '../../data/products'

export default function TestimonialsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-padding">
        <h2 className="font-['Cormorant_Garamond'] text-3xl md:text-4xl text-center mb-12">
          What Our Customers Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto">
          {testimonials.map((t) => (
            <div key={t.id} className="text-center">
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={14} className="text-[#c9a96e] fill-[#c9a96e]" />
                ))}
              </div>
              <p className="font-['Cormorant_Garamond'] text-lg md:text-xl italic leading-relaxed mb-4 text-[#1a1a1a]">
                "{t.text}"
              </p>
              <p className="text-xs uppercase tracking-wider text-[#6b6560]">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
