import React from "react"
import { Star, Quote } from "lucide-react"
import { testimonials } from "@/data/products"

export default function Testimonials() {
  return (
    <section className="container-editorial py-20 md:py-28">
      <div className="reveal flex flex-col items-center text-center">
        <p className="eyebrow">Kind Words</p>
        <h2 className="mt-3 font-serif text-4xl font-light text-ink md:text-5xl">
          Loved by Thousands
        </h2>
      </div>

      <div className="reveal mt-14 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
        {testimonials.map((t) => (
          <figure
            key={t.id}
            className="flex flex-col items-center border border-ink/10 bg-ivory-soft px-8 py-10 text-center shadow-card"
          >
            <Quote className="h-6 w-6 text-gold" strokeWidth={1} />
            <div className="mt-4 flex gap-1">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-gold text-gold"
                  strokeWidth={0}
                />
              ))}
            </div>
            <blockquote className="mt-5 font-serif text-lg italic leading-relaxed text-ink/85">
              “{t.text}”
            </blockquote>
            <figcaption className="mt-6 font-sans text-xs uppercase tracking-widest text-stone">
              {t.name}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
