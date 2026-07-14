import React from 'react'
import { testimonials } from '@/data/products'
import StarRating from '@/components/shared/StarRating'

export default function TestimonialsSection() {
  return (
    <section className="py-20 sm:py-28 bg-cream-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="section-label mb-3">Reviews</p>
          <h2 className="font-serif text-4xl text-espresso-900 sm:text-5xl">Loved By You</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="border border-cream-300 bg-cream-50 p-8 text-center transition-shadow duration-300 hover:shadow-soft"
            >
              <StarRating rating={t.rating} size={16} />
              <p className="mt-5 font-serif text-lg italic leading-relaxed text-espresso-900">
                "{t.text}"
              </p>
              <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-warmgray-500">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
