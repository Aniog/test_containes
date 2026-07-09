import React from 'react'
import { Star } from 'lucide-react'
import { testimonials } from '../../data/products'

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-velmora-warm/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-velmora-gold text-sm tracking-widest mb-2">KIND WORDS</p>
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-base">What Our Customers Say</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((t) => (
            <div key={t.id} className="text-center">
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={14} className="text-velmora-gold fill-velmora-gold" />
                ))}
              </div>
              <p className="font-serif text-lg md:text-xl text-velmora-base leading-relaxed italic mb-6">
                "{t.text}"
              </p>
              <p className="text-sm tracking-wider text-velmora-muted">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
