import React from "react"
import { TESTIMONIALS } from "@/data/products"
import Stars from "@/components/ui/Stars"

export default function Testimonials() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-12 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-gold">Kind Words</p>
          <h2 className="mt-3 font-serif text-4xl text-ink md:text-5xl">Loved by Thousands</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col items-center border border-line bg-sand/50 p-8 text-center"
            >
              <Stars rating={t.rating} size={16} />
              <blockquote className="mt-5 font-serif text-xl italic leading-relaxed text-ink">
                “{t.text}”
              </blockquote>
              <figcaption className="mt-6 text-xs uppercase tracking-[0.2em] text-stone">
                {t.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
