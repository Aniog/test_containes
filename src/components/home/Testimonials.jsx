import React from 'react'
import { Star, Quote } from 'lucide-react'
import { testimonials } from '@/data/products'

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-sand">
      <div className="container-velmora">
        <div className="text-center mb-12 md:mb-16">
          <p className="eyebrow mb-3">Kind Words</p>
          <h2 className="font-serif text-4xl md:text-5xl text-ink">
            Loved by Thousands
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((t) => (
            <figure
              key={t.id}
              className="bg-cream p-8 md:p-10 flex flex-col items-center text-center"
            >
              <Quote size={28} className="text-gold mb-4" />
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={14} className="fill-gold text-gold" />
                ))}
              </div>
              <blockquote className="font-serif text-xl md:text-2xl text-ink leading-relaxed italic">
                “{t.text}”
              </blockquote>
              <figcaption className="mt-6 text-xs uppercase tracking-widest2 text-stone">
                {t.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
