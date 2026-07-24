import React from 'react'
import { TESTIMONIALS } from '@/data/products'
import StarRating from '@/components/ui/StarRating'

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
      <div className="mb-12 text-center">
        <p className="text-[11px] uppercase tracking-widest2 text-gold">Loved By You</p>
        <h2 className="mt-3 font-serif text-4xl text-ink md:text-5xl">Kind Words</h2>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {TESTIMONIALS.map((t) => (
          <figure
            key={t.name}
            className="flex flex-col items-center border border-ink/10 bg-cream px-8 py-10 text-center"
          >
            <StarRating value={t.rating} size={16} />
            <blockquote className="mt-5 font-serif text-xl italic leading-relaxed text-ink">
              “{t.text}”
            </blockquote>
            <figcaption className="mt-6 text-[11px] uppercase tracking-widest2 text-stone">
              {t.name}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
