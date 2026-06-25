import React from 'react'
import { StarRating } from '@/components/ui/StarRating'
import { testimonials } from '@/data/products'

export function Testimonials() {
  return (
    <section className="bg-ivory py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-12 text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold">Loved By Thousands</p>
          <h2 className="mt-3 font-serif text-4xl text-ink md:text-5xl">What They Say</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.id}
              className="flex flex-col items-center border border-sand bg-cream px-8 py-10 text-center"
            >
              <StarRating value={t.rating} size={16} />
              <blockquote className="mt-5 font-serif text-lg italic leading-relaxed text-ink">
                “{t.text}”
              </blockquote>
              <figcaption className="mt-6 text-[11px] uppercase tracking-[0.2em] text-taupe">
                {t.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
