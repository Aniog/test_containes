import React from 'react'
import { Star } from 'lucide-react'
import { testimonials } from '@/data/products'

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-editorial">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs uppercase tracking-widest3 text-gold mb-3">Kind Words</p>
          <h2 className="font-serif text-4xl md:text-5xl text-espresso-800">Loved by Many</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="text-center px-6 py-8 border border-espresso-200/50 bg-cream-warm"
            >
              <div className="flex items-center justify-center gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <blockquote className="font-serif text-xl md:text-2xl text-espresso-800 leading-relaxed italic mb-6">
                “{t.text}”
              </blockquote>
              <figcaption className="text-xs uppercase tracking-widest2 text-espresso-600">
                {t.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
