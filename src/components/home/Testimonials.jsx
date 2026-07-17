import React from 'react'
import { Star } from 'lucide-react'
import { testimonials } from '../../data/products'

export default function Testimonials() {
  return (
    <section className="max-w-[1440px] mx-auto px-6 lg:px-12 py-20 lg:py-28">
      <div className="text-center mb-14">
        <p className="text-[0.6875rem] tracking-[0.2em] uppercase text-velmora-muted font-medium mb-3">
          What Our Customers Say
        </p>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light tracking-wide">
          Love Notes
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-4xl mx-auto">
        {testimonials.map((t) => (
          <div key={t.name} className="text-center">
            <div className="flex justify-center gap-0.5 mb-4">
              {[...Array(t.rating)].map((_, i) => (
                <Star key={i} size={14} fill="#c2ab8d" className="text-velmora-gold" strokeWidth={1} />
              ))}
            </div>
            <p className="text-sm text-velmora-muted leading-relaxed italic mb-4">
              "{t.text}"
            </p>
            <p className="text-xs tracking-wider uppercase font-semibold">{t.name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
