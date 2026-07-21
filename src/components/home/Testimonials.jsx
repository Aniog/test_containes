import React from "react"
import { Star } from "lucide-react"
import { testimonials } from "../../data/products"

function Stars({ count = 5 }) {
  return (
    <div className="flex items-center gap-1 text-champagne-700">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="h-3.5 w-3.5 fill-champagne text-champagne" strokeWidth={0} />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="bg-bone-50 py-20 md:py-28">
      <div className="mx-auto max-w-editorial px-6 md:px-10">
        <div className="mb-12 max-w-xl md:mb-16">
          <p className="text-[10px] uppercase tracking-[0.32em] text-champagne-700">Loved by 24,000+</p>
          <h2 className="mt-3 font-serif text-4xl text-ink md:text-5xl">Words from the people who wear it.</h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {testimonials.map((t) => (
            <figure
              key={t.id}
              className="flex flex-col border border-ink/10 bg-bone p-7 transition-colors duration-300 hover:border-ink/25 md:p-9"
            >
              <Stars count={t.rating} />
              <blockquote className="mt-5 flex-1 font-serif text-xl leading-relaxed text-ink">
                "{t.text}"
              </blockquote>
              <figcaption className="mt-6 text-[11px] uppercase tracking-[0.24em] text-ink/60">
                {t.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
