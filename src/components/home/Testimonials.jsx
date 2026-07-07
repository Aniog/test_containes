import React from 'react'
import { testimonials } from '@/data/products'
import { StarRating } from '@/components/ui/StarRating'

export function Testimonials() {
  return (
    <section className="bg-velmora-ivory py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-velmora-gold">Reviews</p>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl">Loved by Our Customers</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((review) => (
            <article
              key={review.id}
              className="border border-velmora-border bg-velmora-ivory p-8 transition-shadow duration-300 hover:shadow-lg"
            >
              <StarRating rating={review.rating} size={14} />
              <p className="mt-5 font-serif text-xl italic leading-relaxed text-velmora-text-dark">
                “{review.text}”
              </p>
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.12em] text-velmora-text-muted">
                {review.name}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
