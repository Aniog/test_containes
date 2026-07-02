import React from "react"
import { testimonials } from "@/data/products"
import { StarRating } from "@/components/product/star-rating"

export const Testimonials = () => {
  return (
    <section className="bg-surface py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
        <div className="mb-10 text-center md:mb-14">
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-gold">Kind Words</p>
          <h2 className="font-serif text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl">
            Loved by Our Customers
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3 lg:gap-12">
          {testimonials.map((t) => (
            <article key={t.id} className="flex flex-col items-center text-center">
              <StarRating rating={5} className="mb-5" />
              <blockquote className="mb-6 font-serif text-xl italic leading-relaxed text-ink md:text-2xl">
                “{t.text}”
              </blockquote>
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted">
                {t.name}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
