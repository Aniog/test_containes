import React from 'react'
import { Star } from 'lucide-react'
import { testimonials } from '@/data/products'

export default function Testimonials() {
  return (
    <section className="section-padding bg-warm-white">
      <div className="container-narrow max-w-4xl">
        <h2 className="serif-heading text-3xl md:text-4xl text-center mb-2 font-light">
          Loved by You
        </h2>
        <p className="text-espresso/50 text-center text-sm font-sans mb-14">
          Real reviews from our community
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {testimonials.map((t, i) => (
            <div key={i} className="text-center">
              <div className="flex justify-center gap-0.5 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} size={14} className="fill-gold text-gold" />
                ))}
              </div>
              <p className="text-espresso/70 text-sm leading-relaxed italic mb-5 font-light">
                "{t.text}"
              </p>
              <p className="font-serif text-espresso text-base tracking-wide">
                {t.name} {t.initial}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}