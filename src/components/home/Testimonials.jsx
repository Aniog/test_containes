import React from 'react'
import { Star, Quote } from 'lucide-react'
import { testimonials } from '@/data/products'

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-3">Kind Words</p>
          <h2 className="font-serif text-4xl md:text-5xl text-espresso">Loved by Thousands</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-cream border border-sand p-8 md:p-10 flex flex-col items-center text-center"
            >
              <Quote className="w-8 h-8 text-gold/40 mb-4" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="font-serif italic text-espresso text-lg leading-relaxed mb-6">
                "{t.text}"
              </p>
              <p className="text-xs tracking-[0.2em] uppercase text-taupe">— {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
