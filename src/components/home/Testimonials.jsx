import React from 'react'
import { Star } from 'lucide-react'
import { testimonials } from '@/data/products'

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-warm-cream border-t border-warm-sand">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="font-serif text-2xl md:text-3xl uppercase tracking-wider text-warm-black text-center mb-10 md:mb-14">
          What Our Customers Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-warm-ivory p-6 md:p-8 border border-warm-sand">
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 fill-gold text-gold" />
                ))}
              </div>
              <p className="font-sans text-sm text-warm-black/70 leading-relaxed">{t.text}</p>
              <p className="font-serif text-sm uppercase tracking-wider text-warm-black mt-4">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
