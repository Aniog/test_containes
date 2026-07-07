import React from 'react'
import { testimonials } from '@/data/products'
import StarRating from '@/components/ui/StarRating'

export default function Testimonials() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-8xl px-5 md:px-8">
        <div className="mb-12 text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold">
            Loved by Thousands
          </p>
          <h2 className="mt-3 font-serif text-4xl text-ink md:text-5xl">
            What They Say
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {testimonials.map((t) => (
            <figure
              key={t.id}
              className="flex flex-col items-center bg-ivory px-8 py-10 text-center shadow-sm"
            >
              <StarRating value={t.rating} size={16} />
              <blockquote className="mt-5 font-serif text-xl italic leading-relaxed text-ink md:text-2xl">
                “{t.text}”
              </blockquote>
              <figcaption className="mt-6 text-[11px] uppercase tracking-[0.25em] text-stone">
                {t.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
